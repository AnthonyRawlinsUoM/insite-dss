import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
import * as gp from '../GlaciatorParameters';
import { ENumAsStringPipe } from '../e-num-as-string.pipe';

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

        this.jobs = data; // TODO sort ordering (by status?)
    });
  }


  public selectJob(job){
    this.selectedJob = job;
  }


  public trueValue(v, k) {
    console.log(k);
    
    return "string";
  }
}
