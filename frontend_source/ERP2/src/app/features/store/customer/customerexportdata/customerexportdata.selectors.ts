import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CustomerexportdataState, customerexportdataFeatureKey, selectAll} from './customerexportdata.reducer';

const featureState = createFeatureSelector<CustomerexportdataState>(customerexportdataFeatureKey);

export const selectAllCustomerexportdatas = createSelector(
    featureState,
    selectAll,
);

export const allCustomerexportdataLoaded = createSelector(
    featureState,
    state => state.allCustomerexportdatasLoaded,
);

export const selectCurrentCustomerexportdata = createSelector(
    featureState,
    state => state.currentCustomerexportdata
)

