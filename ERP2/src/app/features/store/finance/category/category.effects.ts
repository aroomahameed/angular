import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
    loadCategories,
    loadCategoriesSuccess,
} from './category.actions';
import {
    allCategoryLoaded
} from './category.selectors';

import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CategoryService} from './category.service';


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

    constructor(private actions$: Actions, private store: Store<any>, private service: CategoryService) {
    }

}
