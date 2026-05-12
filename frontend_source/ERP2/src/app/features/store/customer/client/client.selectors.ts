import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ClientState, clientFeatureKey, selectAll} from './client.reducer';

const featureState = createFeatureSelector<ClientState>(clientFeatureKey);

export const selectAllClients = createSelector(
    featureState,
    selectAll,
);

export const allClientLoaded = createSelector(
    featureState,
    state => state.allClientsLoaded,
);

export const selectCurrentClient = createSelector(
    featureState,
    state => state.currentClient
)

