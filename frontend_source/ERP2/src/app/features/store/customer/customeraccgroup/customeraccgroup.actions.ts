import {createAction, props} from '@ngrx/store';

import {Customeraccgroup} from './customeraccgroup';

export const loadCustomeraccgroups = createAction(
    '[Customeraccgroup/API] Load Customeraccgroups'
);

export const loadCustomeraccgroupsSuccess = createAction(
    '[Customeraccgroup/API] Load Customeraccgroups Success',
    props<{ data: Customeraccgroup[] }>(),
);

export const addCustomeraccgroup = createAction(
    '[Customeraccgroup/API] Add Customeraccgroup',
    props<{ data: Customeraccgroup }>(),
);

export const addCustomeraccgroupSuccess = createAction(
    '[Customeraccgroup/API] Add Customeraccgroup Success',
    props<{ data: Customeraccgroup }>(),
);


export const deleteCustomeraccgroup = createAction(
    '[Customeraccgroup/API] Delete Customeraccgroup',
    props<{ data: Customeraccgroup }>(),
);

export const deleteCustomeraccgroupSuccess = createAction(
    '[Customeraccgroup/API] Delete Customeraccgroup Success',
    props<{ id: string}>(),
);

export const selectCurrentCustomeraccgroupSuccess = createAction(
    '[Customeraccgroup/API] Select Current Customeraccgroup',
    props<{ data: Customeraccgroup }>(),
);

