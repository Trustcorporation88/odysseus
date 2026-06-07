# 📚 Guia do Usuário Odysseus

Bem-vindo ao **Odysseus** — seu espaço de trabalho de IA auto-hospedado. Este guia explica todas as funcionalidades e como usá-las.

---

## 🎯 Visão Geral Rápida

| Funcionalidade | O que faz | Melhor para |
|---|---|---|
| **Chat** | Converse com modelos de IA | Perguntas rápidas, brainstorming |
| **Agent** | IA automatiza tarefas com ferramentas | Workflows complexos, operações em arquivos |
| **Cookbook** | Descubra e execute modelos de IA locais | Executar modelos no seu hardware |
| **Deep Research** | Pesquisa multi-etapa com síntese | Análise profunda, síntese |
| **Compare** | Teste modelos lado a lado | Avaliação de modelos |
| **Documents** | Colabore com IA em textos | Escrita, edição, markdown |
| **Memory & Skills** | Aprendizado persistente da IA | Contexto de longo prazo, habilidades customizadas |
| **Email** | Caixa de entrada inteligente IMAP/SMTP | Triagem, resumos, auto-respostas |
| **Notes & Tasks** | Notas rápidas com lembretes | Planejamento diário, rastreamento |
| **Calendar** | Calendário local-first com CalDAV | Eventos, lembretes, integração com IA |

---

## 💬 Chat

### O que é?
Uma conversa em tempo real com modelos de IA — similar ao ChatGPT, mas você controla quais modelos e onde os dados vivem.

### Como usar:
1. Abra **Chat** na barra lateral
2. Selecione um modelo no dropdown (ou configure um em Configurações)
3. Digite sua mensagem e pressione **Enter**
4. IA responde em tempo real

### Funcionalidades:
- ✅ **Respostas em stream** — veja a IA pensando em tempo real
- ✅ **Contexto multi-turno** — IA lembra do histórico da conversa
- ✅ **Troca de modelos** — mude de modelos durante a conversa
- ✅ **Histórico de sessões** — todos os chats salvos automaticamente
- ✅ **Copiar/editar mensagens** — refine seus prompts

### Modelos Suportados:
- **Locais:** Ollama, llama.cpp, vLLM
- **API:** OpenAI, DeepSeek, Groq, Claude, Anthropic
- **Veja Configurações → API Endpoints** para adicionar mais

### Dicas Profissionais:
- Use **@mention** para referenciar documentos ou arquivos
- Cole código para análise — IA entende contexto
- Respostas longas? Use **Compare** para testar múltiplos modelos

---

## 🤖 Agent

### O que é?
Uma IA autônoma que pode **executar tarefas**, **acessar arquivos**, **executar código** e **usar ferramentas** — como ter um assistente incansável.

### Como usar:
1. Vá para a aba **Agent**
2. Descreva uma tarefa em linguagem natural
3. Veja funcionando — vai:
   - Fazer perguntas de esclarecimento
   - Examinar seus arquivos
   - Executar scripts/comandos
   - Chamar ferramentas conforme necessário
   - Reportar resultados

### O que pode fazer?
- 📁 **Operações de arquivos** — ler, escrever, buscar arquivos
- 🔧 **Shell/CLI** — executar scripts, comandos git, instalações
- 🌐 **Busca na web** — pesquisar tópicos, buscar dados
- 💾 **Memory** — lembrar skills e contexto passado
- 🔗 **Ferramentas** — integrações MCP, chamadas webhook
- 📊 **Multi-etapa** — workflows complexos automaticamente

### Exemplos:
```
"Analise este arquivo Python e sugira otimizações"
"Crie um README para meu projeto em docs/"
"Busque papers sobre transformers e resuma"
"Configure git nesta pasta e faça commit inicial"
"Extraia dados de CSV e crie um resumo em JSON"
```

### Segurança:
- ⚠️ Sempre revise comandos antes de executar
- ⚠️ Agent executa com suas permissões
- ⚠️ Algumas ações precisam de aprovação (ex: comandos shell)
- Veja **Configurações → Segurança** para restrições

