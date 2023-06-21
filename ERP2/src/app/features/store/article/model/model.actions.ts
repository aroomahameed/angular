import {createAction, props} from '@ngrx/store';

import {Model} from './model';

export const loadModels = createAction(
    '[Model/API] Load Models'
);

export const loadModelsSuccess = createAction(
    '[Model/API] Load Models Success',
    props<{ data: Model[] }>(),
);

export const addModel = createAction(
    '[Model/API] Add Model',
    props<{ data: Model }>(),
);

export const addModelSuccess = createAction(
    '[Model/API] Add Model Success',
    props<{ data: Model }>(),
);


export const deleteModel = createAction(
    '[Model/API] Delete Model',
    props<{ data: Model }>(),
);

export const deleteModelSuccess = createAction(
    '[Model/API] Delete Model Success',
    props<{ id: string}>(),
);

export const selectCurrentModelSuccess = createAction(
    '[Model/API] Select Current Model',
    props<{ data: Model }>(),
);

