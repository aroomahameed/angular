import {createAction, props} from '@ngrx/store';

import {Podetail} from './podetail';

export const loadPodetails = createAction(
    '[Podetail/API] Load Podetails'
);

export const loadPodetailsSuccess = createAction(
    '[Podetail/API] Load Podetails Success',
    props<{ data: Podetail[] }>(),
);

export const addPodetail = createAction(
    '[Podetail/API] Add Podetail',
    props<{ data: Podetail }>(),
);

export const addPodetailSuccess = createAction(
    '[Podetail/API] Add Podetail Success',
    props<{ data: Podetail }>(),
);


export const deletePodetail = createAction(
    '[Podetail/API] Delete Podetail',
    props<{ data: Podetail }>(),
);

export const deletePodetailSuccess = createAction(
    '[Podetail/API] Delete Podetail Success',
    props<{ id: string}>(),
);

export const selectCurrentPodetailSuccess = createAction(
    '[Podetail/API] Select Current Podetail',
    props<{ data: Podetail }>(),
);

