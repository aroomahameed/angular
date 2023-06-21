import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articleqca} from './articleqca';
import * as ArticleqcaActions from './articleqca.actions';

export const articleqcaFeatureKey = 'articleqcas';

export interface ArticleqcaState extends EntityState<Articleqca> {
    allArticleqcasLoaded: boolean;
    currentArticleqca: Articleqca
}

export const adapter: EntityAdapter<Articleqca> = createEntityAdapter<Articleqca>();

export const initialState: ArticleqcaState = adapter.getInitialState({
    allArticleqcasLoaded: false,
    currentArticleqca: null
});

const articleqcaReducer = createReducer(
    initialState,
    on(ArticleqcaActions.addArticleqcaSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticleqca: action.data}),
    ),
    on(ArticleqcaActions.deleteArticleqcaSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticleqcaActions.loadArticleqcasSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticleqcaActions.selectCurrentArticleqcaSuccess,
        (state, action) => ({...state, currentArticleqca: action.data}),
    ),
);

export function reducer(state: ArticleqcaState | undefined, action: Action) {
    return articleqcaReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
