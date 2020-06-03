import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { GlaciatorParameters } from './GlaciatorParameters';

// const host = 'localhost';
// const host = 'insite.lightning.deepblack.cloud';

const host = 'insite.dss.cloud.bushfirebehaviour.net.au';

// const port = ':8181';
const port = '';
const protocol = 'https';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket;

  temp;
  jobs: any[];

  constructor() {
      this.socket = io.connect(`${protocol}://${host}${port}`);
  }

  public getJobs = () => {
      return Observable.create((observer) => {
           this.socket.emit('list-jobs', (ack) => {
               console.log(ack);
           });

            this.socket.on('jobs-list', (jobdata) => {
              console.log(jobdata);

              observer.next(jobdata);
            });
      });
  }

  public createJob = (formdata) => {
    return Observable.create((observer) => {
      this.socket.emit('submission', formdata, (ack)=> {
          console.log(ack);
          this.temp = null;
      });

      this.socket.on('validation-error', (ve) => {
        console.log(ve)
        observer.next(ve);
      });

      this.socket.on('insertion-error', (ie) => {
        console.log(ie)
        observer.next(ie);
      });
    });
  }


  public getData = () => {
    return Observable.create((observer) => {
      this.socket.on('job', (job) => {
        observer.next(job);
      });
    });
  }

  // public getInsertionErrors = () => {
  //   return Observable.create((observer) => {
  //     this.socket.on('insertion-error', (err) => {
  //       observer.next(err);
  //     });
  //   });
  // }
  //
  // public getValidationErrors = () => {
  //   return Observable.create((observer) => {
  //     this.socket.on('validation-error', (err) => {
  //       observer.next(err);
  //     });
  //   });
  // }

}
