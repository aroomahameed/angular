import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {WhentryService} from './whentry.service';
import {
  addWhentry,
  addWhentrySuccess,
  deleteWhentry, deleteWhentrySuccess,
  loadWhentrys,
  loadWhentrysSuccess,
} from './whentry.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allWhentryLoaded} from './whentry.selectors';


@Injectable()
export class WhentryEffects {

    loadWhentrys$ = createEffect(() => this.actions$.pipe(
        ofType(loadWhentrys),
        withLatestFrom(this.store.select(allWhentryLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadWhentrysSuccess({data})),
        )),
    ));

    addWhentry$ = createEffect(() => this.actions$.pipe(
        ofType(addWhentry),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addWhentrySuccess({data})),
        )),
    ));

    deleteWhentry$ = createEffect(() => this.actions$.pipe(
        ofType(deleteWhentry),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteWhentrySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: WhentryService) {
    }

}
