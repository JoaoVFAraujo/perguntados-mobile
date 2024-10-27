import { PerguntasModel } from "./perguntas.model";

export class RespostasModel {

  respostaId: number;
  pergunta: PerguntasModel;
  texto: string;
  correta: boolean;

  constructor(obj?: any) {
    this.respostaId = obj ? obj.respostaId : null;
    this.pergunta = obj ? obj.pergunta : null;
    this.texto = obj ? obj.texto : null;
    this.correta = obj ? obj.correta : null;
  }

}
