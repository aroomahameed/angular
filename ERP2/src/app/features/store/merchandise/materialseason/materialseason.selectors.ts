import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Materialseason } from './materialseason';
import {MaterialseasonState, materialseasonFeatureKey, selectAll} from './materialseason.reducer';

const featureState = createFeatureSelector<MaterialseasonState>(materialseasonFeatureKey);

export const selectAllMaterialseasons = createSelector(
    featureState,
    selectAll,
);

export const allMaterialseasonLoaded = createSelector(
    featureState,
    state => state.allMaterialseasonsLoaded,
);

export const selectCurrentMaterialseason = createSelector(
    featureState,
    state => state.currentMaterialseason
)
export const selectseasonBymaterialID = createSelector(
    selectAllMaterialseasons,
    (material: Materialseason[], id) => {
        
        const mat = material.filter(m => m.material.id == id)
      
        return mat;
    }
)
