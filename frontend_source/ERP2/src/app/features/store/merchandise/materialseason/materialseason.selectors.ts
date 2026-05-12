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
        const materialId = id && id.id ? id.id : id;
        const mat = material.filter(m => {
            const rowMaterialId = m.material && m.material.id ? m.material.id : m.material;
            return rowMaterialId == materialId;
        })
      
        return mat;
    }
)
