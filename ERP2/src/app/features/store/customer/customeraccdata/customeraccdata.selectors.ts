import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CustomeraccdataState, customeraccdataFeatureKey, selectAll} from './customeraccdata.reducer';

const featureState = createFeatureSelector<CustomeraccdataState>(customeraccdataFeatureKey);

export const selectAllCustomeraccdatas = createSelector(
    featureState,
    selectAll,
);

export const allCustomeraccdataLoaded = createSelector(
    featureState,
    state => state.allCustomeraccdatasLoaded,
);

export const selectCurrentCustomeraccdata = createSelector(
    featureState,
    state => state.currentCustomeraccdata
)

