import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CompanyState, companyFeatureKey, selectAll} from './company.reducer';

const featureState = createFeatureSelector<CompanyState>(companyFeatureKey);

export const selectAllCompanys = createSelector(
    featureState,
    selectAll,
);

export const allCompanyLoaded = createSelector(
    featureState,
    state => state.allCompanysLoaded,
);

export const selectCurrentCompany = createSelector(
    featureState,
    state => state.currentCompany
)

