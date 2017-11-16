import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamiclinkComponent } from './dynamiclink/dynamiclink.component';

const routes: Routes = [
  { path: '', component: DynamiclinkComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forChild(routes);