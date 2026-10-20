import {
  adicionarQuantidade,
  atualizarEpi,
  buscarEpi,
  cadastrarEpi,
  excluirEpi,
  listarEpis,
  retirarQuantidade,
} from "./controller/epiController.js";

cadastrarEpi("EPI-001", "Capacete de segurança", "12345", 20);
cadastrarEpi("EPI-002", "Luva de proteção", "23456", 50);
cadastrarEpi("EPI-003", "Óculos de proteção", "34567", 30);

listarEpis();
buscarEpi(1);
adicionarQuantidade(1, 10);
retirarQuantidade(1, 5);
retirarQuantidade(1, 100);
atualizarEpi(2, "EPI-003", "Óculos de proteção ampla visão", "34567", 35);
excluirEpi(0);
listarEpis();
