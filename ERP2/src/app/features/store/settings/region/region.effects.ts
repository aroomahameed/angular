import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {RegionService} from './region.service';
import {
  addRegion,
  addRegionSuccess,
  deleteRegion, deleteRegionSuccess,
  loadRegions,
  loadRegionsSuccess,
} from './region.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allRegionLoaded} from './region.selectors';


@Injectable()
export class RegionEffects {

    loadRegions$ = createEffect(() => this.actions$.pipe(
        ofType(loadRegions),
        withLatestFrom(this.store.select(allRegionLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadRegionsSuccess({data})),
        )),
    ));

    addRegion$ = createEffect(() => this.actions$.pipe(
        ofType(addRegion),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addRegionSuccess({data})),
        )),
    ));

    deleteRegion$ = createEffect(() => this.actions$.pipe(
        ofType(deleteRegion),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteRegionSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: RegionService) {
    }

}
