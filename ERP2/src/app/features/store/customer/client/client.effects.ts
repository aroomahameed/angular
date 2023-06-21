import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ClientService} from './client.service';
import {
  addClient,
  addClientSuccess,
  deleteClient, deleteClientSuccess,
  loadClients,
  loadClientsSuccess,
} from './client.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allClientLoaded} from './client.selectors';


@Injectable()
export class ClientEffects {

    loadClients$ = createEffect(() => this.actions$.pipe(
        ofType(loadClients),
        withLatestFrom(this.store.select(allClientLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadClientsSuccess({data})),
        )),
    ));

    addClient$ = createEffect(() => this.actions$.pipe(
        ofType(addClient),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addClientSuccess({data})),
        )),
    ));

    deleteClient$ = createEffect(() => this.actions$.pipe(
        ofType(deleteClient),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteClientSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ClientService) {
    }

}
