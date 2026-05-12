import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TaxState, taxFeatureKey, selectAll} from './tax.reducer';

const featureState = createFeatureSelector<TaxState>(taxFeatureKey);

export const selectAllTaxes = createSelector(
    featureState,
    selectAll,
);

export const allTaxLoaded = createSelector(
    featureState,
    state => state.allTaxesLoaded,
);

export const selectCurrentTax = createSelector(
    featureState,
    state => state.currentTax
)

