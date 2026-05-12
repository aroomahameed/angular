import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PodetailService} from './podetail.service';
import {
  addPodetail,
  addPodetailSuccess,
  deletePodetail, deletePodetailSuccess,
  loadPodetails,
  loadPodetailsSuccess,
} from './podetail.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPodetailLoaded} from './podetail.selectors';


@Injectable()
export class PodetailEffects {

    loadPodetails$ = createEffect(() => this.actions$.pipe(
        ofType(loadPodetails),
        withLatestFrom(this.store.select(allPodetailLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPodetailsSuccess({data})),
        )),
    ));

    addPodetail$ = createEffect(() => this.actions$.pipe(
        ofType(addPodetail),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPodetailSuccess({data})),
        )),
    ));

    deletePodetail$ = createEffect(() => this.actions$.pipe(
        ofType(deletePodetail),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePodetailSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PodetailService) {
    }

}
