import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonPopover } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generateart',
  templateUrl: './generateart.page.html',
  styleUrls: ['./generateart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonPopover, IonFabButton, IonFab ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenerateartPage implements OnInit {
  @ViewChild('popover') popover: any;
  images: any = [];
  images_art: any = [];
  isPopoverOpen: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadImages();
    this.loadImagesArt();
    this.isPopoverOpen = false;
  }

  loadImages(){
    this.images = [
      {
        id:1,
        url:'../../assets/AiImages/01.jpg'
      },
      {
        id:2,
        url:'../../assets/AiImages/03.jpg'
      },
      {
        id:3,
        url:'../../assets/AiImages/05.jpg'
      },
      {
        id:4,
        url:'../../assets/AiImages/07.jpg'
      },
      {
        id:5,
        url:'../../assets/AiImages/09.jpg'
      },
      {
        id:6,
        url:'../../assets/AiImages/11.jpg'
      },
    ]
  }

  loadImagesArt(){
    this.images_art = [
      {
        id:1,
        url:'../../assets/AiImages/02.jpg'
      },
      {
        id:2,
        url:'../../assets/AiImages/04.jpg'
      },
      {
        id:3,
        url:'../../assets/AiImages/06.jpg'
      },
      {
        id:4,
        url:'../../assets/AiImages/08.jpg'
      },
      {
        id:5,
        url:'../../assets/AiImages/10.jpg'
      },
    ]
  }

  viewImagen(imageUrl:any){
    this.router.navigate(['/viewimage',imageUrl]);
  }

  CreateImage(){
    this.router.navigate(['/createimage']);
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isPopoverOpen = true;
  }

  SignOut(){
    this.isPopoverOpen = false;
    this.router.navigate(['/home']);
  }

}
