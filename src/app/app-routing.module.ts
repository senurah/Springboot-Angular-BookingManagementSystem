import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Add a dummy route
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) } // Example route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
