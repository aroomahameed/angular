import {createAction, props} from '@ngrx/store';

import {Serviceidentifier} from './serviceidentifier';

export const loadServiceidentifiers = createAction(
    '[Serviceidentifier/API] Load Serviceidentifiers'
);

export const loadServiceidentifiersSuccess = createAction(
    '[Serviceidentifier/API] Load Serviceidentifiers Success',
    props<{ data: Serviceidentifier[] }>(),
);

export const addServiceidentifier = createAction(
    '[Serviceidentifier/API] Add Serviceidentifier',
    props<{ data: Serviceidentifier }>(),
);

export const addServiceidentifierSuccess = createAction(
    '[Serviceidentifier/API] Add Serviceidentifier Success',
    props<{ data: Serviceidentifier }>(),
);


export const deleteServiceidentifier = createAction(
    '[Serviceidentifier/API] Delete Serviceidentifier',
    props<{ data: Serviceidentifier }>(),
);

export const deleteServiceidentifierSuccess = createAction(
    '[Serviceidentifier/API] Delete Serviceidentifier Success',
    props<{ id: string}>(),
);

export const selectCurrentServiceidentifierSuccess = createAction(
    '[Serviceidentifier/API] Select Current Serviceidentifier',
    props<{ data: Serviceidentifier }>(),
);

