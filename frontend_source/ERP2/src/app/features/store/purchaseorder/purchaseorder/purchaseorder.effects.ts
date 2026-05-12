import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PurchaseorderService} from './purchaseorder.service';
import {
  addPurchaseorder,
  addPurchaseorderSuccess,
  deletePurchaseorder, deletePurchaseorderSuccess,
  loadPurchaseorders,
  loadPurchaseordersSuccess,
} from './purchaseorder.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPurchaseorderLoaded} from './purchaseorder.selectors';


@Injectable()
export class PurchaseorderEffects {

    loadPurchaseorders$ = createEffect(() => this.actions$.pipe(
        ofType(loadPurchaseorders),
        withLatestFrom(this.store.select(allPurchaseorderLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPurchaseordersSuccess({data})),
        )),
    ));

    addPurchaseorder$ = createEffect(() => this.actions$.pipe(
        ofType(addPurchaseorder),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPurchaseorderSuccess({data})),
        )),
    ));

    deletePurchaseorder$ = createEffect(() => this.actions$.pipe(
        ofType(deletePurchaseorder),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePurchaseorderSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PurchaseorderService) {
    }

}
