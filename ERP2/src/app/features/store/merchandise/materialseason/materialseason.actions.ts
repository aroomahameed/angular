import {createAction, props} from '@ngrx/store';

import {Materialseason} from './materialseason';

export const loadMaterialseasons = createAction(
    '[Materialseason/API] Load Materialseasons'
);

export const loadMaterialseasonsSuccess = createAction(
    '[Materialseason/API] Load Materialseasons Success',
    props<{ data: Materialseason[] }>(),
);

export const addMaterialseason = createAction(
    '[Materialseason/API] Add Materialseason',
    props<{ data: Materialseason }>(),
);

export const addMaterialseasonSuccess = createAction(
    '[Materialseason/API] Add Materialseason Success',
    props<{ data: Materialseason }>(),
);


export const deleteMaterialseason = createAction(
    '[Materialseason/API] Delete Materialseason',
    props<{ data: Materialseason }>(),
);

export const deleteMaterialseasonSuccess = createAction(
    '[Materialseason/API] Delete Materialseason Success',
    props<{ id: string}>(),
);

export const selectCurrentMaterialseasonSuccess = createAction(
    '[Materialseason/API] Select Current Materialseason',
    props<{ data: Materialseason }>(),
);

