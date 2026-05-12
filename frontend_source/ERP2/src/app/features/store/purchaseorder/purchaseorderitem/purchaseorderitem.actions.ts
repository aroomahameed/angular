import {createAction, props} from '@ngrx/store';

import {Purchaseorderitem} from './purchaseorderitem';

export const loadPurchaseorderitems = createAction(
    '[Purchaseorderitem/API] Load Purchaseorderitems'
);

export const loadPurchaseorderitemsSuccess = createAction(
    '[Purchaseorderitem/API] Load Purchaseorderitems Success',
    props<{ data: Purchaseorderitem[] }>(),
);

export const addPurchaseorderitem = createAction(
    '[Purchaseorderitem/API] Add Purchaseorderitem',
    props<{ data: Purchaseorderitem }>(),
);

export const addPurchaseorderitemSuccess = createAction(
    '[Purchaseorderitem/API] Add Purchaseorderitem Success',
    props<{ data: Purchaseorderitem }>(),
);


export const deletePurchaseorderitem = createAction(
    '[Purchaseorderitem/API] Delete Purchaseorderitem',
    props<{ data: Purchaseorderitem }>(),
);

export const deletePurchaseorderitemSuccess = createAction(
    '[Purchaseorderitem/API] Delete Purchaseorderitem Success',
    props<{ id: string}>(),
);

export const selectCurrentPurchaseorderitemSuccess = createAction(
    '[Purchaseorderitem/API] Select Current Purchaseorderitem',
    props<{ data: Purchaseorderitem }>(),
);

