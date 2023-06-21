import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Transportmode} from './transportmode';
import * as TransportmodeActions from './transportmode.actions';

export const transportmodeFeatureKey = 'transportmodes';

export interface TransportmodeState extends EntityState<Transportmode> {
    allTransportmodesLoaded: boolean;
    currentTransportmode: Transportmode
}

export const adapter: EntityAdapter<Transportmode> = createEntityAdapter<Transportmode>();

export const initialState: TransportmodeState = adapter.getInitialState({
    allTransportmodesLoaded: false,
    currentTransportmode: null
});

const transportmodeReducer = createReducer(
    initialState,
    on(TransportmodeActions.addTransportmodeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentTransportmode: action.data}),
    ),
    on(TransportmodeActions.deleteTransportmodeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(TransportmodeActions.loadTransportmodesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(TransportmodeActions.selectCurrentTransportmodeSuccess,
        (state, action) => ({...state, currentTransportmode: action.data}),
    ),
);

export function reducer(state: TransportmodeState | undefined, action: Action) {
    return transportmodeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
