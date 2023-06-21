import {createFeatureSelector, createSelector} from '@ngrx/store';
import {QuotationState, quotationFeatureKey, selectAll} from './quotation.reducer';

const featureState = createFeatureSelector<QuotationState>(quotationFeatureKey);

export const selectAllQuotations = createSelector(
    featureState,
    selectAll,
);

export const allQuotationLoaded = createSelector(
    featureState,
    state => state.allQuotationsLoaded,
);

export const selectCurrentQuotation = createSelector(
    featureState,
    state => 
    {
         return state.currentQuotation
    }
)


export const selectLastAdded = createSelector(
    featureState,
    state => state.lastAdded
)


