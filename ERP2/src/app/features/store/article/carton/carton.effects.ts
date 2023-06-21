import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CartonService} from './carton.service';
import {
  addCarton,
  addCartonSuccess,
  deleteCarton, deleteCartonSuccess,
  loadCartons,
  loadCartonsSuccess,
} from './carton.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCartonLoaded} from './carton.selectors';


@Injectable()
export class CartonEffects {

    loadCartons$ = createEffect(() => this.actions$.pipe(
        ofType(loadCartons),
        withLatestFrom(this.store.select(allCartonLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCartonsSuccess({data})),
        )),
    ));

    addCarton$ = createEffect(() => this.actions$.pipe(
        ofType(addCarton),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCartonSuccess({data})),
        )),
    ));

    deleteCarton$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCarton),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCartonSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CartonService) {
    }

}
