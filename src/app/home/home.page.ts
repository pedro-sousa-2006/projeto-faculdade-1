import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonFooter, IonLabel } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RouterModule } from '@angular/router';
import { RodapePage } from "../rodape/rodape.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, RouterModule, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonFooter, MenuPage, RodapePage, IonLabel]
})
export class HomePage implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  pessoa : Aluno = new Aluno();
    imagem = "assets/pedro.jpeg";
}
  class Aluno{
    nome : string = "Pedro Henrique";
    matricula : string = "24105576";
  }
  
