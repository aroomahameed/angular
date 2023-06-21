import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {PaymenttermService} from './paymentterm.service';
import {
  addPaymentterm,
  addPaymenttermSuccess,
  deletePaymentterm, deletePaymenttermSuccess,
  loadPaymentterms,
  loadPaymenttermsSuccess,
} from './paymentterm.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allPaymenttermLoaded} from './paymentterm.selectors';


@Injectable()
export class PaymenttermEffects {

    loadPaymentterms$ = createEffect(() => this.actions$.pipe(
        ofType(loadPaymentterms),
        withLatestFrom(this.store.select(allPaymenttermLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadPaymenttermsSuccess({data})),
        )),
    ));

    addPaymentterm$ = createEffect(() => this.actions$.pipe(
        ofType(addPaymentterm),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addPaymenttermSuccess({data})),
        )),
    ));

    deletePaymentterm$ = createEffect(() => this.actions$.pipe(
        ofType(deletePaymentterm),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deletePaymenttermSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: PaymenttermService) {
    }

}
