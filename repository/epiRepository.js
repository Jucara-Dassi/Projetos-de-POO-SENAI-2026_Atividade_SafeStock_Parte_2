const epis = [];

export function cadastrarEpi(epi) {
  epis.push(epi);
  return epi;
}

export function listarEpis() {
  return epis;
}

export function buscarEpiPorIndice(indice) {
  return epis[indice];
}

export function atualizarEpi(indice, epi) {
  if (buscarEpiPorIndice(indice) === undefined) {
    return false;
  }

  epis[indice] = epi;
  return true;
}

export function excluirEpi(indice) {
  if (buscarEpiPorIndice(indice) === undefined) {
    return false;
  }

  epis.splice(indice, 1);
  return true;
}
