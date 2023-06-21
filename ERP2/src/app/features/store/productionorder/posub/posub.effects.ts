import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PosubService} from './posub.service';
import {
  addPosub,
  addPosubSuccess,
  deletePosub, deletePosubSuccess,
  loadPosubs,
  loadPosubsSuccess,
} from './posub.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPosubLoaded} from './posub.selectors';


@Injectable()
export class PosubEffects {

    loadPosubs$ = createEffect(() => this.actions$.pipe(
        ofType(loadPosubs),
        withLatestFrom(this.store.select(allPosubLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPosubsSuccess({data})),
        )),
    ));

    addPosub$ = createEffect(() => this.actions$.pipe(
        ofType(addPosub),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPosubSuccess({data})),
        )),
    ));

    deletePosub$ = createEffect(() => this.actions$.pipe(
        ofType(deletePosub),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePosubSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PosubService) {
    }

}
