import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Article} from './article';
import * as ArticleActions from './article.actions';

export const articleFeatureKey = 'articles';

export interface ArticleState extends EntityState<Article> {
    allArticlesLoaded: boolean;
    currentArticle: Article
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: ArticleState = adapter.getInitialState({
    allArticlesLoaded: false,
    currentArticle: null
});

const articleReducer = createReducer(
    initialState,
    on(ArticleActions.addArticleSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticle: action.data}),
    ),
    on(ArticleActions.deleteArticleSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticleActions.loadArticlesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticleActions.selectCurrentArticleSuccess,
        (state, action) => ({...state, currentArticle: action.data}),
    ),
);

export function reducer(state: ArticleState | undefined, action: Action) {
    return articleReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
