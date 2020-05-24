import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, observable, Observable, of, timer, merge, Subject, BehaviorSubject, AsyncSubject, ReplaySubject} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {

      /* const sub = new Subject();
      sub.subscribe(val => console.log("First : ", val));
      
      sub.next(1);
      sub.subscribe(val => console.log("Second : ", val));
      sub.next(2); */

     /*  const sub = new BehaviorSubject<any>('test');
      sub.subscribe(val => console.log("First : ", val));
      
      sub.next(1);
      sub.subscribe(val => console.log("Second : ", val));
      sub.next(2); */

      /* const sub = new AsyncSubject();

      sub.subscribe(val => console.log("First : ", val));
      
      sub.next(1);
      sub.next(3);
      sub.complete();
      sub.subscribe(val => console.log("Second : ", val));
      sub.next(2); */

      /* const sub = new ReplaySubject();

      sub.subscribe(val => console.log("First : ", val));
      
      sub.next(1);
      sub.next(3);
      sub.complete();
      sub.subscribe(val => console.log("Second : ", val));
      sub.next(2); */

    }


}






