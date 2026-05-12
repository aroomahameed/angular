import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TestState, testFeatureKey, selectAll} from './test.reducer';

const featureState = createFeatureSelector<TestState>(testFeatureKey);

export const selectAllTests = createSelector(
    featureState,
    selectAll,
);

export const allTestLoaded = createSelector(
    featureState,
    state => state.allTestsLoaded,
);

export const selectCurrentTest = createSelector(
    featureState,
    state => state.currentTest
)

