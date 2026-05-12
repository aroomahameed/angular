import { loadArticlematerialsubs, selectAllArticlematerialsubs, Articlematerialsub ,deleteArticlematerialsub} from './../../store/article/articlematerialsub';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {SubFormsComponent} from './sub-forms/sub-forms.component'

@Component({
  selector: 'smart-articlematerialsubs',
  templateUrl: './articlematerialsubs.component.html',
  styles: []
})
export class ArticlematerialsubsComponent implements OnInit {

  articlematerialsub: Observable<Articlematerialsub[]>

  columns: TableData[] = [
  
    { title: 'Serial No',  value: 'serial_no', sortable:true },

    {title:'Status', value:'status', bool:true},
  ]
constructor(private store: Store<any>,private modalService:BsModalService) { }

  ngOnInit() {

    this.store.dispatch(loadArticlematerialsubs())
    this.articlematerialsub = this.store.select(selectAllArticlematerialsubs)
    console.log(this.articlematerialsub)
  }
  onCreate(){
    const initialState = { 
      title: 'Add',
          };
    this.modalService.show(SubFormsComponent, { initialState, class: 'modal-lg' });
  }
  onEdit(material: Articlematerialsub) {
    const initialState = { 
      material, 
      title: 'Update',
    
     };
    this.modalService.show(SubFormsComponent, { initialState, class: 'modal-lg' });
   
  }
  ondelete(id:Articlematerialsub){
    if(confirm("Are you sure to want to delete this row")){
      this.store.dispatch(deleteArticlematerialsub({data: id}))
    //  this.toaster.success('Material has been deleted successfully');
    }

  }
}
