import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Material } from './material';
import {MaterialState, materialFeatureKey, selectAll} from './material.reducer';

const featureState = createFeatureSelector<MaterialState>(materialFeatureKey);

export const selectAllMaterials = createSelector(
    featureState,
    selectAll,
);

export const allMaterialLoaded = createSelector(
    featureState,
    state => state.allMaterialsLoaded,
);

export const selectCurrentMaterial = createSelector(
    featureState,
    state => state.currentMaterial
)

export const selecetmaterialbyid = createSelector(
    selectAllMaterials,
    (materials: Material[], id) => {
        const mat = materials.filter(a => a.id == id)
      
        return mat;

    }
)