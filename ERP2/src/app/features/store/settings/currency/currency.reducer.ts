import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Currency} from './currency';
import * as CurrencyActions from './currency.actions';

export const currencyFeatureKey = 'currencies';

export interface CurrencyState extends EntityState<Currency> {
    allCurrenciesLoaded: boolean;
    currentCurrency: Currency
}

export const adapter: EntityAdapter<Currency> = createEntityAdapter<Currency>();

export const initialState: CurrencyState = adapter.getInitialState({
    allCurrenciesLoaded: false,
    currentCurrency: null
});

const currencyReducer = createReducer(
    initialState,
    on(CurrencyActions.addCurrencySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCurrency: action.data}),
    ),
    on(CurrencyActions.deleteCurrencySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CurrencyActions.loadCurrenciesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CurrencyActions.selectCurrentCurrencySuccess,
        (state, action) => ({...state, currentCurrency: action.data}),
    ),
);

export function reducer(state: CurrencyState | undefined, action: Action) {
    return currencyReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
