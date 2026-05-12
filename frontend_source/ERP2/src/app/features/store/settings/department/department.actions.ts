import {createAction, props} from '@ngrx/store';

import {Department} from './department';

export const loadDepartments = createAction(
    '[Department/API] Load Departments'
);

export const loadDepartmentsSuccess = createAction(
    '[Department/API] Load Departments Success',
    props<{ data: Department[] }>(),
);

export const addDepartment = createAction(
    '[Department/API] Add Department',
    props<{ data: Department }>(),
);

export const addDepartmentSuccess = createAction(
    '[Department/API] Add Department Success',
    props<{ data: Department }>(),
);


export const deleteDepartment = createAction(
    '[Department/API] Delete Department',
    props<{ data: Department }>(),
);

export const deleteDepartmentSuccess = createAction(
    '[Department/API] Delete Department Success',
    props<{ id: string}>(),
);

export const selectCurrentDepartmentSuccess = createAction(
    '[Department/API] Select Current Department',
    props<{ data: Department }>(),
);

