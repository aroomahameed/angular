import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SubcategoryService} from './subcategory.service';
import {
  addSubcategory,
  addSubcategorySuccess,
  deleteSubcategory, deleteSubcategorySuccess,
  loadSubcategories,
  loadSubcategoriesSuccess,
} from './subcategory.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allSubcategoryLoaded} from './subcategory.selectors';


@Injectable()
export class SubcategoryEffects {

    loadSubcategories$ = createEffect(() => this.actions$.pipe(
        ofType(loadSubcategories),
        withLatestFrom(this.store.select(allSubcategoryLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadSubcategoriesSuccess({data})),
        )),
    ));

    addSubcategory$ = createEffect(() => this.actions$.pipe(
        ofType(addSubcategory),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addSubcategorySuccess({data})),
        )),
    ));

    deleteSubcategory$ = createEffect(() => this.actions$.pipe(
        ofType(deleteSubcategory),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteSubcategorySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: SubcategoryService) {
    }

}
