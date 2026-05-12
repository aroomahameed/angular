import {createAction, props} from '@ngrx/store';

import {Category} from './category.model';

export const loadCategories = createAction(
    '[Category/API] Load Categories'
);

export const loadCategoriesSuccess = createAction(
    '[Category/API] Load Categories Success',
    props<{ data: Category[] }>(),
);


