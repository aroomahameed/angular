import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Factorycode} from './factorycode';
import * as FactorycodeActions from './factorycode.actions';

export const factorycodeFeatureKey = 'factorycodes';

export interface FactorycodeState extends EntityState<Factorycode> {
    allFactorycodesLoaded: boolean;
    currentFactorycode: Factorycode
}

export const adapter: EntityAdapter<Factorycode> = createEntityAdapter<Factorycode>();

export const initialState: FactorycodeState = adapter.getInitialState({
    allFactorycodesLoaded: false,
    currentFactorycode: null
});

const factorycodeReducer = createReducer(
    initialState,
    on(FactorycodeActions.addFactorycodeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentFactorycode: action.data}),
    ),
    on(FactorycodeActions.deleteFactorycodeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(FactorycodeActions.loadFactorycodesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(FactorycodeActions.selectCurrentFactorycodeSuccess,
        (state, action) => ({...state, currentFactorycode: action.data}),
    ),
);

export function reducer(state: FactorycodeState | undefined, action: Action) {
    return factorycodeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
