/**
 * Odysseus Sistema de Ajuda
 * Tooltips, ícones de ajuda e assistência inline para todas as funcionalidades
 */

const FEATURE_HELP = {
  // Serviço Chat
  chat: {
    title: "Chat",
    description: "Converse com modelos de IA em tempo real, assim como ChatGPT",
    tips: [
      "Selecione um modelo no dropdown",
      "Digite sua mensagem e pressione Enter",
      "Use @documento para referenciar arquivos",
      "Edite mensagens clicando nelas",
      "Clique 🔄 para regenerar respostas"
    ]
  },

  agent: {
    title: "Agent",
    description: "IA autônoma que executa tarefas, código e acessa arquivos",
    tips: [
      "Descreva o que você quer fazer",
      "Agent vai quebrar em passos",
      "Revise antes de executar comandos",
      "Use para workflows complexos",
      "Agent aprende com Memory & Skills"
    ]
  },

  cookbook: {
    title: "Cookbook",
    description: "Descubra e execute modelos de IA no seu hardware GRÁTIS",
    tips: [
      "Clique 'Escanear Hardware' para recomendações",
      "Download de modelos com um clique",
      "Modelos GGUF são mais eficientes",
      "Servir múltiplos modelos simultaneamente",
      "Monitore uso de recursos em Dependências"
    ]
  },

  research: {
    title: "Deep Research",
    description: "Pesquisa multi-etapa com fontes e síntese de IA",
    tips: [
      "Faça perguntas de pesquisa complexas",
      "IA busca e lê fontes",
      "Espere 2-5 minutos pelos resultados",
      "Exporte como PDF ou markdown",
      "Perfeito para pesquisa de mercado, aprendizado"
    ]
  },

  compare: {
    title: "Comparar Modelos",
    description: "Teste modelos lado-a-lado com avaliação cega",
    tips: [
      "Selecione 2-4 modelos para comparar",
      "Mesmo prompt enviado para todos",
      "Classifique respostas sem viés",
      "Veja resultados detalhados de comparação",
      "Perfeito para seleção de modelo"
    ]
  },

  documents: {
    title: "Documentos",
    description: "Escreva com assistência de IA - markdown, HTML, CSV",
    tips: [
      "Você escreve, IA ajuda",
      "Destaque texto → clique ✨",
      "Escolha: Editar, Expandir, Resumir",
      "Editor multi-aba com histórico de versões",
      "Exporte como markdown/PDF/HTML"
    ]
  },

  memory: {
    title: "Memory & Skills",
    description: "Ensine o Agent sobre você - aprendizado persistente",
    tips: [
      "Memory = fatos que Agent lembra",
      "Skills = habilidades que você ensina",
      "Agent aplica automaticamente",
      "Melhora com o tempo",
      "Compartilhe skills com sua equipe"
    ]
  },

  email: {
    title: "Email",
    description: "Caixa de entrada inteligente com triagem, resumos e auto-respostas",
    tips: [
      "Conecte qualquer conta IMAP",
      "IA auto-marca emails (Urgente, Trabalho, etc)",
      "Receba alertas de emails importantes",
      "Auto-resumo de threads longas",
      "Rascunhos de respostas com assistência de IA"
    ]
  },

  notes: {
    title: "Notas & Tarefas",
    description: "Notas rápidas com lembretes e listas de tarefas",
    tips: [
      "Crie notas com tags",
      "Configure lembretes (browser, email)",
      "Crie tarefas com datas de vencimento",
      "Use checklists para rastreamento",
      "Agenda tarefas para Agent executar"
    ]
  },

  calendar: {
    title: "Calendário",
    description: "Calendário local-first com sincronização CalDAV",
    tips: [
      "Clique na data para criar evento",
      "Configure lembretes para notificações",
      "Sincronize com Apple, Google, Nextcloud",
      "Calendários com código de cores",
      "Agent ciente do seu agendamento"
    ]
  },

  settings: {
    title: "Configurações",
    description: "Configure modelos, integrações, preferências",
    tips: [
      "Adicione API Endpoints para modelos",
      "Conecte contas de email, calendário",
      "Customize tema e idioma",
      "Gerencie usuários e permissões",
      "Configure opções de segurança"
    ]
  }
};

