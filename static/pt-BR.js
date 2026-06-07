// Odysseus pt-BR Translation Overlay
// Injects Portuguese translations into the UI after page load

const PT = {
  // Sidebar
  "New Chat": "Novo Chat",
  "Search": "Buscar",
  "new": "novo",
  "Brain": "Memória",
  "Calendar": "Calendário",
  "Compare": "Comparar",
  "Cookbook": "Catálogo",
  "Deep Research": "Pesquisa Profunda", 
  "Gallery": "Galeria",
  "Library": "Biblioteca",
  "Notes": "Notas",
  "Tasks": "Tarefas",
  "Theme": "Tema",
  "Settings": "Configurações",
  "Documents": "Documentos",
  "Chat": "Chat",
  "Email": "Email",
  
  // Welcome
  "Welcome to Odysseus": "Bem-vindo ao Odysseus",
  "Start a new chat": "Iniciar novo chat",
  
  // Cookbook (from image)
  "Download": "Baixar",
  "Serve": "Servir",
  "Dependencies": "Dependências",
  "add server": "adicionar servidor",
  "Trending models that fit your hardware": "Modelos em alta que funcionam no seu hardware",
  "Scan / Download": "Escanear / Baixar",
  "Scans your hardware for what models you can run": "Escaneia seu hardware para descobrir quais modelos você pode executar",
  "Select model": "Selecionar modelo",
  "Standard": "Padrão",
  "Engine": "Engine",
  "Context": "Contexto",
  "Quant": "Quantização",
  "Local": "Local",
  "RESCAN": "ESCANEAR",
  "EDIT": "EDITAR",
  "Detected hardware": "Hardware detectado",
  "No GPU": "Sem GPU",
  "Search models...": "Buscar modelos...",
  
  // Actions
  "Send": "Enviar",
  "Save": "Salvar",
  "Cancel": "Cancelar", 
  "Delete": "Excluir",
  "Close": "Fechar",
  "Edit": "Editar",
  "Copy": "Copiar",
  "Upload": "Enviar",
  "Refresh": "Atualizar",
  "Export": "Exportar",
  "Import": "Importar",
  "Create": "Criar",
  "Add": "Adicionar",
  "Remove": "Remover",
  "Rename": "Renomear",
  "Confirm": "Confirmar",
  "Retry": "Tentar novamente",
  
  // Settings
  "General": "Geral",
  "Models": "Modelos",
  "Providers": "Provedores",
  "API Keys": "Chaves API",
  "Account": "Conta",
  "Password": "Senha",
  "Language": "Idioma",
  "Display": "Visual",
  "Notifications": "Notificações",
  "About": "Sobre",
  
  // Email
  "Inbox": "Caixa de Entrada",
  "Sent": "Enviados",
  "Drafts": "Rascunhos",
  "Archive": "Arquivo",
  "Spam": "Spam",
  "Trash": "Lixeira",
  "Compose": "Escrever",
  "Reply": "Responder",
  "Forward": "Encaminhar",
  
  // Calendar
  "Today": "Hoje",
  "Week": "Semana",
  "Month": "Mês",
  "Year": "Ano",
  "Event": "Evento",
  "Add Event": "Adicionar Evento",
  "All Day": "Dia Inteiro",
  
  // Login
  "Login": "Entrar",
  "Logout": "Sair",
  "Username": "Usuário",
  "Sign In": "Entrar",
  "Sign in": "Entrar",
  
  // Common
  "Loading...": "Carregando...",
  "No results": "Sem resultados",
  "Please wait": "Aguarde",
  "Error": "Erro",
  "Success": "Sucesso",
  "Yes": "Sim",
  "No": "Não",
  "OK": "OK",
  "Back": "Voltar",
  "Next": "Próximo",
  "Previous": "Anterior",
};

// Default to Portuguese (pt-BR) unless explicitly set to English
let lang = localStorage.getItem('odysseus_lang') || 'pt-BR';
let enabled = true; // Always enabled by default

function translate(el) {
  if (!enabled) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'INPUT' || parent.tagName === 'TEXTAREA' || parent.closest('[contenteditable]')) continue;
    nodes.push(node);
  }
  for (const node of nodes) {
    for (const [en, pt] of Object.entries(PT)) {
      if (node.textContent === en) {
        node.textContent = pt;
        break;
      }
    }
  }
}

function toggleLang() {
  enabled = !enabled;
  lang = enabled ? 'pt-BR' : 'en-US';
  localStorage.setItem('odysseus_lang', lang);
  location.reload();
}

