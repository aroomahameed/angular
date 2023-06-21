import {createAction, props} from '@ngrx/store';

import {Test} from './test';

export const loadTests = createAction(
    '[Test/API] Load Tests'
);

export const loadTestsSuccess = createAction(
    '[Test/API] Load Tests Success',
    props<{ data: Test[] }>(),
);

export const addTest = createAction(
    '[Test/API] Add Test',
    props<{ data: Test }>(),
);

export const addTestSuccess = createAction(
    '[Test/API] Add Test Success',
    props<{ data: Test }>(),
);


export const deleteTest = createAction(
    '[Test/API] Delete Test',
    props<{ data: Test }>(),
);

export const deleteTestSuccess = createAction(
    '[Test/API] Delete Test Success',
    props<{ id: string}>(),
);

export const selectCurrentTestSuccess = createAction(
    '[Test/API] Select Current Test',
    props<{ data: Test }>(),
);

