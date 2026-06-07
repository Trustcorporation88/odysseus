# Memory & Skills Service

## Overview

**Memory** lets your Agent learn and evolve:
- **Memory** — what Agent knows about you
- **Skills** — abilities you teach Agent

Agent gets smarter with every interaction!

---

## Memory

### What is Memory?

Notes/facts that Agent remembers and applies:

Examples:
```
"User prefers async/await over promises"
"Projects always use Python 3.11"
"Add docstrings to all functions"
"Format JSON with 2-space indentation"
```

### Adding Memory

1. **Settings → Memory → + Add Memory**
2. Write what Agent should remember
3. Be specific and actionable
4. Save

### Best Practices

- ✅ **Specific** — "Always use TypeScript strict mode"
- ✅ **Actionable** — "Prefer functional composition"
- ✅ **Complete** — describe the full rule
- ❌ **Vague** — "Be better"
- ❌ **Contradictory** — avoid conflicting rules

### Examples

**Code Style:**
```
"In JavaScript files:
- Use const/let, never var
- Format with Prettier
- Use ESLint recommended rules"
```

**Architecture:**
```
"Design patterns:
- Use dependency injection
- Single responsibility principle
- Tests for all public APIs"
```

**Preferences:**
```
"Communication:
- Be concise in responses
- Include code examples
- Explain why, not just what"
```

---

## Skills

### What is a Skill?

A **reusable ability** you teach Agent. When you ask Agent to do something a skill covers, it automatically applies that skill.

### Creating Skills

1. **Settings → Skills → + New Skill**
2. Fill in:
   - **Name** — `Deploy Docker Container`
   - **Description** — what it does
   - **Instructions** — step-by-step how
   - **Examples** — how to trigger it
3. Save

### Skill Template

```
Name: Analyze Code Performance

Description:
Profile Python code and identify bottlenecks.
Suggests optimizations.

Instructions:
1. Profile code with cProfile
2. Identify top 5 slowest functions
3. Suggest optimization strategies
4. Provide example implementations

Example triggers:
- "Profile this code for performance"
- "Where are bottlenecks in this script?"
- "Optimize this function"
```

### Examples

#### Skill: Format Code
```
Description: Apply consistent code formatting

Instructions:
- JavaScript/TypeScript → Prettier
- Python → Black + isort
- Go → gofmt
- Rust → rustfmt
- YAML → yamlfmt

Example: "Format all code in src/ directory"
```

#### Skill: Create Documentation
```
Description: Generate documentation for functions

Instructions:
1. Parse function signature
2. Extract parameters
3. Determine return type
4. Generate docstring in proper format
5. Add usage examples

Example: "Document this Python class"
```

#### Skill: Database Migration
```
Description: Create database migrations safely

Instructions:
1. Compare current schema to desired
2. Generate migration SQL
3. Test on copy database
4. Create rollback script
5. Document changes

Example: "Create migration to add user_role column"
```

---

## Retrieval & Application

### How Agent Uses Memory

1. You give Agent a task
2. Agent searches Memory/Skills
3. If relevant memory found → applies it
4. If relevant skill found → uses it
5. Executes with these applied

### Searching Memory
Agent automatically finds relevant memories.

You can also manually reference:
```
"Following memory 'Code Style': Reformat this file"
```

### Searching Skills
Similarly automatic. Force a skill:
```
"Using skill 'Deploy Docker': Deploy my app"
```

---

## Managing Memory & Skills

### Organize with Tags
Tag items for easy finding:
- `#python`
- `#team-standards`
- `#devops`
- `#security`

### Edit Anytime
1. Go to Memory or Skills
2. Click item
3. Edit text
4. Save

### Delete
- Click **Delete** button
- Confirm deletion
- Removed from all future tasks

### Export/Import
**Settings → Data → Export Memory**

- Backup all memories/skills as JSON
- Share with team
- Import into other Odysseus instance

---

## Team Workflows

### Shared Skills
Entire team learns Agent's skills:

```
Company skills:
- Deploy to Production
- Database Migration Procedure
- Code Review Checklist
- Security Audit Checklist
```

### Onboarding
New team member:
1. Clone repository
2. Import shared skills
3. Agent knows your standards immediately

### Consistency
- All code formatted same way
- Same deployment process
- Same quality standards
- Less surprises

---

## Best Practices

### Memory
1. **Be specific** — not vague
2. **Keep updated** — review quarterly
3. **Organize with tags** — easy to manage
4. **One rule per memory** — avoid complexity
5. **Real examples** — show, don't just tell

### Skills
1. **Clear instructions** — step-by-step
2. **Test thoroughly** — verify it works
3. **Document edge cases** — what if X?
4. **Version skills** — track improvements
5. **Provide examples** — show typical usage

---

## Examples in Action

### Scenario 1: New Developer
```
Memory added:
"Format Python code with Black"
"Use type hints in all functions"
"Write tests for all new code"

Result: Agent enforces standards automatically
```

### Scenario 2: Deployment
```
Skill created:
"Deploy to Production"
- Instructions: Docker → Registry → ECS
- Testing steps included
- Rollback procedure documented

Result: Consistent, safe deployments every time
```

### Scenario 3: Learning
```
Memory added from past experiences:
"This API endpoint times out with >1000 records"
"Pagination is needed"

Result: Agent remembers, applies to similar tasks
```

---

## Limitations

- 📝 Memory not searchable by users (Agent searches)
- 🔄 Can't schedule skill execution (yet)
- 👥 Can't share with other instances (download/upload manually)
- 🎯 Performance depends on relevance of memory

---

## See Also

- [Agent Service](./agent.md) — Uses memory/skills
- [Settings](./settings.md) — Manage all memories
- [FAQ - Memory](../FAQ.md#memory) — More questions
