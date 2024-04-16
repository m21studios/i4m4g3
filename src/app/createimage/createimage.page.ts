import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonTextarea, IonThumbnail, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonPopover } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { OpenaiService } from '../services/openai.service';

@Component({
  selector: 'app-createimage',
  templateUrl: './createimage.page.html',
  styleUrls: ['./createimage.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTextarea, IonThumbnail, IonPopover]
})
export class CreateimagePage implements OnInit {

  prompts: any = [];
  enterPrompt: any;
  viewImage:boolean = false;
  viewText:boolean = false;
  download:boolean = false;
  image_url:any;



  constructor(
    private router: Router,
    private openaiService: OpenaiService
  ) { }

  ngOnInit() {
    this.viewImage = false;
    this.viewText = true;
    this.download = false;
    this.LoadPrompts();

    this.image_url = '../../assets/image-pre.png';
  }

  backToMain(){
    this.router.navigate(['/generateart']);
  }

  LoadPrompts(){
    this.prompts = [
      {
        id:'1',
        image:'../../assets/ImagePrompt/image-88.png',
        prompt:'Generate a series of realistic photographs that capture everyday moments in a genuine and relatable manner. Picture scenes of people going about their daily lives, candid expressions, and the beauty found in ordinary details.'
      },
      {
        id:'2',
        image:'../../assets/ImagePrompt/image-92.png',
        prompt:'Generate a visualization representing immense joy. Use vibrant colors, such as yellows and oranges, coming together in dynamic shapes to convey joy and celebration. Try to capture joy through color and form.'
      },
      {
        id:'3',
        image:'../../assets/ImagePrompt/image-74.png',
        prompt:'Capture the beauty of the winter season in a single scene, trying seasonal elements and color palettes to convey the harmony of nature’s cycles.'
      },
      {
        id:'4',
        image:'../../assets/ImagePrompt/image-72.png',
        prompt:'Generate an image of a deep, dark forest with ancient, towering trees. Capture the mysterious atmosphere with twisted branches casting eerie shadows on the forest floor. Evoke a sense of solitude and intrigue'
      },
      {
        id:'5',
        image:'../../assets/ImagePrompt/image-79.png',
        prompt:'Generate a portrait image showcasing a person’s expressions, features, and emotions in a close-up shot. Keep the background neutral, emphasizing the individual’s presence. Bring out the depth and personality of the subject, creating a captivating and well-composed portrait.'
      },
    ]
  }

  GenerateImagen(){
    this.viewImage = true;
    this.viewText = false;
    this.download = true;
    this.image_url = '../../assets/AiImages/03.jpg';
    /*this.openaiService.generateImage(this.enterPrompt).then((image: string) => {
      this.viewImage = true;
      this.image_url = image;
    }).catch((error: any) => {
      console.error('Error: ', error);
    });*/

  }

}
