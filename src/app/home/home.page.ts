import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { FirestoreService } from '../firebase/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  private fireStoreService: FirestoreService = inject(FirestoreService);
  
  constructor() {
    this.test()
    this.testLectura()
  }

  async test(){
    console.log('test()');
    
    await this.fireStoreService.createDocument('test', {hola: 'nada'})
  }

  testLectura(){
    this.fireStoreService.getDocumentsChanges('test').subscribe(res => {
      console.log('testLectura ->', res);
      
    })
  }
}
