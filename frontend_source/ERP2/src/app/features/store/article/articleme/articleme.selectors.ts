import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticlemeState, articlemeFeatureKey, selectAll} from './articleme.reducer';

const featureState = createFeatureSelector<ArticlemeState>(articlemeFeatureKey);

export const selectAllArticlemes = createSelector(
    featureState,
    selectAll,
);

export const allArticlemeLoaded = createSelector(
    featureState,
    state => state.allArticlemesLoaded,
);

export const selectCurrentArticleme = createSelector(
    featureState,
    state => state.currentArticleme
)