/**
 * Configuração de Tooltips para Elementos da UI
 * Usado para exibir texto de ajuda ao passar o mouse ou clicar
 */
const UI_TOOLTIPS = {
  modelSelector: {
    label: "Seleção de Modelo",
    text: "Escolha qual modelo de IA usar. Mude a qualquer momento durante a conversa.",
    learnMore: "/docs/services/chat.md"
  },

  temperatureSetting: {
    label: "Temperatura",
    text: "0 = consistente, 1 = criativo/aleatório. Comece com 0.7 para equilíbrio.",
    learnMore: "/docs/GUIA_USUARIO.md#chat"
  },

  systemPrompt: {
    label: "System Prompt",
    text: "Instruções que moldam como a IA se comporta. Defina seu papel e diretrizes.",
    learnMore: "/docs/services/chat.md#system-prompt"
  },

  agentPermissions: {
    label: "Permissões do Agent",
    text: "O que Agent pode fazer: comandos shell, acesso a arquivos, memory. Escolha no que confiar.",
    learnMore: "/docs/services/agent.md#safety"
  },

  memoryAdd: {
    label: "Adicionar Memory",
    text: "Diga ao Agent algo para lembrar para sempre. Ex: 'Sempre use async/await'.",
    learnMore: "/docs/services/memory.md"
  },

  skillCreate: {
    label: "Criar Skill",
    text: "Ensine ao Agent uma habilidade reutilizável. Ex: 'Deploy para Produção'.",
    learnMore: "/docs/services/memory.md#skills"
  },

  emailAutoTag: {
    label: "Auto-Marcação",
    text: "ML categoriza emails automaticamente. Customize tags em Configurações.",
    learnMore: "/docs/services/email.md#auto-tagging"
  },

  taskSchedule: {
    label: "Tarefas Agendadas",
    text: "Agent executa tarefas automaticamente. Use sintaxe CRON. Ex: '0 9 * * 1' = 9 AM segundas.",
    learnMore: "/docs/services/notes.md#scheduled-tasks"
  },

  calendarSync: {
    label: "Sincronização de Calendário",
    text: "Sincronização bidirecional com Apple, Google, Nextcloud ou Radicale CalDAV.",
    learnMore: "/docs/services/calendar.md#syncing"
  },

  documentAIAssist: {
    label: "Assistência de IA",
    text: "Destaque texto → escolha Editar, Expandir, Resumir, Reformular ou Explicar.",
    learnMore: "/docs/services/documents.md#ai-assist"
  }
};

/**
 * Tour de Funcionalidades (Onboarding na Primeira Visita)
 * Mostra aos novos usuários como cada funcionalidade funciona
 */
