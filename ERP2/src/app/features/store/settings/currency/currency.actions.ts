import {createAction, props} from '@ngrx/store';

import {Currency} from './currency';

export const loadCurrencies = createAction(
    '[Currency/API] Load Currencies'
);

export const loadCurrenciesSuccess = createAction(
    '[Currency/API] Load Currencies Success',
    props<{ data: Currency[] }>(),
);

export const addCurrency = createAction(
    '[Currency/API] Add Currency',
    props<{ data: Currency }>(),
);

export const addCurrencySuccess = createAction(
    '[Currency/API] Add Currency Success',
    props<{ data: Currency }>(),
);


export const deleteCurrency = createAction(
    '[Currency/API] Delete Currency',
    props<{ data: Currency }>(),
);

export const deleteCurrencySuccess = createAction(
    '[Currency/API] Delete Currency Success',
    props<{ id: string}>(),
);

export const selectCurrentCurrencySuccess = createAction(
    '[Currency/API] Select Current Currency',
    props<{ data: Currency }>(),
);

