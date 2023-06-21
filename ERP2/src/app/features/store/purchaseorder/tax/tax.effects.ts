import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TaxService} from './tax.service';
import {
  addTax,
  addTaxSuccess,
  deleteTax, deleteTaxSuccess,
  loadTaxes,
  loadTaxesSuccess,
} from './tax.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allTaxLoaded} from './tax.selectors';


@Injectable()
export class TaxEffects {

    loadTaxes$ = createEffect(() => this.actions$.pipe(
        ofType(loadTaxes),
        withLatestFrom(this.store.select(allTaxLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadTaxesSuccess({data})),
        )),
    ));

    addTax$ = createEffect(() => this.actions$.pipe(
        ofType(addTax),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addTaxSuccess({data})),
        )),
    ));

    deleteTax$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTax),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteTaxSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: TaxService) {
    }

}
