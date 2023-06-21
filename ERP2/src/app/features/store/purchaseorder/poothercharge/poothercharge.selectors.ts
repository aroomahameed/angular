import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PootherchargeState, pootherchargeFeatureKey, selectAll} from './poothercharge.reducer';

const featureState = createFeatureSelector<PootherchargeState>(pootherchargeFeatureKey);

export const selectAllPoothercharges = createSelector(
    featureState,
    selectAll,
);

export const allPootherchargeLoaded = createSelector(
    featureState,
    state => state.allPootherchargesLoaded,
);

export const selectCurrentPoothercharge = createSelector(
    featureState,
    state => state.currentPoothercharge
)

