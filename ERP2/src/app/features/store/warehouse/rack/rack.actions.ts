import {createAction, props} from '@ngrx/store';

import {Rack} from './rack';

export const loadRacks = createAction(
    '[Rack/API] Load Racks'
);

export const loadRacksSuccess = createAction(
    '[Rack/API] Load Racks Success',
    props<{ data: Rack[] }>(),
);

export const addRack = createAction(
    '[Rack/API] Add Rack',
    props<{ data: Rack }>(),
);

export const addRackSuccess = createAction(
    '[Rack/API] Add Rack Success',
    props<{ data: Rack }>(),
);


export const deleteRack = createAction(
    '[Rack/API] Delete Rack',
    props<{ data: Rack }>(),
);

export const deleteRackSuccess = createAction(
    '[Rack/API] Delete Rack Success',
    props<{ id: string}>(),
);

export const selectCurrentRackSuccess = createAction(
    '[Rack/API] Select Current Rack',
    props<{ data: Rack }>(),
);

