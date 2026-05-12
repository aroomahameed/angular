import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LabballState, labballFeatureKey, selectAll} from './labball.reducer';

const featureState = createFeatureSelector<LabballState>(labballFeatureKey);

export const selectAllLabballs = createSelector(
    featureState,
    selectAll,
);

export const allLabballLoaded = createSelector(
    featureState,
    state => state.allLabballsLoaded,
);

export const selectCurrentLabball = createSelector(
    featureState,
    state => state.currentLabball
)

