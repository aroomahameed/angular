import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CountryState, countryFeatureKey, selectAll} from './country.reducer';

const featureState = createFeatureSelector<CountryState>(countryFeatureKey);

export const selectAllCountries = createSelector(
    featureState,
    selectAll,
);

export const allCountryLoaded = createSelector(
    featureState,
    state => state.allCountriesLoaded,
);

export const selectCurrentCountry = createSelector(
    featureState,
    state => state.currentCountry
)

