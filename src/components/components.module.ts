import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { GalleryComponent } from './gallery/gallery';
@NgModule({
  declarations: [LoaderComponent, GalleryComponent],
  imports: [],
  exports: [LoaderComponent, GalleryComponent]
})
export class ComponentsModule {}
