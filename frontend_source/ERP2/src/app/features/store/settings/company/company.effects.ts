import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CompanyService} from './company.service';
import {
  addCompany,
  addCompanySuccess,
  deleteCompany, deleteCompanySuccess,
  loadCompanys,
  loadCompanysSuccess,
} from './company.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCompanyLoaded} from './company.selectors';


@Injectable()
export class CompanyEffects {

    loadCompanys$ = createEffect(() => this.actions$.pipe(
        ofType(loadCompanys),
        withLatestFrom(this.store.select(allCompanyLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCompanysSuccess({data})),
        )),
    ));

    addCompany$ = createEffect(() => this.actions$.pipe(
        ofType(addCompany),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCompanySuccess({data})),
        )),
    ));

    deleteCompany$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCompany),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCompanySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CompanyService) {
    }

}
