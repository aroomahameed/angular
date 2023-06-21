import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Quotation} from './quotation';
import * as QuotationActions from './quotation.actions';

export const quotationFeatureKey = 'quotations';

export interface QuotationState extends EntityState<Quotation> {
    allQuotationsLoaded: boolean;
    currentQuotation: Quotation
}
export interface QuotationState extends EntityState<Quotation> { 
    lastAdded: Quotation
  }
export const adapter: EntityAdapter<Quotation> = createEntityAdapter<Quotation>();

export const initialState: QuotationState = adapter.getInitialState({
    allQuotationsLoaded: false,
    currentQuotation: null,
    lastAdded: null
});

const quotationReducer = createReducer(
    initialState,
    on(QuotationActions.addQuotationSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state,lastAdded: action.data, currentQuotation: action.data}),
    ),
    on(QuotationActions.deleteQuotationSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(QuotationActions.loadQuotationsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(QuotationActions.selectCurrentQuotationSuccess,
        (state, action) => ({...state, currentQuotation: action.data}),
    ),
);

export function reducer(state: QuotationState | undefined, action: Action) {
    return quotationReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
