import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ListComponent } from './widgets/list/list.component';
import { SettingsComponent } from './widgets/settings/settings.component';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AlertComponent } from './widgets/alert/alert.component';
import { AlertService } from './widgets/alert/alert.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent,
    SettingsComponent,
    AlertComponent,

    
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent,
    SettingsComponent,
    AlertComponent
  ],
  providers: [FormBuilder,AlertService],
})
export class SharedModule { }
