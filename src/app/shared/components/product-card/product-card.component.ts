import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,

} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  //encapsulation: ViewEncapsulation.None
  providers: [CartProductService]
})
export class ProductCardComponent {
  @Input()
  get product(): ProductType {
    return this._product;
  }

  set product(param: ProductType) {
    //param.title = param.title.toUpperCase();
    this._product = param;
  }

  private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public  cartProductService: CartProductService,) {
    this._product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime:''
    }
  }





}
