import {createAction, props} from '@ngrx/store';

import {Subcategory} from './subcategory';

export const loadSubcategories = createAction(
    '[Subcategory/API] Load Subcategories'
);

export const loadSubcategoriesSuccess = createAction(
    '[Subcategory/API] Load Subcategories Success',
    props<{ data: Subcategory[] }>(),
);

export const addSubcategory = createAction(
    '[Subcategory/API] Add Subcategory',
    props<{ data: Subcategory }>(),
);

export const addSubcategorySuccess = createAction(
    '[Subcategory/API] Add Subcategory Success',
    props<{ data: Subcategory }>(),
);


export const deleteSubcategory = createAction(
    '[Subcategory/API] Delete Subcategory',
    props<{ data: Subcategory }>(),
);

export const deleteSubcategorySuccess = createAction(
    '[Subcategory/API] Delete Subcategory Success',
    props<{ id: string}>(),
);

export const selectCurrentSubcategorySuccess = createAction(
    '[Subcategory/API] Select Current Subcategory',
    props<{ data: Subcategory }>(),
);

