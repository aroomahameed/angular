import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AccountService} from './account.service';
import {
  addAccount,
  addAccountSuccess,
  deleteAccount, deleteAccountSuccess,
  loadAccounts,
  loadAccountsSuccess,
} from './account.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allAccountLoaded} from './account.selectors';


@Injectable()
export class AccountEffects {

    loadAccounts$ = createEffect(() => this.actions$.pipe(
        ofType(loadAccounts),
        withLatestFrom(this.store.select(allAccountLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadAccountsSuccess({data})),
        )),
    ));

    addAccount$ = createEffect(() => this.actions$.pipe(
        ofType(addAccount),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addAccountSuccess({data})),
        )),
    ));

    deleteAccount$ = createEffect(() => this.actions$.pipe(
        ofType(deleteAccount),
        mergeMap(({id}) => this.service.delete(id).pipe(
            map(_ => deleteAccountSuccess({id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: AccountService) {
    }

}
