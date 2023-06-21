import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {FactorycodeService} from './factorycode.service';
import {
  addFactorycode,
  addFactorycodeSuccess,
  deleteFactorycode, deleteFactorycodeSuccess,
  loadFactorycodes,
  loadFactorycodesSuccess,
} from './factorycode.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allFactorycodeLoaded} from './factorycode.selectors';


@Injectable()
export class FactorycodeEffects {

    loadFactorycodes$ = createEffect(() => this.actions$.pipe(
        ofType(loadFactorycodes),
        withLatestFrom(this.store.select(allFactorycodeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadFactorycodesSuccess({data})),
        )),
    ));

    addFactorycode$ = createEffect(() => this.actions$.pipe(
        ofType(addFactorycode),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addFactorycodeSuccess({data})),
        )),
    ));

    deleteFactorycode$ = createEffect(() => this.actions$.pipe(
        ofType(deleteFactorycode),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteFactorycodeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: FactorycodeService) {
    }

}