---

## 📦 Cookbook

### O que é?
Um gerenciador inteligente de modelos que:
- Verifica seu hardware (RAM, GPU, CPU)
- Recomenda modelos que você pode executar
- Download e serve com um clique

### Como usar:
1. Vá para **Cookbook**
2. Clique **Escanear Hardware** (primeira vez)
3. Veja modelos recomendados
4. Clique **Download** ao lado do modelo
5. Clique **Servir** quando pronto
6. Use o modelo em Chat/Agent

### Formatos Suportados:
- **GGUF** — quantizado, eficiente (8GB RAM mínimo)
- **FP8/AWQ** — comprimido mas qualidade-focado
- **Precisão completa** — melhor qualidade, precisa GPU

### Requisitos de Hardware:
| Tamanho do Modelo | RAM Necessária | GPU Útil? |
|---|---|---|
| 7B | 8-16GB | Opcional |
| 13B | 16-32GB | Recomendado |
| 70B | 64GB+ | Necessário |

### Dicas Profissionais:
- Comece com modelos menores (7B)
- Serve via **Ollama** para trocar facilmente
- Monitore recursos em **Dependencies**

---

## 🔬 Deep Research

### O que é?
IA executa um **processo de pesquisa multi-etapa**:
1. Quebra sua pergunta
2. Busca fontes
3. Lê & sintetiza
4. Cria relatório visual

### Como usar:
1. Vá para **Deep Research**
2. Digite sua pergunta de pesquisa
3. Deixe a IA trabalhar (leva 2-5 min)
4. Revise o relatório gerado
5. Exporte como PDF ou markdown

### Saídas:
- 📊 Relatório visual com citações
- 📝 Resumo em markdown
- 🔗 Links de fontes
- 📈 Achados principais destacados

### Melhor para:
- Pesquisa de mercado
- Comparações de tecnologia
- Análise histórica
- Inteligência competitiva
- Aprender tópicos profundamente

---

## ⚖️ Compare

### O que é?
Teste múltiplos modelos **lado a lado com avaliação cega**:
- Você não vê qual modelo responde
- Classifique ambas as respostas
- Veja comparação final

### Como usar:
1. Vá para **Compare**
2. Adicione 2-4 modelos
3. Digite prompt de teste
4. Classifique cada resposta (✓/✗)
5. Veja matriz de comparação

### Casos de Uso:
- Qual modelo é melhor para suas necessidades?
- Um novo modelo supera o antigo?
- Vale a pena API paga vs modelo local?

### Resultados:
- Comparação de score cego
- Métricas de tempo de resposta
- Grade de suporte de funcionalidades
- Análise de custo

---

## 📄 Documents

### O que é?
Um **editor multi-aba** onde VOCÊ escreve e IA assiste (não o contrário):
- Markdown, HTML, CSV
- Destaque de sintaxe
- Sugestões de IA em tempo real
- Histórico de versões

### Como usar:
1. Vá para **Documents**
2. Clique **+ Novo Documento**
3. Selecione formato (Markdown, HTML, etc.)
4. Escreva seu conteúdo
5. Destaque texto → clique **✨ Assistência de IA**
6. Escolha ação (editar, expandir, resumir, etc.)

### Ações de IA:
- ✏️ **Editar** — refinar gramática/clareza
- 📝 **Expandir** — adicionar detalhes
- 📊 **Resumir** — condensar texto
- 🔍 **Explicar** — quebrar partes complexas
- 🎨 **Reformular** — mudar tom/estilo

### Formatos:
- **Markdown** — posts de blog, docs
- **HTML** — páginas web
- **CSV** — tabelas de dados
- **Texto plano** — notas

---

## 🧠 Memory & Skills

### O que é?
**Sistema de aprendizado persistente** para sua IA ficar mais inteligente:
- **Memory** — o que Agent aprende sobre você
- **Skills** — habilidades customizadas que você ensina

### Como usar:

