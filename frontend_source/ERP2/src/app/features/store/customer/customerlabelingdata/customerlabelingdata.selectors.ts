import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CustomerlabelingdataState, customerlabelingdataFeatureKey, selectAll} from './customerlabelingdata.reducer';

const featureState = createFeatureSelector<CustomerlabelingdataState>(customerlabelingdataFeatureKey);

export const selectAllCustomerlabelingdatas = createSelector(
    featureState,
    selectAll,
);

export const allCustomerlabelingdataLoaded = createSelector(
    featureState,
    state => state.allCustomerlabelingdatasLoaded,
);

export const selectCurrentCustomerlabelingdata = createSelector(
    featureState,
    state => state.currentCustomerlabelingdata
)

