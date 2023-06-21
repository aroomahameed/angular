import {createAction, props} from '@ngrx/store';

import {Reservepo} from './reservepo';

export const loadReservepos = createAction(
    '[Reservepo/API] Load Reservepos'
);

export const loadReserveposSuccess = createAction(
    '[Reservepo/API] Load Reservepos Success',
    props<{ data: Reservepo[] }>(),
);

export const addReservepo = createAction(
    '[Reservepo/API] Add Reservepo',
    props<{ data: Reservepo }>(),
);

export const addReservepoSuccess = createAction(
    '[Reservepo/API] Add Reservepo Success',
    props<{ data: Reservepo }>(),
);


export const deleteReservepo = createAction(
    '[Reservepo/API] Delete Reservepo',
    props<{ data: Reservepo }>(),
);

export const deleteReservepoSuccess = createAction(
    '[Reservepo/API] Delete Reservepo Success',
    props<{ id: string}>(),
);

export const selectCurrentReservepoSuccess = createAction(
    '[Reservepo/API] Select Current Reservepo',
    props<{ data: Reservepo }>(),
);

