import {createAction, props} from '@ngrx/store';

import {Category} from './category';

export const loadCategories = createAction(
    '[Category/API] Load Categories'
);

export const loadCategoriesSuccess = createAction(
    '[Category/API] Load Categories Success',
    props<{ data: Category[] }>(),
);

export const addCategory = createAction(
    '[Category/API] Add Category',
    props<{ data: Category }>(),
);

export const addCategorySuccess = createAction(
    '[Category/API] Add Category Success',
    props<{ data: Category }>(),
);


export const deleteCategory = createAction(
    '[Category/API] Delete Category',
    props<{ data: Category }>(),
);

export const deleteCategorySuccess = createAction(
    '[Category/API] Delete Category Success',
    props<{ id: string}>(),
);

export const selectCurrentCategorySuccess = createAction(
    '[Category/API] Select Current Category',
    props<{ data: Category }>(),
);

