import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items;
  item;
  constructor(private db: AngularFirestore) {
    this.item = {
      age: '',
      firstName: ''
    };
  }
  ngOnInit(): void {
    this.db.collection('Students').valueChanges().subscribe(item => {
      this.items = item;
    }
    );
  }


  add() {
    debugger;
    this.db.collection("Students").add(this.item).catch((error) => {
      alert(error);
    });
  }
}
