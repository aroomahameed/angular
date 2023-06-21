import {createAction, props} from '@ngrx/store';

import {Carton} from './carton';

export const loadCartons = createAction(
    '[Carton/API] Load Cartons'
);

export const loadCartonsSuccess = createAction(
    '[Carton/API] Load Cartons Success',
    props<{ data: Carton[] }>(),
);

export const addCarton = createAction(
    '[Carton/API] Add Carton',
    props<{ data: Carton }>(),
);

export const addCartonSuccess = createAction(
    '[Carton/API] Add Carton Success',
    props<{ data: Carton }>(),
);


export const deleteCarton = createAction(
    '[Carton/API] Delete Carton',
    props<{ data: Carton }>(),
);

export const deleteCartonSuccess = createAction(
    '[Carton/API] Delete Carton Success',
    props<{ id: string}>(),
);

export const selectCurrentCartonSuccess = createAction(
    '[Carton/API] Select Current Carton',
    props<{ data: Carton }>(),
);

