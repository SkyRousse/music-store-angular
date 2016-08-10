import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CartPipe } from './cart.pipe';
import { CartComponent } from './cart.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  pipes: [GenrePipe, ArtistPipe, CartPipe],
  directives: [AlbumComponent, CartComponent],
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
      (onChangeCartState)="updateCartTotal($event)"
      [album]="currentAlbum"
       >
       </album-display>
    </div>
    <h3>Cart - Total = \${{cartTotal}}</h3>
    <div class="cart album-container">
      <ul>
       <cart *ngFor="#currentAlbum of albumList | cartPipe" [album]="currentAlbum"></cart>
      </ul>
    </div>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public cartTotal: number = 0;
  public requestedGenre: string = "all";
  public requestedArtist: string = "all";
  constructor(){}
  onChangeGenre(filterOption) {
    this.requestedGenre = filterOption;
  }
  onChangeArtist(filterOption) {
    this.requestedArtist = filterOption;
  }
  updateCartTotal(updateValue) {
    this.cartTotal = this.cartTotal + updateValue;
    console.log("success");
  }
}
