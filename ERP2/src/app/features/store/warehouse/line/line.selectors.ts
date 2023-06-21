import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LineState, lineFeatureKey, selectAll} from './line.reducer';

const featureState = createFeatureSelector<LineState>(lineFeatureKey);

export const selectAllLines = createSelector(
    featureState,
    selectAll,
);

export const allLineLoaded = createSelector(
    featureState,
    state => state.allLinesLoaded,
);

export const selectCurrentLine = createSelector(
    featureState,
    state => state.currentLine
)

