import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-display',
  inputs: ['album'],
  template: `
  <div>
    <h3>{{ album.name }}</h3>
    <h3>{{ album.artist }}</h3>
    <h3>{{ album.price }}</h3>
    <h3>{{ album.genre }}</h3>
  </div>
  `
})
export class AlbumComponent {
  public album: Album;

}