// Run on load and after mutations
setTimeout(() => translate(document.body), 500);
setTimeout(() => translate(document.body), 2000);
setTimeout(() => translate(document.body), 5000);

const observer = new MutationObserver(() => translate(document.body));
observer.observe(document.body, { childList: true, subtree: true, characterData: true });

// Add language toggle to settings gear
setTimeout(() => {
  const gear = document.querySelector('[title="Settings"]') || document.querySelector('.settings-icon');
  if (gear) {
    gear.addEventListener('dblclick', toggleLang);
    gear.title = 'Settings (double-click to toggle language)';
  }
  // Also listen for Ctrl+Shift+L
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
      toggleLang();
    }
  });
}, 3000);

// Help modal with all features
setTimeout(() => {
  const style = document.createElement('style');
  style.textContent = `.od-help{position:fixed;top:12px;right:16px;z-index:9999;width:36px;height:36px;border-radius:50%;background:#7c3aed;color:#fff;border:none;font-size:20px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}.od-help:hover{background:#6d28d9}.od-modal{display:none;position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.85);justify-content:center;align-items:center;padding:16px}.od-modal.open{display:flex}.od-modal-content{background:#1e1e1e;border:1px solid #333;border-radius:16px;padding:24px;max-width:520px;max-height:85vh;overflow-y:auto;color:#e0e0e0;font-size:13px;line-height:1.6}.od-modal-content h2{color:#7c3aed;margin:0 0 16px;font-size:20px}.od-modal-content h3{color:#a78bfa;margin:14px 0 6px;font-size:15px}.od-modal-content ul{margin:4px 0;padding-left:20px}.od-modal-content li{margin:3px 0}.od-modal-content .od-close{float:right;background:none;border:none;color:#999;font-size:22px;cursor:pointer}.od-modal-content .od-close:hover{color:#fff}`;
  document.head.appendChild(style);
  const btn = document.createElement('button'); btn.className='od-help'; btn.textContent='?'; btn.title='Ajuda';
  const modal = document.createElement('div'); modal.className='od-modal'; modal.id='odModal';
  modal.innerHTML = '<div class=od-modal-content><button class=od-close onclick=document.getElementById("odModal").classList.remove("open")>✕</button><h2>🧠 Odysseus — Guia</h2><h3>💬 Chat</h3><ul><li>Conversa com DeepSeek, Claude, Gemini</li><li>Suporta imagens (DALL-E) e documentos</li><li>Histórico salvo automaticamente</li></ul><h3>🔍 Deep Research</h3><ul><li>Pesquisa múltiplas fontes da web</li><li>Gera relatório visual completo</li><li>Ideal para análises e estudos</li></ul><h3>📄 Documentos</h3><ul><li>Editor de texto com AI assistindo</li><li>Markdown, HTML, CSV</li><li>Exporta PDF, Word, Excel</li></ul><h3>📧 Email</h3><ul><li>Lê emails (IMAP)</li><li>Classifica por urgência</li><li>Sugere respostas automáticas</li></ul><h3>📅 Calendário</h3><ul><li>Sincroniza Google/Apple/Nextcloud</li><li>Visão diária, semanal, mensal</li></ul><h3>🍳 Cookbook</h3><ul><li>Detecta GPU e recomenda modelos</li><li>Baixa e serve modelos automaticamente</li><li>Suporta Ollama, vLLM, llama.cpp</li></ul><h3>⚖️ Compare</h3><ul><li>Teste cego entre modelos</li><li>Compare respostas lado a lado</li></ul><h3>🎨 DESIGN.md</h3><ul><li>Crie sites com estilo profissional</li><li>Stripe, Apple, Nike, Spotify e mais</li><li>Arquivo na raiz do projeto</li></ul><h3>📐 Atalhos</h3><ul><li>Ctrl+Shift+L — Alternar idioma</li><li>Duplo clique no ⚙️ — Idioma</li></ul><p style="color:#7c3aed;margin-top:16px">Feito por TRUSTCORPORATION88</p></div>';
  btn.onclick = () => modal.classList.toggle('open');
  modal.onclick = e => { if(e.target===modal) modal.classList.remove('open'); };
  setTimeout(() => { document.body.appendChild(btn); document.body.appendChild(modal); }, 2000);
}, 2000);

console.log('Odysseus pt-BR loaded. Double-click Settings gear or Ctrl+Shift+L to toggle.');
