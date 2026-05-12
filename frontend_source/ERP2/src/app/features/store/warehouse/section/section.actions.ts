import {createAction, props} from '@ngrx/store';

import {Section} from './section';

export const loadSections = createAction(
    '[Section/API] Load Sections'
);

export const loadSectionsSuccess = createAction(
    '[Section/API] Load Sections Success',
    props<{ data: Section[] }>(),
);

export const addSection = createAction(
    '[Section/API] Add Section',
    props<{ data: Section }>(),
);

export const addSectionSuccess = createAction(
    '[Section/API] Add Section Success',
    props<{ data: Section }>(),
);


export const deleteSection = createAction(
    '[Section/API] Delete Section',
    props<{ data: Section }>(),
);

export const deleteSectionSuccess = createAction(
    '[Section/API] Delete Section Success',
    props<{ id: string}>(),
);

export const selectCurrentSectionSuccess = createAction(
    '[Section/API] Select Current Section',
    props<{ data: Section }>(),
);

