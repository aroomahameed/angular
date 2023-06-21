import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Articlematerial} from './articlematerial';
import * as ArticlematerialActions from './articlematerial.actions';

export const articlematerialFeatureKey = 'articlematerials';

export interface ArticlematerialState extends EntityState<Articlematerial> {
    allArticlematerialsLoaded: boolean;
    currentArticlematerial: Articlematerial
}

export const adapter: EntityAdapter<Articlematerial> = createEntityAdapter<Articlematerial>();

export const initialState: ArticlematerialState = adapter.getInitialState({
    allArticlematerialsLoaded: false,
    currentArticlematerial: null
});

const articlematerialReducer = createReducer(
    initialState,
    on(ArticlematerialActions.addArticlematerialSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentArticlematerial: action.data}),
    ),
    on(ArticlematerialActions.deleteArticlematerialSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ArticlematerialActions.loadArticlematerialsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ArticlematerialActions.selectCurrentArticlematerialSuccess,
        (state, action) => ({...state, currentArticlematerial: action.data}),
    ),
);

export function reducer(state: ArticlematerialState | undefined, action: Action) {
    return articlematerialReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
