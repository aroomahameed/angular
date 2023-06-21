import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlematerialsubService} from './articlematerialsub.service';
import {
  addArticlematerialsub,
  addArticlematerialsubSuccess,
  deleteArticlematerialsub, deleteArticlematerialsubSuccess,
  loadArticlematerialsubs,
  loadArticlematerialsubsSuccess,
} from './articlematerialsub.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlematerialsubLoaded} from './articlematerialsub.selectors';


@Injectable()
export class ArticlematerialsubEffects {

    loadArticlematerialsubs$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlematerialsubs),
        withLatestFrom(this.store.select(allArticlematerialsubLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlematerialsubsSuccess({data})),
        )),
    ));

    addArticlematerialsub$ = createEffect(() => this.actions$.pipe(
        ofType(addArticlematerialsub),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlematerialsubSuccess({data})),
        )),
    ));

    deleteArticlematerialsub$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticlematerialsub),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlematerialsubSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlematerialsubService) {
    }

}
