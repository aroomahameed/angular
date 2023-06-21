import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Posub} from './posub';
import * as PosubActions from './posub.actions';

export const posubFeatureKey = 'posubs';

export interface PosubState extends EntityState<Posub> {
    allPosubsLoaded: boolean;
    currentPosub: Posub
}

export const adapter: EntityAdapter<Posub> = createEntityAdapter<Posub>();

export const initialState: PosubState = adapter.getInitialState({
    allPosubsLoaded: false,
    currentPosub: null
});

const posubReducer = createReducer(
    initialState,
    on(PosubActions.addPosubSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPosub: action.data}),
    ),
    on(PosubActions.deletePosubSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PosubActions.loadPosubsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PosubActions.selectCurrentPosubSuccess,
        (state, action) => ({...state, currentPosub: action.data}),
    ),
);

export function reducer(state: PosubState | undefined, action: Action) {
    return posubReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
