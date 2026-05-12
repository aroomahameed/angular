import {createAction, props} from '@ngrx/store';

import {Articlematerial} from './articlematerial';

export const loadArticlematerials = createAction(
    '[Articlematerial/API] Load Articlematerials'
);

export const loadArticlematerialsSuccess = createAction(
    '[Articlematerial/API] Load Articlematerials Success',
    props<{ data: Articlematerial[] }>(),
);

export const addArticlematerial = createAction(
    '[Articlematerial/API] Add Articlematerial',
    props<{ data: Articlematerial }>(),
);

export const addArticlematerialSuccess = createAction(
    '[Articlematerial/API] Add Articlematerial Success',
    props<{ data: Articlematerial }>(),
);


export const deleteArticlematerial = createAction(
    '[Articlematerial/API] Delete Articlematerial',
    props<{ data: Articlematerial }>(),
);

export const deleteArticlematerialSuccess = createAction(
    '[Articlematerial/API] Delete Articlematerial Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlematerialSuccess = createAction(
    '[Articlematerial/API] Select Current Articlematerial',
    props<{ data: Articlematerial }>(),
);

