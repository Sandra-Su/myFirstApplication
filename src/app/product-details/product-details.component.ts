import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute, //es específico para cada componente enrutado cargado por el enrutador angular. Contiene información sobre la ruta, sus parámetros y datos adicionales asociados con la ruta.
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

}