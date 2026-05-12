import {createAction, props} from '@ngrx/store';

import {Pouploading} from './pouploading';

export const loadPouploadings = createAction(
    '[Pouploading/API] Load Pouploadings'
);

export const loadPouploadingsSuccess = createAction(
    '[Pouploading/API] Load Pouploadings Success',
    props<{ data: Pouploading[] }>(),
);

export const addPouploading = createAction(
    '[Pouploading/API] Add Pouploading',
    props<{ data: any }>(),
);

export const addPouploadingSuccess = createAction(
    '[Pouploading/API] Add Pouploading Success',
    props<{ data: Pouploading }>(),
);


export const deletePouploading = createAction(
    '[Pouploading/API] Delete Pouploading',
    props<{ data: Pouploading }>(),
);

export const deletePouploadingSuccess = createAction(
    '[Pouploading/API] Delete Pouploading Success',
    props<{ id: string}>(),
);

export const selectCurrentPouploadingSuccess = createAction(
    '[Pouploading/API] Select Current Pouploading',
    props<{ data: Pouploading }>(),
);

