import {createFeatureSelector, createSelector} from '@ngrx/store';
import {VendorState, vendorFeatureKey, selectAll} from './vendor.reducer';

const featureState = createFeatureSelector<VendorState>(vendorFeatureKey);

export const selectAllVendors = createSelector(
    featureState,
    selectAll,
);

export const allVendorLoaded = createSelector(
    featureState,
    state => state.allVendorsLoaded,
);

export const selectCurrentVendor = createSelector(
    featureState,
    state => state.currentVendor
)

