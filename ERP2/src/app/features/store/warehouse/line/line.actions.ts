import {createAction, props} from '@ngrx/store';

import {Line} from './line';

export const loadLines = createAction(
    '[Line/API] Load Lines'
);

export const loadLinesSuccess = createAction(
    '[Line/API] Load Lines Success',
    props<{ data: Line[] }>(),
);

export const addLine = createAction(
    '[Line/API] Add Line',
    props<{ data: Line }>(),
);

export const addLineSuccess = createAction(
    '[Line/API] Add Line Success',
    props<{ data: Line }>(),
);


export const deleteLine = createAction(
    '[Line/API] Delete Line',
    props<{ data: Line }>(),
);

export const deleteLineSuccess = createAction(
    '[Line/API] Delete Line Success',
    props<{ id: string}>(),
);

export const selectCurrentLineSuccess = createAction(
    '[Line/API] Select Current Line',
    props<{ data: Line }>(),
);

