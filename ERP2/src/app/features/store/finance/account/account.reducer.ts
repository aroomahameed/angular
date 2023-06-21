import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Account} from './account.model';
import * as AccountActions from './account.actions';

export const accountFeatureKey = 'accounts';

export interface AccountState extends EntityState<Account> {
    allLoaded: boolean;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>();

export const initialState: AccountState = adapter.getInitialState({
    allLoaded: false,
});

const accountReducer = createReducer(
    initialState,
    on(AccountActions.addAccountSuccess,
        (state, action) => adapter.upsertOne(action.data, state),
    ),
    on(AccountActions.deleteAccountSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(AccountActions.loadAccountsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
);

export function reducer(state: AccountState | undefined, action: Action) {
    return accountReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
