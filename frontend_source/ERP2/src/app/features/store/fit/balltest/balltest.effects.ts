import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {BalltestService} from './balltest.service';
import {
  addBalltest,
  addBalltestSuccess,
  deleteBalltest, deleteBalltestSuccess,
  loadBalltests,
  loadBalltestsSuccess,
} from './balltest.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allBalltestLoaded} from './balltest.selectors';


@Injectable()
export class BalltestEffects {

    loadBalltests$ = createEffect(() => this.actions$.pipe(
        ofType(loadBalltests),
        withLatestFrom(this.store.select(allBalltestLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadBalltestsSuccess({data})),
        )),
    ));

    addBalltest$ = createEffect(() => this.actions$.pipe(
        ofType(addBalltest),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addBalltestSuccess({data})),
        )),
    ));

    deleteBalltest$ = createEffect(() => this.actions$.pipe(
        ofType(deleteBalltest),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteBalltestSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: BalltestService) {
    }

}
