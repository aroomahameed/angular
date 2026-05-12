import {createAction, props} from '@ngrx/store';

import {Articleme} from './articleme';

export const loadArticlemes = createAction(
    '[Articleme/API] Load Articlemes'
);

export const loadArticlemesSuccess = createAction(
    '[Articleme/API] Load Articlemes Success',
    props<{ data: Articleme[] }>(),
);

export const addArticleme = createAction(
    '[Articleme/API] Add Articleme',
    props<{ data: Articleme }>(),
);

export const addArticlemeSuccess = createAction(
    '[Articleme/API] Add Articleme Success',
    props<{ data: Articleme }>(),
);


export const deleteArticleme = createAction(
    '[Articleme/API] Delete Articleme',
    props<{ data: Articleme }>(),
);

export const deleteArticlemeSuccess = createAction(
    '[Articleme/API] Delete Articleme Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlemeSuccess = createAction(
    '[Articleme/API] Select Current Articleme',
    props<{ data: Articleme }>(),
);

