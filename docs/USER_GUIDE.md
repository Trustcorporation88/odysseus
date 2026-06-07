# 📚 Odysseus User Guide

Welcome to **Odysseus** — your self-hosted AI workspace. This guide explains every feature and how to use it.

---

## 🎯 Quick Overview

| Feature | What it does | Best for |
|---------|-------------|----------|
| **Chat** | Talk to AI models | Quick questions, brainstorming |
| **Agent** | AI automates tasks with tools | Complex workflows, file operations |
| **Cookbook** | Discover & serve local AI models | Running models on your hardware |
| **Deep Research** | Multi-step AI research reports | In-depth analysis, synthesis |
| **Compare** | Test models side-by-side blind | Model evaluation, benchmarking |
| **Documents** | Collaborate with AI on text | Writing, editing, markdown |
| **Memory & Skills** | Persistent AI learning | Long-term context, custom abilities |
| **Email** | Smart IMAP/SMTP inbox | Triage, summaries, auto-replies |
| **Notes & Tasks** | Quick notes with reminders | Daily planning, tracking |
| **Calendar** | Local-first CalDAV sync | Events, reminders, agent awareness |

---

## 💬 Chat

### What is it?
A real-time conversation with AI models — similar to ChatGPT, but you control which models and where data lives.

### How to use:
1. Open **Chat** from the sidebar
2. Select a model from the dropdown (or configure one in Settings)
3. Type your message and press **Enter**
4. AI responds in real-time

### Features:
- ✅ **Stream responses** — see AI thinking in real-time
- ✅ **Multi-turn context** — AI remembers conversation history
- ✅ **Model switching** — change models mid-conversation
- ✅ **Session history** — all chats saved automatically
- ✅ **Copy/edit messages** — refine your prompts

### Supported Models:
- **Local:** Ollama, llama.cpp, vLLM
- **API:** OpenAI, DeepSeek, Groq, Claude, Anthropic
- **See Settings → API Endpoints** to add more

### Pro Tips:
- Use **@mention** to reference documents or files
- Paste code for analysis — AI understands context
- Long responses? Use **Compare** to test multiple models

---

## 🤖 Agent

### What is it?
An autonomous AI that can **run tasks**, **access files**, **execute code**, and **use tools** — like having a tireless assistant.

### How to use:
1. Go to **Agent** tab
2. Give it a task in natural language
3. Watch it work — it'll:
   - Ask clarifying questions
   - Examine your files
   - Run scripts/commands
   - Call tools as needed
   - Report results back

### What can it do?
- 📁 **File operations** — read, write, search files
- 🔧 **Shell/CLI** — run scripts, git commands, installs
- 🌐 **Web search** — research topics, fetch data
- 💾 **Memory** — recall skills and past context
- 🔗 **Tools** — MCP integrations, webhook calls
- 📊 **Multi-step** — complex workflows automatically

### Examples:
```
"Analyze this Python file and suggest optimizations"
"Create a README for my project in docs/"
"Search for papers about transformer models and summarize them"
"Set up git in this folder and make an initial commit"
"Extract data from CSV and create a JSON summary"
```

### Safety:
- ⚠️ Always review commands before execution
- ⚠️ Agent runs under your permissions
- ⚠️ Some actions need approval (e.g., shell commands)
- See **Settings → Security** for restrictions

---

## 📦 Cookbook

### What is it?
A smart model manager that:
- Scans your hardware (RAM, GPU, CPU)
- Recommends models you can run
- One-click download & serve

### How to use:
1. Go to **Cookbook**
2. Click **Scan Hardware** (first time)
3. See recommended models
4. Click **Download** next to a model
5. Click **Serve** when ready
6. Use model in Chat/Agent

### Supported Formats:
- **GGUF** — quantized, efficient (8GB RAM min)
- **FP8/AWQ** — compressed but quality-focused
- **Full precision** — best quality, needs GPU

### Hardware Requirements:
| Model Size | RAM Needed | GPU Helpful? |
|------------|-----------|-------------|
| 7B | 8-16GB | Optional |
| 13B | 16-32GB | Recommended |
| 70B | 64GB+ | Required |

### Pro Tips:
- Start with smaller models (7B)
- Serve via **Ollama** for easy switching
- Monitor resources in **Dependencies** tab

---

## 🔬 Deep Research

