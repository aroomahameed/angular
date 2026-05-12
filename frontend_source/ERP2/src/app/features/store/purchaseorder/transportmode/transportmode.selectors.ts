import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TransportmodeState, transportmodeFeatureKey, selectAll} from './transportmode.reducer';

const featureState = createFeatureSelector<TransportmodeState>(transportmodeFeatureKey);

export const selectAllTransportmodes = createSelector(
    featureState,
    selectAll,
);

export const allTransportmodeLoaded = createSelector(
    featureState,
    state => state.allTransportmodesLoaded,
);

export const selectCurrentTransportmode = createSelector(
    featureState,
    state => state.currentTransportmode
)

