export class Epi {
  #quantidade;

  constructor(codigo, nome, numeroCA, quantidade) {
    if (
      typeof quantidade !== "number" ||
      !Number.isFinite(quantidade) ||
      quantidade < 0
    ) {
      throw new RangeError("A quantidade inicial deve ser um número não negativo.");
    }

    this.codigo = codigo;
    this.nome = nome;
    this.numeroCA = numeroCA;
    this.#quantidade = quantidade;
  }

  get quantidade() {
    return this.#quantidade;
  }

  adicionarQuantidade(valor) {
    if (typeof valor !== "number" || !Number.isFinite(valor) || valor <= 0) {
      return false;
    }

    this.#quantidade += valor;
    return true;
  }

  retirarQuantidade(valor) {
    if (
      typeof valor !== "number" ||
      !Number.isFinite(valor) ||
      valor <= 0 ||
      valor > this.#quantidade
    ) {
      return false;
    }

    this.#quantidade -= valor;
    return true;
  }
}
