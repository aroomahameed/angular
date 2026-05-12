import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CustomerlabelingdataService} from './customerlabelingdata.service';
import {
  addCustomerlabelingdata,
  addCustomerlabelingdataSuccess,
  deleteCustomerlabelingdata, deleteCustomerlabelingdataSuccess,
  loadCustomerlabelingdatas,
  loadCustomerlabelingdatasSuccess,
} from './customerlabelingdata.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCustomerlabelingdataLoaded} from './customerlabelingdata.selectors';


@Injectable()
export class CustomerlabelingdataEffects {

    loadCustomerlabelingdatas$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomerlabelingdatas),
        withLatestFrom(this.store.select(allCustomerlabelingdataLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCustomerlabelingdatasSuccess({data})),
        )),
    ));

    addCustomerlabelingdata$ = createEffect(() => this.actions$.pipe(
        ofType(addCustomerlabelingdata),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCustomerlabelingdataSuccess({data})),
        )),
    ));

    deleteCustomerlabelingdata$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCustomerlabelingdata),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCustomerlabelingdataSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CustomerlabelingdataService) {
    }

}
