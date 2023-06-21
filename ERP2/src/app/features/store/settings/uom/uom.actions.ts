import {createAction, props} from '@ngrx/store';

import {Uom} from './uom';

export const loadUoms = createAction(
    '[Uom/API] Load Uoms'
);

export const loadUomsSuccess = createAction(
    '[Uom/API] Load Uoms Success',
    props<{ data: Uom[] }>(),
);

export const addUom = createAction(
    '[Uom/API] Add Uom',
    props<{ data: Uom }>(),
);

export const addUomSuccess = createAction(
    '[Uom/API] Add Uom Success',
    props<{ data: Uom }>(),
);


export const deleteUom = createAction(
    '[Uom/API] Delete Uom',
    props<{ data: Uom }>(),
);

export const deleteUomSuccess = createAction(
    '[Uom/API] Delete Uom Success',
    props<{ id: string}>(),
);

export const selectCurrentUomSuccess = createAction(
    '[Uom/API] Select Current Uom',
    props<{ data: Uom }>(),
);

