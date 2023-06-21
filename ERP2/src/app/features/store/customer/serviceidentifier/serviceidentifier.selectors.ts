import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ServiceidentifierState, serviceidentifierFeatureKey, selectAll} from './serviceidentifier.reducer';

const featureState = createFeatureSelector<ServiceidentifierState>(serviceidentifierFeatureKey);

export const selectAllServiceidentifiers = createSelector(
    featureState,
    selectAll,
);

export const allServiceidentifierLoaded = createSelector(
    featureState,
    state => state.allServiceidentifiersLoaded,
);

export const selectCurrentServiceidentifier = createSelector(
    featureState,
    state => state.currentServiceidentifier
)

