import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlematerialService} from './articlematerial.service';
import {
  addArticlematerial,
  addArticlematerialSuccess,
  deleteArticlematerial, deleteArticlematerialSuccess,
  loadArticlematerials,
  loadArticlematerialsSuccess,
} from './articlematerial.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlematerialLoaded} from './articlematerial.selectors';


@Injectable()
export class ArticlematerialEffects {

    loadArticlematerials$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlematerials),
        withLatestFrom(this.store.select(allArticlematerialLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlematerialsSuccess({data})),
        )),
    ));

    addArticlematerial$ = createEffect(() => this.actions$.pipe(
        ofType(addArticlematerial),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlematerialSuccess({data})),
        )),
    ));

    deleteArticlematerial$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticlematerial),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlematerialSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlematerialService) {
    }

}
