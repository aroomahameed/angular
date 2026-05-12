import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PurchaseorderitemService} from './purchaseorderitem.service';
import {
  addPurchaseorderitem,
  addPurchaseorderitemSuccess,
  deletePurchaseorderitem, deletePurchaseorderitemSuccess,
  loadPurchaseorderitems,
  loadPurchaseorderitemsSuccess,
} from './purchaseorderitem.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPurchaseorderitemLoaded} from './purchaseorderitem.selectors';


@Injectable()
export class PurchaseorderitemEffects {

    loadPurchaseorderitems$ = createEffect(() => this.actions$.pipe(
        ofType(loadPurchaseorderitems),
        withLatestFrom(this.store.select(allPurchaseorderitemLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPurchaseorderitemsSuccess({data})),
        )),
    ));

    addPurchaseorderitem$ = createEffect(() => this.actions$.pipe(
        ofType(addPurchaseorderitem),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPurchaseorderitemSuccess({data})),
        )),
    ));

    deletePurchaseorderitem$ = createEffect(() => this.actions$.pipe(
        ofType(deletePurchaseorderitem),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePurchaseorderitemSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PurchaseorderitemService) {
    }

}
