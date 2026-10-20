import { Epi } from "../model/Epi.js";
import {
  atualizarEpi as substituirEpi,
  buscarEpiPorIndice,
  cadastrarEpi as armazenarEpi,
  excluirEpi as removerEpi,
  listarEpis as obterEpis,
} from "../repository/epiRepository.js";

export function cadastrarEpi(codigo, nome, numeroCA, quantidade) {
  const epi = new Epi(codigo, nome, numeroCA, quantidade);
  armazenarEpi(epi);
  console.log(`EPI "${nome}" cadastrado com sucesso.`);
  return epi;
}

export function listarEpis() {
  const epis = obterEpis();

  if (epis.length === 0) {
    console.log("Nenhum EPI cadastrado.");
    return epis;
  }

  console.log("\nEPIs cadastrados:");
  for (let indice = 0; indice < epis.length; indice++) {
    const epi = epis[indice];
    console.log(
      `[${indice}] Código: ${epi.codigo} | Nome: ${epi.nome} | CA: ${epi.numeroCA} | Quantidade: ${epi.quantidade}`,
    );
  }

  return epis;
}

export function buscarEpi(indice) {
  const epi = buscarEpiPorIndice(indice);

  if (epi === undefined) {
    console.log(`Não existe EPI no índice ${indice}.`);
    return undefined;
  }

  console.log(
    `EPI encontrado no índice ${indice}: ${epi.nome} (código ${epi.codigo}).`,
  );
  return epi;
}

export function atualizarEpi(indice, codigo, nome, numeroCA, quantidade) {
  if (buscarEpiPorIndice(indice) === undefined) {
    console.log(`Não existe EPI no índice ${indice}.`);
    return false;
  }

  const epiAtualizado = new Epi(codigo, nome, numeroCA, quantidade);
  substituirEpi(indice, epiAtualizado);
  console.log(`EPI do índice ${indice} atualizado com sucesso.`);
  return true;
}

export function excluirEpi(indice) {
  if (buscarEpiPorIndice(indice) === undefined) {
    console.log(`Não existe EPI no índice ${indice}.`);
    return false;
  }

  removerEpi(indice);
  console.log(`EPI do índice ${indice} excluído com sucesso.`);
  return true;
}

export function adicionarQuantidade(indice, valor) {
  const epi = buscarEpiPorIndice(indice);

  if (epi === undefined) {
    console.log(`Não existe EPI no índice ${indice}.`);
    return false;
  }

  if (!epi.adicionarQuantidade(valor)) {
    console.log("Não foi possível adicionar: informe um valor maior que zero.");
    return false;
  }

  console.log(`Estoque atualizado. Quantidade atual: ${epi.quantidade}.`);
  return true;
}

export function retirarQuantidade(indice, valor) {
  const epi = buscarEpiPorIndice(indice);

  if (epi === undefined) {
    console.log(`Não existe EPI no índice ${indice}.`);
    return false;
  }

  if (!epi.retirarQuantidade(valor)) {
    console.log(
      "Não foi possível retirar: informe um valor válido e não superior ao estoque disponível.",
    );
    return false;
  }

  console.log(`Estoque atualizado. Quantidade atual: ${epi.quantidade}.`);
  return true;
}
