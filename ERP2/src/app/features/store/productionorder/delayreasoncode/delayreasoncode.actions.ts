import {createAction, props} from '@ngrx/store';

import {Delayreasoncode} from './delayreasoncode';

export const loadDelayreasoncodes = createAction(
    '[Delayreasoncode/API] Load Delayreasoncodes'
);

export const loadDelayreasoncodesSuccess = createAction(
    '[Delayreasoncode/API] Load Delayreasoncodes Success',
    props<{ data: Delayreasoncode[] }>(),
);

export const addDelayreasoncode = createAction(
    '[Delayreasoncode/API] Add Delayreasoncode',
    props<{ data: Delayreasoncode }>(),
);

export const addDelayreasoncodeSuccess = createAction(
    '[Delayreasoncode/API] Add Delayreasoncode Success',
    props<{ data: Delayreasoncode }>(),
);


export const deleteDelayreasoncode = createAction(
    '[Delayreasoncode/API] Delete Delayreasoncode',
    props<{ data: Delayreasoncode }>(),
);

export const deleteDelayreasoncodeSuccess = createAction(
    '[Delayreasoncode/API] Delete Delayreasoncode Success',
    props<{ id: string}>(),
);

export const selectCurrentDelayreasoncodeSuccess = createAction(
    '[Delayreasoncode/API] Select Current Delayreasoncode',
    props<{ data: Delayreasoncode }>(),
);

