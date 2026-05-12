import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {MaterialseasonService} from './materialseason.service';
import {
  addMaterialseason,
  addMaterialseasonSuccess,
  deleteMaterialseason, deleteMaterialseasonSuccess,
  loadMaterialseasons,
  loadMaterialseasonsSuccess,
} from './materialseason.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allMaterialseasonLoaded} from './materialseason.selectors';


@Injectable()
export class MaterialseasonEffects {

    loadMaterialseasons$ = createEffect(() => this.actions$.pipe(
        ofType(loadMaterialseasons),
        withLatestFrom(this.store.select(allMaterialseasonLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadMaterialseasonsSuccess({data})),
        )),
    ));

    addMaterialseason$ = createEffect(() => this.actions$.pipe(
        ofType(addMaterialseason),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addMaterialseasonSuccess({data})),
        )),
    ));

    deleteMaterialseason$ = createEffect(() => this.actions$.pipe(
        ofType(deleteMaterialseason),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteMaterialseasonSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: MaterialseasonService) {
    }

}
