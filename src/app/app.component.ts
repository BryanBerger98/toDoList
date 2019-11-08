import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBJ8EcKJYAZpOtIkvydMOuyFbJO6InrZKY',
      authDomain: 'todolist-362d9.firebaseapp.com',
      databaseURL: 'https://todolist-362d9.firebaseio.com',
      projectId: 'todolist-362d9',
      storageBucket: 'todolist-362d9.appspot.com',
      messagingSenderId: '131184828891',
      appId: '1:131184828891:web:114e0ffab0bc78940147fe'
    };
    firebase.initializeApp(firebaseConfig);
  }

}
