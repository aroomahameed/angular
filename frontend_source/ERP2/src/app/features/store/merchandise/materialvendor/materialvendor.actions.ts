import {createAction, props} from '@ngrx/store';

import {Materialvendor} from './materialvendor';

export const loadMaterialvendors = createAction(
    '[Materialvendor/API] Load Materialvendors'
);

export const loadMaterialvendorsSuccess = createAction(
    '[Materialvendor/API] Load Materialvendors Success',
    props<{ data: Materialvendor[] }>(),
);

export const addMaterialvendor = createAction(
    '[Materialvendor/API] Add Materialvendor',
    props<{ data: Materialvendor }>(),
);

export const addMaterialvendorSuccess = createAction(
    '[Materialvendor/API] Add Materialvendor Success',
    props<{ data: Materialvendor }>(),
);


export const deleteMaterialvendor = createAction(
    '[Materialvendor/API] Delete Materialvendor',
    props<{ data: Materialvendor }>(),
);

export const deleteMaterialvendorSuccess = createAction(
    '[Materialvendor/API] Delete Materialvendor Success',
    props<{ id: string}>(),
);

export const selectCurrentMaterialvendorSuccess = createAction(
    '[Materialvendor/API] Select Current Materialvendor',
    props<{ data: Materialvendor }>(),
);

