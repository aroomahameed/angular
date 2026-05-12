import {createAction, props} from '@ngrx/store';

import {Transaction} from './transaction.model';

export const loadTransactions = createAction(
    '[Transaction/API] Load Transactions'
);

export const loadTransactionsSuccess = createAction(
    '[Transaction/API] Load Transactions Success',
    props<{ data: Transaction[] }>(),
);

export const addTransaction = createAction(
    '[Transaction/API] Add Transaction',
    props<{ data: Transaction }>(),
);

export const addTransactionSuccess = createAction(
    '[Transaction/API] Add Transaction Success',
    props<{ data: Transaction }>(),
);


export const deleteTransaction = createAction(
    '[Transaction/API] Delete Transaction',
    props<{ id: string }>(),
);

export const deleteTransactionSuccess = createAction(
    '[Transaction/API] Delete Transaction Success',
    props<{ id: string }>(),
);

export const deleteManyTransaction = createAction(
    '[Transaction/API] Delete Many Transaction',
    props<{ id: string[] }>(),
);

export const deleteManyTransactionSuccess = createAction(
    '[Transaction/API] Delete Many Transaction Success',
    props<{ id: string[] }>(),
);

