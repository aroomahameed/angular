import { Store, createAction, props, MemoizedSelector } from '@ngrx/store';
import { RowData } from './../../../forms/form/form.component';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'smart-crud-panel-form',
  templateUrl: './crud-panel-form.component.html',
  styleUrls: ['./crud-panel-form.component.css']
})
export class CrudPanelFormComponent implements OnInit {

  @Input() form: RowData[] = []
  @Input() title = 'Title'
  action: string;
  current: MemoizedSelector<any,any>;
  selected;
  selectCurrentAction: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.selected = this.store.select(this.current)

  }

  onSubmit(event) {
    const act = createAction(
      this.action,
      props<{ data: any }>()
    );
    
    // const sub = this.selected.subscribe(selectedd => {
    //   if(selectedd){
    //     event.id = selectedd.id
    //   }
      
    // })

    // sub.unsubscribe()
    this.store.dispatch(act({ data: event }))
    this.selected = this.store.select(this.current)
  }

  onClear(event){
    const action = createAction(
      this.selectCurrentAction,
      props<{data: any}>()
    );
    this.store.dispatch(action({data: null}))
  }

}
