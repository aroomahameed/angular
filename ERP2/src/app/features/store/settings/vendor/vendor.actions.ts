import {createAction, props} from '@ngrx/store';

import {Vendor} from './vendor';

export const loadVendors = createAction(
    '[Vendor/API] Load Vendors'
);

export const loadVendorsSuccess = createAction(
    '[Vendor/API] Load Vendors Success',
    props<{ data: Vendor[] }>(),
);

export const addVendor = createAction(
    '[Vendor/API] Add Vendor',
    props<{ data: Vendor }>(),
);

export const addVendorSuccess = createAction(
    '[Vendor/API] Add Vendor Success',
    props<{ data: Vendor }>(),
);


export const deleteVendor = createAction(
    '[Vendor/API] Delete Vendor',
    props<{ data: Vendor }>(),
);

export const deleteVendorSuccess = createAction(
    '[Vendor/API] Delete Vendor Success',
    props<{ id: string}>(),
);

export const selectCurrentVendorSuccess = createAction(
    '[Vendor/API] Select Current Vendor',
    props<{ data: Vendor }>(),
);

