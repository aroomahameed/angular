import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Purchaseorderitem } from './purchaseorderitem';
import { selectAllPurchaseorders } from '../purchaseorder/purchaseorder.selectors';
import {PurchaseorderitemState, purchaseorderitemFeatureKey, selectAll} from './purchaseorderitem.reducer';

const featureState = createFeatureSelector<PurchaseorderitemState>(purchaseorderitemFeatureKey);

export const selectAllPurchaseorderitems = createSelector(
    featureState,
    selectAll,
);

export const allPurchaseorderitemLoaded = createSelector(
    featureState,
    state => state.allPurchaseorderitemsLoaded,
);

export const selectCurrentPurchaseorderitem = createSelector(
    featureState,
    state => state.currentPurchaseorderitem
)
export const selectItembyPOID = createSelector(
    selectAllPurchaseorderitems,
    (poitem: Purchaseorderitem[], id) => {
     
        const item = poitem.filter(p=> p.po.id == id)
     
        return item;
    }
)
