import {createAction, props} from '@ngrx/store';

import {Transportmode} from './transportmode';

export const loadTransportmodes = createAction(
    '[Transportmode/API] Load Transportmodes'
);

export const loadTransportmodesSuccess = createAction(
    '[Transportmode/API] Load Transportmodes Success',
    props<{ data: Transportmode[] }>(),
);

export const addTransportmode = createAction(
    '[Transportmode/API] Add Transportmode',
    props<{ data: Transportmode }>(),
);

export const addTransportmodeSuccess = createAction(
    '[Transportmode/API] Add Transportmode Success',
    props<{ data: Transportmode }>(),
);


export const deleteTransportmode = createAction(
    '[Transportmode/API] Delete Transportmode',
    props<{ data: Transportmode }>(),
);

export const deleteTransportmodeSuccess = createAction(
    '[Transportmode/API] Delete Transportmode Success',
    props<{ id: string}>(),
);

export const selectCurrentTransportmodeSuccess = createAction(
    '[Transportmode/API] Select Current Transportmode',
    props<{ data: Transportmode }>(),
);

