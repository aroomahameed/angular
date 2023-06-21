import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PaymenttermState, paymenttermFeatureKey, selectAll} from './paymentterm.reducer';

const featureState = createFeatureSelector<PaymenttermState>(paymenttermFeatureKey);

export const selectAllPaymentterms = createSelector(
    featureState,
    selectAll,
);

export const allPaymenttermLoaded = createSelector(
    featureState,
    state => state.allPaymenttermsLoaded,
);

export const selectCurrentPaymentterm = createSelector(
    featureState,
    state => state.currentPaymentterm
)

