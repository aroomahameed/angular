import {createAction, props} from '@ngrx/store';

import {Poothercharge} from './poothercharge';

export const loadPoothercharges = createAction(
    '[Poothercharge/API] Load Poothercharges'
);

export const loadPootherchargesSuccess = createAction(
    '[Poothercharge/API] Load Poothercharges Success',
    props<{ data: Poothercharge[] }>(),
);

export const addPoothercharge = createAction(
    '[Poothercharge/API] Add Poothercharge',
    props<{ data: Poothercharge }>(),
);

export const addPootherchargeSuccess = createAction(
    '[Poothercharge/API] Add Poothercharge Success',
    props<{ data: Poothercharge }>(),
);


export const deletePoothercharge = createAction(
    '[Poothercharge/API] Delete Poothercharge',
    props<{ data: Poothercharge }>(),
);

export const deletePootherchargeSuccess = createAction(
    '[Poothercharge/API] Delete Poothercharge Success',
    props<{ id: string}>(),
);

export const selectCurrentPootherchargeSuccess = createAction(
    '[Poothercharge/API] Select Current Poothercharge',
    props<{ data: Poothercharge }>(),
);

