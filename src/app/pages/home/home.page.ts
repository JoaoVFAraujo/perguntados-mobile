import { PerguntasModel } from 'src/app/model/perguntas.model';
import { HomeService } from './service/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  pergunta: PerguntasModel = new PerguntasModel();

  constructor(private homeService: HomeService) {

    let teste: { ids: number[] } = {
      ids: [0] // Verificar depois o backend quando não é passado valores no ids
    }

    this.homeService.getPerguntaByCategoriaRandomWithOutIds(3, teste).subscribe(v => {
      this.pergunta = v;
    });
  }

  public currentSelected: Number | null = null;

  selecionarResposta(index: number) {
    this.currentSelected = index;
  }

}
