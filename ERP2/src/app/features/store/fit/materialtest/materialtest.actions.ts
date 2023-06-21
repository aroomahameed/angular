import {createAction, props} from '@ngrx/store';

import {Materialtest} from './materialtest';

export const loadMaterialtests = createAction(
    '[Materialtest/API] Load Materialtests'
);

export const loadMaterialtestsSuccess = createAction(
    '[Materialtest/API] Load Materialtests Success',
    props<{ data: Materialtest[] }>(),
);

export const addMaterialtest = createAction(
    '[Materialtest/API] Add Materialtest',
    props<{ data: Materialtest }>(),
);

export const addMaterialtestSuccess = createAction(
    '[Materialtest/API] Add Materialtest Success',
    props<{ data: Materialtest }>(),
);


export const deleteMaterialtest = createAction(
    '[Materialtest/API] Delete Materialtest',
    props<{ data: Materialtest }>(),
);

export const deleteMaterialtestSuccess = createAction(
    '[Materialtest/API] Delete Materialtest Success',
    props<{ id: string}>(),
);

export const selectCurrentMaterialtestSuccess = createAction(
    '[Materialtest/API] Select Current Materialtest',
    props<{ data: Materialtest }>(),
);

