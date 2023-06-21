import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Categorytype} from './categorytype';
import * as CategorytypeActions from './categorytype.actions';

export const categorytypeFeatureKey = 'categorytypes';

export interface CategorytypeState extends EntityState<Categorytype> {
    allCategorytypesLoaded: boolean;
    currentCategorytype: Categorytype
}

export const adapter: EntityAdapter<Categorytype> = createEntityAdapter<Categorytype>();

export const initialState: CategorytypeState = adapter.getInitialState({
    allCategorytypesLoaded: false,
    currentCategorytype: null
});

const categorytypeReducer = createReducer(
    initialState,
    on(CategorytypeActions.addCategorytypeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCategorytype: action.data}),
    ),
    on(CategorytypeActions.deleteCategorytypeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CategorytypeActions.loadCategorytypesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CategorytypeActions.selectCurrentCategorytypeSuccess,
        (state, action) => ({...state, currentCategorytype: action.data}),
    ),
);

export function reducer(state: CategorytypeState | undefined, action: Action) {
    return categorytypeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
