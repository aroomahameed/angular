import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {QuotationService} from './quotation.service';
import {
  addQuotation,
  addQuotationSuccess,
  deleteQuotation, deleteQuotationSuccess,
  loadQuotations,
  loadQuotationsSuccess,
} from './quotation.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allQuotationLoaded} from './quotation.selectors';


@Injectable()
export class QuotationEffects {

    loadQuotations$ = createEffect(() => this.actions$.pipe(
        ofType(loadQuotations),
        withLatestFrom(this.store.select(allQuotationLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadQuotationsSuccess({data})),
        )),
    ));

    addQuotation$ = createEffect(() => this.actions$.pipe(
        ofType(addQuotation),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addQuotationSuccess({data})),
        )),
    ));

    deleteQuotation$ = createEffect(() => this.actions$.pipe(
        ofType(deleteQuotation),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteQuotationSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: QuotationService) {
    }

}
