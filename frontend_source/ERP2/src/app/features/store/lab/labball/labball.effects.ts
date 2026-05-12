import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {LabballService} from './labball.service';
import {
  addLabball,
  addLabballSuccess,
  deleteLabball, deleteLabballSuccess,
  loadLabballs,
  loadLabballsSuccess,
} from './labball.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allLabballLoaded} from './labball.selectors';


@Injectable()
export class LabballEffects {

    loadLabballs$ = createEffect(() => this.actions$.pipe(
        ofType(loadLabballs),
        withLatestFrom(this.store.select(allLabballLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadLabballsSuccess({data})),
        )),
    ));

    addLabball$ = createEffect(() => this.actions$.pipe(
        ofType(addLabball),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addLabballSuccess({data})),
        )),
    ));

    deleteLabball$ = createEffect(() => this.actions$.pipe(
        ofType(deleteLabball),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteLabballSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: LabballService) {
    }

}
