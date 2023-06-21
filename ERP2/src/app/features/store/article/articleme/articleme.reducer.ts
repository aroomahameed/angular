import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articleme} from './articleme';
import * as ArticlemeActions from './articleme.actions';

export const articlemeFeatureKey = 'articlemes';

export interface ArticlemeState extends EntityState<Articleme> {
    allArticlemesLoaded: boolean;
    currentArticleme: Articleme
}

export const adapter: EntityAdapter<Articleme> = createEntityAdapter<Articleme>();

export const initialState: ArticlemeState = adapter.getInitialState({
    allArticlemesLoaded: false,
    currentArticleme: null
});

const articlemeReducer = createReducer(
    initialState,
    on(ArticlemeActions.addArticlemeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticleme: action.data}),
    ),
    on(ArticlemeActions.deleteArticlemeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlemeActions.loadArticlemesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlemeActions.selectCurrentArticlemeSuccess,
        (state, action) => ({...state, currentArticleme: action.data}),
    ),
);

export function reducer(state: ArticlemeState | undefined, action: Action) {
    return articlemeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
