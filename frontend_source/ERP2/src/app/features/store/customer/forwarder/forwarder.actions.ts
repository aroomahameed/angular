import {createAction, props} from '@ngrx/store';

import {Forwarder} from './forwarder';

export const loadForwarders = createAction(
    '[Forwarder/API] Load Forwarders'
);

export const loadForwardersSuccess = createAction(
    '[Forwarder/API] Load Forwarders Success',
    props<{ data: Forwarder[] }>(),
);

export const addForwarder = createAction(
    '[Forwarder/API] Add Forwarder',
    props<{ data: Forwarder }>(),
);

export const addForwarderSuccess = createAction(
    '[Forwarder/API] Add Forwarder Success',
    props<{ data: Forwarder }>(),
);


export const deleteForwarder = createAction(
    '[Forwarder/API] Delete Forwarder',
    props<{ data: Forwarder }>(),
);

export const deleteForwarderSuccess = createAction(
    '[Forwarder/API] Delete Forwarder Success',
    props<{ id: string}>(),
);

export const selectCurrentForwarderSuccess = createAction(
    '[Forwarder/API] Select Current Forwarder',
    props<{ data: Forwarder }>(),
);

