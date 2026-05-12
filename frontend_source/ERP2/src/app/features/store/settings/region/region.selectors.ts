import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RegionState, regionFeatureKey, selectAll} from './region.reducer';

const featureState = createFeatureSelector<RegionState>(regionFeatureKey);

export const selectAllRegions = createSelector(
    featureState,
    selectAll,
);

export const allRegionLoaded = createSelector(
    featureState,
    state => state.allRegionsLoaded,
);

export const selectCurrentRegion = createSelector(
    featureState,
    state => state.currentRegion
)

