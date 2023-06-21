import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DepartmentState, departmentFeatureKey, selectAll} from './department.reducer';

const featureState = createFeatureSelector<DepartmentState>(departmentFeatureKey);

export const selectAllDepartments = createSelector(
    featureState,
    selectAll,
);

export const allDepartmentLoaded = createSelector(
    featureState,
    state => state.allDepartmentsLoaded,
);

export const selectCurrentDepartment = createSelector(
    featureState,
    state => state.currentDepartment
)

