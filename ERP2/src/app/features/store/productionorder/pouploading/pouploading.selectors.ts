import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PouploadingState, pouploadingFeatureKey, selectAll} from './pouploading.reducer';

const featureState = createFeatureSelector<PouploadingState>(pouploadingFeatureKey);

export const selectAllPouploadings = createSelector(
    featureState,
    selectAll,
);

export const allPouploadingLoaded = createSelector(
    featureState,
    state => state.allPouploadingsLoaded,
);

export const selectCurrentPouploading = createSelector(
    featureState,
    state => state.currentPouploading
)

