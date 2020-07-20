import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {SuiModule} from '@richardlt/ng2-semantic-ui';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';
import { HomeComponent } from './home/home.component';
import { JobstateComponent } from './jobstate/jobstate.component';
import { ENumAsStringPipe } from './e-num-as-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    HeaderComponent,
    FooterComponent,
    JobSubmissionComponent,
    HomeComponent,
    JobstateComponent,
    ENumAsStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxDatatableModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
