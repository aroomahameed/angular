import {createAction, props} from '@ngrx/store';

import {Customer} from './customer';

export const loadCustomers = createAction(
    '[Customer/API] Load Customers'
);

export const loadCustomersSuccess = createAction(
    '[Customer/API] Load Customers Success',
    props<{ data: Customer[] }>(),
);

export const addCustomer = createAction(
    '[Customer/API] Add Customer',
    props<{ data: Customer }>(),
);

export const addCustomerSuccess = createAction(
    '[Customer/API] Add Customer Success',
    props<{ data: Customer }>(),
);


export const deleteCustomer = createAction(
    '[Customer/API] Delete Customer',
    props<{ data: Customer }>(),
);

export const deleteCustomerSuccess = createAction(
    '[Customer/API] Delete Customer Success',
    props<{ id: string}>(),
);

export const selectCurrentCustomerSuccess = createAction(
    '[Customer/API] Select Current Customer',
    props<{ data: Customer }>(),
);

