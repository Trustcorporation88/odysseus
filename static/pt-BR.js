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
  
  // Actions
  "Send": "Enviar",
  "Save": "Salvar",
  "Cancel": "Cancelar", 
  "Delete": "Excluir",
  "Close": "Fechar",
  "Edit": "Editar",
  "Copy": "Copiar",
  "Download": "Baixar",
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

let lang = localStorage.getItem('odysseus_lang') || 'pt-BR';
let enabled = lang !== 'en-US';

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

console.log('Odysseus pt-BR loaded. Double-click Settings gear or Ctrl+Shift+L to toggle.');
