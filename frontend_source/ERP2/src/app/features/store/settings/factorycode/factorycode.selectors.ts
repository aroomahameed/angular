import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FactorycodeState, factorycodeFeatureKey, selectAll} from './factorycode.reducer';

const featureState = createFeatureSelector<FactorycodeState>(factorycodeFeatureKey);

export const selectAllFactorycodes = createSelector(
    featureState,
    selectAll,
);

export const allFactorycodeLoaded = createSelector(
    featureState,
    state => state.allFactorycodesLoaded,
);

export const selectCurrentFactorycode = createSelector(
    featureState,
    state => state.currentFactorycode
)

