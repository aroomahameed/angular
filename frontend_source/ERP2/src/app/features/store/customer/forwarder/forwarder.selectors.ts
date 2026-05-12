import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ForwarderState, forwarderFeatureKey, selectAll} from './forwarder.reducer';

const featureState = createFeatureSelector<ForwarderState>(forwarderFeatureKey);

export const selectAllForwarders = createSelector(
    featureState,
    selectAll,
);

export const allForwarderLoaded = createSelector(
    featureState,
    state => state.allForwardersLoaded,
);

export const selectCurrentForwarder = createSelector(
    featureState,
    state => state.currentForwarder
)

