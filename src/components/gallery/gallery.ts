import { Component, Input } from '@angular/core';

/**
 * Generated class for the GalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {
  @Input('images') images;
}
