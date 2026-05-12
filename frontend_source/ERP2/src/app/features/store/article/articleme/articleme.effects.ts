import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlemeService} from './articleme.service';
import {
  addArticleme,
  addArticlemeSuccess,
  deleteArticleme, deleteArticlemeSuccess,
  loadArticlemes,
  loadArticlemesSuccess,
} from './articleme.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlemeLoaded} from './articleme.selectors';


@Injectable()
export class ArticlemeEffects {

    loadArticlemes$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlemes),
        withLatestFrom(this.store.select(allArticlemeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlemesSuccess({data})),
        )),
    ));

    addArticleme$ = createEffect(() => this.actions$.pipe(
        ofType(addArticleme),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlemeSuccess({data})),
        )),
    ));

    deleteArticleme$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticleme),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlemeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlemeService) {
    }

}
