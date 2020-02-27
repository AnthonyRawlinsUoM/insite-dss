export class Parameters {
  harvesting_on: boolean;
  harvesting_off: boolean;
  burn_target_per_year: number;
  simulation_timeframe: TimeframeOptions;
  replicates: ReplicateOptions;
  weather: any;
  fuel: FuelOptions;
  burn_zones: Zones;
}

export class GlaciatorParameters {
  uuid: string;
  description: string;
  email: string;
  name: string;
  submitted_by: string;
  submitted_at: string;
  parameters: Parameters;
  task: Task;

  constructor(fd) {
    console.log(fd);
  }
}

export class Task {
  uuid: string;
  status: TaskStatus;
  priority: number;
  progress: number;
  results: any; // URL where results can be downloaded?
}

export enum Zones {
  APZ = "APZ",
  BPZ = "BPZ",
  LMZ = "LMZ"
}

export enum TaskStatus {
  PENDING = "PENDING",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  RETRY = "RETRY",
  REVOKED = "REVOKED"
}

export enum TimeframeOptions {
  TWENTY,
  FIFTY
}

export enum ReplicateOptions {
  TEN = 10,
  TWENTY_FIVE = 25,
  FIFTY = 50
}

export enum WeatherOptions {
  OBSERVED = "Observed",
  NARCLIM_CURRENT = "NARCLIM Current",
  NARCLIM_FUTURE = "NARCLIM Future"
}

export enum FuelOptions {
  INV_EXP = "Inverse Exponential",
  MCFUEL = "McColl-Gausden Fuel Model"
}

export const glaciator_parameters_example = {
  submitted_at: "Friday January 31 2020",
  submitted_by: "No-one",
  email: "anthony.rawlins@unimelb.edu.au",
  description: "Example only; a place holder",
  name: "DUMMY FROST RUN",
  uuid: "3c92af22-0b19-44ce-9c43-ca22cda9723b",

  parameters: {
    harvesting_on: true,
    harvesting_off: true,
    burn_target_per_year: 5,
    burn_zones: Zones.APZ,
    simulation_timeframe: TimeframeOptions.FIFTY,
    replicates: ReplicateOptions.TEN,
    weather: WeatherOptions.OBSERVED,
    fuel: FuelOptions.MCFUEL
  },

  task: {
    uuid: "",
    progress: 0,
    status: TaskStatus.PENDING,
    priority: 1,
    results: {
     url: ""
    }
  }
}
