// Overlay de instruções integrado ao Odysseus
// Mostra um guia rápido quando o usuário abre

window.HELP_OVERLAY = {
  shown: false,

  init() {
    if (!this.shown) {
      setTimeout(() => this.show(), 1500);
    }
  },

  show() {
    if (this.shown) return;
    this.shown = true;

    const overlay = document.createElement('div');
    overlay.id = 'help-overlay';
    overlay.className = 'help-overlay-visible';

    const tools = [
      { key: 'chat',     emoji: '💬', name: 'Chat',       desc: 'Conversa com IA' },
      { key: 'search',   emoji: '🔍', name: 'Pesquisa',   desc: 'Busca na internet' },
      { key: 'document', emoji: '📄', name: 'Documentos', desc: 'Editor com IA' },
      { key: 'email',    emoji: '📧', name: 'Email',      desc: 'Gerenciar inbox' },
      { key: 'calendar', emoji: '📅', name: 'Calendário', desc: 'Seus eventos' },
      { key: 'cookbook', emoji: '🍳', name: 'Catálogo',   desc: 'IA local' },
      { key: 'compare',  emoji: '⚖️', name: 'Comparar',   desc: 'Teste modelos' },
      { key: 'gallery',  emoji: '🎨', name: 'Galeria',    desc: 'Gerar imagens' },
      { key: 'memory',   emoji: '💭', name: 'Memória',    desc: 'IA aprende sobre você' },
      { key: 'notes',    emoji: '📝', name: 'Notas',      desc: 'Anotações' },
    ];

    const gridHtml = tools.map(t => `
      <div class="help-tool" data-tool="${t.key}">
        <span class="help-emoji">${t.emoji}</span>
        <strong>${t.name}</strong>
        <small>${t.desc}</small>
      </div>
    `).join('');

    overlay.innerHTML = `
      <div class="help-overlay-bg"></div>
      <div class="help-overlay-modal">
        <button class="help-overlay-close">✕</button>
        <h2>🚀 Bem-vindo ao Odysseus!</h2>
        <p>Uma plataforma com 10 ferramentas de IA em um único lugar.</p>
        <div class="help-tools-grid">${gridHtml}</div>
        <div class="help-overlay-actions">
          <button class="help-btn-primary">Entendi! Começar</button>
          <button class="help-btn-secondary">📖 Ver Guia Completo</button>
        </div>
        <p class="help-overlay-footer">
          💡 Clique em <strong>?</strong> no canto superior direito para ver dicas a qualquer momento
        </p>
      </div>
    `;

    document.body.appendChild(overlay);

    // Event listeners — sem inline onclick para evitar problemas de escopo
    overlay.querySelector('.help-overlay-bg').addEventListener('click', () => this.close());
    overlay.querySelector('.help-overlay-close').addEventListener('click', () => this.close());
    overlay.querySelector('.help-btn-primary').addEventListener('click', () => this.close());
    overlay.querySelector('.help-btn-secondary').addEventListener('click', () => this.openDocs());

    // Cada card de ferramenta
    overlay.querySelectorAll('.help-tool').forEach(card => {
      card.addEventListener('click', () => {
        const tool = card.getAttribute('data-tool');
        this.navigate(tool);
      });
    });
  },

  close() {
    const overlay = document.getElementById('help-overlay');
    if (overlay) overlay.remove();
  },

  openDocs() {
    this.close();
    window.location.hash = '#docs/COMO_USAR.md';
  },

  navigate(tool) {
    this.close();

    const actions = {
      'chat':     () => { window.location.hash = ''; },
      'search':   () => { document.getElementById('tool-research-btn')?.click(); },
      'document': () => { document.getElementById('overflow-doc-btn')?.click(); },
      'email':    () => { window.location.href = '/email'; },
      'calendar': () => { document.getElementById('tool-calendar-btn')?.click(); },
      'cookbook': () => { document.getElementById('tool-cookbook-btn')?.click(); },
      'compare':  () => { document.getElementById('tool-compare-btn')?.click(); },
      'gallery':  () => { document.getElementById('tool-gallery-btn')?.click(); },
      'memory':   () => { document.getElementById('tool-memory-btn')?.click(); },
      'notes':    () => { document.getElementById('tool-notes-btn')?.click(); },
    };

    const action = actions[tool];
    if (action) setTimeout(action, 200);
  }
};

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.HELP_OVERLAY.init());
} else {
  window.HELP_OVERLAY.init();
}
