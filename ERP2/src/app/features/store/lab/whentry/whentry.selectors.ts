import {createFeatureSelector, createSelector} from '@ngrx/store';
import {WhentryState, whentryFeatureKey, selectAll} from './whentry.reducer';

const featureState = createFeatureSelector<WhentryState>(whentryFeatureKey);

export const selectAllWhentrys = createSelector(
    featureState,
    selectAll,
);

export const allWhentryLoaded = createSelector(
    featureState,
    state => state.allWhentrysLoaded,
);

export const selectCurrentWhentry = createSelector(
    featureState,
    state => state.currentWhentry
)

