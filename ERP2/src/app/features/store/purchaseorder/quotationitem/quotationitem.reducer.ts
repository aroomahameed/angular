import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Quotationitem} from './quotationitem';
import * as QuotationitemActions from './quotationitem.actions';

export const quotationitemFeatureKey = 'quotationitems';

export interface QuotationitemState extends EntityState<Quotationitem> {
    allQuotationitemsLoaded: boolean;
    currentQuotationitem: Quotationitem
}

export const adapter: EntityAdapter<Quotationitem> = createEntityAdapter<Quotationitem>();

export const initialState: QuotationitemState = adapter.getInitialState({
    allQuotationitemsLoaded: false,
    currentQuotationitem: null
});

const quotationitemReducer = createReducer(
    initialState,
    on(QuotationitemActions.addQuotationitemSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentQuotationitem: action.data}),
    ),
    on(QuotationitemActions.deleteQuotationitemSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(QuotationitemActions.loadQuotationitemsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(QuotationitemActions.selectCurrentQuotationitemSuccess,
        (state, action) => ({...state, currentQuotationitem: action.data}),
    ),
);

export function reducer(state: QuotationitemState | undefined, action: Action) {
    return quotationitemReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
