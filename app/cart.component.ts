import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'cart',
  inputs: ['album'],
  template: `
      <li>Album: {{album.name}}, Price: \${{album.price}}</li>
  `
})
export class CartComponent {
  public album: Album;
  constructor() {}
}
