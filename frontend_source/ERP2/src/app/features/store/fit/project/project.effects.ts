import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ProjectService} from './project.service';
import {
  addProject,
  addProjectSuccess,
  deleteProject, deleteProjectSuccess,
  loadProjects,
  loadProjectsSuccess,
} from './project.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allProjectLoaded} from './project.selectors';


@Injectable()
export class ProjectEffects {

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType(loadProjects),
        withLatestFrom(this.store.select(allProjectLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadProjectsSuccess({data})),
        )),
    ));

    addProject$ = createEffect(() => this.actions$.pipe(
        ofType(addProject),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addProjectSuccess({data})),
        )),
    ));

    deleteProject$ = createEffect(() => this.actions$.pipe(
        ofType(deleteProject),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteProjectSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: ProjectService) {
    }

}
