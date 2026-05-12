import {createAction, props} from '@ngrx/store';

import {Customeraccdata} from './customeraccdata';

export const loadCustomeraccdatas = createAction(
    '[Customeraccdata/API] Load Customeraccdatas'
);

export const loadCustomeraccdatasSuccess = createAction(
    '[Customeraccdata/API] Load Customeraccdatas Success',
    props<{ data: Customeraccdata[] }>(),
);

export const addCustomeraccdata = createAction(
    '[Customeraccdata/API] Add Customeraccdata',
    props<{ data: Customeraccdata }>(),
);

export const addCustomeraccdataSuccess = createAction(
    '[Customeraccdata/API] Add Customeraccdata Success',
    props<{ data: Customeraccdata }>(),
);


export const deleteCustomeraccdata = createAction(
    '[Customeraccdata/API] Delete Customeraccdata',
    props<{ data: Customeraccdata }>(),
);

export const deleteCustomeraccdataSuccess = createAction(
    '[Customeraccdata/API] Delete Customeraccdata Success',
    props<{ id: string}>(),
);

export const selectCurrentCustomeraccdataSuccess = createAction(
    '[Customeraccdata/API] Select Current Customeraccdata',
    props<{ data: Customeraccdata }>(),
);

