// Overlay de instruções integrado ao Odysseus
// Mostra um guia rápido quando o usuário abre pela primeira vez

const HELP_OVERLAY = {
  shown: false,

  init() {
    // Mostrar overlay após a página carregar completamente
    // Aguarda 1.5s para garantir que tudo está pronto
    if (!this.shown) {
      const timer = setTimeout(() => {
        console.log('[HELP_OVERLAY] Iniciando...');
        this.show();
      }, 1500);
    }
  },

  show() {
    if (this.shown) return;
    this.shown = true;

    console.log('[HELP_OVERLAY] Criando overlay...');

    const overlay = document.createElement('div');
    overlay.id = 'help-overlay';
    overlay.className = 'help-overlay-visible'; // Classe para garantir visibilidade
    overlay.innerHTML = `
      <div class="help-overlay-bg"></div>
      <div class="help-overlay-modal">
        <button class="help-overlay-close">✕</button>
        
        <h2>🚀 Bem-vindo ao Odysseus!</h2>
        <p>Uma plataforma com 10 ferramentas de IA em um único lugar.</p>
        
        <div class="help-tools-grid">
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('chat')">
            <span class="help-emoji">💬</span>
            <strong>Chat</strong>
            <small>Conversa com IA</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('search')">
            <span class="help-emoji">🔍</span>
            <strong>Pesquisa</strong>
            <small>Busca na internet</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('document')">
            <span class="help-emoji">📄</span>
            <strong>Documentos</strong>
            <small>Editor com IA</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('email')">
            <span class="help-emoji">📧</span>
            <strong>Email</strong>
            <small>Gerenciar inbox</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('calendar')">
            <span class="help-emoji">📅</span>
            <strong>Calendário</strong>
            <small>Seus eventos</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('cookbook')">
            <span class="help-emoji">🍳</span>
            <strong>Catálogo</strong>
            <small>IA local</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('compare')">
            <span class="help-emoji">⚖️</span>
            <strong>Comparar</strong>
            <small>Teste modelos</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('gallery')">
            <span class="help-emoji">🎨</span>
            <strong>Galeria</strong>
            <small>Gerar imagens</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('memory')">
            <span class="help-emoji">💭</span>
            <strong>Memória</strong>
            <small>IA aprende sobre você</small>
          </div>
          <div class="help-tool" onclick="HELP_OVERLAY.navigate('notes')">
            <span class="help-emoji">📝</span>
            <strong>Notas</strong>
            <small>Anotações</small>
          </div>
        </div>

        <div class="help-overlay-actions">
          <button class="help-btn-primary" onclick="HELP_OVERLAY.close()">Entendi! Começar</button>
          <button class="help-btn-secondary" onclick="HELP_OVERLAY.openDocs()">📖 Ver Guia Completo</button>
        </div>

        <p class="help-overlay-footer">
          💡 Clique em <strong>❓</strong> no canto superior direito para ver dicas a qualquer momento
        </p>
      </div>
    `;

    document.body.appendChild(overlay);
    console.log('[HELP_OVERLAY] Overlay adicionado ao DOM');

    // Adicionar event listeners
    const bg = overlay.querySelector('.help-overlay-bg');
    const closeBtn = overlay.querySelector('.help-overlay-close');
    
    if (bg) {
      bg.addEventListener('click', () => this.close());
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Animar entrada
    setTimeout(() => {
      const modal = overlay.querySelector('.help-overlay-modal');
      if (modal) {
        modal.classList.add('show');
        console.log('[HELP_OVERLAY] Animação iniciada');
      }
    }, 100);
  },

  close() {
    const overlay = document.getElementById('help-overlay');
    if (overlay) {
      const modal = overlay.querySelector('.help-overlay-modal');
      modal.classList.remove('show');
      setTimeout(() => overlay.remove(), 300);
    }
  },

  openDocs() {
    // Redireciona para a documentação
    window.location.hash = '#docs/COMO_USAR.md';
    this.close();
  },

  navigate(tool) {
    // Fecha o overlay e navega para a ferramenta
    this.close();
    
    // Mapeia cada ferramenta para seu botão ou rota
    const toolMap = {
      'chat': () => {
        // Chat é a página principal — limpar hash
        window.location.hash = '';
      },
      'search': () => {
        // Pesquisa (research)
        const btn = document.getElementById('tool-research-btn');
        if (btn) btn.click();
      },
      'document': () => {
        // Documentos
        const btn = document.getElementById('overflow-doc-btn');
        if (btn) btn.click();
      },
      'email': () => {
        // Email route
        window.location.pathname = '/email';
      },
      'calendar': () => {
        // Calendário
        window.location.pathname = '/calendar';
      },
      'cookbook': () => {
        // Cookbook
        const btn = document.getElementById('tool-cookbook-btn');
        if (btn) btn.click();
      },
      'compare': () => {
        // Comparar
        const btn = document.getElementById('tool-compare-btn');
        if (btn) btn.click();
      },
      'gallery': () => {
        // Galeria
        window.location.pathname = '/gallery';
      },
      'memory': () => {
        // Memória
        const btn = document.getElementById('tool-memory-btn');
        if (btn) btn.click();
      },
      'notes': () => {
        // Notas
        window.location.pathname = '/notes';
      }
    };
    
    const action = toolMap[tool];
    if (action && typeof action === 'function') {
      setTimeout(action, 350); // Aguarda animação do overlay
    }
  }

}; // fim HELP_OVERLAY

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => HELP_OVERLAY.init());
} else {
  HELP_OVERLAY.init();
}
