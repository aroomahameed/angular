import {createAction, props} from '@ngrx/store';

import {Head} from './head.model';

export const loadHeads = createAction(
    '[Head/API] Load Heads'
);

export const loadHeadsSuccess = createAction(
    '[Head/API] Load Heads Success',
    props<{ data: Head[] }>(),
);

export const addHead = createAction(
    '[Head/API] Add Head',
    props<{ data: Head }>(),
);

export const addHeadSuccess = createAction(
    '[Head/API] Add Head Success',
    props<{ data: Head }>(),
);


export const deleteHead = createAction(
    '[Head/API] Delete Head',
    props<{ id: string }>(),
);

export const deleteHeadSuccess = createAction(
    '[Head/API] Delete Head Success',
    props<{ id: string }>(),
);

