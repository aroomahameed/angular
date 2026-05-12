import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Article } from './article';
import {ArticleState, articleFeatureKey, selectAll} from './article.reducer';

const featureState = createFeatureSelector<ArticleState>(articleFeatureKey);
const relationId = (value: any) => value && value.id ? value.id : value;

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
        const article = articles.filter(a => relationId(a.model) == id)
        return article;
    }
)
