import {createAction, props} from '@ngrx/store';

import {Productionline} from './productionline';

export const loadProductionlines = createAction(
    '[Productionline/API] Load Productionlines'
);

export const loadProductionlinesSuccess = createAction(
    '[Productionline/API] Load Productionlines Success',
    props<{ data: Productionline[] }>(),
);

export const addProductionline = createAction(
    '[Productionline/API] Add Productionline',
    props<{ data: Productionline }>(),
);

export const addProductionlineSuccess = createAction(
    '[Productionline/API] Add Productionline Success',
    props<{ data: Productionline }>(),
);


export const deleteProductionline = createAction(
    '[Productionline/API] Delete Productionline',
    props<{ data: Productionline }>(),
);

export const deleteProductionlineSuccess = createAction(
    '[Productionline/API] Delete Productionline Success',
    props<{ id: string}>(),
);

export const selectCurrentProductionlineSuccess = createAction(
    '[Productionline/API] Select Current Productionline',
    props<{ data: Productionline }>(),
);