#### Adicionar à Memory:
1. Vá para **Memory**
2. Clique **+ Adicionar Memory**
3. Escreva o que Agent deve lembrar
4. Agent usa isso em tarefas futuras

#### Criar Skills:
1. Vá para **Skills**
2. Clique **+ Nova Skill**
3. Defina:
   - Nome & descrição
   - Instruções (como fazer)
   - Exemplos
4. Agent chama skill quando relevante

### Exemplos:

**Memory:**
```
"Usuário prefere async/await sobre promises em JavaScript"
"Projetos usam Python 3.11 com FastAPI"
"Sempre adicione docstrings em funções"
```

**Skill:**
```
Nome: Formatar Código
Descrição: Aplicar formatação de código consistente
Instruções: Prettier para JS, Black para Python, rustfmt para Rust
```

### Armazenamento:
- 💾 Armazenado em ChromaDB (banco de dados vetorial)
- 🔐 Privado para sua instância
- 📤 Exporte/importe anytime

---

## 📧 Email

### O que é?
Caixa de entrada inteligente **IMAP/SMTP** com triagem de IA:
- Conecte qualquer conta de email
- Auto-categoriza com ML
- Alertas de emails urgentes
- Resumo de threads longas
- Rascunhos de respostas
- Filtro de spam

### Como usar:

#### Setup:
1. Vá para **Email Settings**
2. Adicione conta (Gmail, Outlook, etc.)
3. Conceda acesso IMAP/SMTP
4. Odysseus sincroniza automaticamente

#### Funcionalidades:
- 🏷️ **Auto-tag** — ML categoriza emails
- ⚡ **Alertas de urgência** — emails importantes destacados
- 📝 **Auto-summary** — TL;DR para threads longas
- ✍️ **Rascunhos de respostas** — IA sugere respostas
- 🚫 **Filtro de spam** — aprende suas preferências

#### Integração:
- 📅 **CalDAV-aware** — vê tempo agendado
- 🔔 **Notificações** — emails urgentes pop-up
- 🔐 **End-to-end** — credenciais encriptadas localmente

---

## 📝 Notes & Tasks

### O que é?
**Anotações rápidas + lista de tarefas** com lembretes e integração com agent.

### Como usar:

#### Notas:
1. Vá para **Notes**
2. Clique **+ Nova Nota**
3. Escreva nota, adicione tags
4. Configure horário de lembrete
5. Receba notificação (browser/email/ntfy)

#### Tarefas:
1. Vá para **Tasks**
2. Clique **+ Nova Tarefa**
3. Adicione itens checklist
4. Configure data de vencimento
5. Agent pode executar tarefas automaticamente (agendadas)

### Funcionalidades:
- ✅ **Checklists** — rastreie progresso
- 🔔 **Lembretes** — ntfy/email/browser
- 🏷️ **Tags** — organize notas
- 🤖 **Automação Agent** — tarefas agendadas automáticas
- 📱 **Mobile-friendly** — funciona bem no celular

### Tarefas Agendadas:
```
Exemplo: "Toda segunda-feira, baixe dados de vendas da API"
Odysseus executa a tarefa automaticamente via Agent
```

---

## 📅 Calendar

### O que é?
**Calendário local-first** com sincronização CalDAV para Apple/Google/Nextcloud:
- Eventos pessoais
- Calendários compartilhados
- Integração com Agent
- Lembretes

### Como usar:

#### Criar Evento:
1. Vá para **Calendar**
2. Clique em data/hora
3. Adicione detalhes do evento
4. Configure lembrete
5. Salve

#### Sincronizar Calendários:
1. Vá para **Calendar Settings**
2. Clique **+ Adicionar Calendário**
3. Escolha provider (Apple, Google, Nextcloud, etc.)
4. Conceda acesso
5. Sincroniza automaticamente

### Funcionalidades:
- 🔄 **Sincronização bidirecional** — mudanças sincronizam
- 🎨 **Calendários codificados por cor** — organize visualmente
- 🤖 **Integração com Agent** — IA vê seu agendamento
- 📱 **Mobile-friendly** — design responsivo
- 🌍 **Suporte a timezone** — detecção automática

