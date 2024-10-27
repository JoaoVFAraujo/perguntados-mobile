import { RespostasModel } from './respostas.model';
import { Categoria } from './categoria.model';
import { DificuldadeEnum } from './dificuldade.enum';

export class PerguntasModel {

  perguntaId: number;
  texto: string;
  dificuldade: DificuldadeEnum;
  categoria: Categoria;
  respostas: RespostasModel[];

  constructor(obj?: any) {
    this.perguntaId = obj ? obj.perguntaId : null;
    this.texto = obj ? obj.texto : null;
    this.dificuldade = obj ? obj.dificuldade : DificuldadeEnum.facil;
    this.categoria = obj ? obj.categoria : null;
    this.respostas = obj ? obj.respostas : null;
  }

}
