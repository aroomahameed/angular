import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CategoryService} from './category.service';
import {
  addCategory,
  addCategorySuccess,
  deleteCategory, deleteCategorySuccess,
  loadCategories,
  loadCategoriesSuccess,
} from './category.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCategoryLoaded} from './category.selectors';


@Injectable()
export class CategoryEffects {

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(loadCategories),
        withLatestFrom(this.store.select(allCategoryLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCategoriesSuccess({data})),
        )),
    ));

    addCategory$ = createEffect(() => this.actions$.pipe(
        ofType(addCategory),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCategorySuccess({data})),
        )),
    ));

    deleteCategory$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCategory),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCategorySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CategoryService) {
    }

}
