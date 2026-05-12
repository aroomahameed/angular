import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CustomerService} from './customer.service';
import {
  addCustomer,
  addCustomerSuccess,
  deleteCustomer, deleteCustomerSuccess,
  loadCustomers,
  loadCustomersSuccess,
} from './customer.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCustomerLoaded} from './customer.selectors';


@Injectable()
export class CustomerEffects {

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomers),
        withLatestFrom(this.store.select(allCustomerLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCustomersSuccess({data})),
        )),
    ));

    addCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomer),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCustomerSuccess({data})),
        )),
    ));

    deleteCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCustomer),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCustomerSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CustomerService) {
    }

}
