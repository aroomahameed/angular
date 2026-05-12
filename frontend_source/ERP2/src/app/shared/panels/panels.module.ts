import { CustomFormsModule } from './../forms/forms.module';
import { CustomTablesModule } from './../custom-tables/custom-tables.module';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DialogsModule } from '../dialogs/dialogs.module';
import { CrudPanelComponent } from './crud-panel/crud-panel.component';
import { CrudPanelFormComponent } from './crud-panel/crud-panel-form/crud-panel-form.component';

@NgModule({
  declarations: [PanelComponent, CrudPanelComponent, CrudPanelFormComponent],
  imports: [
    TooltipModule,
    CommonModule,
    DialogsModule,
    CustomFormsModule,
    CustomTablesModule,
    LayoutModule,
  ],
  exports: [PanelComponent, CrudPanelComponent],
  entryComponents: [CrudPanelFormComponent]
})
export class PanelsModule { }
