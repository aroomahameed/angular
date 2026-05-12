import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {DelayreasoncodeService} from './delayreasoncode.service';
import {
  addDelayreasoncode,
  addDelayreasoncodeSuccess,
  deleteDelayreasoncode, deleteDelayreasoncodeSuccess,
  loadDelayreasoncodes,
  loadDelayreasoncodesSuccess,
} from './delayreasoncode.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allDelayreasoncodeLoaded} from './delayreasoncode.selectors';


@Injectable()
export class DelayreasoncodeEffects {

    loadDelayreasoncodes$ = createEffect(() => this.actions$.pipe(
        ofType(loadDelayreasoncodes),
        withLatestFrom(this.store.select(allDelayreasoncodeLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadDelayreasoncodesSuccess({data})),
        )),
    ));

    addDelayreasoncode$ = createEffect(() => this.actions$.pipe(
        ofType(addDelayreasoncode),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addDelayreasoncodeSuccess({data})),
        )),
    ));

    deleteDelayreasoncode$ = createEffect(() => this.actions$.pipe(
        ofType(deleteDelayreasoncode),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteDelayreasoncodeSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: DelayreasoncodeService) {
    }

}
