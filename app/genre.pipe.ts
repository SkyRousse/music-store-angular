import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe ({
  name: "genrePipe",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var requestedGenre = args[0];
    if(requestedGenre === "all") {
      return input;
    } else {
      return input.filter((album) => {
        return album.genre === requestedGenre;
      });
    }
  }
}
