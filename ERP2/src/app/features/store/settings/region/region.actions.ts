import {createAction, props} from '@ngrx/store';

import {Region} from './region';

export const loadRegions = createAction(
    '[Region/API] Load Regions'
);

export const loadRegionsSuccess = createAction(
    '[Region/API] Load Regions Success',
    props<{ data: Region[] }>(),
);

export const addRegion = createAction(
    '[Region/API] Add Region',
    props<{ data: Region }>(),
);

export const addRegionSuccess = createAction(
    '[Region/API] Add Region Success',
    props<{ data: Region }>(),
);


export const deleteRegion = createAction(
    '[Region/API] Delete Region',
    props<{ data: Region }>(),
);

export const deleteRegionSuccess = createAction(
    '[Region/API] Delete Region Success',
    props<{ id: string}>(),
);

export const selectCurrentRegionSuccess = createAction(
    '[Region/API] Select Current Region',
    props<{ data: Region }>(),
);

