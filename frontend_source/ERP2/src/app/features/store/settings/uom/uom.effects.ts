import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {UomService} from './uom.service';
import {
  addUom,
  addUomSuccess,
  deleteUom, deleteUomSuccess,
  loadUoms,
  loadUomsSuccess,
} from './uom.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allUomLoaded} from './uom.selectors';


@Injectable()
export class UomEffects {

    loadUoms$ = createEffect(() => this.actions$.pipe(
        ofType(loadUoms),
        withLatestFrom(this.store.select(allUomLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadUomsSuccess({data})),
        )),
    ));

    addUom$ = createEffect(() => this.actions$.pipe(
        ofType(addUom),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addUomSuccess({data})),
        )),
    ));

    deleteUom$ = createEffect(() => this.actions$.pipe(
        ofType(deleteUom),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteUomSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: UomService) {
    }

}
