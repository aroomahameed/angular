import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CustomeraccgroupState, customeraccgroupFeatureKey, selectAll} from './customeraccgroup.reducer';

const featureState = createFeatureSelector<CustomeraccgroupState>(customeraccgroupFeatureKey);

export const selectAllCustomeraccgroups = createSelector(
    featureState,
    selectAll,
);

export const allCustomeraccgroupLoaded = createSelector(
    featureState,
    state => state.allCustomeraccgroupsLoaded,
);

export const selectCurrentCustomeraccgroup = createSelector(
    featureState,
    state => state.currentCustomeraccgroup
)

