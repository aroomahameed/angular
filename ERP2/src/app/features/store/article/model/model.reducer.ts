import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Model} from './model';
import * as ModelActions from './model.actions';

export const modelFeatureKey = 'models';

export interface ModelState extends EntityState<Model> {
    allModelsLoaded: boolean;
    currentModel: Model
}

export const adapter: EntityAdapter<Model> = createEntityAdapter<Model>();

export const initialState: ModelState = adapter.getInitialState({
    allModelsLoaded: false,
    currentModel: null
});

const modelReducer = createReducer(
    initialState,
    on(ModelActions.addModelSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentModel: action.data}),
    ),
    on(ModelActions.deleteModelSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ModelActions.loadModelsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ModelActions.selectCurrentModelSuccess,
        (state, action) => ({...state, currentModel: action.data}),
    ),
);

export function reducer(state: ModelState | undefined, action: Action) {
    return modelReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
