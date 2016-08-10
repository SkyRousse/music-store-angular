import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  pipes: [GenrePipe],
  directives: [AlbumComponent],
  template: `
    <album-display *ngFor="#currentAlbum of albumList | genrePipe:requestedGenre"
    [album]="currentAlbum"
     >

    </album-display>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public requestedGenre: string = "Rock and Roll";
  constructor(){}
}
