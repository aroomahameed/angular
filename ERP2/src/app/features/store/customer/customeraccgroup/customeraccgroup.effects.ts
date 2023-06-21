import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CustomeraccgroupService} from './customeraccgroup.service';
import {
  addCustomeraccgroup,
  addCustomeraccgroupSuccess,
  deleteCustomeraccgroup, deleteCustomeraccgroupSuccess,
  loadCustomeraccgroups,
  loadCustomeraccgroupsSuccess,
} from './customeraccgroup.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCustomeraccgroupLoaded} from './customeraccgroup.selectors';


@Injectable()
export class CustomeraccgroupEffects {

    loadCustomeraccgroups$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomeraccgroups),
        withLatestFrom(this.store.select(allCustomeraccgroupLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCustomeraccgroupsSuccess({data})),
        )),
    ));

    addCustomeraccgroup$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomeraccgroup),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCustomeraccgroupSuccess({data})),
        )),
    ));

    deleteCustomeraccgroup$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCustomeraccgroup),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCustomeraccgroupSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CustomeraccgroupService) {
    }

}
