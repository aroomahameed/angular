import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    PaginationModule,
    TooltipModule,
    FormsModule,
  ],
  exports: [TableComponent]
})
export class CustomTablesModule { }
