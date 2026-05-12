import {createAction, props} from '@ngrx/store';

import {Pohead} from './pohead';

export const loadPoheads = createAction(
    '[Pohead/API] Load Poheads'
);

export const loadPoheadsSuccess = createAction(
    '[Pohead/API] Load Poheads Success',
    props<{ data: Pohead[] }>(),
);

export const addPohead = createAction(
    '[Pohead/API] Add Pohead',
    props<{ data: Pohead }>(),
);

export const addPoheadSuccess = createAction(
    '[Pohead/API] Add Pohead Success',
    props<{ data: Pohead }>(),
);


export const deletePohead = createAction(
    '[Pohead/API] Delete Pohead',
    props<{ data: Pohead }>(),
);

export const deletePoheadSuccess = createAction(
    '[Pohead/API] Delete Pohead Success',
    props<{ id: string}>(),
);

export const selectCurrentPoheadSuccess = createAction(
    '[Pohead/API] Select Current Pohead',
    props<{ data: Pohead }>(),
);

