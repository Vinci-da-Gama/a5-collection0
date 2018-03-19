import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SuiModule } from 'ng2-semantic-ui';
import { SidebarOutletComponent } from './sidebar-outlet/sidebar-outlet.component';

@NgModule({
	imports: [CommonModule, RouterModule, SuiModule],
	declarations: [SidebarOutletComponent],
	exports: [SidebarOutletComponent, CommonModule, RouterModule]
})
export class SharedModule { }
