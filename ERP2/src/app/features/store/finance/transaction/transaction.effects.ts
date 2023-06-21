import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TransactionService} from './transaction.service';
import {
    addTransaction,
    addTransactionSuccess, deleteManyTransaction, deleteManyTransactionSuccess,
    deleteTransaction, deleteTransactionSuccess,
    loadTransactions,
    loadTransactionsSuccess,
} from './transaction.actions';
import {filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {allTransactionLoaded} from './transaction.selectors';


@Injectable()
export class TransactionEffects {

    loadTransactions$ = createEffect(() => this.actions$.pipe(
        ofType(loadTransactions),
        withLatestFrom(this.store.select(allTransactionLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadTransactionsSuccess({data})),
        )),
    ));

    addTransaction$ = createEffect(() => this.actions$.pipe(
        ofType(addTransaction),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addTransactionSuccess({data})),
        )),
    ));

    deleteTransaction$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTransaction),
        mergeMap(({id}) => this.service.delete(id).pipe(
            map(_ => deleteTransactionSuccess({id})),
        )),
    ));

    deleteManyTransaction$ = createEffect(() => this.actions$.pipe(
        ofType(deleteManyTransaction),
        mergeMap(({id}) => this.service.deleteMany(id).pipe(
            map(_ => deleteManyTransactionSuccess({id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: TransactionService) {
    }

}
