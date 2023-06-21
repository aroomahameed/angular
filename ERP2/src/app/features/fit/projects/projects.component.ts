import { selectCurrentProject, selectAllProjects, Project, loadProjects, deleteProject, selectCurrentProjectSuccess } from './../../store/fit/project';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TestFormComponent } from './test-form/test-form.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';


import { Store } from '@ngrx/store';
@Component({
  selector: 'smart-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  columns: TableData[] = [
    { title: 'Name', value: 'name', sortable: true },
    { title: 'Lab No', value: 'lab_no', sortable: true },
    { title: 'Start Date', value: 'start_date', sortable: true, date: true },
    { title: 'End Date', value: 'end_date', sortable: true, date: true },
    { title: 'Status', value: 'status', bool: true, sortable: true },
  ]
  project: Observable<Project[]>;
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  constructor(private modalService: BsModalService, private store: Store<any>, private dialogService: DialogsService) { }
  ngOnInit() {
    this.store.dispatch(loadProjects());
    this.project = this.store.select(selectAllProjects);
  }
  onshow(project: Project) {

    const initialState = {
      project,
      title: '',
      viewStatus: true,
    };
    this.modalService.show(TestFormComponent, { initialState, class: 'modal-xl' });

  }

  onCreate() {
    this.store.dispatch(selectCurrentProjectSuccess({ data: null }));
    const initialState = {
      title: 'Add',
      viewStatus: false,
    };
    this.modalService.show(TestFormComponent, { initialState, class: 'modal-xl' });

  }

  onEdit(project: Project) {
    const initialState = {
      project,
      title: 'Update',
      viewStatus: false,

    };
    this.modalService.show(TestFormComponent, { initialState, class: 'modal-xl' });
  }

  async ondelete(id: Project) {
    const result = await this.dialogService.confirm({
      title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage} <span class='fw-500'>&nbsp;${[this.deleteItemName]}&nbsp;</span>?`,
      message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
      buttons: {
        confirm: {
          label: 'Yes',
          className: 'btn-danger shadow-0'
        },
        cancel: {
          label: 'No',
          className: 'btn-default'
        }
      }
    }).toPromise();

    if (result) {
      this.store.dispatch(deleteProject({ data: id }))

    }

  }
}
