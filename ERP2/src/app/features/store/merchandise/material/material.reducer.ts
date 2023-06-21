import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Material} from './material';
import * as MaterialActions from './material.actions';

export const materialFeatureKey = 'materials';

export interface MaterialState extends EntityState<Material> {
    allMaterialsLoaded: boolean;
    currentMaterial: Material
}

export const adapter: EntityAdapter<Material> = createEntityAdapter<Material>();

export const initialState: MaterialState = adapter.getInitialState({
    allMaterialsLoaded: false,
    currentMaterial: null
});

const materialReducer = createReducer(
    initialState,
    on(MaterialActions.addMaterialSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentMaterial: action.data}),
    ),
    on(MaterialActions.deleteMaterialSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(MaterialActions.loadMaterialsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(MaterialActions.selectCurrentMaterialSuccess,
        (state, action) => ({...state, currentMaterial: action.data}),
    ),
);

export function reducer(state: MaterialState | undefined, action: Action) {
    return materialReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
