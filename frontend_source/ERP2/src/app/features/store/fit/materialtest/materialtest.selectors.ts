import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Materialtest } from './materialtest';
import {MaterialtestState, materialtestFeatureKey, selectAll} from './materialtest.reducer';

const featureState = createFeatureSelector<MaterialtestState>(materialtestFeatureKey);
const relationId = (value: any) => value && value.id ? value.id : value;

export const selectAllMaterialtests = createSelector(
    featureState,
    selectAll,
);

export const allMaterialtestLoaded = createSelector(
    featureState,
    state => state.allMaterialtestsLoaded,
);

export const selectCurrentMaterialtest = createSelector(
    featureState,
    state => state.currentMaterialtest
)
export const selectMaterialbyprojectID = createSelector(
    selectAllMaterialtests,
    (materialtest: Materialtest[], id) => {
     
        const mat = materialtest.filter(m => relationId(m.project) == id)
      
        return mat;
    }
)

