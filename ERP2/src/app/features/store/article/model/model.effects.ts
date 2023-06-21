import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ModelService} from './model.service';
import {
  addModel,
  addModelSuccess,
  deleteModel, deleteModelSuccess,
  loadModels,
  loadModelsSuccess,
} from './model.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allModelLoaded} from './model.selectors';


@Injectable()
export class ModelEffects {

    loadModels$ = createEffect(() => this.actions$.pipe(
        ofType(loadModels),
        withLatestFrom(this.store.select(allModelLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadModelsSuccess({data})),
        )),
    ));

    addModel$ = createEffect(() => this.actions$.pipe(
        ofType(addModel),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addModelSuccess({data})),
        )),
    ));

    deleteModel$ = createEffect(() => this.actions$.pipe(
        ofType(deleteModel),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteModelSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ModelService) {
    }

}
