import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput],
})
export class HomePage {
  constructor(
    private router: Router
  ) {}

  public GoLogin(){
    console.log("Go login!");
    this.router.navigate(['/login']);
  }
}
