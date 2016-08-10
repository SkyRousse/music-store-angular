import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: 'cartPipe',
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(input: Album[], args) {
    return input.filter((album) => {
      return album.inCart === true;
    });
  }
}
