import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Tax} from './tax';
import * as TaxActions from './tax.actions';

export const taxFeatureKey = 'taxes';

export interface TaxState extends EntityState<Tax> {
    allTaxesLoaded: boolean;
    currentTax: Tax
}

export const adapter: EntityAdapter<Tax> = createEntityAdapter<Tax>();

export const initialState: TaxState = adapter.getInitialState({
    allTaxesLoaded: false,
    currentTax: null
});

const taxReducer = createReducer(
    initialState,
    on(TaxActions.addTaxSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentTax: action.data}),
    ),
    on(TaxActions.deleteTaxSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(TaxActions.loadTaxesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(TaxActions.selectCurrentTaxSuccess,
        (state, action) => ({...state, currentTax: action.data}),
    ),
);

export function reducer(state: TaxState | undefined, action: Action) {
    return taxReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
