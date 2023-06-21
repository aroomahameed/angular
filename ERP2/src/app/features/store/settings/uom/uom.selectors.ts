import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UomState, uomFeatureKey, selectAll} from './uom.reducer';

const featureState = createFeatureSelector<UomState>(uomFeatureKey);

export const selectAllUoms = createSelector(
    featureState,
    selectAll,
);

export const allUomLoaded = createSelector(
    featureState,
    state => state.allUomsLoaded,
);

export const selectCurrentUom = createSelector(
    featureState,
    state => state.currentUom
)

