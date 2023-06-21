import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Rack} from './rack';
import * as RackActions from './rack.actions';

export const rackFeatureKey = 'racks';

export interface RackState extends EntityState<Rack> {
    allRacksLoaded: boolean;
    currentRack: Rack
}

export const adapter: EntityAdapter<Rack> = createEntityAdapter<Rack>();

export const initialState: RackState = adapter.getInitialState({
    allRacksLoaded: false,
    currentRack: null
});

const rackReducer = createReducer(
    initialState,
    on(RackActions.addRackSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentRack: action.data}),
    ),
    on(RackActions.deleteRackSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(RackActions.loadRacksSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(RackActions.selectCurrentRackSuccess,
        (state, action) => ({...state, currentRack: action.data}),
    ),
);

export function reducer(state: RackState | undefined, action: Action) {
    return rackReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
