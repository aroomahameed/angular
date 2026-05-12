import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticleService} from './article.service';
import {
  addArticle,
  addArticleSuccess,
  deleteArticle, deleteArticleSuccess,
  loadArticles,
  loadArticlesSuccess,
} from './article.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticleLoaded} from './article.selectors';


@Injectable()
export class ArticleEffects {

    loadArticles$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticles),
        withLatestFrom(this.store.select(allArticleLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlesSuccess({data})),
        )),
    ));

    addArticle$ = createEffect(() => this.actions$.pipe(
        ofType(addArticle),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticleSuccess({data})),
        )),
    ));

    deleteArticle$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticle),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticleSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticleService) {
    }

}
