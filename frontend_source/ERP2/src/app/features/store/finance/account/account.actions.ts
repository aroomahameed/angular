import {createAction, props} from '@ngrx/store';

import {Account} from './account.model';

export const loadAccounts = createAction(
    '[Account/API] Load Accounts'
);

export const loadAccountsSuccess = createAction(
    '[Account/API] Load Accounts Success',
    props<{ data: Account[] }>(),
);

export const addAccount = createAction(
    '[Account/API] Add Account',
    props<{ data: Account }>(),
);

export const addAccountSuccess = createAction(
    '[Account/API] Add Account Success',
    props<{ data: Account }>(),
);


export const deleteAccount = createAction(
    '[Account/API] Delete Account',
    props<{ id: string }>(),
);

export const deleteAccountSuccess = createAction(
    '[Account/API] Delete Account Success',
    props<{ id: string }>(),
);

