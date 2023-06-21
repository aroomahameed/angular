import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Category} from './category.model';
import * as CategoryActions from '../category/category.actions';

export const categoryFeatureKey = 'categories';

export interface CategoryState extends EntityState<Category> {
    allLoaded: boolean;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
    allLoaded: false,
});

const categoryReducer = createReducer(
    initialState,
    on(CategoryActions.loadCategoriesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
);

export function reducer(state: CategoryState | undefined, action: Action) {
    return categoryReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
