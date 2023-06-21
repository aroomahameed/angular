import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Quotationitem } from './quotationitem';
import {QuotationitemState, quotationitemFeatureKey, selectAll} from './quotationitem.reducer';

const featureState = createFeatureSelector<QuotationitemState>(quotationitemFeatureKey);

export const selectAllQuotationitems = createSelector(
    featureState,
    selectAll,
);

export const allQuotationitemLoaded = createSelector(
    featureState,
    state => state.allQuotationitemsLoaded,
);

export const selectCurrentQuotationitem = createSelector(
    featureState,
    state => state.currentQuotationitem
)
export const selectQuotationItemsByQuotationID = createSelector(
    selectAllQuotationitems,
    (quotes, props) => {
       
        return quotes.filter(q => q.quote.id === props.id)
       
    }
);

export const selectItembyQuoteID = createSelector(
    selectAllQuotationitems,
    (qouteitem: Quotationitem[], id) => {
     
        const item = qouteitem.filter(m => m.quote.id == id)
      
        return item;
    }
)

