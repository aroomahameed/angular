import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ArticlecatagoryService} from './articlecatagory.service';
import {
  addArticlecatagory,
  addArticlecatagorySuccess,
  deleteArticlecatagory, deleteArticlecatagorySuccess,
  loadArticlecatagorys,
  loadArticlecatagorysSuccess,
} from './articlecatagory.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allArticlecatagoryLoaded} from './articlecatagory.selectors';


@Injectable()
export class ArticlecatagoryEffects {

    loadArticlecatagorys$ = createEffect(() => this.actions$.pipe(
        ofType(loadArticlecatagorys),
        withLatestFrom(this.store.select(allArticlecatagoryLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadArticlecatagorysSuccess({data})),
        )),
    ));

    addArticlecatagory$ = createEffect(() => this.actions$.pipe(
        ofType(addArticlecatagory),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addArticlecatagorySuccess({data})),
        )),
    ));

    deleteArticlecatagory$ = createEffect(() => this.actions$.pipe(
        ofType(deleteArticlecatagory),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteArticlecatagorySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ArticlecatagoryService) {
    }

}
