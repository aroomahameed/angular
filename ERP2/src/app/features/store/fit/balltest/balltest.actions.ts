import {createAction, props} from '@ngrx/store';

import {Balltest} from './balltest';

export const loadBalltests = createAction(
    '[Balltest/API] Load Balltests'
);

export const loadBalltestsSuccess = createAction(
    '[Balltest/API] Load Balltests Success',
    props<{ data: Balltest[] }>(),
);

export const addBalltest = createAction(
    '[Balltest/API] Add Balltest',
    props<{ data: Balltest }>(),
);

export const addBalltestSuccess = createAction(
    '[Balltest/API] Add Balltest Success',
    props<{ data: Balltest }>(),
);


export const deleteBalltest = createAction(
    '[Balltest/API] Delete Balltest',
    props<{ data: Balltest }>(),
);

export const deleteBalltestSuccess = createAction(
    '[Balltest/API] Delete Balltest Success',
    props<{ id: string}>(),
);

export const selectCurrentBalltestSuccess = createAction(
    '[Balltest/API] Select Current Balltest',
    props<{ data: Balltest }>(),
);

