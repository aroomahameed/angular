import {createAction, props} from '@ngrx/store';

import {Customerexportdata} from './customerexportdata';

export const loadCustomerexportdatas = createAction(
    '[Customerexportdata/API] Load Customerexportdatas'
);

export const loadCustomerexportdatasSuccess = createAction(
    '[Customerexportdata/API] Load Customerexportdatas Success',
    props<{ data: Customerexportdata[] }>(),
);

export const addCustomerexportdata = createAction(
    '[Customerexportdata/API] Add Customerexportdata',
    props<{ data: Customerexportdata }>(),
);

export const addCustomerexportdataSuccess = createAction(
    '[Customerexportdata/API] Add Customerexportdata Success',
    props<{ data: Customerexportdata }>(),
);


export const deleteCustomerexportdata = createAction(
    '[Customerexportdata/API] Delete Customerexportdata',
    props<{ data: Customerexportdata }>(),
);

export const deleteCustomerexportdataSuccess = createAction(
    '[Customerexportdata/API] Delete Customerexportdata Success',
    props<{ id: string}>(),
);

export const selectCurrentCustomerexportdataSuccess = createAction(
    '[Customerexportdata/API] Select Current Customerexportdata',
    props<{ data: Customerexportdata }>(),
);

