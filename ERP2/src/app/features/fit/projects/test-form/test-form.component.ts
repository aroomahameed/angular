
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project, addProject, selectCurrentProject, selectCurrentProjectSuccess } from '../../../store/fit/project';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MaterialtestsComponent } from '../../materialtests/materialtests.component';
import { BalltestsComponent } from '../../balltests/balltests.component';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { selectMaterialbyprojectID, loadMaterialtests, deleteMaterialtest, Materialtest } from '../../../store/fit/materialtest';
import { selectAllBallbyprojectID, loadBalltests, deleteBalltest, Balltest } from '../../../store/fit/balltest';
@Component({
  selector: 'smart-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  project: Project
  currentProject: Observable<Project>
  projectId;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  viewStatus: false;
  public error: any;
  materialtest: Observable<Materialtest[]>;
  balltest: Observable<Balltest[]>;
  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: BsModalService) { }
  columns: TableData[] = [
    { title: 'Version', value: 'version', sortable: true },
    { title: 'Lab No', value: 'lab_no', sortable: true },
    { title: 'Material Name', value: ['material_name', 'name'], sortable: true },
    { title: 'Test Date', value: 'test_date', date: true, sortable: true },
    { title: 'Test', value: ['test', 'name'], sortable: true },
    { title: 'Status', value: 'status', bool: true, sortable: true },
  ]
  columns2: TableData[] = [
    { title: 'Version', value: 'version', sortable: true },
    { title: 'Lab No', value: 'lab_no', sortable: true },
    { title: 'Model Name', value: ['model_name', 'name'], sortable: true },
    { title: 'Test Date', value: 'test_date', date: true, sortable: true },
    { title: 'Test', value: ['test', 'name'], sortable: true },
    { title: 'Status', value: 'status', bool: true, sortable: true },
  ]
  ngOnInit() {
   
    this.buildForm();

    if (this.project) {
      this.store.dispatch(selectCurrentProjectSuccess({ data: this.project }))
      this.currentProject = this.store.select(selectCurrentProject);
      this.currentProject.subscribe(data => {
        if (data)
          this.projectId = data.id;
      })
    }
    this.store.dispatch(loadMaterialtests());
    this.materialtest = this.store.select(selectMaterialbyprojectID, this.projectId)
    this.store.dispatch(loadBalltests());
    this.balltest = this.store.select(selectAllBallbyprojectID, this.projectId)



  }

  // convenience getter for easy access to form fields
  get f() { return this.fg.controls; }


  private buildForm() {
    this.fg = this.fb.group({
      id: [this.project ? this.project.id : null],
      name: [this.project ? this.project.name : '', Validators.required],
      start_date: [this.project ? this.project.start_date : '', Validators.required],
      end_date: [this.project ? this.project.end_date : '', Validators.required],
      lab_no: [this.project ? this.project.lab_no : '', Validators.required],
      remarks: [this.project ? this.project.remarks : '', Validators.required],
      status: [this.project ? this.project.status : '', Validators.required],


    });
  }


  onSubmit(event) {

    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addProject({ data: this.fg.value }));
    this.store.select(selectCurrentProject).subscribe(data => {

      if (data !== null) {
        this.project = data;
        this.projectId = data.id;
        this.materialtest = this.store.select(selectMaterialbyprojectID, data.id)
        this.balltest = this.store.select(selectAllBallbyprojectID, data.id)
      }
     
    })
    console.log( this.projectId)
  }
  onshowMaterial(materialtest: Materialtest) {
    const initialState = {
      materialtest,
      title: '',
      projectId: this.projectId,
      project: this.project,
      viewStatus: true,

    };
    this.modalService.show(MaterialtestsComponent, { initialState, class: 'modal-lg' });


  }

  oncreatematerial() {
    const initialState = {
      title: 'Add',
      projectId: this.projectId,
      project: this.project,
      viewStatus: false,
    };
    this.modalService.show(MaterialtestsComponent, { initialState, class: 'modal-lg' });
  }
  onEditmaterial(materialtest: Materialtest) {
    const initialState = {
      materialtest,
      title: 'Update',
      projectId: this.projectId,
      project: this.project,
      viewStatus: false,

    };
    this.modalService.show(MaterialtestsComponent, { initialState, class: 'modal-lg' });
  }
  ondeleteMaterial(id: Materialtest) {

    if (confirm("Are you sure to want to delete this row")) {
      this.store.dispatch(deleteMaterialtest({ data: id }))

    }
  }
  onshowball(balltest: Balltest) {
    const initialState = {
      balltest,
      title: '',
      projectId: this.projectId,
      viewStatus: true,

    };
    this.modalService.show(BalltestsComponent, { initialState, class: 'modal-lg' });
  }
  oncreateball() {
    const initialState = {
      title: 'Add',
      projectId: this.projectId,
      viewStatus: false,
    };
    this.modalService.show(BalltestsComponent, { initialState, class: 'modal-lg' });
  }
  onEditball(balltest: Balltest) {
    const initialState = {
      balltest,
      title: 'Update',
      projectId: this.projectId,
      viewStatus: false,

    };
    this.modalService.show(BalltestsComponent, { initialState, class: 'modal-lg' });
  }
  ondeleteball(id: Balltest) {

    if (confirm("Are you sure to want to delete this row")) {
      this.store.dispatch(deleteBalltest({ data: id }))

    }
  }



}
