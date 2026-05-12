import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CurrencyService} from './currency.service';
import {
  addCurrency,
  addCurrencySuccess,
  deleteCurrency, deleteCurrencySuccess,
  loadCurrencies,
  loadCurrenciesSuccess,
} from './currency.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCurrencyLoaded} from './currency.selectors';


@Injectable()
export class CurrencyEffects {

    loadCurrencies$ = createEffect(() => this.actions$.pipe(
        ofType(loadCurrencies),
        withLatestFrom(this.store.select(allCurrencyLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCurrenciesSuccess({data})),
        )),
    ));

    addCurrency$ = createEffect(() => this.actions$.pipe(
        ofType(addCurrency),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCurrencySuccess({data})),
        )),
    ));

    deleteCurrency$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCurrency),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCurrencySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CurrencyService) {
    }

}
