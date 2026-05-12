import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TesttansactionService} from './testtansaction.service';
import {
  addTesttansaction,
  addTesttansactionSuccess,
  deleteTesttansaction, deleteTesttansactionSuccess,
  loadTesttansactions,
  loadTesttansactionsSuccess,
} from './testtansaction.actions';
import {filter, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {allTesttansactionLoaded} from './testtansaction.selectors';


@Injectable()
export class TesttansactionEffects {

    loadTesttansactions$ = createEffect(() => this.actions$.pipe(
        ofType(loadTesttansactions),
        withLatestFrom(this.store.select(allTesttansactionLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadTesttansactionsSuccess({data})),
        )),
    ));

    addTesttansaction$ = createEffect(() => this.actions$.pipe(
        ofType(addTesttansaction),
        switchMap(action => {
            return this.service.save(action.data).pipe(
                map(data => addTesttansactionSuccess({data})),
            )
        }),
    ));

    deleteTesttansaction$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTesttansaction),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteTesttansactionSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: TesttansactionService) {
    }

}
