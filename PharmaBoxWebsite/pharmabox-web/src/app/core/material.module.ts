import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatInputModule,
	MatTableModule,
	MatToolbarModule,
	MatMenuModule,
	MatIconModule,
	MatStepperModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatExpansionModule,
	MatListModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatDialogModule,
		MatTableModule,
		MatMenuModule,
		MatIconModule,
		MatStepperModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatExpansionModule,
		MatListModule
	],
	exports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatDialogModule,
		MatTableModule,
		MatMenuModule,
		MatIconModule,
		MatStepperModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatExpansionModule,
		MatListModule
	]
})
export class MaterialModule {}
