import {createAction, props} from '@ngrx/store';

import {Season} from './season';

export const loadSeasons = createAction(
    '[Season/API] Load Seasons'
);

export const loadSeasonsSuccess = createAction(
    '[Season/API] Load Seasons Success',
    props<{ data: Season[] }>(),
);

export const addSeason = createAction(
    '[Season/API] Add Season',
    props<{ data: Season }>(),
);

export const addSeasonSuccess = createAction(
    '[Season/API] Add Season Success',
    props<{ data: Season }>(),
);


export const deleteSeason = createAction(
    '[Season/API] Delete Season',
    props<{ data: Season }>(),
);

export const deleteSeasonSuccess = createAction(
    '[Season/API] Delete Season Success',
    props<{ id: string}>(),
);

export const selectCurrentSeasonSuccess = createAction(
    '[Season/API] Select Current Season',
    props<{ data: Season }>(),
);

