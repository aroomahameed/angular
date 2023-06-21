import {createAction, props} from '@ngrx/store';

import {Purchaseorder} from './purchaseorder';

export const loadPurchaseorders = createAction(
    '[Purchaseorder/API] Load Purchaseorders'
);

export const loadPurchaseordersSuccess = createAction(
    '[Purchaseorder/API] Load Purchaseorders Success',
    props<{ data: Purchaseorder[] }>(),
);

export const addPurchaseorder = createAction(
    '[Purchaseorder/API] Add Purchaseorder',
    props<{ data: Purchaseorder }>(),
);

export const addPurchaseorderSuccess = createAction(
    '[Purchaseorder/API] Add Purchaseorder Success',
    props<{ data: Purchaseorder }>(),
);


export const deletePurchaseorder = createAction(
    '[Purchaseorder/API] Delete Purchaseorder',
    props<{ data: Purchaseorder }>(),
);

export const deletePurchaseorderSuccess = createAction(
    '[Purchaseorder/API] Delete Purchaseorder Success',
    props<{ id: string}>(),
);

export const selectCurrentPurchaseorderSuccess = createAction(
    '[Purchaseorder/API] Select Current Purchaseorder',
    props<{ data: Purchaseorder }>(),
);

