import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ReservepoService} from './reservepo.service';
import {
  addReservepo,
  addReservepoSuccess,
  deleteReservepo, deleteReservepoSuccess,
  loadReservepos,
  loadReserveposSuccess,
} from './reservepo.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allReservepoLoaded} from './reservepo.selectors';


@Injectable()
export class ReservepoEffects {

    loadReservepos$ = createEffect(() => this.actions$.pipe(
        ofType(loadReservepos),
        withLatestFrom(this.store.select(allReservepoLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadReserveposSuccess({data})),
        )),
    ));

    addReservepo$ = createEffect(() => this.actions$.pipe(
        ofType(addReservepo),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addReservepoSuccess({data})),
        )),
    ));

    deleteReservepo$ = createEffect(() => this.actions$.pipe(
        ofType(deleteReservepo),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteReservepoSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ReservepoService) {
    }

}
