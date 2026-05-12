import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PurchaseorderState, purchaseorderFeatureKey, selectAll} from './purchaseorder.reducer';

const featureState = createFeatureSelector<PurchaseorderState>(purchaseorderFeatureKey);

export const selectAllPurchaseorders = createSelector(
    featureState,
    selectAll,
);

export const allPurchaseorderLoaded = createSelector(
    featureState,
    state => state.allPurchaseordersLoaded,
);

export const selectCurrentPurchaseorder = createSelector(
    featureState,
    state =>
    {
   return  state.currentPurchaseorder
   
    }
)  
