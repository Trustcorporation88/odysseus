# Agent Service

## Overview

**Agent** is your autonomous AI assistant that can:
- Execute tasks independently
- Access and modify files
- Run shell commands
- Call tools and APIs
- Use persistent memory
- Handle complex multi-step workflows

Think of it as having a tireless employee who can do almost anything.

---

## Getting Started

1. Go to **Agent** tab
2. Describe what you want done in natural language
3. Let it work (watch progress in real-time)
4. Review results

Example tasks:
```
"Create a Python script that downloads CSV files"
"Analyze this codebase and suggest improvements"
"Set up a git repository and make initial commit"
"Extract data from multiple PDFs and create summary"
```

---

## What Agent Can Do

### File Operations
- ✅ Read/write/delete files
- ✅ Search file contents
- ✅ Create/rename directories
- ✅ Batch operations

### Code Execution
- ✅ Run Python, Node, Bash scripts
- ✅ Install packages (pip, npm)
- ✅ Git operations
- ✅ Database queries

### Information Gathering
- ✅ Web search
- ✅ Read documentation
- ✅ Analyze logs
- ✅ Process data

### Automation
- ✅ Data transformation
- ✅ API integration
- ✅ Scheduled tasks
- ✅ Multi-step workflows

### Memory & Learning
- ✅ Remember past tasks
- ✅ Learn your preferences
- ✅ Use custom skills
- ✅ Apply lessons to new tasks

---

## How It Works

1. **You give task** — natural language request
2. **Agent plans** — breaks down into steps
3. **Executes** — runs commands/code
4. **Shows output** — streams results
5. **Learns** — saves to memory for future

---

## Safety & Permissions

Agent has built-in safety:
- ⚠️ Asks before dangerous operations
- ⚠️ Shows commands before execution
- ⚠️ Respects permission settings
- ⚠️ Never runs without confirmation

### Configure Permissions
**Settings → Security → Permissions**

Choose what Agent can do:
- Shell execution (yes/no)
- File access (yes/no)
- Internet access (yes/no)
- Memory access (yes/no)

---

## Teaching Agent

### Skills
Create custom abilities:
```
Settings → Skills → + New Skill

Example:
Name: Deploy Docker Container
Instructions: Build image, push to registry, run container
Example: "Deploy my app to production"
```

### Memory
Teach Agent about you:
```
Settings → Memory → + Add

Examples:
"Always use TypeScript with strict mode"
"Format JSON with 2-space indent"
"Projects use Python 3.11"
```

Agent remembers and applies these automatically.

---

## Examples

### Example 1: Web Scraping
```
"Scrape top 10 HackerNews stories and save to CSV with:
- Title
- URL
- Points
- Comments count"
```

### Example 2: Code Refactoring
```
"Review src/utils.py:
- Identify issues
- Suggest improvements
- Apply fixes
- Test the changes"
```

### Example 3: Data Processing
```
"Download weather data for NYC in June 2026:
- Save as JSON
- Calculate min/max/avg temps
- Create visualization
- Email summary"
```

### Example 4: DevOps
```
"Set up GitHub Actions workflow to:
- Run tests on every push
- Build Docker image
- Push to registry if tests pass"
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Agent asks permission repeatedly | Lower security restrictions |
| Command execution denied | Check Settings → Permissions |
| Task fails midway | Simplify task, retry |
| Agent forgets past learning | Add to Skills or Memory |
| Timeout on long task | Break into smaller tasks |

---

## Best Practices

1. **Be specific**
   - ❌ "Analyze my code"
   - ✅ "Review src/api.py for SQL injection vulnerabilities"

2. **Provide context**
   - ❌ "Fix this"
   - ✅ "This endpoint times out with >1000 records. Optimize it."

3. **Start simple**
   - Test with easy task first
   - Gradually increase complexity
   - Build confidence

4. **Use Memory**
   - Add preferences once
   - Agent applies them always
   - Saves time on every task

5. **Review output**
   - Always check results
   - Understand what Agent did
   - Correct any mistakes

---

## Advanced

### Scheduled Tasks
Create tasks that run automatically:
```
Settings → Tasks → + New Scheduled Task

Example:
Name: Daily Report
Schedule: 0 9 * * * (9 AM daily)
Action: Email summary of yesterday's metrics
```

### Custom Tools
Agent can call external APIs/tools via:
- Webhooks
- MCP (Model Context Protocol)
- Custom integrations

---

## See Also

- [Chat Service](./chat.md) — Conversational mode
- [Memory & Skills](./memory.md) — Teach Agent
- [Settings](./settings.md) — Configure behavior
