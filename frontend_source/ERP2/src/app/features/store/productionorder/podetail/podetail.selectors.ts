import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PodetailState, podetailFeatureKey, selectAll} from './podetail.reducer';

const featureState = createFeatureSelector<PodetailState>(podetailFeatureKey);

export const selectAllPodetails = createSelector(
    featureState,
    selectAll,
);

export const allPodetailLoaded = createSelector(
    featureState,
    state => state.allPodetailsLoaded,
);

export const selectCurrentPodetail = createSelector(
    featureState,
    state => state.currentPodetail
)

