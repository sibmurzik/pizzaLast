import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  implements AfterViewInit{

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  constructor(private modalService: NgbModal) {
  }
  ngAfterViewInit(): void {
    //const modalRef = this.modalService.open(PopupComponent);
    //modalRef.componentInstance.data = 'About us';
    this.popupComponent.open();

    //this.modalService.open(this.popup, {});
  }

}
