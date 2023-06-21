import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Customer } from './customer';
import {CustomerState, customerFeatureKey, selectAll} from './customer.reducer';

const featureState = createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectAllCustomers = createSelector(
    featureState,
    selectAll,
);

export const allCustomerLoaded = createSelector(
    featureState,
    state => state.allCustomersLoaded,
);

export const selectCurrentCustomer = createSelector(
    featureState,
    state => state.currentCustomer
)
export const selectByClientID = createSelector(
    selectAllCustomers,
    (customers: Customer[], id) => {
        const customer = customers.filter(c => c.client.id == id)
        return customer;
    }
)

