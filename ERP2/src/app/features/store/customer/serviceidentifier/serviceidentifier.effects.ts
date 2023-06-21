import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ServiceidentifierService} from './serviceidentifier.service';
import {
  addServiceidentifier,
  addServiceidentifierSuccess,
  deleteServiceidentifier, deleteServiceidentifierSuccess,
  loadServiceidentifiers,
  loadServiceidentifiersSuccess,
} from './serviceidentifier.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allServiceidentifierLoaded} from './serviceidentifier.selectors';


@Injectable()
export class ServiceidentifierEffects {

    loadServiceidentifiers$ = createEffect(() => this.actions$.pipe(
        ofType(loadServiceidentifiers),
        withLatestFrom(this.store.select(allServiceidentifierLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadServiceidentifiersSuccess({data})),
        )),
    ));

    addServiceidentifier$ = createEffect(() => this.actions$.pipe(
        ofType(addServiceidentifier),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addServiceidentifierSuccess({data})),
        )),
    ));

    deleteServiceidentifier$ = createEffect(() => this.actions$.pipe(
        ofType(deleteServiceidentifier),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteServiceidentifierSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ServiceidentifierService) {
    }

}
