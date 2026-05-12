import {createAction, props} from '@ngrx/store';

import {Project} from './project';

export const loadProjects = createAction(
    '[Project/API] Load Projects'
);

export const loadProjectsSuccess = createAction(
    '[Project/API] Load Projects Success',
    props<{ data: Project[] }>(),
);

export const addProject = createAction(
    '[Project/API] Add Project',
    props<{ data: Project }>(),
);

export const addProjectSuccess = createAction(
    '[Project/API] Add Project Success',
    props<{ data: Project }>(),
);


export const deleteProject = createAction(
    '[Project/API] Delete Project',
    props<{ data: Project }>(),
);

export const deleteProjectSuccess = createAction(
    '[Project/API] Delete Project Success',
    props<{ id: string}>(),
);

export const selectCurrentProjectSuccess = createAction(
    '[Project/API] Select Current Project',
    props<{ data: Project }>(),
);

