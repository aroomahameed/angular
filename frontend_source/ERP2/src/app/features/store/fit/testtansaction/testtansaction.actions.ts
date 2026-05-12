import {createAction, props} from '@ngrx/store';

import {Testtansaction} from './testtansaction';

export const loadTesttansactions = createAction(
    '[Testtansaction/API] Load Testtansactions'
);

export const loadTesttansactionsSuccess = createAction(
    '[Testtansaction/API] Load Testtansactions Success',
    props<{ data: Testtansaction[] }>(),
);

export const addTesttansaction = createAction(
    '[Testtansaction/API] Add Testtansaction',
    props<{ data: Testtansaction }>(),
);

export const addTesttansactionSuccess = createAction(
    '[Testtansaction/API] Add Testtansaction Success',
    props<{ data: Testtansaction }>(),
);


export const deleteTesttansaction = createAction(
    '[Testtansaction/API] Delete Testtansaction',
    props<{ data: Testtansaction }>(),
);

export const deleteTesttansactionSuccess = createAction(
    '[Testtansaction/API] Delete Testtansaction Success',
    props<{ id: string}>(),
);

export const selectCurrentTesttansactionSuccess = createAction(
    '[Testtansaction/API] Select Current Testtansaction',
    props<{ data: Testtansaction }>(),
);

