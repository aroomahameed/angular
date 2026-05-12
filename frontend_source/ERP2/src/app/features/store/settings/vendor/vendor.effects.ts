import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {VendorService} from './vendor.service';
import {
  addVendor,
  addVendorSuccess,
  deleteVendor, deleteVendorSuccess,
  loadVendors,
  loadVendorsSuccess,
} from './vendor.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allVendorLoaded} from './vendor.selectors';


@Injectable()
export class VendorEffects {

    loadVendors$ = createEffect(() => this.actions$.pipe(
        ofType(loadVendors),
        withLatestFrom(this.store.select(allVendorLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadVendorsSuccess({data})),
        )),
    ));

    addVendor$ = createEffect(() => this.actions$.pipe(
        ofType(addVendor),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addVendorSuccess({data})),
        )),
    ));

    deleteVendor$ = createEffect(() => this.actions$.pipe(
        ofType(deleteVendor),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteVendorSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: VendorService) {
    }

}
