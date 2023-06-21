import {createAction, props} from '@ngrx/store';

import {Labball} from './labball';

export const loadLabballs = createAction(
    '[Labball/API] Load Labballs'
);

export const loadLabballsSuccess = createAction(
    '[Labball/API] Load Labballs Success',
    props<{ data: Labball[] }>(),
);

export const addLabball = createAction(
    '[Labball/API] Add Labball',
    props<{ data: Labball }>(),
);

export const addLabballSuccess = createAction(
    '[Labball/API] Add Labball Success',
    props<{ data: Labball }>(),
);


export const deleteLabball = createAction(
    '[Labball/API] Delete Labball',
    props<{ data: Labball }>(),
);

export const deleteLabballSuccess = createAction(
    '[Labball/API] Delete Labball Success',
    props<{ id: string}>(),
);

export const selectCurrentLabballSuccess = createAction(
    '[Labball/API] Select Current Labball',
    props<{ data: Labball }>(),
);

