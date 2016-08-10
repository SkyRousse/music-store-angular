import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe ({
  name: "artistPipe",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var requestedArtist = args[0];
    if(requestedArtist == "all") {
      return input;
    } else {
      return input.filter((album) => {
        return album.artist === requestedArtist;
      });
    }
  }
}