### What is it?
AI runs a **multi-step research process**:
1. Breaks down your question
2. Searches for sources
3. Reads & synthesizes
4. Creates visual report

### How to use:
1. Go to **Deep Research**
2. Enter your research question
3. Let AI work (takes 2-5 min)
4. Review generated report
5. Export as PDF or markdown

### Outputs:
- 📊 Visual report with citations
- 📝 Markdown summary
- 🔗 Source links
- 📈 Key findings highlighted

### Best for:
- Market research
- Technology comparisons
- Historical analysis
- Competitive intelligence
- Learning new topics deeply

---

## ⚖️ Compare

### What is it?
Test multiple models **side-by-side with blind evaluation**:
- You don't see which model responds
- Score both responses
- See final comparison

### How to use:
1. Go to **Compare**
2. Add 2-4 models
3. Enter test prompt
4. Grade each response (✓/✗)
5. View comparison matrix

### Use Cases:
- Which model is best for your needs?
- Does a new model outperform the old one?
- Is paid API worth it vs. local model?

### Results:
- Blind score comparison
- Response time metrics
- Feature support grid
- Cost analysis

---

## 📄 Documents

### What is it?
A **multi-tab editor** where YOU write and AI assists (not the other way around):
- Markdown, HTML, CSV
- Syntax highlighting
- Real-time AI suggestions
- Version history

### How to use:
1. Go to **Documents**
2. Click **+ New Document**
3. Select format (Markdown, HTML, etc.)
4. Write your content
5. Highlight text → click **✨ AI Assist**
6. Choose action (edit, expand, summarize, etc.)

### AI Actions:
- ✏️ **Edit** — refine grammar/clarity
- 📝 **Expand** — add detail
- 📊 **Summarize** — condense text
- 🔍 **Explain** — break down complex parts
- 🎨 **Rephrase** — change tone/style

### Formats:
- **Markdown** — blog posts, docs
- **HTML** — web pages
- **CSV** — data tables
- **Plain text** — notes

---

## 🧠 Memory & Skills

### What is it?
**Persistent learning system** so your Agent gets smarter over time:
- **Memory** — what Agent learns about you
- **Skills** — custom AI abilities you teach it

### How to use:

#### Add to Memory:
1. Go to **Memory** tab
2. Click **+ Add Memory**
3. Write what Agent should remember
4. Agent uses this in future tasks

#### Create Skills:
1. Go to **Skills** tab
2. Click **+ New Skill**
3. Define:
   - Name & description
   - Instructions (how to do it)
   - Examples
4. Agent calls skill when relevant

### Examples:

**Memory:**
```
"User prefers async/await over promises in JavaScript"
"Projects use Python 3.11 with FastAPI"
"Always add docstrings to functions"
```

**Skill:**
```
Name: Format Code
Description: Apply consistent code formatting
Instructions: Run prettier for JS, black for Python, rustfmt for Rust
```

### Storage:
- 💾 Stored in ChromaDB (vector database)
- 🔐 Private to your instance
- 📤 Export/import anytime

---

## 📧 Email

### What is it?
Smart **IMAP/SMTP inbox** with AI triage:
- Connect any email account
- Auto-tag important emails
- Summarize long threads
- Draft replies
- Spam filtering

### How to use:

#### Setup:
1. Go to **Email Settings**
2. Add account (Gmail, Outlook, etc.)
3. Grant IMAP/SMTP access
4. Odysseus syncs automatically

#### Features:
- 🏷️ **Auto-tag** — ML categorizes emails
- ⚡ **Urgency alerts** — important emails highlighted
- 📝 **Auto-summary** — TL;DR for long threads
- ✍️ **Draft replies** — AI suggests responses
- 🚫 **Spam filter** — learns your preferences

#### Integration:
- 📅 **CalDAV-aware** — sees scheduled time
- 🔔 **Notifications** — urgent emails pop up
- 🔐 **End-to-end** — credentials encrypted locally

---

## 📝 Notes & Tasks

### What is it?
Quick **note-taking + todo list** with reminders and agent integration.

### How to use:

#### Notes:
1. Go to **Notes**
2. Click **+ New Note**
3. Write note, add tags
4. Set reminder time
5. Get notified (browser/email/ntfy)

#### Tasks:
1. Go to **Tasks**
2. Click **+ New Task**
3. Add checklist items
4. Set due date
5. Agent can auto-run tasks (scheduled)

