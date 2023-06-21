import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DelayreasoncodeState, delayreasoncodeFeatureKey, selectAll} from './delayreasoncode.reducer';

const featureState = createFeatureSelector<DelayreasoncodeState>(delayreasoncodeFeatureKey);

export const selectAllDelayreasoncodes = createSelector(
    featureState,
    selectAll,
);

export const allDelayreasoncodeLoaded = createSelector(
    featureState,
    state => state.allDelayreasoncodesLoaded,
);

export const selectCurrentDelayreasoncode = createSelector(
    featureState,
    state => state.currentDelayreasoncode
)

