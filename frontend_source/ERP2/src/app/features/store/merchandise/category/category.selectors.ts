import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CategoryState, categoryFeatureKey, selectAll} from './category.reducer';

const featureState = createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectAllCategories = createSelector(
    featureState,
    selectAll,
);

export const allCategoryLoaded = createSelector(
    featureState,
    state => state.allCategoriesLoaded,
);

export const selectCurrentCategory = createSelector(
    featureState,
    state => state.currentCategory
)

