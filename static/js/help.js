/**
 * Odysseus Feature Help System
 * Tooltips, help icons, and inline assistance for all features
 */

const FEATURE_HELP = {
  // Chat Service
  chat: {
    title: "Chat",
    description: "Talk to AI models in real-time, just like ChatGPT",
    tips: [
      "Select a model from the dropdown",
      "Type your message and press Enter",
      "Use @document to reference files",
      "Edit messages by clicking on them",
      "Click 🔄 to regenerate responses"
    ]
  },

  agent: {
    title: "Agent",
    description: "Autonomous AI that executes tasks, runs code, and accesses files",
    tips: [
      "Describe what you want done",
      "Agent will break it into steps",
      "Review before command execution",
      "Use for complex workflows",
      "Agent learns from Memory & Skills"
    ]
  },

  cookbook: {
    title: "Cookbook",
    description: "Discover and run AI models on your hardware for free",
    tips: [
      "Click 'Scan Hardware' to see recommendations",
      "Download models with one click",
      "GGUF models are most efficient",
      "Serve multiple models at once",
      "Monitor resource usage in Dependencies"
    ]
  },

  research: {
    title: "Deep Research",
    description: "Multi-step AI research with sources and synthesis",
    tips: [
      "Ask complex research questions",
      "AI searches and reads sources",
      "Wait 2-5 minutes for results",
      "Export as PDF or markdown",
      "Perfect for market research, learning"
    ]
  },

  compare: {
    title: "Compare Models",
    description: "Test models side-by-side with blind evaluation",
    tips: [
      "Select 2-4 models to compare",
      "Same prompt sent to all",
      "Grade responses blind (no bias)",
      "See detailed comparison results",
      "Perfect for model selection"
    ]
  },

  documents: {
    title: "Documents",
    description: "Write with AI assistance - markdown, HTML, CSV",
    tips: [
      "You write, AI helps",
      "Highlight text → click ✨",
      "Choose: Edit, Expand, Summarize",
      "Multi-tab editor with version history",
      "Export as markdown/PDF/HTML"
    ]
  },

  memory: {
    title: "Memory & Skills",
    description: "Teach Agent about you - persistent learning",
    tips: [
      "Memory = facts Agent remembers",
      "Skills = abilities you teach Agent",
      "Agent applies them automatically",
      "Improves over time",
      "Share skills with your team"
    ]
  },

  email: {
    title: "Email",
    description: "Smart inbox with AI triage, summaries, and auto-replies",
    tips: [
      "Connect any IMAP account",
      "AI auto-tags emails (Urgent, Work, etc)",
      "Get alerts for important emails",
      "Auto-summarize long threads",
      "Draft replies with AI assistance"
    ]
  },

  notes: {
    title: "Notes & Tasks",
    description: "Quick notes with reminders and todo lists",
    tips: [
      "Create notes with tags",
      "Set reminders (browser, email)",
      "Create tasks with due dates",
      "Use checklists for tracking",
      "Schedule tasks for Agent to run"
    ]
  },

  calendar: {
    title: "Calendar",
    description: "Local-first calendar with CalDAV sync",
    tips: [
      "Click on date to create event",
      "Set reminders for notifications",
      "Sync with Apple, Google, Nextcloud",
      "Color-code calendars",
      "Agent aware of your schedule"
    ]
  },

  settings: {
    title: "Settings",
    description: "Configure models, integrations, preferences",
    tips: [
      "Add API Endpoints for models",
      "Connect email, calendar accounts",
      "Customize theme and language",
      "Manage users and permissions",
      "Configure security options"
    ]
  }
};

/**
 * Tooltip Configuration for UI Elements
 * Used to display help text on hover or click
 */
