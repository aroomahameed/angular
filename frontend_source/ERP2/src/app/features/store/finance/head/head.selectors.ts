import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Head} from './head.model';
import {HeadState, headFeatureKey, selectAll} from './head.reducer';

const featureState = createFeatureSelector<HeadState>(headFeatureKey);

export const selectAllHeads = createSelector(
    featureState,
    selectAll,
);

export const allHeadLoaded = createSelector(
    featureState,
    state => state.allLoaded,
);



