// static/js/settings-i18n.js — Settings panel i18n (English + Português)
import Storage from './storage.js';

const LOCALE_KEY = 'odysseus-settings-locale';

const NAV_KEYS = {
  services: 'nav.services',
  ai: 'nav.ai',
  search: 'nav.search',
  integrations: 'nav.integrations',
  email: 'nav.email',
  reminders: 'nav.reminders',
  appearance: 'nav.appearance',
  shortcuts: 'nav.shortcuts',
  account: 'nav.account',
  tools: 'nav.tools',
  users: 'nav.users',
  system: 'nav.system',
};

const MESSAGES = {
  en: {
    'settings.title': 'Settings',
    'settings.subtitle': 'Toggle on/off visibility of tools and modules across the interface.',
    'settings.peek': 'Peek',
    'settings.close': 'Close settings',
    'settings.admin': 'Admin',
    'nav.services': 'Add Models',
    'nav.ai': 'AI Defaults',
    'nav.search': 'Search',
    'nav.integrations': 'Integrations',
    'nav.email': 'Email',
    'nav.reminders': 'Reminders',
    'nav.appearance': 'Appearance',
    'nav.shortcuts': 'Shortcuts',
    'nav.account': 'Account',
    'nav.tools': 'Agent Tools',
    'nav.users': 'Users',
    'nav.system': 'System',
    'language.title': 'Language',
    'language.subtitle': 'Settings panel language. The rest of the app stays in English for now.',
    'language.label': 'Language',
    'common.endpoint': 'Endpoint',
    'common.model': 'Model',
    'common.search': 'Search',
    'common.provider': 'Provider',
    'common.results': 'Results',
    'common.url': 'URL',
    'common.apiKey': 'API Key',
    'common.channel': 'Channel',
    'common.test': 'Test',
    'common.addFallback': '+ Add fallback',
    'common.resetAll': 'Reset All',
    'common.custom': 'Custom',
    'common.logout': 'Logout',
    'ai.defaultChat.title': 'Default Chat Model',
    'ai.defaultChat.sub': 'The model used when creating a new chat session.',
    'ai.utility.title': 'Utility Model',
    'ai.utility.rec': '(Recommended: Local Endpoint)',
    'ai.utility.sub': 'Runs background tasks (compaction, cleanup, auto-naming, retrieving memories from files) on a small/local model instead of your chat model. Leave blank to use the chat model.',
    'ai.vision.title': 'Vision',
    'ai.vision.sub': 'Analyze images with a vision-capable model.',
    'ai.vision.auto': 'Auto-detect',
    'ai.research.title': 'Research Model',
    'ai.research.sub': 'Model used for Deep Research. Falls back to the default chat model if not set.',
    'ai.research.sameChat': 'Same as chat',
    'ai.research.maxTokens': 'Max Tokens',
    'ai.research.extractTimeout': 'Extract Timeout',
    'ai.research.extractParallel': 'Extract Parallel',
    'ai.research.maxTime': 'Max Time',
    'ai.agent.title': 'Agent',
    'ai.agent.sub': 'Controls for the agent tool loop.',
    'ai.agent.toolLimit': 'Tool call limit',
    'ai.agent.maxSteps': 'Max steps per message',
    'ai.teacher.title': 'Teacher Model',
    'ai.teacher.experimental': '(Experimental)',
    'ai.teacher.sub': 'When a self-hosted student fails an agent-mode task, escalate to a SOTA teacher that writes a SKILL.md procedure so the student can do it next time. Off by default.',
    'search.web.title': 'Web Search',
    'search.web.sub': 'Search API used for web search and deep research.',
    'search.fallbacks': 'Fallbacks',
    'search.customPlaceholder': 'Enter custom value',
    'search.cx': 'CX ID',
    'appearance.sidebar.title': 'Sidebar',
    'appearance.chatArea.title': 'Chat Area',
    'appearance.chatBar.title': 'Chat Bar',
    'shortcuts.title': 'Keyboard Shortcuts',
    'shortcuts.sub': 'Click a shortcut to rebind. Press Escape to cancel.',
    'shortcuts.reset': 'Reset Shortcuts',
    'account.title': 'Account',
    'account.changePassword': 'Change Password',
    'account.pwCurrent': 'Current password',
    'account.pwNew': 'New password (min 8)',
    'account.pwConfirm': 'Confirm new password',
    'account.pwSave': 'Update Password',
    'account.twoFactor': 'Two-Factor Authentication',
    'email.accounts.title': 'Email Accounts',
    'email.accounts.sub': 'Add, edit, delete, and test accounts in Integrations.',
    'email.accounts.manage': 'Manage in Integrations',
    'email.tasks.title': 'Email Tasks',
    'email.tasks.sub': 'Manage email background tasks in Tasks.',
    'email.tasks.open': 'Open Tasks',
    'email.style.title': 'Writing Style',
    'email.style.sub': 'AI-extracted from your sent emails. Used when AI drafts replies.',
    'email.style.extract': 'Extract from Sent (15 emails)',
    'email.style.save': 'Save',
    'reminders.how.title': 'How you\'re reminded',
    'reminders.how.sub': 'Controls how fired note reminders are delivered.',
    'reminders.sendFrom': 'Send from',
    'reminders.sendTo': 'Send to',
    'reminders.ntfyTopic': 'ntfy topic',
    'reminders.synthesis.title': 'AI Synthesis',
    'reminders.synthesis.sub': 'When on, the utility model writes a short, warm one-line reminder for browser, email, AND ntfy reminders instead of just the raw note content.',
    'reminders.publicUrl.title': 'Public App URL',
    'reminders.publicUrl.sub': 'Used to build clickable links back to Odysseus inside outgoing reminder / urgent-email emails (e.g. https://chat.yourdomain.com). Leave blank to omit links.',
    'reminders.test.title': 'Test',
    'reminders.test.sub': 'Fire a test reminder using your current settings to verify everything works.',
    'reminders.test.send': 'Send Test Reminder',
    'services.title': 'Add Models',
    'services.endpoints': '(Endpoints)',
    'services.sub': 'Connect local models first, or add a cloud API.',
    'services.local': 'Local',
    'services.api': 'API',
    'services.quickstart': 'Quickstart',
    'services.scan': 'Scan for Servers',
    'services.add': 'Add',
    'services.addedModels': 'Added Models',
    'services.manageEndpoints': 'Manage the endpoints you\'ve added.',
  },
  'pt-BR': {
    'settings.title': 'Configurações',
    'settings.subtitle': 'Ative ou desative a visibilidade de ferramentas e módulos na interface.',
    'settings.peek': 'Prévia',
    'settings.close': 'Fechar configurações',
    'settings.admin': 'Admin',
    'nav.services': 'Adicionar modelos',
    'nav.ai': 'Padrões de IA',
    'nav.search': 'Busca',
    'nav.integrations': 'Integrações',
    'nav.email': 'E-mail',
    'nav.reminders': 'Lembretes',
    'nav.appearance': 'Aparência',
    'nav.shortcuts': 'Atalhos',
    'nav.account': 'Conta',
    'nav.tools': 'Ferramentas do agente',
    'nav.users': 'Usuários',
    'nav.system': 'Sistema',
    'language.title': 'Idioma',
    'language.subtitle': 'Idioma do painel de configurações. O restante do app continua em inglês por enquanto.',
    'language.label': 'Idioma',
    'common.endpoint': 'Endpoint',
    'common.model': 'Modelo',
    'common.search': 'Busca',
    'common.provider': 'Provedor',
    'common.results': 'Resultados',
    'common.url': 'URL',
    'common.apiKey': 'Chave de API',
    'common.channel': 'Canal',
    'common.test': 'Testar',
    'common.addFallback': '+ Adicionar fallback',
    'common.resetAll': 'Restaurar tudo',
    'common.custom': 'Personalizado',
    'common.logout': 'Sair',
    'ai.defaultChat.title': 'Modelo padrão do chat',
    'ai.defaultChat.sub': 'Modelo usado ao criar uma nova sessão de chat.',
    'ai.utility.title': 'Modelo utilitário',
    'ai.utility.rec': '(Recomendado: endpoint local)',
    'ai.utility.sub': 'Executa tarefas em segundo plano (compactação, limpeza, renomeação automática, recuperação de memórias) em um modelo local/pequeno em vez do modelo do chat. Deixe em branco para usar o modelo do chat.',
    'ai.vision.title': 'Visão',
    'ai.vision.sub': 'Analisa imagens com um modelo compatível com visão.',
    'ai.vision.auto': 'Detectar automaticamente',
    'ai.research.title': 'Modelo de pesquisa',
    'ai.research.sub': 'Modelo usado na Pesquisa Profunda. Usa o modelo padrão do chat se não estiver definido.',
    'ai.research.sameChat': 'Igual ao chat',
    'ai.research.maxTokens': 'Máx. de tokens',
    'ai.research.extractTimeout': 'Timeout de extração',
    'ai.research.extractParallel': 'Extração paralela',
    'ai.research.maxTime': 'Tempo máximo',
    'ai.agent.title': 'Agente',
    'ai.agent.sub': 'Controles do loop de ferramentas do agente.',
    'ai.agent.toolLimit': 'Limite de chamadas de ferramenta',
    'ai.agent.maxSteps': 'Máx. de passos por mensagem',
    'ai.teacher.title': 'Modelo professor',
    'ai.teacher.experimental': '(Experimental)',
    'ai.teacher.sub': 'Quando um modelo local falha em tarefa no modo agente, escala para um modelo professor que escreve um procedimento SKILL.md para a próxima tentativa. Desativado por padrão.',
    'search.web.title': 'Busca na web',
    'search.web.sub': 'API de busca usada na web e na pesquisa profunda.',
    'search.fallbacks': 'Fallbacks',
    'search.customPlaceholder': 'Valor personalizado',
    'search.cx': 'ID CX',
    'appearance.sidebar.title': 'Barra lateral',
    'appearance.chatArea.title': 'Área do chat',
    'appearance.chatBar.title': 'Barra do chat',
    'shortcuts.title': 'Atalhos de teclado',
    'shortcuts.sub': 'Clique em um atalho para redefinir. Pressione Escape para cancelar.',
    'shortcuts.reset': 'Restaurar atalhos',
    'account.title': 'Conta',
    'account.changePassword': 'Alterar senha',
    'account.pwCurrent': 'Senha atual',
    'account.pwNew': 'Nova senha (mín. 8)',
    'account.pwConfirm': 'Confirmar nova senha',
    'account.pwSave': 'Atualizar senha',
    'account.twoFactor': 'Autenticação em dois fatores',
    'email.accounts.title': 'Contas de e-mail',
    'email.accounts.sub': 'Adicione, edite, exclua e teste contas em Integrações.',
    'email.accounts.manage': 'Gerenciar em Integrações',
    'email.tasks.title': 'Tarefas de e-mail',
    'email.tasks.sub': 'Gerencie tarefas de e-mail em segundo plano em Tarefas.',
    'email.tasks.open': 'Abrir Tarefas',
    'email.style.title': 'Estilo de escrita',
    'email.style.sub': 'Extraído por IA dos seus e-mails enviados. Usado ao redigir respostas.',
    'email.style.extract': 'Extrair dos enviados (15 e-mails)',
    'email.style.save': 'Salvar',
    'reminders.how.title': 'Como você é lembrado',
    'reminders.how.sub': 'Controla como lembretes de notas são entregues.',
    'reminders.sendFrom': 'Enviar de',
    'reminders.sendTo': 'Enviar para',
    'reminders.ntfyTopic': 'Tópico ntfy',
    'reminders.synthesis.title': 'Síntese por IA',
    'reminders.synthesis.sub': 'Quando ativo, o modelo utilitário escreve um lembrete curto e amigável para browser, e-mail e ntfy em vez do texto bruto da nota.',
    'reminders.publicUrl.title': 'URL pública do app',
    'reminders.publicUrl.sub': 'Usada para links clicáveis de volta ao Odysseus em e-mails de lembrete (ex.: https://chat.seudominio.com). Deixe em branco para omitir links.',
    'reminders.test.title': 'Teste',
    'reminders.test.sub': 'Dispara um lembrete de teste com suas configurações atuais.',
    'reminders.test.send': 'Enviar lembrete de teste',
    'services.title': 'Adicionar modelos',
    'services.endpoints': '(Endpoints)',
    'services.sub': 'Conecte modelos locais primeiro ou adicione uma API na nuvem.',
    'services.local': 'Local',
    'services.api': 'API',
    'services.quickstart': 'Início rápido',
    'services.scan': 'Buscar servidores',
    'services.add': 'Adicionar',
    'services.addedModels': 'Modelos adicionados',
    'services.manageEndpoints': 'Gerencie os endpoints que você adicionou.',
  },
};

