import {createAction, props} from '@ngrx/store';

import {Factorycode} from './factorycode';

export const loadFactorycodes = createAction(
    '[Factorycode/API] Load Factorycodes'
);

export const loadFactorycodesSuccess = createAction(
    '[Factorycode/API] Load Factorycodes Success',
    props<{ data: Factorycode[] }>(),
);

export const addFactorycode = createAction(
    '[Factorycode/API] Add Factorycode',
    props<{ data: Factorycode }>(),
);

export const addFactorycodeSuccess = createAction(
    '[Factorycode/API] Add Factorycode Success',
    props<{ data: Factorycode }>(),
);


export const deleteFactorycode = createAction(
    '[Factorycode/API] Delete Factorycode',
    props<{ data: Factorycode }>(),
);

export const deleteFactorycodeSuccess = createAction(
    '[Factorycode/API] Delete Factorycode Success',
    props<{ id: string}>(),
);

export const selectCurrentFactorycodeSuccess = createAction(
    '[Factorycode/API] Select Current Factorycode',
    props<{ data: Factorycode }>(),
);

