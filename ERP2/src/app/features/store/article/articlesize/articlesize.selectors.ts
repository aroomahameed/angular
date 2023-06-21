import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Articlesize } from './articlesize';
import {ArticlesizeState, articlesizeFeatureKey, selectAll} from './articlesize.reducer';

const featureState = createFeatureSelector<ArticlesizeState>(articlesizeFeatureKey);

export const selectAllArticlesizes = createSelector(
    featureState,
    selectAll,
);

export const allArticlesizeLoaded = createSelector(
    featureState,
    state => state.allArticlesizesLoaded,
);

export const selectCurrentArticlesize = createSelector(
    featureState,
    state => state.currentArticlesize
)
export const selectByArticleID = createSelector(
    selectAllArticlesizes,
 
    (articlessizes: Articlesize[], id) => {
       
        const size = articlessizes.filter(s => s.article.id == id)
      
        return size;
    }
)
export const selectBySizeID = createSelector(
    selectAllArticlesizes,
 
    (articlessizes: Articlesize[], id) => {
       
        const size = articlessizes.filter(s => s.id == id)
      
        return size;
    }
)

