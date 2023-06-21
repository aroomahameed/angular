import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Client} from './client';
import * as ClientActions from './client.actions';

export const clientFeatureKey = 'clients';

export interface ClientState extends EntityState<Client> {
    allClientsLoaded: boolean;
    currentClient: Client
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState: ClientState = adapter.getInitialState({
    allClientsLoaded: false,
    currentClient: null
});

const clientReducer = createReducer(
    initialState,
    on(ClientActions.addClientSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentClient: action.data}),
    ),
    on(ClientActions.deleteClientSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ClientActions.loadClientsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ClientActions.selectCurrentClientSuccess,
        (state, action) => ({...state, currentClient: action.data}),
    ),
);

export function reducer(state: ClientState | undefined, action: Action) {
    return clientReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
