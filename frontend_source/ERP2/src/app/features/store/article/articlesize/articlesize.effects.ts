import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlesizeService} from './articlesize.service';
import {
  addArticlesize,
  addArticlesizeSuccess,
  deleteArticlesize, deleteArticlesizeSuccess,
  loadArticlesizes,
  loadArticlesizesSuccess,
} from './articlesize.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlesizeLoaded} from './articlesize.selectors';


@Injectable()
export class ArticlesizeEffects {

    loadArticlesizes$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlesizes),
        withLatestFrom(this.store.select(allArticlesizeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlesizesSuccess({data})),
        )),
    ));

    addArticlesize$ = createEffect(() => this.actions$.pipe(
        ofType(addArticlesize),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlesizeSuccess({data})),
        )),
    ));

    deleteArticlesize$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticlesize),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlesizeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlesizeService) {
    }

}
