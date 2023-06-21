import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RangeState, rangeFeatureKey, selectAll} from './range.reducer';

const featureState = createFeatureSelector<RangeState>(rangeFeatureKey);

export const selectAllRanges = createSelector(
    featureState,
    selectAll,
);

export const allRangeLoaded = createSelector(
    featureState,
    state => state.allRangesLoaded,
);

export const selectCurrentRange = createSelector(
    featureState,
    state => state.currentRange
)

