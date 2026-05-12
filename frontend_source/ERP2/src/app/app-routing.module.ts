import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AuthComponent } from './shared/layout/auth/auth.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthComponent },

  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'intel', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
      { path: 'settings', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'merchandise', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/merchandise/merchandise.module').then(m => m.MerchandiseModule) },
      { path: 'purchaseorder', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/purchaseorder/purchaseorder.module').then(m => m.PurchaseorderModule) },
      { path: 'warehouse', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/warehouse/warehouse.module').then(m => m.WarehouseModule) },
      { path: 'customer', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'article', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/article/article.module').then(m => m.ArticleModule) },
      { path: 'fit', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/fit/fit.module').then(m => m.FitModule) },
      { path: 'lab', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/lab/lab.module').then(m => m.LabModule) },
      { path: 'productionorder', canActivate: [AuthGuard], data: { roles: ['user', 'admin', 'super_admin'] }, loadChildren: () => import('./features/productionorder/productionorder.module').then(m => m.ProductionorderModule) },
      
      
    ]
  },
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
