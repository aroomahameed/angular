import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Forwarder} from './forwarder';
import * as ForwarderActions from './forwarder.actions';

export const forwarderFeatureKey = 'forwarders';

export interface ForwarderState extends EntityState<Forwarder> {
    allForwardersLoaded: boolean;
    currentForwarder: Forwarder
}

export const adapter: EntityAdapter<Forwarder> = createEntityAdapter<Forwarder>();

export const initialState: ForwarderState = adapter.getInitialState({
    allForwardersLoaded: false,
    currentForwarder: null
});

const forwarderReducer = createReducer(
    initialState,
    on(ForwarderActions.addForwarderSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentForwarder: action.data}),
    ),
    on(ForwarderActions.deleteForwarderSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ForwarderActions.loadForwardersSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ForwarderActions.selectCurrentForwarderSuccess,
        (state, action) => ({...state, currentForwarder: action.data}),
    ),
);

export function reducer(state: ForwarderState | undefined, action: Action) {
    return forwarderReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
