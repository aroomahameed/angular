import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Department} from './department';
import * as DepartmentActions from './department.actions';

export const departmentFeatureKey = 'departments';

export interface DepartmentState extends EntityState<Department> {
    allDepartmentsLoaded: boolean;
    currentDepartment: Department
}

export const adapter: EntityAdapter<Department> = createEntityAdapter<Department>();

export const initialState: DepartmentState = adapter.getInitialState({
    allDepartmentsLoaded: false,
    currentDepartment: null
});

const departmentReducer = createReducer(
    initialState,
    on(DepartmentActions.addDepartmentSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentDepartment: action.data}),
    ),
    on(DepartmentActions.deleteDepartmentSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(DepartmentActions.loadDepartmentsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(DepartmentActions.selectCurrentDepartmentSuccess,
        (state, action) => ({...state, currentDepartment: action.data}),
    ),
);

export function reducer(state: DepartmentState | undefined, action: Action) {
    return departmentReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
