import {createAction, props} from '@ngrx/store';

import {Quotation} from './quotation';

export const loadQuotations = createAction(
    '[Quotation/API] Load Quotations'
);

export const loadQuotationsSuccess = createAction(
    '[Quotation/API] Load Quotations Success',
    props<{ data: Quotation[] }>(),
);

export const addQuotation = createAction(
    '[Quotation/API] Add Quotation',
    props<{ data: Quotation }>(),
);

export const addQuotationSuccess = createAction(
    '[Quotation/API] Add Quotation Success',
    props<{ data: Quotation }>(),
);


export const deleteQuotation = createAction(
    '[Quotation/API] Delete Quotation',
    props<{ data: Quotation }>(),
);

export const deleteQuotationSuccess = createAction(
    '[Quotation/API] Delete Quotation Success',
    props<{ id: string}>(),
);

export const selectCurrentQuotationSuccess = createAction(
    '[Quotation/API] Select Current Quotation',
    props<{ data: Quotation }>(),
);
