import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {QuotationitemService} from './quotationitem.service';
import {
  addQuotationitem,
  addQuotationitemSuccess,
  deleteQuotationitem, deleteQuotationitemSuccess,
  loadQuotationitems,
  loadQuotationitemsSuccess,
} from './quotationitem.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allQuotationitemLoaded} from './quotationitem.selectors';


@Injectable()
export class QuotationitemEffects {

    loadQuotationitems$ = createEffect(() => this.actions$.pipe(
        ofType(loadQuotationitems),
        withLatestFrom(this.store.select(allQuotationitemLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadQuotationitemsSuccess({data})),
        )),
    ));

    addQuotationitem$ = createEffect(() => this.actions$.pipe(
        ofType(addQuotationitem),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addQuotationitemSuccess({data})),
        )),
    ));

    deleteQuotationitem$ = createEffect(() => this.actions$.pipe(
        ofType(deleteQuotationitem),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteQuotationitemSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: QuotationitemService) {
    }

}
