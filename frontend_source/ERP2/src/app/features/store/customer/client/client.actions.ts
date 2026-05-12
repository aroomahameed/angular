import {createAction, props} from '@ngrx/store';

import {Client} from './client';

export const loadClients = createAction(
    '[Client/API] Load Clients'
);

export const loadClientsSuccess = createAction(
    '[Client/API] Load Clients Success',
    props<{ data: Client[] }>(),
);

export const addClient = createAction(
    '[Client/API] Add Client',
    props<{ data: Client }>(),
);

export const addClientSuccess = createAction(
    '[Client/API] Add Client Success',
    props<{ data: Client }>(),
);


export const deleteClient = createAction(
    '[Client/API] Delete Client',
    props<{ data: Client }>(),
);

export const deleteClientSuccess = createAction(
    '[Client/API] Delete Client Success',
    props<{ id: string}>(),
);

export const selectCurrentClientSuccess = createAction(
    '[Client/API] Select Current Client',
    props<{ data: Client }>(),
);

