import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Pohead} from './pohead';
import * as PoheadActions from './pohead.actions';

export const poheadFeatureKey = 'poheads';

export interface PoheadState extends EntityState<Pohead> {
    allPoheadsLoaded: boolean;
    currentPohead: Pohead
}

export const adapter: EntityAdapter<Pohead> = createEntityAdapter<Pohead>();

export const initialState: PoheadState = adapter.getInitialState({
    allPoheadsLoaded: false,
    currentPohead: null
});

const poheadReducer = createReducer(
    initialState,
    on(PoheadActions.addPoheadSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPohead: action.data}),
    ),
    on(PoheadActions.deletePoheadSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PoheadActions.loadPoheadsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PoheadActions.selectCurrentPoheadSuccess,
        (state, action) => ({...state, currentPohead: action.data}),
    ),
);

export function reducer(state: PoheadState | undefined, action: Action) {
    return poheadReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
