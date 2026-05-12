import {createAction, props} from '@ngrx/store';

import {Articleqca} from './articleqca';

export const loadArticleqcas = createAction(
    '[Articleqca/API] Load Articleqcas'
);

export const loadArticleqcasSuccess = createAction(
    '[Articleqca/API] Load Articleqcas Success',
    props<{ data: Articleqca[] }>(),
);

export const addArticleqca = createAction(
    '[Articleqca/API] Add Articleqca',
    props<{ data: Articleqca }>(),
);

export const addArticleqcaSuccess = createAction(
    '[Articleqca/API] Add Articleqca Success',
    props<{ data: Articleqca }>(),
);


export const deleteArticleqca = createAction(
    '[Articleqca/API] Delete Articleqca',
    props<{ data: Articleqca }>(),
);

export const deleteArticleqcaSuccess = createAction(
    '[Articleqca/API] Delete Articleqca Success',
    props<{ id: string}>(),
);

export const selectCurrentArticleqcaSuccess = createAction(
    '[Articleqca/API] Select Current Articleqca',
    props<{ data: Articleqca }>(),
);

