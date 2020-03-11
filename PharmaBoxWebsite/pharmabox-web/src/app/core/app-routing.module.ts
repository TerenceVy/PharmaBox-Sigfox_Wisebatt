import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributorsComponent } from '../distributors/distributors.component';

const routes: Routes = [
	{ path: 'distributors', component: DistributorsComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'distributors' },
	{ path: '**', component: DistributorsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
