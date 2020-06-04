import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GlaciatorParameters } from '../GlaciatorParameters';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


      jobs: any[];
      selectedJob: any;

  constructor(public dataService: DataService) {
    this.jobs = [];
  }

  ngOnInit() {
    this.dataService.getJobs().subscribe((data) => {

        console.log(data);

        this.jobs = data;
    });
  }


  public selectJob(job){
    this.selectedJob = job;
  }

}
