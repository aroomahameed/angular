import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CustomeraccdataService} from './customeraccdata.service';
import {
  addCustomeraccdata,
  addCustomeraccdataSuccess,
  deleteCustomeraccdata, deleteCustomeraccdataSuccess,
  loadCustomeraccdatas,
  loadCustomeraccdatasSuccess,
} from './customeraccdata.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCustomeraccdataLoaded} from './customeraccdata.selectors';


@Injectable()
export class CustomeraccdataEffects {

    loadCustomeraccdatas$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomeraccdatas),
        withLatestFrom(this.store.select(allCustomeraccdataLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCustomeraccdatasSuccess({data})),
        )),
    ));

    addCustomeraccdata$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomeraccdata),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCustomeraccdataSuccess({data})),
        )),
    ));

    deleteCustomeraccdata$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCustomeraccdata),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCustomeraccdataSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CustomeraccdataService) {
    }

}
