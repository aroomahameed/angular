import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {RangeService} from './range.service';
import {
  addRange,
  addRangeSuccess,
  deleteRange, deleteRangeSuccess,
  loadRanges,
  loadRangesSuccess,
} from './range.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allRangeLoaded} from './range.selectors';


@Injectable()
export class RangeEffects {

    loadRanges$ = createEffect(() => this.actions$.pipe(
        ofType(loadRanges),
        withLatestFrom(this.store.select(allRangeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadRangesSuccess({data})),
        )),
    ));

    addRange$ = createEffect(() => this.actions$.pipe(
        ofType(addRange),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addRangeSuccess({data})),
        )),
    ));

    deleteRange$ = createEffect(() => this.actions$.pipe(
        ofType(deleteRange),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteRangeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: RangeService) {
    }

}
