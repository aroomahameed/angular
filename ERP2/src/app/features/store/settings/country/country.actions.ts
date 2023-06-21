import {createAction, props} from '@ngrx/store';

import {Country} from './country';

export const loadCountries = createAction(
    '[Country/API] Load Countries'
);

export const loadCountriesSuccess = createAction(
    '[Country/API] Load Countries Success',
    props<{ data: Country[] }>(),
);

export const addCountry = createAction(
    '[Country/API] Add Country',
    props<{ data: Country }>(),
);

export const addCountrySuccess = createAction(
    '[Country/API] Add Country Success',
    props<{ data: Country }>(),
);


export const deleteCountry = createAction(
    '[Country/API] Delete Country',
    props<{ data: Country }>(),
);

export const deleteCountrySuccess = createAction(
    '[Country/API] Delete Country Success',
    props<{ id: string}>(),
);

export const selectCurrentCountrySuccess = createAction(
    '[Country/API] Select Current Country',
    props<{ data: Country }>(),
);

