import {createAction, props} from '@ngrx/store';

import {Customerlabelingdata} from './customerlabelingdata';

export const loadCustomerlabelingdatas = createAction(
    '[Customerlabelingdata/API] Load Customerlabelingdatas'
);

export const loadCustomerlabelingdatasSuccess = createAction(
    '[Customerlabelingdata/API] Load Customerlabelingdatas Success',
    props<{ data: Customerlabelingdata[] }>(),
);

export const addCustomerlabelingdata = createAction(
    '[Customerlabelingdata/API] Add Customerlabelingdata',
    props<{ data: Customerlabelingdata }>(),
);

export const addCustomerlabelingdataSuccess = createAction(
    '[Customerlabelingdata/API] Add Customerlabelingdata Success',
    props<{ data: Customerlabelingdata }>(),
);


export const deleteCustomerlabelingdata = createAction(
    '[Customerlabelingdata/API] Delete Customerlabelingdata',
    props<{ data: Customerlabelingdata }>(),
);

export const deleteCustomerlabelingdataSuccess = createAction(
    '[Customerlabelingdata/API] Delete Customerlabelingdata Success',
    props<{ id: string}>(),
);

export const selectCurrentCustomerlabelingdataSuccess = createAction(
    '[Customerlabelingdata/API] Select Current Customerlabelingdata',
    props<{ data: Customerlabelingdata }>(),
);

