import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Pouploading} from './pouploading';
import * as PouploadingActions from './pouploading.actions';

export const pouploadingFeatureKey = 'pouploadings';

export interface PouploadingState extends EntityState<Pouploading> {
    allPouploadingsLoaded: boolean;
    currentPouploading: Pouploading
}

export const adapter: EntityAdapter<Pouploading> = createEntityAdapter<Pouploading>();

export const initialState: PouploadingState = adapter.getInitialState({
    allPouploadingsLoaded: false,
    currentPouploading: null
});

const pouploadingReducer = createReducer(
    initialState,
    on(PouploadingActions.addPouploadingSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPouploading: action.data}),
    ),
    on(PouploadingActions.deletePouploadingSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PouploadingActions.loadPouploadingsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PouploadingActions.selectCurrentPouploadingSuccess,
        (state, action) => ({...state, currentPouploading: action.data}),
    ),
);

export function reducer(state: PouploadingState | undefined, action: Action) {
    return pouploadingReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
