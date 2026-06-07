# ❓ FAQ Odysseus

Perguntas frequentes e respostas.

---

## General

### What is Odysseus?
Odysseus is a **self-hosted AI workspace** that runs on your own hardware with full privacy. Think of it as ChatGPT, but for your home or office with models you control.

### Is it free?
**Yes!** Odysseus itself is free and open-source (MIT license). You pay only for external APIs (OpenAI, DeepSeek, etc.) if you use them. Local models are completely free.

### Is my data private?
**Yes.** Odysseus runs entirely on your hardware. Data never leaves your machine unless you explicitly send it (e.g., API calls). No tracking, no analytics, no telemetry.

### Can I run this offline?
**Mostly yes.** Use local models via Ollama and disable web search. API-based models require internet. Calendar/Email require internet for sync.

### What's the difference between Chat and Agent?
- **Chat** — conversational, turn-by-turn
- **Agent** — autonomous, makes decisions, executes code, runs commands

---

## Installation & Deployment

### How do I install Odysseus?
See [QUICK_START.md](./QUICK_START.md) or [README.md](../README.md) for Docker/local setup.

### Can I run this on Render/AWS/Heroku?
**Yes!** Odysseus runs anywhere Docker runs. The repo includes `render.yaml` for easy Render deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md).

### What are the hardware requirements?
- **Minimum:** 4GB RAM (chat only)
- **Recommended:** 8GB RAM + 4GB GPU (run local models)
- **Ideal:** 32GB+ RAM + GPU (larger models)

### How do I back up my data?
```bash
# Data lives in data/app.db (SQLite)
cp data/app.db data/app.db.backup
```

### Can I sync data across devices?
Yes! Self-host behind HTTPS (reverse proxy) or use CalDAV for calendar. Email syncs via IMAP.

---

## Models & APIs

### How do I add a new LLM?
1. **Settings → API Endpoints**
2. **+ Add Endpoint**
3. Fill in:
   - Base URL (e.g., `https://api.deepseek.com/v1`)
   - API Key
   - Model name
4. **Save & test**

### Which models are supported?
- **OpenAI** — GPT-4, GPT-3.5, etc.
- **Anthropic** — Claude
- **DeepSeek** — All models
- **Groq** — Mixtral, Llama
- **Local** — Ollama, llama.cpp, vLLM
- **Custom** — Any OpenAI-compatible API

### How do I run a local model?
1. **Cookbook → Scan Hardware**
2. See recommendations
3. **Download** a model
4. **Serve** it (starts Ollama)
5. Use in Chat/Agent

### What models do you recommend?
- **Chat:** `deepseek-chat`, `gpt-4-turbo`, `claude-3-sonnet`
- **Coding:** `deepseek-coder-v2`, `gpt-4`, `claude-3-opus`
- **Speed:** `mistral-7b` (local), `gpt-3.5-turbo` (API)
- **Budget:** Local models (free!)

### Can I use multiple models at once?
**Yes!** Add multiple endpoints and switch between them in Chat. Compare feature lets you test them side-by-side.

---

## Features & Troubleshooting

### Chat isn't working
**Check:**
1. Model selected in dropdown?
2. API key valid? (test in Settings)
3. Internet connection?
4. Firewall blocking port?

**Try:**
- Switch to different model
- Restart Odysseus
- Check browser console for errors

### Agent refuses to run commands
**This is intentional!** Odysseus has safety restrictions. To allow:
1. **Settings → Security → Permissions**
2. Enable shell/file access
3. Review command before execution

### Email won't sync
**Try:**
1. **Email Settings → Re-authenticate**
2. Grant permissions again
3. Check mailbox isn't full
4. Ensure IMAP enabled in email provider

### Memory/Skills don't work
**Check:**
1. ChromaDB running? (if self-hosted)
2. Try re-adding skill
3. Restart Odysseus
4. Check database logs

### Calendar sync issues
**Try:**
1. **Settings → Calendar → Re-sync**
2. Check provider account permissions
3. Verify timezone correct
4. Check network connectivity

---

## Performance & Optimization

### Chat is slow
**Causes:**
- Large model running
- Network latency (API calls)
- Old hardware

**Solutions:**
- Use faster model (smaller or quantized)
- Switch to local model
- Check network speed

### Odysseus uses a lot of CPU/RAM
**Try:**
- Quantized models (GGUF, AWQ)
- Smaller models (7B instead of 70B)
- Close other apps
- Use GPU if available

### My files keep disappearing
**Data persists in:**
- `data/app.db` — all settings, notes, tasks
- `data/auth.json` — auth state (if persistent)
- `data/chroma/` — vector embeddings

**Back them up regularly!**

---

## Security

### Should I enable authentication?
**Yes, always!** Unless running locally on trusted network only.
- **Settings → Auth Enabled**
- Set strong password
- Enable 2FA if available

### Are API keys secure?
**Yes!** Keys are encrypted at rest:
- Never logged
- Never sent to third parties
- Only used for API calls you make

### Can someone break in?
**Secure it:**
1. Strong password (>12 chars)
2. Enable 2FA (coming soon)
3. Run behind HTTPS
4. Update regularly
5. Don't expose to internet without auth

### How do I revoke access?
1. **Settings → Users → Delete user**
2. Logout active sessions
3. Change passwords

---

## Advanced

### Can I integrate with other tools?
**Yes!**
- **Webhooks** — POST data to Odysseus
- **MCP** — Model Context Protocol for custom tools
- **APIs** — Use via Agent with `curl`/`requests`

### How do I schedule automated tasks?
1. **Notes & Tasks → Scheduled Tasks**
2. Create task with CRON syntax
3. Agent runs it automatically
4. Results logged

### Can I extend Odysseus with custom features?
**Yes!** Options:
1. **Skills** — teach Agent custom behaviors
2. **Webhooks** — trigger external actions
3. **Plugins** — modify source code (fork repo)

### How do I contribute?
1. Fork [GitHub repo](https://github.com/Trustcorporation88/odysseus)
2. Make changes
3. Submit PR
4. Community reviews & merges

---

## Billing & Support

### Does Odysseus cost money?
**Free to run!** But external APIs cost:
- OpenAI: ~$0.01-0.10 per message
- DeepSeek: ~$0.001-0.01 per message
- Local models: Free

### Where's the documentation?
- **[USER_GUIDE.md](./USER_GUIDE.md)** — Feature overview
- **[QUICK_START.md](./QUICK_START.md)** — 5-min setup
- **Settings → Help** — In-app guides
- **[README.md](../README.md)** — Installation
- **[GitHub Issues](https://github.com/Trustcorporation88/odysseus/issues)** — Bug reports

### How do I get support?
1. Check [FAQ.md](./FAQ.md) (this page!)
2. Search [GitHub Issues](https://github.com/Trustcorporation88/odysseus/issues)
3. Open new issue with details
4. Join Discord (if available)

### How often is Odysseus updated?
Weekly updates with features, fixes, and improvements. See [CHANGELOG.md](../CHANGELOG.md) (if exists) or [GitHub releases](https://github.com/Trustcorporation88/odysseus/releases).

---

## Still stuck?

1. **Re-read [USER_GUIDE.md](./USER_GUIDE.md)** — answers are there
2. **Check browser console** — errors logged there
3. **Check logs** — in `logs/` folder
4. **Search GitHub Issues** — your problem likely solved
5. **Open an issue** — include logs, steps to reproduce

**Questions about a specific feature? See `docs/services/` folder for detailed guides.**

Good luck! 🚀
