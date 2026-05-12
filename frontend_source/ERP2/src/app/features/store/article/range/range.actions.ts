import {createAction, props} from '@ngrx/store';

import {Range} from './range';

export const loadRanges = createAction(
    '[Range/API] Load Ranges'
);

export const loadRangesSuccess = createAction(
    '[Range/API] Load Ranges Success',
    props<{ data: Range[] }>(),
);

export const addRange = createAction(
    '[Range/API] Add Range',
    props<{ data: Range }>(),
);

export const addRangeSuccess = createAction(
    '[Range/API] Add Range Success',
    props<{ data: Range }>(),
);


export const deleteRange = createAction(
    '[Range/API] Delete Range',
    props<{ data: Range }>(),
);

export const deleteRangeSuccess = createAction(
    '[Range/API] Delete Range Success',
    props<{ id: string}>(),
);

export const selectCurrentRangeSuccess = createAction(
    '[Range/API] Select Current Range',
    props<{ data: Range }>(),
);

