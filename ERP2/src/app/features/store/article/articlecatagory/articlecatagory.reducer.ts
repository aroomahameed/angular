import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articlecatagory} from './articlecatagory';
import * as ArticlecatagoryActions from './articlecatagory.actions';

export const articlecatagoryFeatureKey = 'articlecatagorys';

export interface ArticlecatagoryState extends EntityState<Articlecatagory> {
    allArticlecatagorysLoaded: boolean;
    currentArticlecatagory: Articlecatagory
}

export const adapter: EntityAdapter<Articlecatagory> = createEntityAdapter<Articlecatagory>();

export const initialState: ArticlecatagoryState = adapter.getInitialState({
    allArticlecatagorysLoaded: false,
    currentArticlecatagory: null
});

const articlecatagoryReducer = createReducer(
    initialState,
    on(ArticlecatagoryActions.addArticlecatagorySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticlecatagory: action.data}),
    ),
    on(ArticlecatagoryActions.deleteArticlecatagorySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlecatagoryActions.loadArticlecatagorysSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlecatagoryActions.selectCurrentArticlecatagorySuccess,
        (state, action) => ({...state, currentArticlecatagory: action.data}),
    ),
);

export function reducer(state: ArticlecatagoryState | undefined, action: Action) {
    return articlecatagoryReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
