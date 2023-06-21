import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Subcategory} from './subcategory';
import * as SubcategoryActions from './subcategory.actions';

export const subcategoryFeatureKey = 'subcategories';

export interface SubcategoryState extends EntityState<Subcategory> {
    allSubcategoriesLoaded: boolean;
    currentSubcategory: Subcategory
}

export const adapter: EntityAdapter<Subcategory> = createEntityAdapter<Subcategory>();

export const initialState: SubcategoryState = adapter.getInitialState({
    allSubcategoriesLoaded: false,
    currentSubcategory: null
});

const subcategoryReducer = createReducer(
    initialState,
    on(SubcategoryActions.addSubcategorySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentSubcategory: action.data}),
    ),
    on(SubcategoryActions.deleteSubcategorySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(SubcategoryActions.loadSubcategoriesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(SubcategoryActions.selectCurrentSubcategorySuccess,
        (state, action) => ({...state, currentSubcategory: action.data}),
    ),
);

export function reducer(state: SubcategoryState | undefined, action: Action) {
    return subcategoryReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
