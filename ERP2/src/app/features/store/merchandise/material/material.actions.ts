import {createAction, props} from '@ngrx/store';

import {Material} from './material';

export const loadMaterials = createAction(
    '[Material/API] Load Materials'
);

export const loadMaterialsSuccess = createAction(
    '[Material/API] Load Materials Success',
    props<{ data: Material[] }>(),
);

export const addMaterial = createAction(
    '[Material/API] Add Material',
    props<{ data: any }>(),
);

export const addMaterialSuccess = createAction(
    '[Material/API] Add Material Success',
    props<{ data: Material }>(),
);


export const deleteMaterial = createAction(
    '[Material/API] Delete Material',
    props<{ data: Material }>(),
);

export const deleteMaterialSuccess = createAction(
    '[Material/API] Delete Material Success',
    props<{ id: string}>(),
);

export const selectCurrentMaterialSuccess = createAction(
    '[Material/API] Select Current Material',
    props<{ data: Material }>(),
);

