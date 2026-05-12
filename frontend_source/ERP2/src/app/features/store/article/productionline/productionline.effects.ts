import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ProductionlineService} from './productionline.service';
import {
  addProductionline,
  addProductionlineSuccess,
  deleteProductionline, deleteProductionlineSuccess,
  loadProductionlines,
  loadProductionlinesSuccess,
} from './productionline.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allProductionlineLoaded} from './productionline.selectors';


@Injectable()
export class ProductionlineEffects {

    loadProductionlines$ = createEffect(() => this.actions$.pipe(
        ofType(loadProductionlines),
        withLatestFrom(this.store.select(allProductionlineLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadProductionlinesSuccess({data})),
        )),
    ));

    addProductionline$ = createEffect(() => this.actions$.pipe(
        ofType(addProductionline),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addProductionlineSuccess({data})),
        )),
    ));

    deleteProductionline$ = createEffect(() => this.actions$.pipe(
        ofType(deleteProductionline),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteProductionlineSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ProductionlineService) {
    }

}
