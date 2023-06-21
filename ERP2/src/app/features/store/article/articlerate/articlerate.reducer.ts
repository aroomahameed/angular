import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articlerate} from './articlerate';
import * as ArticlerateActions from './articlerate.actions';

export const articlerateFeatureKey = 'articlerates';

export interface ArticlerateState extends EntityState<Articlerate> {
    allArticleratesLoaded: boolean;
    currentArticlerate: Articlerate
}

export const adapter: EntityAdapter<Articlerate> = createEntityAdapter<Articlerate>();

export const initialState: ArticlerateState = adapter.getInitialState({
    allArticleratesLoaded: false,
    currentArticlerate: null
});

const articlerateReducer = createReducer(
    initialState,
    on(ArticlerateActions.addArticlerateSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticlerate: action.data}),
    ),
    on(ArticlerateActions.deleteArticlerateSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlerateActions.loadArticleratesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlerateActions.selectCurrentArticlerateSuccess,
        (state, action) => ({...state, currentArticlerate: action.data}),
    ),
);

export function reducer(state: ArticlerateState | undefined, action: Action) {
    return articlerateReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
