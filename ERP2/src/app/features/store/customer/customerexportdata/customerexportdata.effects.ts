import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CustomerexportdataService} from './customerexportdata.service';
import {
  addCustomerexportdata,
  addCustomerexportdataSuccess,
  deleteCustomerexportdata, deleteCustomerexportdataSuccess,
  loadCustomerexportdatas,
  loadCustomerexportdatasSuccess,
} from './customerexportdata.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCustomerexportdataLoaded} from './customerexportdata.selectors';


@Injectable()
export class CustomerexportdataEffects {

    loadCustomerexportdatas$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomerexportdatas),
        withLatestFrom(this.store.select(allCustomerexportdataLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCustomerexportdatasSuccess({data})),
        )),
    ));

    addCustomerexportdata$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomerexportdata),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCustomerexportdataSuccess({data})),
        )),
    ));

    deleteCustomerexportdata$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCustomerexportdata),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCustomerexportdataSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CustomerexportdataService) {
    }

}
