import {createAction, props} from '@ngrx/store';

import {Posub} from './posub';

export const loadPosubs = createAction(
    '[Posub/API] Load Posubs'
);

export const loadPosubsSuccess = createAction(
    '[Posub/API] Load Posubs Success',
    props<{ data: Posub[] }>(),
);

export const addPosub = createAction(
    '[Posub/API] Add Posub',
    props<{ data: Posub }>(),
);

export const addPosubSuccess = createAction(
    '[Posub/API] Add Posub Success',
    props<{ data: Posub }>(),
);


export const deletePosub = createAction(
    '[Posub/API] Delete Posub',
    props<{ data: Posub }>(),
);

export const deletePosubSuccess = createAction(
    '[Posub/API] Delete Posub Success',
    props<{ id: string}>(),
);

export const selectCurrentPosubSuccess = createAction(
    '[Posub/API] Select Current Posub',
    props<{ data: Posub }>(),
);