let _locale = null;

function normalizeLocale(raw) {
  const v = String(raw || '').trim();
  if (v === 'pt' || v === 'pt-BR' || v.startsWith('pt')) return 'pt-BR';
  return 'en';
}

export function getLocale() {
  if (_locale) return _locale;
  const stored = Storage.get(LOCALE_KEY, '');
  if (stored) {
    _locale = normalizeLocale(stored);
    return _locale;
  }
  _locale = normalizeLocale(navigator.language || 'en');
  return _locale;
}

export function setLocale(locale) {
  _locale = normalizeLocale(locale);
  Storage.set(LOCALE_KEY, _locale);
  try {
    document.documentElement.lang = _locale === 'pt-BR' ? 'pt-BR' : 'en';
  } catch (_) {}
}

export function t(key, locale) {
  const loc = locale || getLocale();
  const pack = MESSAGES[loc] || MESSAGES.en;
  return pack[key] ?? MESSAGES.en[key] ?? key;
}

function applyAttr(root, selector, attr, keyAttr) {
  root.querySelectorAll(selector).forEach(el => {
    const key = el.getAttribute(keyAttr);
    if (!key) return;
    const val = t(key);
    if (attr === 'text') el.textContent = val;
    else el.setAttribute(attr, val);
  });
}

export function applySettingsI18n(root) {
  if (!root) return;
  applyAttr(root, '[data-i18n]', 'text', 'data-i18n');
  applyAttr(root, '[data-i18n-title]', 'title', 'data-i18n-title');
  applyAttr(root, '[data-i18n-aria]', 'aria-label', 'data-i18n-aria');
  applyAttr(root, '[data-i18n-placeholder]', 'placeholder', 'data-i18n-placeholder');
  root.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key) el.innerHTML = t(key);
  });

  root.querySelectorAll('[data-settings-tab]').forEach(btn => {
    const key = NAV_KEYS[btn.dataset.settingsTab];
    if (!key) return;
    const spans = btn.querySelectorAll('span');
    const label = spans[spans.length - 1];
    if (label) label.textContent = t(key);
  });

  const adminLabel = root.querySelector('.settings-sidebar-label.admin-only');
  if (adminLabel) adminLabel.textContent = t('settings.admin');

  root.setAttribute('aria-label', t('settings.title'));
}

export function initSettingsI18n() {
  const root = document.getElementById('settings-modal');
  const sel = document.getElementById('set-uiLocale');
  if (sel) {
    sel.value = getLocale();
    if (!sel.dataset.i18nBound) {
      sel.dataset.i18nBound = '1';
      sel.addEventListener('change', () => {
        setLocale(sel.value);
        applySettingsI18n(root);
      });
    }
  }
  setLocale(getLocale());
  applySettingsI18n(root);
}

export default { t, getLocale, setLocale, applySettingsI18n, initSettingsI18n };
