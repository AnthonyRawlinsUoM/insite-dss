import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../data.service';
import { v4 as uuid } from 'uuid';
// import { MustMatch } from '../helpers/must-match.validator';


import * as gp from '../GlaciatorParameters';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.css']
})
export class JobSubmissionComponent implements OnInit {
  submissionForm: FormGroup;
  job: gp.GlaciatorParameters;

  searchable: false;

  weather_options = [
    { option: gp.WeatherMachineKind.Interpol, label: "Interpolated" },
    { option: gp.WeatherMachineKind.NarclimFuture, label: "NARCLIM Future" },
    { option: gp.WeatherMachineKind.NarclimObserved, label: "NARCLIM Observed" }
  ];

  fuel_options = [
    { option: gp.FuelMachineKind.InvexpWithLandis.valueOf(), label: "Inverse Exponential with LANDIS" },
    { option: gp.FuelMachineKind.NarclimFutureWithLandis.valueOf(), label: "NARCLIM Future with LANDIS" },
    { option: gp.FuelMachineKind.NarclimObservedWithLandis.valueOf(), label: "NARCLIM Observed with LANDIS" },
  ];

  timeframe_options = [
    { option: gp.TimeframeOptions.TWENTY, value: gp.TimeframeOptions.TWENTY.valueOf() },
    { option: gp.TimeframeOptions.FIFTY, value: gp.TimeframeOptions.FIFTY.valueOf() },
  ];

  num_replicates: number;
  regsim_duration: number;
  fuel_machine_kind: number;
  weather_machine_kind: number;
  planburn_target_perc: number;
  harvesting_on: boolean;
  submitter_name: string;
  submission_time: string;
  submitter_email: string;
  descr: string;

  submitted = false;
  acceptTerms = false;

  constructor(private router: Router, public dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.submissionForm = this.formBuilder.group({

      submitter_name: ['', Validators.required],
      name: ['', Validators.required],

      submitter_email: ['', [Validators.required, Validators.email]],

      descr: ['', [Validators.required]],

      planburn_target_perc: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(100)]],

      weather_machine_kind: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(3)]],

      fuel_machine_kind: ['', [Validators.required,
      Validators.min(1),
      Validators.max(3)]],

      num_replicates: ['', [
        Validators.required,
        Validators.min(10),
        Validators.max(100)]
      ],

      regsim_duration: ['', [Validators.required]],

      harvesting_on: [false, [Validators.required]],

      acceptTerms: [false, Validators.requiredTrue]
    });


    this.job = gp.glaciator_parameters_example; // Default Form values
    this.job.uuid = uuid();
  }

  get f() { return this.submissionForm.controls; }

  onSubmit(event) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.submissionForm.invalid) {
      return;
    }

    console.log(this.submissionForm.value);
    let validated_data = this.submissionForm.value;

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(validated_data, null, 4));

    this.createJob(validated_data);

    this.dataService.createJob(this.job).subscribe(
      (data) => {
        console.log('Complete:' + data);
        this.router.navigate(['/jobs']);
      },
      (err) => {
        console.error('Error' + err);
      },
      () => {
        console.log('Nothing?');
      });
  }

  createJob(data) {

    this.job.uuid = uuid();

    this.job.name = data.name;

    this.job.submission_time = new Date().toISOString();
    this.job.num_replicates = Number.parseInt(data.num_replicates);
    this.job.regsim_duration = Number.parseInt(data.regsim_duration);
    this.job.fuel_machine_kind = data.fuel_machine_kind.option;
    this.job.weather_machine_kind = data.weather_machine_kind.option;
    // this.job.parameters.weather = this.weather.option;
    this.job.planburn_target_perc = Number.parseInt(data.planburn_target_perc);
    this.job.harvesting_on = data.harvesting_on;
    this.job.submitter_name = data.submitter_name;
    this.job.submitter_email = data.submitter_email;
    this.job.descr = data.descr;

    console.log(this.job);
  }

  onReset() {
    this.submitted = false;
    this.submissionForm.reset();
  }
}
