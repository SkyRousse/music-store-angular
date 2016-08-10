import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  template: `
    <p> Testing </p>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  constructor(){}
}
