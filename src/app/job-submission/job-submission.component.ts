import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { uuid } from 'uuidv4';

import * as gp from '../GlaciatorParameters';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.css']
})
export class JobSubmissionComponent implements OnInit {

    name;
    email;
    description;

  harvesting_on = true;
  harvesting_off = false;
  zone;
  fuel;
  replicates;
  burn_zones;
  burn_target_per_year;
  timeframe;
  observed_weather;
  NARCLIM_current_weather;
  NARCLIM_future_weather;

  job: gp.GlaciatorParameters;

  searchable: false;
  zone_options = [
    { option: gp.Zones.APZ, label: "APZ" },
    { option: gp.Zones.BPZ, label: "BPZ" },
    { option: gp.Zones.LMZ, label: "LMZ" }
  ];

  weather_options = [
    { option: gp.WeatherOptions.OBSERVED, label: "Observed" },
    { option: gp.WeatherOptions.NARCLIM_CURRENT, label: "NARCLIM Current" },
    { option: gp.WeatherOptions.NARCLIM_FUTURE, label: "NARCLIM Future" }
  ];

  fuel_options = [
    { option: gp.FuelOptions.MCFUEL, label: "McColl-Gausden Fuel Model" },
    { option: gp.FuelOptions.INV_EXP, label: "Inverse Exponential" },
  ];

  timeframe_options = [
    { option: gp.TimeframeOptions.TWENTY, value: "TWENTY" },
    { option: gp.TimeframeOptions.FIFTY, value: "FIFTY" },
  ];

  constructor( private router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.job = gp.glaciator_parameters_example; // Default Form values
  }

  createJob(data) {

    this.job.uuid = uuid();
    this.job.parameters.replicates = this.replicates;
    this.job.parameters.simulation_timeframe = this.timeframe;
    this.job.parameters.fuel = this.fuel.option;
    this.job.parameters.burn_zones = this.burn_zones.option;
    this.job.parameters.weather = {
        observed: this.observed_weather,
        NARCLIM_FUTURE: this.NARCLIM_future_weather,
        NARCLIM_CURRENT: this.NARCLIM_current_weather
    };
    // this.job.parameters.weather = this.weather.option;
    this.job.parameters.burn_target_per_year = this.burn_target_per_year;
    this.job.parameters.harvesting_on = this.harvesting_on;
    this.job.parameters.harvesting_off = this.harvesting_off;

    this.job.name = this.name;
    this.job.email = this.email;
    this.job.description = this.description;

    console.log(this.job);

    this.dataService.createJob(this.job);
    this.router.navigate(['/jobs']);
    // Resets the databindings
    // this.job = {id: null, name: "", description: "", email: ""}; // Better way?
  }

  with_harvesting_change(ev) {
      // console.log('With', ev, this.harvesting_on, this.harvesting_off);
      if (!ev && !this.harvesting_on && !this.harvesting_off) this.harvesting_off = true;
  }

  without_harvesting_change(ev) {
      // console.log('Without', ev, this.harvesting_on, this.harvesting_off);
       if (!ev && !this.harvesting_on && !this.harvesting_off) this.harvesting_on = true;
  }

  observed_change(ev) {
      console.log('Observed', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);
      if( ev && this.NARCLIM_current_weather && this.NARCLIM_future_weather) this.NARCLIM_future_weather = false;
  }
  NARCLIM_current_weather_change(ev) {
      console.log('Current', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);

  }
  NARCLIM_future_weather_change(ev) {
      console.log('Future', ev, this.observed_weather, this.NARCLIM_current_weather, this.NARCLIM_future_weather);
      if (ev && this.observed_weather && this.NARCLIM_future_weather ) this.NARCLIM_future_weather = false;
  }

}
