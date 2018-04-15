import { NgModule } from "@angular/core";
import { MatToolbarModule, MatInputModule, MatIconModule, MatPrefix, MatSuffix, MatButtonModule, MatCardModule } from "@angular/material"

@NgModule({
	imports: [
		MatToolbarModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule
	],
	exports: [
		MatToolbarModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule
	]
})
export class SharedModule {}