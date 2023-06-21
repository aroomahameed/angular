import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Materialseason} from './materialseason';
import * as MaterialseasonActions from './materialseason.actions';

export const materialseasonFeatureKey = 'materialseasons';

export interface MaterialseasonState extends EntityState<Materialseason> {
    allMaterialseasonsLoaded: boolean;
    currentMaterialseason: Materialseason
}

export const adapter: EntityAdapter<Materialseason> = createEntityAdapter<Materialseason>();

export const initialState: MaterialseasonState = adapter.getInitialState({
    allMaterialseasonsLoaded: false,
    currentMaterialseason: null
});

const materialseasonReducer = createReducer(
    initialState,
    on(MaterialseasonActions.addMaterialseasonSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentMaterialseason: action.data}),
    ),
    on(MaterialseasonActions.deleteMaterialseasonSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(MaterialseasonActions.loadMaterialseasonsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(MaterialseasonActions.selectCurrentMaterialseasonSuccess,
        (state, action) => ({...state, currentMaterialseason: action.data}),
    ),
);

export function reducer(state: MaterialseasonState | undefined, action: Action) {
    return materialseasonReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
