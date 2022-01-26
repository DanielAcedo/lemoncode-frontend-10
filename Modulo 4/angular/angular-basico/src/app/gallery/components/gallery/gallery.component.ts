import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Image } from '../../models/image/image.model';
import { GalleryImageService } from '../../services/gallery-image.service';

interface SelectedImage {
  image: Image;
  index: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public galleryImages: Image[] = [];
  public selectedImage?: SelectedImage | null = null;
  public currentZoomMultiplier: number = 1;

  private paginatorPageSize: number = 3;
  public paginatorStartIndex: number = 0;
  public paginatorEndIndex: number =
    this.paginatorStartIndex + this.paginatorPageSize;

  private slideShow$?: Observable<any>;
  private slideShowSubscription?: Subscription;

  get selectedImageIndex() {
    return this.selectedImage?.index || 0;
  }

  constructor(private galleryImageService: GalleryImageService) {
    this.slideShow$ = interval(2000).pipe(
      tap(() => {
        this.nextImage();
      })
    );
  }

  ngOnInit(): void {
    this.galleryImageService.getImages().subscribe((data) => {
      this.galleryImages = data;
      this.selectedImage = { image: this.galleryImages[0], index: 0 };
    });
  }

  selectImage(image: Image) {
    const newIndex = this.galleryImages.findIndex((i) => i.id === image.id);
    this.selectedImage = { image, index: newIndex };
  }

  nextImageClick() {
    if (this.isNextImageDisabled()) return;
    this.nextImage();
  }

  nextImage() {
    const newIndex = (this.selectedImageIndex + 1) % this.galleryImages.length;
    const newImage = this.galleryImages[newIndex];

    this.selectedImage = { image: newImage, index: newIndex };
    this.navigateToImageIfNotVisible(newIndex);
  }

  isNextImageDisabled(): boolean {
    return this.selectedImageIndex === this.galleryImages.length - 1;
  }

  previousImage() {
    if (this.isPreviousImageDisabled()) return;

    const newIndex = this.selectedImageIndex - 1;
    const newImage = this.galleryImages[newIndex];

    this.selectedImage = { image: newImage, index: newIndex };
    this.navigateToImageIfNotVisible(newIndex);
  }

  isPreviousImageDisabled(): boolean {
    return this.selectedImageIndex === 0;
  }

  paginateNext() {
    this.paginatorStartIndex =
      this.paginatorStartIndex + this.paginatorPageSize;
    this.paginatorEndIndex = this.paginatorEndIndex + this.paginatorPageSize;
  }

  isPaginateNextDisabled() {
    return this.paginatorEndIndex >= this.galleryImages.length;
  }

  paginatePrevious() {
    this.paginatorStartIndex =
      this.paginatorStartIndex - this.paginatorPageSize;
    this.paginatorEndIndex = this.paginatorEndIndex - this.paginatorPageSize;
  }

  isPaginatePreviousDisabled() {
    return this.paginatorStartIndex <= 0;
  }

  navigateToImageIfNotVisible(imageIndex: number) {
    const isVisible =
      imageIndex >= this.paginatorStartIndex &&
      imageIndex < this.paginatorEndIndex;

    if (isVisible) return;

    const visiblePage = Math.floor(imageIndex / this.paginatorPageSize) + 1;
    this.navigateToPage(visiblePage);
  }

  navigateToPage(pageNumber: number) {
    const maxPageNumber =
      Math.floor(this.galleryImages.length / this.paginatorPageSize) + 1;
    if (pageNumber < 1 || pageNumber > maxPageNumber) return;

    const newPaginatorStartIndex = this.paginatorPageSize * (pageNumber - 1);
    const newPaginatorEndIndex =
      newPaginatorStartIndex + this.paginatorPageSize;

    this.paginatorStartIndex = newPaginatorStartIndex;
    this.paginatorEndIndex = newPaginatorEndIndex;
  }

  zoomIn() {
    this.currentZoomMultiplier += 0.2;
  }

  zoomOut() {
    const newZoom = Math.max(this.currentZoomMultiplier - 0.2, 0.1);
    this.currentZoomMultiplier = newZoom;
  }

  play() {
    if (this.isPlayDisabled()) return;
    this.slideShowSubscription = this.slideShow$?.subscribe();
  }

  isPlayDisabled() {
    const isSubscriptionClosed = this.slideShowSubscription?.closed ?? true;
    return !isSubscriptionClosed;
  }

  pause() {
    this.slideShowSubscription?.unsubscribe();
  }

  isPauseDisabled() {
    const isSubscriptionClosed = this.slideShowSubscription?.closed ?? true;
    return isSubscriptionClosed;
  }
}
