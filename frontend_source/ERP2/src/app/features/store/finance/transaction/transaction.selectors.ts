import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Transaction} from './transaction.model';
import {TransactionState, transactionFeatureKey, selectAll} from './transaction.reducer';

const featureState = createFeatureSelector<TransactionState>(transactionFeatureKey);

export const selectAllTransactions = createSelector(
    featureState,
    selectAll,
);

export const allTransactionLoaded = createSelector(
    featureState,
    state => state.allLoaded,
);


