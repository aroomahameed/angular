import {createAction, props} from '@ngrx/store';

import {Tax} from './tax';

export const loadTaxes = createAction(
    '[Tax/API] Load Taxes'
);

export const loadTaxesSuccess = createAction(
    '[Tax/API] Load Taxes Success',
    props<{ data: Tax[] }>(),
);

export const addTax = createAction(
    '[Tax/API] Add Tax',
    props<{ data: Tax }>(),
);

export const addTaxSuccess = createAction(
    '[Tax/API] Add Tax Success',
    props<{ data: Tax }>(),
);


export const deleteTax = createAction(
    '[Tax/API] Delete Tax',
    props<{ data: Tax }>(),
);

export const deleteTaxSuccess = createAction(
    '[Tax/API] Delete Tax Success',
    props<{ id: string}>(),
);

export const selectCurrentTaxSuccess = createAction(
    '[Tax/API] Select Current Tax',
    props<{ data: Tax }>(),
);

