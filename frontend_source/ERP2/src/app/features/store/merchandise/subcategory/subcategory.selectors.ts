import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SubcategoryState, subcategoryFeatureKey, selectAll} from './subcategory.reducer';

const featureState = createFeatureSelector<SubcategoryState>(subcategoryFeatureKey);

export const selectAllSubcategories = createSelector(
    featureState,
    selectAll,
);

export const allSubcategoryLoaded = createSelector(
    featureState,
    state => state.allSubcategoriesLoaded,
);

export const selectCurrentSubcategory = createSelector(
    featureState,
    state => state.currentSubcategory
)

