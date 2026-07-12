import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {from, interval, map, Observable, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  //private observable: Observable<number>;
  //private promise: Promise<string>;
  private subject: Subject<number>;

  private subscription: Subscription | null = null;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;


  constructor(public cartService: CartService, private modalService: NgbModal) {
    this.subject = new Subject<number>();
    let count = 0
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);

    const timeout1 = setTimeout (() => {
      this.subject.complete();
    }, 4000);





    //this.observable = from([1, 2, 3, 4, 5])

    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello');
    //   }, 2000)
    //
    // })

    // this.observable = new Observable(observer => {
    //   let count = 0
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //
    //   const timeout1 = setTimeout (() => {
    //     observer.complete();
    //   }, 4000);
    //
    //   const timeout2 = setTimeout(() => {
    //     observer.error('word');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe (){
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //
    //     }
    //   }
    //
    //
    // })

  }

  ngAfterViewInit(): void {

    //this.modalService.open(this.popup, {});
    this.popupComponent.open();
    }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


  ngOnInit() {
    console.log("enviroment", environment);

    //const myModalAlternative = new bootstrap.Modal('#myModal', {});
    //myModalAlternative.show();


    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1:', param);
          },
          error: (error: string) => {
            console.log('subscriber 1: ERROR!', error);
          }

        })

    // this.promise.then((param:string) => {
    //   console.log(param);
    //
    // })

  }

  test() {


    this.subject
      .pipe(
        map((number: number) => {
          return 'Число ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2:', param);

      })



  }




}

export default MainComponent
