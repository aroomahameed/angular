import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {DepartmentService} from './department.service';
import {
  addDepartment,
  addDepartmentSuccess,
  deleteDepartment, deleteDepartmentSuccess,
  loadDepartments,
  loadDepartmentsSuccess,
} from './department.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allDepartmentLoaded} from './department.selectors';


@Injectable()
export class DepartmentEffects {

    loadDepartments$ = createEffect(() => this.actions$.pipe(
        ofType(loadDepartments),
        withLatestFrom(this.store.select(allDepartmentLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadDepartmentsSuccess({data})),
        )),
    ));

    addDepartment$ = createEffect(() => this.actions$.pipe(
        ofType(addDepartment),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addDepartmentSuccess({data})),
        )),
    ));

    deleteDepartment$ = createEffect(() => this.actions$.pipe(
        ofType(deleteDepartment),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteDepartmentSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: DepartmentService) {
    }

}
