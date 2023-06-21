import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {MaterialvendorService} from './materialvendor.service';
import {
  addMaterialvendor,
  addMaterialvendorSuccess,
  deleteMaterialvendor, deleteMaterialvendorSuccess,
  loadMaterialvendors,
  loadMaterialvendorsSuccess,
} from './materialvendor.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allMaterialvendorLoaded} from './materialvendor.selectors';


@Injectable()
export class MaterialvendorEffects {

    loadMaterialvendors$ = createEffect(() => this.actions$.pipe(
        ofType(loadMaterialvendors),
        withLatestFrom(this.store.select(allMaterialvendorLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadMaterialvendorsSuccess({data})),
        )),
    ));

    addMaterialvendor$ = createEffect(() => this.actions$.pipe(
        ofType(addMaterialvendor),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addMaterialvendorSuccess({data})),
        )),
    ));

    deleteMaterialvendor$ = createEffect(() => this.actions$.pipe(
        ofType(deleteMaterialvendor),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteMaterialvendorSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: MaterialvendorService) {
    }

}
