import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CategorytypeState, categorytypeFeatureKey, selectAll} from './categorytype.reducer';

const featureState = createFeatureSelector<CategorytypeState>(categorytypeFeatureKey);

export const selectAllCategorytypes = createSelector(
    featureState,
    selectAll,
);

export const allCategorytypeLoaded = createSelector(
    featureState,
    state => state.allCategorytypesLoaded,
);

export const selectCurrentCategorytype = createSelector(
    featureState,
    state => state.currentCategorytype
)

