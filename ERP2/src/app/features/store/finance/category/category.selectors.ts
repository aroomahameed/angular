import { createFeatureSelector, createSelector } from '@ngrx/store';
import {categoryFeatureKey, CategoryState, selectAll} from './category.reducer';

const featureState = createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectAllCategories = createSelector(
    featureState,
    selectAll,
);

export const allCategoryLoaded = createSelector(
    featureState,
    state => state.allLoaded,
);
