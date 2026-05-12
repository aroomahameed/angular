import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticlecatagoryState, articlecatagoryFeatureKey, selectAll} from './articlecatagory.reducer';

const featureState = createFeatureSelector<ArticlecatagoryState>(articlecatagoryFeatureKey);

export const selectAllArticlecatagorys = createSelector(
    featureState,
    selectAll,
);

export const allArticlecatagoryLoaded = createSelector(
    featureState,
    state => state.allArticlecatagorysLoaded,
);

export const selectCurrentArticlecatagory = createSelector(
    featureState,
    state => state.currentArticlecatagory
)

