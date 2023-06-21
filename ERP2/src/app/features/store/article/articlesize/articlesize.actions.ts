import {createAction, props} from '@ngrx/store';

import {Articlesize} from './articlesize';

export const loadArticlesizes = createAction(
    '[Articlesize/API] Load Articlesizes'
);

export const loadArticlesizesSuccess = createAction(
    '[Articlesize/API] Load Articlesizes Success',
    props<{ data: Articlesize[] }>(),
);

export const addArticlesize = createAction(
    '[Articlesize/API] Add Articlesize',
    props<{ data: Articlesize }>(),
);

export const addArticlesizeSuccess = createAction(
    '[Articlesize/API] Add Articlesize Success',
    props<{ data: Articlesize }>(),
);


export const deleteArticlesize = createAction(
    '[Articlesize/API] Delete Articlesize',
    props<{ data: Articlesize }>(),
);

export const deleteArticlesizeSuccess = createAction(
    '[Articlesize/API] Delete Articlesize Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlesizeSuccess = createAction(
    '[Articlesize/API] Select Current Articlesize',
    props<{ data: Articlesize }>(),
);

