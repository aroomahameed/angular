import {createAction, props} from '@ngrx/store';

import {Articlematerialsub} from './articlematerialsub';

export const loadArticlematerialsubs = createAction(
    '[Articlematerialsub/API] Load Articlematerialsubs'
);

export const loadArticlematerialsubsSuccess = createAction(
    '[Articlematerialsub/API] Load Articlematerialsubs Success',
    props<{ data: Articlematerialsub[] }>(),
);

export const addArticlematerialsub = createAction(
    '[Articlematerialsub/API] Add Articlematerialsub',
    props<{ data: Articlematerialsub }>(),
);

export const addArticlematerialsubSuccess = createAction(
    '[Articlematerialsub/API] Add Articlematerialsub Success',
    props<{ data: Articlematerialsub }>(),
);


export const deleteArticlematerialsub = createAction(
    '[Articlematerialsub/API] Delete Articlematerialsub',
    props<{ data: Articlematerialsub }>(),
);

export const deleteArticlematerialsubSuccess = createAction(
    '[Articlematerialsub/API] Delete Articlematerialsub Success',
    props<{ id: string}>(),
);

export const selectCurrentArticlematerialsubSuccess = createAction(
    '[Articlematerialsub/API] Select Current Articlematerialsub',
    props<{ data: Articlematerialsub }>(),
);

