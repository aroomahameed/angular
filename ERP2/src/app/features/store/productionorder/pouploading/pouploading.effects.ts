import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PouploadingService} from './pouploading.service';
import {
  addPouploading,
  addPouploadingSuccess,
  deletePouploading, deletePouploadingSuccess,
  loadPouploadings,
  loadPouploadingsSuccess,
} from './pouploading.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPouploadingLoaded} from './pouploading.selectors';


@Injectable()
export class PouploadingEffects {

    loadPouploadings$ = createEffect(() => this.actions$.pipe(
        ofType(loadPouploadings),
        withLatestFrom(this.store.select(allPouploadingLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPouploadingsSuccess({data})),
        )),
    ));

    // addPouploading$ = createEffect(() => this.actions$.pipe(
    //     ofType(addPouploading),
    //     mergeMap(action => this.service.save(action.data).pipe(
    //         map(data => addPouploadingSuccess({data})),
    //     )),
    // ));

    deletePouploading$ = createEffect(() => this.actions$.pipe(
        ofType(deletePouploading),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePouploadingSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PouploadingService) {
    }

}
