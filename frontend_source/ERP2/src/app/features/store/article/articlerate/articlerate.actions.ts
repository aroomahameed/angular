import {createAction, props} from '@ngrx/store';

import {Articlerate} from './articlerate';

export const loadArticlerates = createAction(
    '[Articlerate/API] Load Articlerates'
);

export const loadArticleratesSuccess = createAction(
    '[Articlerate/API] Load Articlerates Success',
    props<{ data: Articlerate[] }>(),
);

export const addArticlerate = createAction(
    '[Articlerate/API] Add Articlerate',
    props<{ data: Articlerate }>(),
);

export const addArticlerateSuccess = createAction(
    '[Articlerate/API] Add Articlerate Success',
    props<{ data: Articlerate }>(),
);


export const deleteArticlerate = createAction(
    '[Articlerate/API] Delete Articlerate',
    props<{ data: Articlerate }>(),
);

export const deleteArticlerateSuccess = createAction(
    '[Articlerate/API] Delete Articlerate Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlerateSuccess = createAction(
    '[Articlerate/API] Select Current Articlerate',
    props<{ data: Articlerate }>(),
);

