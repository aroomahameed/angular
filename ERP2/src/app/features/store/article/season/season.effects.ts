import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SeasonService} from './season.service';
import {
  addSeason,
  addSeasonSuccess,
  deleteSeason, deleteSeasonSuccess,
  loadSeasons,
  loadSeasonsSuccess,
} from './season.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allSeasonLoaded} from './season.selectors';


@Injectable()
export class SeasonEffects {

    loadSeasons$ = createEffect(() => this.actions$.pipe(
        ofType(loadSeasons),
        withLatestFrom(this.store.select(allSeasonLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadSeasonsSuccess({data})),
        )),
    ));

    addSeason$ = createEffect(() => this.actions$.pipe(
        ofType(addSeason),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addSeasonSuccess({data})),
        )),
    ));

    deleteSeason$ = createEffect(() => this.actions$.pipe(
        ofType(deleteSeason),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteSeasonSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: SeasonService) {
    }

}
