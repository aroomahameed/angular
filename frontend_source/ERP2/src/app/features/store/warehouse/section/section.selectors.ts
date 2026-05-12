import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SectionState, sectionFeatureKey, selectAll} from './section.reducer';

const featureState = createFeatureSelector<SectionState>(sectionFeatureKey);

export const selectAllSections = createSelector(
    featureState,
    selectAll,
);

export const allSectionLoaded = createSelector(
    featureState,
    state => state.allSectionsLoaded,
);

export const selectCurrentSection = createSelector(
    featureState,
    state => state.currentSection
)

