import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {LineService} from './line.service';
import {
  addLine,
  addLineSuccess,
  deleteLine, deleteLineSuccess,
  loadLines,
  loadLinesSuccess,
} from './line.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allLineLoaded} from './line.selectors';


@Injectable()
export class LineEffects {

    loadLines$ = createEffect(() => this.actions$.pipe(
        ofType(loadLines),
        withLatestFrom(this.store.select(allLineLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadLinesSuccess({data})),
        )),
    ));

    addLine$ = createEffect(() => this.actions$.pipe(
        ofType(addLine),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addLineSuccess({data})),
        )),
    ));

    deleteLine$ = createEffect(() => this.actions$.pipe(
        ofType(deleteLine),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteLineSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: LineService) {
    }

}
