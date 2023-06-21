import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Materialtest} from './materialtest';
import * as MaterialtestActions from './materialtest.actions';

export const materialtestFeatureKey = 'materialtests';

export interface MaterialtestState extends EntityState<Materialtest> {
    allMaterialtestsLoaded: boolean;
    currentMaterialtest: Materialtest
}

export const adapter: EntityAdapter<Materialtest> = createEntityAdapter<Materialtest>();

export const initialState: MaterialtestState = adapter.getInitialState({
    allMaterialtestsLoaded: false,
    currentMaterialtest: null
});

const materialtestReducer = createReducer(
    initialState,
    on(MaterialtestActions.addMaterialtestSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentMaterialtest: action.data}),
    ),
    on(MaterialtestActions.deleteMaterialtestSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(MaterialtestActions.loadMaterialtestsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(MaterialtestActions.selectCurrentMaterialtestSuccess,
        (state, action) => ({...state, currentMaterialtest: action.data}),
    ),
);

export function reducer(state: MaterialtestState | undefined, action: Action) {
    return materialtestReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
