import {createAction, props} from '@ngrx/store';

import {Categorytype} from './categorytype';

export const loadCategorytypes = createAction(
    '[Categorytype/API] Load Categorytypes'
);

export const loadCategorytypesSuccess = createAction(
    '[Categorytype/API] Load Categorytypes Success',
    props<{ data: Categorytype[] }>(),
);

export const addCategorytype = createAction(
    '[Categorytype/API] Add Categorytype',
    props<{ data: Categorytype }>(),
);

export const addCategorytypeSuccess = createAction(
    '[Categorytype/API] Add Categorytype Success',
    props<{ data: Categorytype }>(),
);


export const deleteCategorytype = createAction(
    '[Categorytype/API] Delete Categorytype',
    props<{ data: Categorytype }>(),
);

export const deleteCategorytypeSuccess = createAction(
    '[Categorytype/API] Delete Categorytype Success',
    props<{ id: string}>(),
);

export const selectCurrentCategorytypeSuccess = createAction(
    '[Categorytype/API] Select Current Categorytype',
    props<{ data: Categorytype }>(),
);

