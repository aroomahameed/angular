import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Poothercharge} from './poothercharge';
import * as PootherchargeActions from './poothercharge.actions';

export const pootherchargeFeatureKey = 'poothercharges';

export interface PootherchargeState extends EntityState<Poothercharge> {
    allPootherchargesLoaded: boolean;
    currentPoothercharge: Poothercharge
}

export const adapter: EntityAdapter<Poothercharge> = createEntityAdapter<Poothercharge>();

export const initialState: PootherchargeState = adapter.getInitialState({
    allPootherchargesLoaded: false,
    currentPoothercharge: null
});

const pootherchargeReducer = createReducer(
    initialState,
    on(PootherchargeActions.addPootherchargeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPoothercharge: action.data}),
    ),
    on(PootherchargeActions.deletePootherchargeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PootherchargeActions.loadPootherchargesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PootherchargeActions.selectCurrentPootherchargeSuccess,
        (state, action) => ({...state, currentPoothercharge: action.data}),
    ),
);

export function reducer(state: PootherchargeState | undefined, action: Action) {
    return pootherchargeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
