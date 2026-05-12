import {createAction, props} from '@ngrx/store';

import {Quotationitem} from './quotationitem';

export const loadQuotationitems = createAction(
    '[Quotationitem/API] Load Quotationitems'
);

export const loadQuotationitemsSuccess = createAction(
    '[Quotationitem/API] Load Quotationitems Success',
    props<{ data: Quotationitem[] }>(),
);

export const addQuotationitem = createAction(
    '[Quotationitem/API] Add Quotationitem',
    props<{ data: Quotationitem }>(),
);

export const addQuotationitemSuccess = createAction(
    '[Quotationitem/API] Add Quotationitem Success',
    props<{ data: Quotationitem }>(),
);


export const deleteQuotationitem = createAction(
    '[Quotationitem/API] Delete Quotationitem',
    props<{ data: Quotationitem }>(),
);

export const deleteQuotationitemSuccess = createAction(
    '[Quotationitem/API] Delete Quotationitem Success',
    props<{ id: string}>(),
);

export const selectCurrentQuotationitemSuccess = createAction(
    '[Quotationitem/API] Select Current Quotationitem',
    props<{ data: Quotationitem }>(),
);

