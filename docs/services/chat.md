# Chat Service

## Overview

**Chat** is the core conversation interface. It's like ChatGPT, but on your hardware with models you control.

**Key features:**
- Real-time streaming responses
- Multi-turn conversation memory
- Model switching mid-conversation
- Session history & search
- Copy/edit/regenerate messages

---

## Getting Started

1. Go to **Chat** from sidebar
2. Select a model
3. Type your message
4. Press **Enter**
5. Get response in real-time

---

## Features

### Reference Documents
Type `@` to attach context from:
- Documents
- Uploaded files
- Notes
- Past sessions

### Edit Messages
- Click message → Edit → Save
- AI re-processes updated context

### Regenerate
- Click **🔄** to get new response same prompt
- Great if response was poor

### Code Blocks
- Paste code for analysis
- AI highlights syntax
- Copy button on blocks
- Ask AI to fix/improve

### Model Switching
- Change model mid-chat
- New messages use new model
- Old messages stay same
- Perfect for comparison

---

## Settings

**Settings → Chat Preferences**

- **Default Model** — auto-load on open
- **Temperature** — creativity (0-1)
- **Max Tokens** — response length
- **System Prompt** — AI behavior customization

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Send |
| `Ctrl+Enter` | New line |
| `Ctrl+K` | Clear chat |
| `↑/↓` | Message history |

---

## Pro Tips

### Provide Context
```
Good:
"I'm using FastAPI with async/await.
How do I add authentication to my endpoints?"

Bad:
"How do I add authentication?"
```

### Debug Code
```
"Review this code:
[code block]

Issues to check:
- Performance
- Security
- Error handling"
```

### Learn Effectively
```
"Explain [topic] with examples"
"What are common mistakes?"
"Can you quiz me?"
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Slow response | Try smaller model |
| Model unavailable | Check Settings → Endpoints |
| Stuck loading | Restart, check network |
| Bad response | Improve prompt, lower temperature |

---

## See Also

- [Agent](./agent.md) — Autonomous AI
- [Deep Research](./research.md) — Multi-step analysis
- [Compare](./compare.md) — Side-by-side testing
