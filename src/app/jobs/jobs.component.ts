import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GlaciatorParameters } from '../GlaciatorParameters';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


      jobs;
      selectedJob;

  constructor(public dataService: DataService) { }

  ngOnInit() {
      this.jobs = [];
      this.dataService.getJobs().subscribe((data) => {
          console.log(data);
          this.jobs = data;
          // this.jobs.sort((a, b) => (a.task.progress > b.task.progress) ? -1 : 1);
      });
  }


  public selectJob(job){
    this.selectedJob = job;
  }

}
