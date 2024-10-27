export class Categoria {

  categoriaId: number;
  nome: string;

  constructor(obj?: any) {
    this.categoriaId = obj ? obj.categoriaId : null;
    this.nome = obj ? obj.nome : null;
  }
}
