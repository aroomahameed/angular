import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PoheadService} from './pohead.service';
import {
  addPohead,
  addPoheadSuccess,
  deletePohead, deletePoheadSuccess,
  loadPoheads,
  loadPoheadsSuccess,
} from './pohead.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPoheadLoaded} from './pohead.selectors';


@Injectable()
export class PoheadEffects {

    loadPoheads$ = createEffect(() => this.actions$.pipe(
        ofType(loadPoheads),
        withLatestFrom(this.store.select(allPoheadLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPoheadsSuccess({data})),
        )),
    ));

    addPohead$ = createEffect(() => this.actions$.pipe(
        ofType(addPohead),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPoheadSuccess({data})),
        )),
    ));

    deletePohead$ = createEffect(() => this.actions$.pipe(
        ofType(deletePohead),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePoheadSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PoheadService) {
    }

}
