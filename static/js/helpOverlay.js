// Overlay de instruções integrado ao Odysseus
// Mostra um guia rápido quando o usuário abre pela primeira vez

const HELP_OVERLAY = {
  shown: false,

  init() {
    // Verifique se o usuário já viu o overlay
    // Mostrar sempre por agora para testes (remover depois)
    if (!this.shown) {
      setTimeout(() => this.show(), 1200);
      localStorage.setItem('odysseus_help_overlay_shown', 'true');
    }
  },

  show() {
    if (this.shown) return;
    this.shown = true;

    const overlay = document.createElement('div');
    overlay.id = 'help-overlay';
    overlay.innerHTML = `
      <div class="help-overlay-bg" onclick="HELP_OVERLAY.close()"></div>
      <div class="help-overlay-modal">
        <button class="help-overlay-close" onclick="HELP_OVERLAY.close()">✕</button>
        
        <h2>🚀 Bem-vindo ao Odysseus!</h2>
        <p>Uma plataforma com 10 ferramentas de IA em um único lugar.</p>
        
        <div class="help-tools-grid">
          <div class="help-tool">
            <span class="help-emoji">💬</span>
            <strong>Chat</strong>
            <small>Conversa com IA</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">🔍</span>
            <strong>Pesquisa</strong>
            <small>Busca na internet</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">📄</span>
            <strong>Documentos</strong>
            <small>Editor com IA</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">📧</span>
            <strong>Email</strong>
            <small>Gerenciar inbox</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">📅</span>
            <strong>Calendário</strong>
            <small>Seus eventos</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">🍳</span>
            <strong>Catálogo</strong>
            <small>IA local</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">⚖️</span>
            <strong>Comparar</strong>
            <small>Teste modelos</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">🎨</span>
            <strong>Galeria</strong>
            <small>Gerar imagens</small>
          </div>
          <div class="help-tool">
            <span class="help-emoji">💭</span>
            <strong>Memória</strong>
            <small>IA aprende sobre você</small>
          </div>
          <div class="help-tool">
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

    // Animar entrada
    setTimeout(() => {
      const modal = overlay.querySelector('.help-overlay-modal');
      modal.classList.add('show');
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
  }
};

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => HELP_OVERLAY.init());
} else {
  HELP_OVERLAY.init();
}