---

## ⚙️ Configurações

### O que você pode configurar:

#### API Endpoints
- Adicionar providers LLM (OpenAI, DeepSeek, etc.)
- Configurar base URLs & API keys
- Definir modelos padrão
- Testar conexões

#### Autenticação
- Ativar/desativar login
- Adicionar usuários
- Definir permissões
- Timeout de sessão

#### Integrações
- Contas de email (IMAP/SMTP)
- Providers de calendário (CalDAV)
- Busca na web (SearXNG)
- Webhooks customizados

#### Preferências
- Tema (claro/escuro/custom)
- Idioma
- Timezone
- Modelos padrão

#### Segurança
- Setup 2FA
- Gerenciamento de API keys
- Origens CORS
- Chaves de encriptação

---

## 🚀 Dicas & Truques Profissionais

### 1. Atalhos de Teclado
- `Ctrl+K` — Paleta de comandos
- `Ctrl+/` — Buscar em funcionalidades
- `Ctrl+Shift+S` — Configurações
- `Esc` — Fechar modais

### 2. Use Referências
- Digite `@` em chat/agent para referenciar:
  - Documentos
  - Arquivos
  - Notas
  - Sessões passadas

### 3. Encadeie Operações
- Chat → destaque → Documento
- Research → salve em Memory
- Saída de Agent → Evento de Calendar
- Rascunho de Email → Documento

### 4. Operações em Lote
- Multi-select tarefas/notas
- Tag em lote
- Exportar em lote

### 5. Workflows Avançados
```
Workflow: Relatório Semanal
1. Agent: Coletar dados de vendas (tarefa agendada)
2. Deep Research: Analisar tendências
3. Document: Escrever relatório com assistência de IA
4. Email: Auto-enviar para stakeholders
```

---

## ❓ Perguntas Frequentes

**P: Meus dados são privados?**
R: Sim! Odysseus roda no seu hardware. Dados nunca saem da sua máquina a menos que você explicitamente envie (ex: chamadas API para OpenAI).

**P: Posso rodar offline?**
R: Principalmente sim. Use modelos locais (Ollama) + desative busca na web. Modelos apenas de API precisam internet.

**P: Como faço backup dos meus dados?**
R: Dados estão em `data/app.db` (SQLite). Faça backup desse arquivo. Ou exporte notas/documentos regularmente.

**P: Posso sincronizar entre dispositivos?**
R: Sim! Use CalDAV para calendário, ou self-host atrás de reverse proxy (HTTPS).

**P: Qual é a diferença entre Chat e Agent?**
R: Chat é conversacional. Agent é autônomo — toma decisões, executa código, acessa arquivos.

---

## 🆘 Troubleshooting

### Modelo não conecta
1. Verifique **Configurações → API Endpoints**
2. Clique botão de teste de conexão
3. Verifique API key
4. Verifique rede/firewall

### Emails não sincronizam
1. Vá para **Email Settings**
2. Clique **Re-autenticar**
3. Conceda permissões novamente
4. Verifique que mailbox não está cheio

### Tarefas de Agent falham
1. Verifique **Configurações → Segurança** permissões
2. Revise resposta do Agent para erro
3. Tente tarefa mais simples primeiro
4. Verifique logs

### Memory/Skills não funcionam
1. Verifique que ChromaDB está rodando
2. Tente re-adicionar item de memory
3. Reinicie Odysseus
4. Verifique logs do banco de dados

---

## 📖 Saiba Mais

- **Configurações** — Guias de setup detalhado por serviço
- **Sobre** — Informações de versão, contribuidores
- **GitHub** — Código-fonte: [Trustcorporation88/odysseus](https://github.com/Trustcorporation88/odysseus)
- **Docs** — Documentação técnica em repo `/docs`

---

**Feliz explorando! 🚀 Odysseus é tão poderoso quanto você o fizer.**
