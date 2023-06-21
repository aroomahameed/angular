import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Season} from './season';
import * as SeasonActions from './season.actions';

export const seasonFeatureKey = 'seasons';

export interface SeasonState extends EntityState<Season> {
    allSeasonsLoaded: boolean;
    currentSeason: Season
}

export const adapter: EntityAdapter<Season> = createEntityAdapter<Season>();

export const initialState: SeasonState = adapter.getInitialState({
    allSeasonsLoaded: false,
    currentSeason: null
});

const seasonReducer = createReducer(
    initialState,
    on(SeasonActions.addSeasonSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentSeason: action.data}),
    ),
    on(SeasonActions.deleteSeasonSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(SeasonActions.loadSeasonsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(SeasonActions.selectCurrentSeasonSuccess,
        (state, action) => ({...state, currentSeason: action.data}),
    ),
);

export function reducer(state: SeasonState | undefined, action: Action) {
    return seasonReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
