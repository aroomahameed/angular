import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {VendorgroupService} from './vendorgroup.service';
import {
  addVendorgroup,
  addVendorgroupSuccess,
  deleteVendorgroup, deleteVendorgroupSuccess,
  loadVendorgroups,
  loadVendorgroupsSuccess,
} from './vendorgroup.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allVendorgroupLoaded} from './vendorgroup.selectors';


@Injectable()
export class VendorgroupEffects {

    loadVendorgroups$ = createEffect(() => this.actions$.pipe(
        ofType(loadVendorgroups),
        withLatestFrom(this.store.select(allVendorgroupLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadVendorgroupsSuccess({data})),
        )),
    ));

    addVendorgroup$ = createEffect(() => this.actions$.pipe(
        ofType(addVendorgroup),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addVendorgroupSuccess({data})),
        )),
    ));

    deleteVendorgroup$ = createEffect(() => this.actions$.pipe(
        ofType(deleteVendorgroup),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteVendorgroupSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: VendorgroupService) {
    }

}
