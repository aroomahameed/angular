import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticlematerialsubState, articlematerialsubFeatureKey, selectAll} from './articlematerialsub.reducer';

const featureState = createFeatureSelector<ArticlematerialsubState>(articlematerialsubFeatureKey);

export const selectAllArticlematerialsubs = createSelector(
    featureState,
    selectAll,
);

export const allArticlematerialsubLoaded = createSelector(
    featureState,
    state => state.allArticlematerialsubsLoaded,
);

export const selectCurrentArticlematerialsub = createSelector(
    featureState,
    state => state.currentArticlematerialsub
)

