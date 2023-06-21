import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articlematerialsub} from './articlematerialsub';
import * as ArticlematerialsubActions from './articlematerialsub.actions';

export const articlematerialsubFeatureKey = 'articlematerialsubs';

export interface ArticlematerialsubState extends EntityState<Articlematerialsub> {
    allArticlematerialsubsLoaded: boolean;
    currentArticlematerialsub: Articlematerialsub
}

export const adapter: EntityAdapter<Articlematerialsub> = createEntityAdapter<Articlematerialsub>();

export const initialState: ArticlematerialsubState = adapter.getInitialState({
    allArticlematerialsubsLoaded: false,
    currentArticlematerialsub: null
});

const articlematerialsubReducer = createReducer(
    initialState,
    on(ArticlematerialsubActions.addArticlematerialsubSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticlematerialsub: action.data}),
    ),
    on(ArticlematerialsubActions.deleteArticlematerialsubSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlematerialsubActions.loadArticlematerialsubsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlematerialsubActions.selectCurrentArticlematerialsubSuccess,
        (state, action) => ({...state, currentArticlematerialsub: action.data}),
    ),
);

export function reducer(state: ArticlematerialsubState | undefined, action: Action) {
    return articlematerialsubReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
