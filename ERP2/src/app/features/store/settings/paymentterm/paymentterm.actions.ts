import {createAction, props} from '@ngrx/store';

import {Paymentterm} from './paymentterm';

export const loadPaymentterms = createAction(
    '[Paymentterm/API] Load Paymentterms'
);

export const loadPaymenttermsSuccess = createAction(
    '[Paymentterm/API] Load Paymentterms Success',
    props<{ data: Paymentterm[] }>(),
);

export const addPaymentterm = createAction(
    '[Paymentterm/API] Add Paymentterm',
    props<{ data: Paymentterm }>(),
);

export const addPaymenttermSuccess = createAction(
    '[Paymentterm/API] Add Paymentterm Success',
    props<{ data: Paymentterm }>(),
);


export const deletePaymentterm = createAction(
    '[Paymentterm/API] Delete Paymentterm',
    props<{ data: Paymentterm }>(),
);

export const deletePaymenttermSuccess = createAction(
    '[Paymentterm/API] Delete Paymentterm Success',
    props<{ id: string}>(),
);

export const selectCurrentPaymenttermSuccess = createAction(
    '[Paymentterm/API] Select Current Paymentterm',
    props<{ data: Paymentterm }>(),
);

