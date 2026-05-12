import {createFeatureSelector, createSelector} from '@ngrx/store';
import {VendorgroupState, vendorgroupFeatureKey, selectAll} from './vendorgroup.reducer';

const featureState = createFeatureSelector<VendorgroupState>(vendorgroupFeatureKey);

export const selectAllVendorgroups = createSelector(
    featureState,
    selectAll,
);

export const allVendorgroupLoaded = createSelector(
    featureState,
    state => state.allVendorgroupsLoaded,
);

export const selectCurrentVendorgroup = createSelector(
    featureState,
    state => state.currentVendorgroup
)

