import {createAction, props} from '@ngrx/store';

import {Whentry} from './whentry';

export const loadWhentrys = createAction(
    '[Whentry/API] Load Whentrys'
);

export const loadWhentrysSuccess = createAction(
    '[Whentry/API] Load Whentrys Success',
    props<{ data: Whentry[] }>(),
);

export const addWhentry = createAction(
    '[Whentry/API] Add Whentry',
    props<{ data: Whentry }>(),
);

export const addWhentrySuccess = createAction(
    '[Whentry/API] Add Whentry Success',
    props<{ data: Whentry }>(),
);


export const deleteWhentry = createAction(
    '[Whentry/API] Delete Whentry',
    props<{ data: Whentry }>(),
);

export const deleteWhentrySuccess = createAction(
    '[Whentry/API] Delete Whentry Success',
    props<{ id: string}>(),
);

export const selectCurrentWhentrySuccess = createAction(
    '[Whentry/API] Select Current Whentry',
    props<{ data: Whentry }>(),
);

