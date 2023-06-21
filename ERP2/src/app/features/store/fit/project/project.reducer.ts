import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Project} from './project';
import * as ProjectActions from './project.actions';

export const projectFeatureKey = 'projects';

export interface ProjectState extends EntityState<Project> {
    allProjectsLoaded: boolean;
    currentProject: Project
}


export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialState: ProjectState = adapter.getInitialState({
    allProjectsLoaded: false,
    currentProject: null
});

const projectReducer = createReducer(
    initialState,
    on(ProjectActions.addProjectSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentProject: action.data}),
    ),
    on(ProjectActions.deleteProjectSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ProjectActions.loadProjectsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ProjectActions.selectCurrentProjectSuccess,
        (state, action) => ({...state, currentProject: action.data}),
    ),
);


export function reducer(state: ProjectState | undefined, action: Action) {
    return projectReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();


