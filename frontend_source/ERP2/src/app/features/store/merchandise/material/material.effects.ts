import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {MaterialService} from './material.service';
import {
  addMaterial,
  addMaterialSuccess,
  deleteMaterial, deleteMaterialSuccess,
  loadMaterials,
  loadMaterialsSuccess,
} from './material.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allMaterialLoaded} from './material.selectors';


@Injectable()
export class MaterialEffects {

    loadMaterials$ = createEffect(() => this.actions$.pipe(
        ofType(loadMaterials),
        withLatestFrom(this.store.select(allMaterialLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadMaterialsSuccess({data})),
        )),
    ));

    addMaterial$ = createEffect(() => this.actions$.pipe(
        ofType(addMaterial),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addMaterialSuccess({data})),
        )),
    ));

    deleteMaterial$ = createEffect(() => this.actions$.pipe(
        ofType(deleteMaterial),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteMaterialSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: MaterialService) {
    }

}
