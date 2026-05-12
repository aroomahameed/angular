import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {RackService} from './rack.service';
import {
  addRack,
  addRackSuccess,
  deleteRack, deleteRackSuccess,
  loadRacks,
  loadRacksSuccess,
} from './rack.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allRackLoaded} from './rack.selectors';


@Injectable()
export class RackEffects {

    loadRacks$ = createEffect(() => this.actions$.pipe(
        ofType(loadRacks),
        withLatestFrom(this.store.select(allRackLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadRacksSuccess({data})),
        )),
    ));

    addRack$ = createEffect(() => this.actions$.pipe(
        ofType(addRack),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addRackSuccess({data})),
        )),
    ));

    deleteRack$ = createEffect(() => this.actions$.pipe(
        ofType(deleteRack),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteRackSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: RackService) {
    }

}
