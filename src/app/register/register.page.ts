import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonButton, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonButton, IonInput]
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public Register(){
    this.router.navigate(['/login']);
  }

  public BackToSignIn(){
    this.router.navigate(['/login']);
  }

}
