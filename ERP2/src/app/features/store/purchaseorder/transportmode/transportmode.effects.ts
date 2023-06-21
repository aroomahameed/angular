import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TransportmodeService} from './transportmode.service';
import {
  addTransportmode,
  addTransportmodeSuccess,
  deleteTransportmode, deleteTransportmodeSuccess,
  loadTransportmodes,
  loadTransportmodesSuccess,
} from './transportmode.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allTransportmodeLoaded} from './transportmode.selectors';


@Injectable()
export class TransportmodeEffects {

    loadTransportmodes$ = createEffect(() => this.actions$.pipe(
        ofType(loadTransportmodes),
        withLatestFrom(this.store.select(allTransportmodeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadTransportmodesSuccess({data})),
        )),
    ));

    addTransportmode$ = createEffect(() => this.actions$.pipe(
        ofType(addTransportmode),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addTransportmodeSuccess({data})),
        )),
    ));

    deleteTransportmode$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTransportmode),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteTransportmodeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: TransportmodeService) {
    }

}
