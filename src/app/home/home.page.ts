import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { FirestoreService } from '../firebase/firestore.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {

  private fireStoreService: FirestoreService = inject(FirestoreService);

  constructor() {

  }
}