### Features:
- ✅ **Checklists** — track progress
- 🔔 **Reminders** — ntfy/email/browser
- 🏷️ **Tags** — organize notes
- 🤖 **Agent automation** — scheduled task actions
- 📱 **Mobile-friendly** — works great on phone

### Scheduled Tasks:
```
Example: "Every Monday, download sales data from API"
Odysseus runs the task automatically via Agent
```

---

## 📅 Calendar

### What is it?
**Local-first calendar** with CalDAV sync to Apple/Google/Nextcloud:
- Personal events
- Shared calendars
- Agent-aware scheduling
- Reminders

### How to use:

#### Create Event:
1. Go to **Calendar**
2. Click on date/time
3. Add event details
4. Set reminder
5. Save

#### Sync Calendars:
1. Go to **Calendar Settings**
2. Click **+ Add Calendar**
3. Choose provider (Apple, Google, Nextcloud, etc.)
4. Grant access
5. Syncs automatically

### Features:
- 🔄 **Two-way sync** — changes push back
- 🎨 **Color-coded calendars** — organize visually
- 🤖 **Agent-aware** — AI sees your schedule
- 📱 **Mobile-friendly** — responsive design
- 🌍 **Timezone support** — automatic detection

---

## ⚙️ Settings

### What you can configure:

#### API Endpoints
- Add LLM providers (OpenAI, DeepSeek, etc.)
- Configure base URLs & API keys
- Set default models
- Test connections

#### Authentication
- Enable/disable login
- Add users
- Set permissions
- Session timeout

#### Integrations
- Email accounts (IMAP/SMTP)
- Calendar providers (CalDAV)
- Web search (SearXNG)
- Custom webhooks

#### Preferences
- Theme (light/dark/custom)
- Language
- Timezone
- Default models

#### Security
- 2FA setup
- API key management
- CORS origins
- Encryption keys

---

## 🚀 Pro Tips & Tricks

### 1. Keyboard Shortcuts
- `Ctrl+K` — Quick command palette
- `Ctrl+/` — Search across features
- `Ctrl+Shift+S` — Settings
- `Esc` — Close modals

### 2. Use References
- Type `@` in chat/agent to reference:
  - Documents
  - Files
  - Notes
  - Past sessions

### 3. Chain Operations
- Chat → highlight → Document
- Research → save to Memory
- Agent output → Calendar event
- Email draft → Document

### 4. Batch Operations
- Multi-select tasks/notes
- Bulk tag
- Bulk export

### 5. Advanced Workflows
```
Workflow: Weekly Report
1. Agent: Collect sales data (scheduled task)
2. Deep Research: Analyze trends
3. Document: Write report with AI assist
4. Email: Auto-send to stakeholders
```

---

## ❓ Common Questions

**Q: Is my data private?**
A: Yes! Odysseus runs on your hardware. Data never leaves your machine unless you explicitly send it (e.g., API calls to OpenAI).

**Q: Can I run this offline?**
A: Mostly yes. Use local models (Ollama) + disable web search. API-only models need internet.

**Q: How do I back up my data?**
A: Data is in `data/app.db` (SQLite). Back up that file. Or export notes/documents regularly.

**Q: Can I sync across devices?**
A: Yes! Use CalDAV for calendar, or self-host behind a reverse proxy (HTTPS).

**Q: What's the difference between Chat and Agent?**
A: Chat is conversational. Agent is autonomous — it makes decisions, runs code, accesses files.

---

## 🆘 Troubleshooting

### Model won't connect
1. Check **Settings → API Endpoints**
2. Test connection button
3. Verify API key
4. Check network/firewall

### Emails not syncing
1. Go to **Email Settings**
2. Click **Re-authenticate**
3. Grant permissions again
4. Check mailbox isn't full

### Agent tasks failing
1. Check **Settings → Security** permissions
2. Review Agent response for error
3. Try simpler task first
4. Check logs

### Memory/Skills not working
1. Verify ChromaDB is running
2. Try re-adding memory item
3. Restart Odysseus
4. Check database logs

---

## 📖 Learn More

- **Settings** — Detailed setup guides per service
- **About** — Version info, contributors
- **GitHub** — Source code: [Trustcorporation88/odysseus](https://github.com/Trustcorporation88/odysseus)
- **Docs** — Technical documentation in repo `/docs`

---

**Happy exploring! 🚀 Odysseus is as powerful as you make it.**
