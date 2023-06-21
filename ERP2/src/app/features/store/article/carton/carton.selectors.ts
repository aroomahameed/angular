import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartonState, cartonFeatureKey, selectAll} from './carton.reducer';

const featureState = createFeatureSelector<CartonState>(cartonFeatureKey);

export const selectAllCartons = createSelector(
    featureState,
    selectAll,
);

export const allCartonLoaded = createSelector(
    featureState,
    state => state.allCartonsLoaded,
);

export const selectCurrentCarton = createSelector(
    featureState,
    state => state.currentCarton
)

