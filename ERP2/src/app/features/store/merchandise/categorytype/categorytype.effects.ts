import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CategorytypeService} from './categorytype.service';
import {
  addCategorytype,
  addCategorytypeSuccess,
  deleteCategorytype, deleteCategorytypeSuccess,
  loadCategorytypes,
  loadCategorytypesSuccess,
} from './categorytype.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCategorytypeLoaded} from './categorytype.selectors';


@Injectable()
export class CategorytypeEffects {

    loadCategorytypes$ = createEffect(() => this.actions$.pipe(
        ofType(loadCategorytypes),
        withLatestFrom(this.store.select(allCategorytypeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCategorytypesSuccess({data})),
        )),
    ));

    addCategorytype$ = createEffect(() => this.actions$.pipe(
        ofType(addCategorytype),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCategorytypeSuccess({data})),
        )),
    ));

    deleteCategorytype$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCategorytype),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCategorytypeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CategorytypeService) {
    }

}
