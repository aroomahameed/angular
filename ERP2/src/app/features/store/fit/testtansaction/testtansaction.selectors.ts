import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TesttansactionState, testtansactionFeatureKey, selectAll} from './testtansaction.reducer';

const featureState = createFeatureSelector<TesttansactionState>(testtansactionFeatureKey);

export const selectAllTesttansactions = createSelector(
    featureState,
    selectAll,
);

export const allTesttansactionLoaded = createSelector(
    featureState,
    state => state.allTesttansactionsLoaded,
);

export const selectCurrentTesttansaction = createSelector(
    featureState,
    state => {
      
        return state.currentTesttansaction;
    }
)

