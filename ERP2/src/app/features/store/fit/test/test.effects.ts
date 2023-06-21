import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TestService} from './test.service';
import {
  addTest,
  addTestSuccess,
  deleteTest, deleteTestSuccess,
  loadTests,
  loadTestsSuccess,
} from './test.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allTestLoaded} from './test.selectors';


@Injectable()
export class TestEffects {

    loadTests$ = createEffect(() => this.actions$.pipe(
        ofType(loadTests),
        withLatestFrom(this.store.select(allTestLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadTestsSuccess({data})),
        )),
    ));

    addTest$ = createEffect(() => this.actions$.pipe(
        ofType(addTest),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addTestSuccess({data})),
        )),
    ));

    deleteTest$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTest),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteTestSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: TestService) {
    }

}
