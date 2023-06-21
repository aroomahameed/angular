import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Transaction} from './transaction.model';
import * as TransactionActions from './transaction.actions';

export const transactionFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
    allLoaded: boolean;
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const initialState: TransactionState = adapter.getInitialState({
    allLoaded: false,
});

const transactionReducer = createReducer(
    initialState,
    on(TransactionActions.addTransactionSuccess,
        (state, action) => adapter.upsertOne(action.data, state),
    ),
    on(TransactionActions.deleteTransactionSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(TransactionActions.deleteManyTransactionSuccess,
        (state, action) => adapter.removeMany(action.id, state),
    ),

    on(TransactionActions.loadTransactionsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
);

export function reducer(state: TransactionState | undefined, action: Action) {
    return transactionReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
