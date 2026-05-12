import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PootherchargeService} from './poothercharge.service';
import {
  addPoothercharge,
  addPootherchargeSuccess,
  deletePoothercharge, deletePootherchargeSuccess,
  loadPoothercharges,
  loadPootherchargesSuccess,
} from './poothercharge.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPootherchargeLoaded} from './poothercharge.selectors';


@Injectable()
export class PootherchargeEffects {

    loadPoothercharges$ = createEffect(() => this.actions$.pipe(
        ofType(loadPoothercharges),
        withLatestFrom(this.store.select(allPootherchargeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPootherchargesSuccess({data})),
        )),
    ));

    addPoothercharge$ = createEffect(() => this.actions$.pipe(
        ofType(addPoothercharge),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPootherchargeSuccess({data})),
        )),
    ));

    deletePoothercharge$ = createEffect(() => this.actions$.pipe(
        ofType(deletePoothercharge),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePootherchargeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PootherchargeService) {
    }

}
