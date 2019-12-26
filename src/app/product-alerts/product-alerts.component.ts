import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; //El decorador @Input() indica que el valor de la propiedad pasa del  padre del componente, el componente product-list.

  @Output() notify = new EventEmitter(); // Esto permite que el componente de alerta del producto emita un evento cuando cambia el valor de la propiedad de notificación.
  constructor() { }

  ngOnInit() {
  }

}