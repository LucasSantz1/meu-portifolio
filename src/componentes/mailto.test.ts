// Roda com: npm test (usa o executor de testes nativo do Node).
import assert from "node:assert/strict";
import { test } from "node:test";
import { montarMailto } from "./mailto.ts";

test("monta assunto com o nome e assina a mensagem", () => {
  const link = montarMailto("eu@x.com", "Contato pelo portfólio", "Ana", "ana@empresa.com", "Oi & tchau?");
  const url = new URL(link);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "eu@x.com");
  assert.equal(url.searchParams.get("subject"), "Contato pelo portfólio - Ana");
  assert.equal(url.searchParams.get("body"), "Oi & tchau?\n\nAna\nana@empresa.com");
});

test("sem nome nem e-mail, não acrescenta assinatura", () => {
  const url = new URL(montarMailto("eu@x.com", "Contato", "", "", "Olá"));
  assert.equal(url.searchParams.get("subject"), "Contato");
  assert.equal(url.searchParams.get("body"), "Olá");
});