const UI_TOOLTIPS = {
  modelSelector: {
    label: "Model Selection",
    text: "Choose which AI model to use. Switch anytime during conversation.",
    learnMore: "/docs/services/chat.md"
  },

  temperatureSetting: {
    label: "Temperature",
    text: "0 = consistent, 1 = creative/random. Start at 0.7 for balance.",
    learnMore: "/docs/USER_GUIDE.md#chat"
  },

  systemPrompt: {
    label: "System Prompt",
    text: "Instructions that shape how AI behaves. Define its role and guidelines.",
    learnMore: "/docs/services/chat.md#system-prompt"
  },

  agentPermissions: {
    label: "Agent Permissions",
    text: "What Agent can do: shell commands, file access, memory. Choose what you trust.",
    learnMore: "/docs/services/agent.md#safety"
  },

  memoryAdd: {
    label: "Add Memory",
    text: "Tell Agent something to remember forever. E.g., 'Always use async/await'.",
    learnMore: "/docs/services/memory.md"
  },

  skillCreate: {
    label: "Create Skill",
    text: "Teach Agent a reusable ability. E.g., 'Deploy to Production'.",
    learnMore: "/docs/services/memory.md#skills"
  },

  emailAutoTag: {
    label: "Auto-Tagging",
    text: "ML automatically categorizes emails. Customize tags in Settings.",
    learnMore: "/docs/services/email.md#auto-tagging"
  },

  taskSchedule: {
    label: "Scheduled Tasks",
    text: "Agent runs tasks automatically. Use CRON syntax. E.g., '0 9 * * 1' = 9 AM Mondays.",
    learnMore: "/docs/services/notes.md#scheduled-tasks"
  },

  calendarSync: {
    label: "Calendar Sync",
    text: "Two-way sync with Apple, Google, Nextcloud, or Radicale CalDAV.",
    learnMore: "/docs/services/calendar.md#syncing"
  },

  documentAIAssist: {
    label: "AI Assist",
    text: "Highlight text → choose Edit, Expand, Summarize, Rephrase, or Explain.",
    learnMore: "/docs/services/documents.md#ai-assist"
  }
};

/**
 * Feature Tour (First-Time Onboarding)
 * Shows new users how each feature works
 */
const FEATURE_TOUR = {
  steps: [
    {
      element: "[data-tour='chat']",
      title: "💬 Chat",
      content: "Start here! Talk to AI models just like ChatGPT. Select a model and ask anything.",
      action: "Next"
    },
    {
      element: "[data-tour='agent']",
      title: "🤖 Agent",
      content: "Want AI to do the work for you? Agent runs tasks, code, and complex workflows automatically.",
      action: "Next"
    },
    {
      element: "[data-tour='cookbook']",
      title: "📦 Cookbook",
      content: "Run AI models for FREE on your hardware. Download, serve, use. No API costs!",
      action: "Next"
    },
    {
      element: "[data-tour='documents']",
      title: "📄 Documents",
      content: "Write with AI assistance. You write, AI helps edit, expand, or improve your text.",
      action: "Next"
    },
    {
      element: "[data-tour='memory']",
      title: "🧠 Memory",
      content: "Teach Agent about you. It learns and applies your preferences automatically.",
      action: "Next"
    },
    {
      element: "[data-tour='settings']",
      title: "⚙️ Settings",
      content: "Add API keys, connect email/calendar, customize behavior. Everything configurable.",
      action: "Done!"
    }
  ],

  initialize() {
    // Check if user is new (first visit)
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
        <h2>✨ Welcome to Odysseus!</h2>
        <p>Your self-hosted AI workspace. Let's quick tour the main features (2 min).</p>
        <div class="modal-buttons">
          <button class="btn-primary" onclick="FEATURE_TOUR.startTour()">Start Tour</button>
          <button class="btn-secondary" onclick="FEATURE_TOUR.skipTour()">Skip for Now</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  startTour() {
    console.log('Starting feature tour...');
    // Implementation would use a tour library like Shepherd.js or Intro.js
    localStorage.setItem('odysseus_tour_started', 'true');
  },

  skipTour() {
    localStorage.setItem('odysseus_tour_completed', 'true');
    document.querySelector('.odysseus-welcome-modal')?.remove();
  }
};

/**
 * Helper Functions
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
    ${tooltip.learnMore ? `<a href="${tooltip.learnMore}" class="tooltip-link">Learn More →</a>` : ''}
  `;
  element.appendChild(tooltipEl);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  FEATURE_TOUR.initialize();
  
  // Add help icons to all feature elements
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
 * Show Feature Help Modal
 */
function showFeatureModal(featureName, help) {
  const modal = document.createElement('div');
  modal.className = 'feature-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <h2>${help.title}</h2>
      <p class="description">${help.description}</p>
      <div class="tips">
        <h3>Quick Tips:</h3>
        <ul>
          ${help.tips.map(tip => `<li>💡 ${tip}</li>`).join('')}
        </ul>
      </div>
      <a href="/docs/services/${featureName}.md" class="learn-more-btn">
        Read Full Guide →
      </a>
    </div>
  `;
  document.body.appendChild(modal);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FEATURE_HELP, UI_TOOLTIPS, FEATURE_TOUR, getFeatureHelp, getTooltip };
}
