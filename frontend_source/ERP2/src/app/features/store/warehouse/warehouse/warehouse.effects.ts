import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {WarehouseService} from './warehouse.service';
import {
  addWarehouse,
  addWarehouseSuccess,
  deleteWarehouse, deleteWarehouseSuccess,
  loadWarehouses,
  loadWarehousesSuccess,
} from './warehouse.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allWarehouseLoaded} from './warehouse.selectors';


@Injectable()
export class WarehouseEffects {

    loadWarehouses$ = createEffect(() => this.actions$.pipe(
        ofType(loadWarehouses),
        withLatestFrom(this.store.select(allWarehouseLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadWarehousesSuccess({data})),
        )),
    ));

    addWarehouse$ = createEffect(() => this.actions$.pipe(
        ofType(addWarehouse),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addWarehouseSuccess({data})),
        )),
    ));

    deleteWarehouse$ = createEffect(() => this.actions$.pipe(
        ofType(deleteWarehouse),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteWarehouseSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: WarehouseService) {
    }

}
