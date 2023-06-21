import {createAction, props} from '@ngrx/store';

import {Vendorgroup} from './vendorgroup';

export const loadVendorgroups = createAction(
    '[Vendorgroup/API] Load Vendorgroups'
);

export const loadVendorgroupsSuccess = createAction(
    '[Vendorgroup/API] Load Vendorgroups Success',
    props<{ data: Vendorgroup[] }>(),
);

export const addVendorgroup = createAction(
    '[Vendorgroup/API] Add Vendorgroup',
    props<{ data: Vendorgroup }>(),
);

export const addVendorgroupSuccess = createAction(
    '[Vendorgroup/API] Add Vendorgroup Success',
    props<{ data: Vendorgroup }>(),
);


export const deleteVendorgroup = createAction(
    '[Vendorgroup/API] Delete Vendorgroup',
    props<{ data: Vendorgroup }>(),
);

export const deleteVendorgroupSuccess = createAction(
    '[Vendorgroup/API] Delete Vendorgroup Success',
    props<{ id: string}>(),
);

export const selectCurrentVendorgroupSuccess = createAction(
    '[Vendorgroup/API] Select Current Vendorgroup',
    props<{ data: Vendorgroup }>(),
);

