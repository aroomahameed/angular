import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RackState, rackFeatureKey, selectAll} from './rack.reducer';

const featureState = createFeatureSelector<RackState>(rackFeatureKey);

export const selectAllRacks = createSelector(
    featureState,
    selectAll,
);

export const allRackLoaded = createSelector(
    featureState,
    state => state.allRacksLoaded,
);

export const selectCurrentRack = createSelector(
    featureState,
    state => state.currentRack
)

