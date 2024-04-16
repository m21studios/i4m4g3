import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.page.html',
  styleUrls: ['./viewimage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ViewimagePage implements OnInit {

  image: any;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.image = this.activeroute.snapshot.paramMap.get('imageUrl');
  }

  backToMain(){
    this.router.navigate(['/generateart']);
  }

}
