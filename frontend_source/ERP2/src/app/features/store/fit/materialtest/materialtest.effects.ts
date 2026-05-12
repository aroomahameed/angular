import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {MaterialtestService} from './materialtest.service';
import {
  addMaterialtest,
  addMaterialtestSuccess,
  deleteMaterialtest, deleteMaterialtestSuccess,
  loadMaterialtests,
  loadMaterialtestsSuccess,
} from './materialtest.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allMaterialtestLoaded} from './materialtest.selectors';


@Injectable()
export class MaterialtestEffects {

    loadMaterialtests$ = createEffect(() => this.actions$.pipe(
        ofType(loadMaterialtests),
        withLatestFrom(this.store.select(allMaterialtestLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadMaterialtestsSuccess({data})),
        )),
    ));

    addMaterialtest$ = createEffect(() => this.actions$.pipe(
        ofType(addMaterialtest),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addMaterialtestSuccess({data})),
        )),
    ));

    deleteMaterialtest$ = createEffect(() => this.actions$.pipe(
        ofType(deleteMaterialtest),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteMaterialtestSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: MaterialtestService) {
    }

}
