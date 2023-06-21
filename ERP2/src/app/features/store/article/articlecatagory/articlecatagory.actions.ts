import {createAction, props} from '@ngrx/store';

import {Articlecatagory} from './articlecatagory';

export const loadArticlecatagorys = createAction(
    '[Articlecatagory/API] Load Articlecatagorys'
);

export const loadArticlecatagorysSuccess = createAction(
    '[Articlecatagory/API] Load Articlecatagorys Success',
    props<{ data: Articlecatagory[] }>(),
);

export const addArticlecatagory = createAction(
    '[Articlecatagory/API] Add Articlecatagory',
    props<{ data: Articlecatagory }>(),
);

export const addArticlecatagorySuccess = createAction(
    '[Articlecatagory/API] Add Articlecatagory Success',
    props<{ data: Articlecatagory }>(),
);


export const deleteArticlecatagory = createAction(
    '[Articlecatagory/API] Delete Articlecatagory',
    props<{ data: Articlecatagory }>(),
);

export const deleteArticlecatagorySuccess = createAction(
    '[Articlecatagory/API] Delete Articlecatagory Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlecatagorySuccess = createAction(
    '[Articlecatagory/API] Select Current Articlecatagory',
    props<{ data: Articlecatagory }>(),
);

