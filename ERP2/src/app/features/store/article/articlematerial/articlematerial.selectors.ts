import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Articlematerial } from './articlematerial';
import {ArticlematerialState, articlematerialFeatureKey, selectAll} from './articlematerial.reducer';

const featureState = createFeatureSelector<ArticlematerialState>(articlematerialFeatureKey);

export const selectAllArticlematerials = createSelector(
    featureState,
    selectAll,
);

export const allArticlematerialLoaded = createSelector(
    featureState,
    state => state.allArticlematerialsLoaded,
);

export const selectCurrentArticlematerial = createSelector(
    featureState,
    state => state.currentArticlematerial
)
export const selectByArticleMaterialID = createSelector(
    selectAllArticlematerials,
    (articlessizes: Articlematerial[], id) => {
        const size = articlessizes.filter(s => s.material.id == id)
        return size;
    }
)
export const selectByMaterialbyPrdID = createSelector(
    selectAllArticlematerials,
    (articleMat: Articlematerial[], id) => {
       
        const mat = articleMat.filter(s => s.production_line.id == id)
        return mat;
    }
)

