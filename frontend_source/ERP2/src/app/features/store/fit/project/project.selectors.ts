import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProjectState, projectFeatureKey, selectAll} from './project.reducer';

const featureState = createFeatureSelector<ProjectState>(projectFeatureKey);

export const selectAllProjects = createSelector(
    featureState,
    selectAll,
);

export const allProjectLoaded = createSelector(
    featureState,
    state => state.allProjectsLoaded,
);

export const selectCurrentProject = createSelector(
    featureState,
    state => {
        return state.currentProject
    }
)



