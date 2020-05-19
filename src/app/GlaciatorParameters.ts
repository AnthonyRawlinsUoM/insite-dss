export class GlaciatorParameters {

  descr: string;
  name: string;
  uuid: string;
  submitter_name: string;
  submission_time: string;
  submitter_email: string;
  weather_machine_kind: number;
  fuel_machine_kind: number;
  planburn_target_perc: number;
  regsim_duration: number;
  num_replicates: number;
  harvesting_on: boolean;

  constructor(fd) {
    console.log(fd);
  }
}

export enum TimeframeOptions {
  TWENTY = 20,
  FIFTY = 50
}

export enum ReplicateOptions {
  TEN = 10,
  TWENTY_FIVE = 25,
  FIFTY = 50
}

export enum WeatherMachineKind {
  Interpol = 1,
  NarclimObserved = 2,
  NarclimFuture = 3
}

export enum FuelMachineKind {
  InvexpWithLandis = 1,
  NarclimObservedWithLandis = 2,
  NarclimFutureWithLandis = 3
}

export enum WebJobStatus {
  New = 1,
  RunningSimulations = 2,
  RunningPostProcessing = 3,
  Failed = 4,
  Completed = 5
}


export const glaciator_parameters_example = {

  // Schema by Dan
  descr: "Example only; a place holder",
  name: "DUMMY FROST RUN",
  uuid: "3c92af22-0b19-44ce-9c43-ca22cda9723b",
  submitter_name: "No-one",
  submission_time: "Friday January 31 2020",
  submitter_email: "anthony.rawlins@unimelb.edu.au",
  weather_machine_kind: WeatherMachineKind.Interpol.valueOf(),
  fuel_machine_kind: FuelMachineKind.InvexpWithLandis.valueOf(),
  planburn_target_perc: 0,
  regsim_duration: TimeframeOptions.FIFTY.valueOf(),
  num_replicates: ReplicateOptions.FIFTY.valueOf(),
  harvesting_on: false
}
