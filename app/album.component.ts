import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-display',
  inputs: ['album'],
  template: `
  <div class="album">
    <h3 class="album-name">{{ album.name }}</h3>
    <h3>by {{ album.artist }}</h3>
    <h4>genre: {{ album.genre }}</h4>
    <h4>\$ {{ album.price }}</h4>
    <input class="add-to-cart-btn" value="add to cart" type="button" checked (click)="toggleCart(false)"/>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;
  toggleCart(setState: boolean) {
    this.album.inCart = setState;
  }
}
