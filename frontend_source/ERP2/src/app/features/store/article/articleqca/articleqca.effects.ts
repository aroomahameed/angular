import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticleqcaService} from './articleqca.service';
import {
  addArticleqca,
  addArticleqcaSuccess,
  deleteArticleqca, deleteArticleqcaSuccess,
  loadArticleqcas,
  loadArticleqcasSuccess,
} from './articleqca.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticleqcaLoaded} from './articleqca.selectors';


@Injectable()
export class ArticleqcaEffects {

    loadArticleqcas$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticleqcas),
        withLatestFrom(this.store.select(allArticleqcaLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticleqcasSuccess({data})),
        )),
    ));

    addArticleqca$ = createEffect(() => this.actions$.pipe(
        ofType(addArticleqca),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticleqcaSuccess({data})),
        )),
    ));

    deleteArticleqca$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticleqca),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticleqcaSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticleqcaService) {
    }

}
