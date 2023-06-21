import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Section} from './section';
import * as SectionActions from './section.actions';

export const sectionFeatureKey = 'sections';

export interface SectionState extends EntityState<Section> {
    allSectionsLoaded: boolean;
    currentSection: Section
}

export const adapter: EntityAdapter<Section> = createEntityAdapter<Section>();

export const initialState: SectionState = adapter.getInitialState({
    allSectionsLoaded: false,
    currentSection: null
});

const sectionReducer = createReducer(
    initialState,
    on(SectionActions.addSectionSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentSection: action.data}),
    ),
    on(SectionActions.deleteSectionSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(SectionActions.loadSectionsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(SectionActions.selectCurrentSectionSuccess,
        (state, action) => ({...state, currentSection: action.data}),
    ),
);

export function reducer(state: SectionState | undefined, action: Action) {
    return sectionReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
