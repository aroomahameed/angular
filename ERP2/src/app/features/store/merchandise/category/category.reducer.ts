import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Category} from './category';
import * as CategoryActions from './category.actions';

export const categoryFeatureKey = 'categories';

export interface CategoryState extends EntityState<Category> {
    allCategoriesLoaded: boolean;
    currentCategory: Category
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
    allCategoriesLoaded: false,
    currentCategory: null
});

const categoryReducer = createReducer(
    initialState,
    on(CategoryActions.addCategorySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCategory: action.data}),
    ),
    on(CategoryActions.deleteCategorySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CategoryActions.loadCategoriesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CategoryActions.selectCurrentCategorySuccess,
        (state, action) => ({...state, currentCategory: action.data}),
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
