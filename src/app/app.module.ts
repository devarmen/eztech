import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackupIconComponent,
  DataCenterIconComponent,
  IntegrationIconComponent,
  MaintenanceIconComponent,
  NetworkSecurityIconComponent,
  RecoveryIconComponent,
  SolutionsIconComponent
 } from './icons/icons';

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceIconComponent,
    SolutionsIconComponent,
    DataCenterIconComponent,
    NetworkSecurityIconComponent,
    RecoveryIconComponent,
    BackupIconComponent,
    IntegrationIconComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
