import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component ({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class='main'>
      <h1>Music Store</h1>
      <album-list [albumList] = 'albums'></album-list>
    </div>
  `
})
export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Blackstar", "David Bowie", 10, "Rock and Roll"),
      new Album("Sound of Silver","LCD Sound System",12,"Electronic"),
      new Album("Golem", "Golem",6,"Klezmer"),
      new Album("Turtles all the way down", "Sturgil Simpson",6,"Country")
    ]
  }
}
