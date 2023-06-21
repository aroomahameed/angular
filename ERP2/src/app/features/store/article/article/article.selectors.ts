import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Article } from './article';
import {ArticleState, articleFeatureKey, selectAll} from './article.reducer';

const featureState = createFeatureSelector<ArticleState>(articleFeatureKey);

export const selectAllArticles = createSelector(
    featureState,
    selectAll,
);

export const allArticleLoaded = createSelector(
    featureState,
    state => state.allArticlesLoaded,
);

export const selectCurrentArticle = createSelector(
    featureState,
    state => state.currentArticle
)
export const selectByModelsID = createSelector(
    selectAllArticles,
    (articles: Article[], id) => {
        const article = articles.filter(a => a.model.id == id)
        return article;
    }
)
