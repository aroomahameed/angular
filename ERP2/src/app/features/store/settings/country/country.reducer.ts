import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Country} from './country';
import * as CountryActions from './country.actions';

export const countryFeatureKey = 'countries';

export interface CountryState extends EntityState<Country> {
    allCountriesLoaded: boolean;
    currentCountry: Country
}

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>();

export const initialState: CountryState = adapter.getInitialState({
    allCountriesLoaded: false,
    currentCountry: null
});

const countryReducer = createReducer(
    initialState,
    on(CountryActions.addCountrySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCountry: action.data}),
    ),
    on(CountryActions.deleteCountrySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CountryActions.loadCountriesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CountryActions.selectCurrentCountrySuccess,
        (state, action) => ({...state, currentCountry: action.data}),
    ),
);

export function reducer(state: CountryState | undefined, action: Action) {
    return countryReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
