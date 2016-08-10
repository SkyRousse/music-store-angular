import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-display',
  inputs: ['album'],
  outputs: ['onChangeCartState'],
  template: `
  <div class="album">
    <h3 class="album-name">{{ album.name }}</h3>
    <h3>by {{ album.artist }}</h3>
    <h4>genre: {{ album.genre }}</h4>
    <h4>\$ {{ album.price }}</h4>
    <input *ngIf="album.inCart===false" class="add-to-cart-btn" value="add to cart" type="button"
    (click)="toggleCart(true)"/>
    <input *ngIf="album.inCart===true" class="add-to-cart-btn" value="remove from cart" type="button"
    (click)="toggleCart(false)"/>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  public onChangeCartState: EventEmitter<number>;
  constructor(){
    this.onChangeCartState = new EventEmitter();
  }
  toggleCart(setState: boolean) {
    console.log("toggleCart runs");
    this.album.inCart = setState;
    var updateValue: number = this.album.price;
    console.log(updateValue + " = updateValue");
    if(setState === false){
      updateValue *= (-1);
    }
    this.onChangeCartState.emit(updateValue);
  }
}
