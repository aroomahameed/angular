import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {HeadService} from './head.service';
import {
  addHead,
  addHeadSuccess,
  deleteHead, deleteHeadSuccess,
  loadHeads,
  loadHeadsSuccess,
} from './head.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allHeadLoaded} from './head.selectors';


@Injectable()
export class HeadEffects {

    loadHeads$ = createEffect(() => this.actions$.pipe(
        ofType(loadHeads),
        withLatestFrom(this.store.select(allHeadLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadHeadsSuccess({data})),
        )),
    ));

    addHead$ = createEffect(() => this.actions$.pipe(
        ofType(addHead),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addHeadSuccess({data})),
        )),
    ));

    deleteHead$ = createEffect(() => this.actions$.pipe(
        ofType(deleteHead),
        mergeMap(({id}) => this.service.delete(id).pipe(
            map(_ => deleteHeadSuccess({id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: HeadService) {
    }

}
