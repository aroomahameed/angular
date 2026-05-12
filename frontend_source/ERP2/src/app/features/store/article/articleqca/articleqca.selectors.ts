import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleqcaState, articleqcaFeatureKey, selectAll} from './articleqca.reducer';

const featureState = createFeatureSelector<ArticleqcaState>(articleqcaFeatureKey);

export const selectAllArticleqcas = createSelector(
    featureState,
    selectAll,
);

export const allArticleqcaLoaded = createSelector(
    featureState,
    state => state.allArticleqcasLoaded,
);

export const selectCurrentArticleqca = createSelector(
    featureState,
    state => state.currentArticleqca
)

