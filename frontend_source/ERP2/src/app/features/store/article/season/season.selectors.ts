import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SeasonState, seasonFeatureKey, selectAll} from './season.reducer';

const featureState = createFeatureSelector<SeasonState>(seasonFeatureKey);

export const selectAllSeasons = createSelector(
    featureState,
    selectAll,
);

export const allSeasonLoaded = createSelector(
    featureState,
    state => state.allSeasonsLoaded,
);

export const selectCurrentSeason = createSelector(
    featureState,
    state => state.currentSeason
)

