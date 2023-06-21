import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionsPageComponent } from './accordions-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [AccordionsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AccordionsPageComponent, data: { breadcrumbs: ['UI Components', 'Accordions'] }}
    ]),
    UtilsModule,
    PanelsModule,
    AlertModule,
    AccordionModule
  ]
})
export class AccordionsPageModule { }
