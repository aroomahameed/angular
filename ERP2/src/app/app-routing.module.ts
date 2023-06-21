import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'intel', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
      { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'merchandise', loadChildren: () => import('./features/merchandise/merchandise.module').then(m => m.MerchandiseModule) },
      { path: 'purchaseorder', loadChildren: () => import('./features/purchaseorder/purchaseorder.module').then(m => m.PurchaseorderModule) },
      { path: 'warehouse', loadChildren: () => import('./features/warehouse/warehouse.module').then(m => m.WarehouseModule) },
      { path: 'customer', loadChildren: () => import('./features/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'article', loadChildren: () => import('./features/article/article.module').then(m => m.ArticleModule) },
      { path: 'fit', loadChildren: () => import('./features/fit/fit.module').then(m => m.FitModule) },
      { path: 'lab', loadChildren: () => import('./features/lab/lab.module').then(m => m.LabModule) },
      { path: 'productionorder', loadChildren: () => import('./features/productionorder/productionorder.module').then(m => m.ProductionorderModule) },
      
      
    ]
  },
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
