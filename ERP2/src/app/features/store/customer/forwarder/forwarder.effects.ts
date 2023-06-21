import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ForwarderService} from './forwarder.service';
import {
  addForwarder,
  addForwarderSuccess,
  deleteForwarder, deleteForwarderSuccess,
  loadForwarders,
  loadForwardersSuccess,
} from './forwarder.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allForwarderLoaded} from './forwarder.selectors';


@Injectable()
export class ForwarderEffects {

    loadForwarders$ = createEffect(() => this.actions$.pipe(
        ofType(loadForwarders),
        withLatestFrom(this.store.select(allForwarderLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadForwardersSuccess({data})),
        )),
    ));

    addForwarder$ = createEffect(() => this.actions$.pipe(
        ofType(addForwarder),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addForwarderSuccess({data})),
        )),
    ));

    deleteForwarder$ = createEffect(() => this.actions$.pipe(
        ofType(deleteForwarder),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteForwarderSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ForwarderService) {
    }

}
