import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
//component imports
import { WarehousesComponent } from './warehouses/warehouses.component'
import { RacksComponent } from './racks/racks.component'
import { SectionsComponent } from './sections/sections.component'
import { LinesComponent } from './lines/lines.component'
//store imports
import * as warehouse from 'src/app/features/store/warehouse/warehouse'
import * as rack from 'src/app/features/store/warehouse/rack'
import * as section from 'src/app/features/store/warehouse/section'
import * as line from 'src/app/features/store/warehouse/line'
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [LinesComponent, SectionsComponent, RacksComponent, WarehousesComponent],
  imports: [
    CommonModule,
    SharedModule,
    //store for feature
    StoreModule.forFeature(warehouse.warehouseFeatureKey, warehouse.reducer),
    StoreModule.forFeature(rack.rackFeatureKey, rack.reducer),
    StoreModule.forFeature(section.sectionFeatureKey, section.reducer),
    StoreModule.forFeature(line.lineFeatureKey, line.reducer),
    EffectsModule.forFeature([line.LineEffects, section.SectionEffects, rack.RackEffects, warehouse.WarehouseEffects]),
    RouterModule.forChild([
      {path: '', redirectTo:'lines', pathMatch: 'full'},
      {path: 'warehouses', component: WarehousesComponent},
      {path: 'racks', component: RacksComponent},
      {path: 'sections', component: SectionsComponent},
      {path: 'lines', component: LinesComponent},
    ])
  ]
})
export class WarehouseModule { }
