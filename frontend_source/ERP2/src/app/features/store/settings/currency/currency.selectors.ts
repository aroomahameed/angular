import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CurrencyState, currencyFeatureKey, selectAll} from './currency.reducer';

const featureState = createFeatureSelector<CurrencyState>(currencyFeatureKey);

export const selectAllCurrencies = createSelector(
    featureState,
    selectAll,
);

export const allCurrencyLoaded = createSelector(
    featureState,
    state => state.allCurrenciesLoaded,
);

export const selectCurrentCurrency = createSelector(
    featureState,
    state => state.currentCurrency
)

