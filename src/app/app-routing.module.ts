import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { JobSubmissionComponent } from './job-submission/job-submission.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "job-submission", component: JobSubmissionComponent},
  {path: "jobs", component: JobsComponent},
  {path:  "", pathMatch:  "full",redirectTo:  "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
