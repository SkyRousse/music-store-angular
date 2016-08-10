import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  pipes: [GenrePipe, ArtistPipe],
  directives: [AlbumComponent],
  template: `
    <select (change)="onChangeGenre($event.target.value)" class="filter">
      <option value="all" selected="selected">All Albums</option>
      <option value="Rock and Roll">Rock n Roll</option>
      <option value="Country">Country</option>
      <option value="Electronic">Electronic</option>
      <option value="Klezmer">Klezmer</option>
    </select>
    <select (change)="onChangeArtist($event.target.value)" class="filter">
      <option value="all" selected="selected">All Artists</option>
      <option>David Bowie</option>
      <option>LCD Sound System</option>
      <option>Golem</option>
      <option>Sturgil Simpson</option>
    </select>
    <div class="album-container">
      <album-display *ngFor="#currentAlbum of albumList | genrePipe:requestedGenre | artistPipe:requestedArtist"
      [album]="currentAlbum"
       >
       </album-display>
    </div>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public requestedGenre: string = "all";
  public requestedArtist: string = "all";
  constructor(){}
  onChangeGenre(filterOption) {
    this.requestedGenre = filterOption;
  }
  onChangeArtist(filterOption) {
    this.requestedArtist = filterOption;
  }
}