const FEATURE_TOUR = {
  steps: [
    {
      element: "[data-tour='chat']",
      title: "💬 Chat",
      content: "Comece aqui! Converse com modelos de IA como no ChatGPT. Selecione um modelo e pergunte qualquer coisa.",
      action: "Próximo"
    },
    {
      element: "[data-tour='agent']",
      title: "🤖 Agent",
      content: "Quer que a IA faça o trabalho? Agent executa tarefas, código e workflows complexos automaticamente.",
      action: "Próximo"
    },
    {
      element: "[data-tour='cookbook']",
      title: "📦 Cookbook",
      content: "Execute modelos de IA GRÁTIS no seu hardware. Download, serve, use. Sem custos de API!",
      action: "Próximo"
    },
    {
      element: "[data-tour='documents']",
      title: "📄 Documentos",
      content: "Escreva com assistência de IA. Você escreve, IA ajuda a editar, expandir ou melhorar seu texto.",
      action: "Próximo"
    },
    {
      element: "[data-tour='memory']",
      title: "🧠 Memory",
      content: "Ensine o Agent sobre você. Ele aprende e aplica suas preferências automaticamente.",
      action: "Próximo"
    },
    {
      element: "[data-tour='settings']",
      title: "⚙️ Configurações",
      content: "Adicione API keys, conecte email/calendário, customize o comportamento. Tudo configurável.",
      action: "Pronto!"
    }
  ],

  initialize() {
    const hasSeenTour = localStorage.getItem('odysseus_tour_completed');
    
    if (!hasSeenTour) {
      this.showWelcomeModal();
    }
  },

  showWelcomeModal() {
    const modal = document.createElement('div');
    modal.className = 'odysseus-welcome-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>✨ Bem-vindo ao Odysseus!</h2>
        <p>Seu espaço de trabalho de IA auto-hospedado. Vamos fazer um tour rápido das funcionalidades principais (2 min).</p>
        <div class="modal-buttons">
          <button class="btn-primary" onclick="FEATURE_TOUR.startTour()">Iniciar Tour</button>
          <button class="btn-secondary" onclick="FEATURE_TOUR.skipTour()">Pular por Agora</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  startTour() {
    console.log('Iniciando tour de funcionalidades...');
    localStorage.setItem('odysseus_tour_started', 'true');
  },

  skipTour() {
    localStorage.setItem('odysseus_tour_completed', 'true');
    document.querySelector('.odysseus-welcome-modal')?.remove();
  }
};

/**
 * Funções de Ajuda
 */
function getFeatureHelp(featureName) {
  return FEATURE_HELP[featureName] || null;
}

function getTooltip(elementId) {
  return UI_TOOLTIPS[elementId] || null;
}

function showTooltip(element, tooltip) {
  const tooltipEl = document.createElement('div');
  tooltipEl.className = 'odysseus-tooltip';
  tooltipEl.innerHTML = `
    <div class="tooltip-header">${tooltip.label}</div>
    <div class="tooltip-text">${tooltip.text}</div>
    ${tooltip.learnMore ? `<a href="${tooltip.learnMore}" class="tooltip-link">Saiba Mais →</a>` : ''}
  `;
  element.appendChild(tooltipEl);
}

// Inicializar ao carregar página
document.addEventListener('DOMContentLoaded', () => {
  FEATURE_TOUR.initialize();
  
  // Adicionar ícones de ajuda a todos os elementos de funcionalidade
  document.querySelectorAll('[data-feature]').forEach(el => {
    const featureName = el.getAttribute('data-feature');
    const help = getFeatureHelp(featureName);
    
    if (help) {
      const helpIcon = document.createElement('span');
      helpIcon.className = 'help-icon';
      helpIcon.innerHTML = '❓';
      helpIcon.title = help.description;
      helpIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        showFeatureModal(featureName, help);
      });
      el.appendChild(helpIcon);
    }
  });
});

/**
 * Mostrar Modal de Ajuda de Funcionalidade
 */
function showFeatureModal(featureName, help) {
  const modal = document.createElement('div');
  modal.id = 'feature-modal-' + featureName;
  modal.className = 'feature-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">✕</button>
      <h2>${help.title}</h2>
      <p class="description">${help.description}</p>
      <div class="tips">
        <h3>Dicas Rápidas:</h3>
        <ul>
          ${help.tips.map(tip => `<li>💡 ${tip}</li>`).join('')}
        </ul>
      </div>
      <a href="/docs/services/${featureName}.md" class="learn-more-btn">
        Ler Guia Completo →
      </a>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Fechar ao clicar no X
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });
  
  // Fechar ao clicar no overlay
  modal.querySelector('.modal-overlay').addEventListener('click', () => {
    modal.remove();
  });
}

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FEATURE_HELP, UI_TOOLTIPS, FEATURE_TOUR, getFeatureHelp, getTooltip };
}
