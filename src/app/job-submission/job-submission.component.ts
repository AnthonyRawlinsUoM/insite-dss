import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { v4 as uuid } from 'uuid';

import * as gp from '../GlaciatorParameters';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.css']
})
export class JobSubmissionComponent implements OnInit {

  job: gp.GlaciatorParameters;

  searchable: false;

  weather_options = [
    { option: gp.WeatherMachineKind.Interpol, label: "Interpolated" },
    { option: gp.WeatherMachineKind.NarclimFuture, label: "NARCLIM Future" },
    { option: gp.WeatherMachineKind.NarclimObserved, label: "NARCLIM Observed" }
  ];

  fuel_options = [
    { option: gp.FuelMachineKind.InvexpWithLandis, label: "Inverse Exponential with LANDIS" },
    { option: gp.FuelMachineKind.NarclimFutureWithLandis, label: "NARCLIM Future with LANDIS" },
    { option: gp.FuelMachineKind.NarclimObservedWithLandis, label: "NARCLIM Observed with LANDIS" },
  ];

  timeframe_options = [
    { option: gp.TimeframeOptions.TWENTY, value: "TWENTY" },
    { option: gp.TimeframeOptions.FIFTY, value: "FIFTY" },
  ];

  num_replicates: gp.ReplicateOptions;
  regsim_duration: gp.TimeframeOptions;
  fuel_machine_kind: any;
  weather_machine_kind: any;
  planburn_target_perc: number;
  harvesting_on: boolean;
  submitter_name: string;
  submitter_email: string;
  descr: string;

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.job = gp.glaciator_parameters_example; // Default Form values
  }

  createJob(data) {



    this.job.uuid = uuid();
    this.job.num_replicates = this.num_replicates;
    this.job.regsim_duration = this.regsim_duration;
    this.job.fuel_machine_kind = this.fuel_machine_kind.option;
    this.job.weather_machine_kind = this.weather_machine_kind.option;
    // this.job.parameters.weather = this.weather.option;
    this.job.planburn_target_perc = this.planburn_target_perc;
    this.job.harvesting_on = this.harvesting_on;
    this.job.submitter_name = this.submitter_name;
    this.job.submitter_email = this.submitter_email;
    this.job.descr = this.descr;

    console.log(this.job);

    this.dataService.createJob(this.job);
    this.router.navigate(['/jobs']);
    // Resets the databindings
    // this.job = {id: null, name: "", description: "", email: ""}; // Better way?
  }

  // observed_change(ev) {
  //   console.log('Observed', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);
  //   if (ev && this.NARCLIM_current_weather && this.NARCLIM_future_weather) this.NARCLIM_future_weather = false;
  // }
  //
  // NARCLIM_current_weather_change(ev) {
  //   console.log('Current', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);
  //
  // }
  // NARCLIM_future_weather_change(ev) {
  //   console.log('Future', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);
  //   if (ev && this.observed_weather && this.NARCLIM_future_weather) this.NARCLIM_future_weather = false;
  // }

}
