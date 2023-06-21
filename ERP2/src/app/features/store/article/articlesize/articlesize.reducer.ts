import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articlesize} from './articlesize';
import * as ArticlesizeActions from './articlesize.actions';

export const articlesizeFeatureKey = 'articlesizes';

export interface ArticlesizeState extends EntityState<Articlesize> {
    allArticlesizesLoaded: boolean;
    currentArticlesize: Articlesize
}

export const adapter: EntityAdapter<Articlesize> = createEntityAdapter<Articlesize>();

export const initialState: ArticlesizeState = adapter.getInitialState({
    allArticlesizesLoaded: false,
    currentArticlesize: null
});

const articlesizeReducer = createReducer(
    initialState,
    on(ArticlesizeActions.addArticlesizeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticlesize: action.data}),
    ),
    on(ArticlesizeActions.deleteArticlesizeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlesizeActions.loadArticlesizesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlesizeActions.selectCurrentArticlesizeSuccess,
        (state, action) => ({...state, currentArticlesize: action.data}),
    ),
);

export function reducer(state: ArticlesizeState | undefined, action: Action) {
    return articlesizeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
