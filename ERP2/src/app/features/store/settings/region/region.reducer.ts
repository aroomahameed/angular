import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Region} from './region';
import * as RegionActions from './region.actions';

export const regionFeatureKey = 'regions';

export interface RegionState extends EntityState<Region> {
    allRegionsLoaded: boolean;
    currentRegion: Region
}

export const adapter: EntityAdapter<Region> = createEntityAdapter<Region>();

export const initialState: RegionState = adapter.getInitialState({
    allRegionsLoaded: false,
    currentRegion: null
});

const regionReducer = createReducer(
    initialState,
    on(RegionActions.addRegionSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentRegion: action.data}),
    ),
    on(RegionActions.deleteRegionSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(RegionActions.loadRegionsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(RegionActions.selectCurrentRegionSuccess,
        (state, action) => ({...state, currentRegion: action.data}),
    ),
);

export function reducer(state: RegionState | undefined, action: Action) {
    return regionReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
