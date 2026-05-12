import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Account} from './account.model';
import {AccountState, accountFeatureKey, selectAll} from './account.reducer';

const featureState = createFeatureSelector<AccountState>(accountFeatureKey);

export const selectAllAccounts = createSelector(
    featureState,
    selectAll,
);

export const allAccountLoaded = createSelector(
    featureState,
    state => state.allLoaded,
);
export const selectAllExceptCashInHand = createSelector(
    selectAllAccounts,
    heads => heads.filter(h => parseInt(h.id) !== 3)
);
