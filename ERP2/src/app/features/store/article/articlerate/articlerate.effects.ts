import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlerateService} from './articlerate.service';
import {
  addArticlerate,
  addArticlerateSuccess,
  deleteArticlerate, deleteArticlerateSuccess,
  loadArticlerates,
  loadArticleratesSuccess,
} from './articlerate.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlerateLoaded} from './articlerate.selectors';


@Injectable()
export class ArticlerateEffects {

    loadArticlerates$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlerates),
        withLatestFrom(this.store.select(allArticlerateLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticleratesSuccess({data})),
        )),
    ));

    addArticlerate$ = createEffect(() => this.actions$.pipe(
        ofType(addArticlerate),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlerateSuccess({data})),
        )),
    ));

    deleteArticlerate$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticlerate),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlerateSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlerateService) {
    }

}
