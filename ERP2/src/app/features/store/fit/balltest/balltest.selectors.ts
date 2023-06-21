import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Balltest } from './balltest';
import {BalltestState, balltestFeatureKey, selectAll} from './balltest.reducer';

const featureState = createFeatureSelector<BalltestState>(balltestFeatureKey);

export const selectAllBalltests = createSelector(
    featureState,
    selectAll,
);

export const allBalltestLoaded = createSelector(
    featureState,
    state => state.allBalltestsLoaded,
);

export const selectCurrentBalltest = createSelector(
    featureState,
    state => state.currentBalltest
)
export const selectAllBallbyprojectID = createSelector(
    selectAllBalltests,
    (balltest: Balltest[], id) => {
        
        const ball = balltest.filter(m => m.project == id)
      
        return ball;
    }
)

