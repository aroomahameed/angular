import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticlerateState, articlerateFeatureKey, selectAll} from './articlerate.reducer';

const featureState = createFeatureSelector<ArticlerateState>(articlerateFeatureKey);

export const selectAllArticlerates = createSelector(
    featureState,
    selectAll,
);

export const allArticlerateLoaded = createSelector(
    featureState,
    state => state.allArticleratesLoaded,
);

export const selectCurrentArticlerate = createSelector(
    featureState,
    state => state.currentArticlerate
)

