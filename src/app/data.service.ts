import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { GlaciatorParameters } from './GlaciatorParameters';

// const host = 'localhost';
const host = 'insite.lightning.deepblack.cloud';
// const port = ':8181';
const port = '';
const protocol = 'https';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket;

  temp;
  jobs: GlaciatorParameters[];

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

  public createJob(formdata) {

    this.socket.emit('submission', formdata, (ack)=> {
            console.log(ack);
            this.temp = null;
        });
  }


  public getData = () => {
    return Observable.create((observer) => {
      this.socket.on('job', (job) => {
        observer.next(job);
      });
    });
  }

}
