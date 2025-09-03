import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonItem }
 from '@ionic/angular/standalone';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.page.html',
  styleUrls: ['./rodape.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter,
     IonList, IonItem]
})
export class RodapePage implements OnInit {

  constructor() { }
nome :string = "Pedro Henrique";
data = new Date();
hoje = this.data.toLocaleDateString("pt-br");
  ngOnInit() {
  }

}
