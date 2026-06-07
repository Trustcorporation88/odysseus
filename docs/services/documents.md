# Documents Service

## Overview

**Documents** is a **collaborative editor** where YOU write and AI assists:
- Multi-tab markdown editor
- HTML support
- CSV tables
- Real-time AI suggestions
- Version history

**Key principle:** You're in control, AI helps.

---

## Getting Started

1. Go to **Documents**
2. Click **+ New Document**
3. Select format (Markdown, HTML, CSV)
4. Start typing
5. Use AI assist whenever needed

---

## Formats Supported

### Markdown
- Headers, bold, italic
- Links, images
- Code blocks with syntax highlighting
- Tables
- Lists

**Best for:** Blog posts, documentation, notes

### HTML
- Full HTML support
- CSS styling
- Embed media
- Forms

**Best for:** Web pages, rich documents

### CSV
- Spreadsheet-style tables
- Import/export
- Data analysis

**Best for:** Data, tables, reports

### Plain Text
- Simple text
- No formatting
- Import/export

**Best for:** Scripts, config files

---

## AI Assist Features

### Highlight Text + Click ✨

Highlight any text, then choose:

#### ✏️ Edit
- Fix grammar
- Improve clarity
- Better word choice

```
Original: "the ai is very smart"
AI Edit: "The AI demonstrates impressive capabilities"
```

#### 📝 Expand
- Add more detail
- Include examples
- Provide context

```
Original: "Use Docker for deployment"
AI Expand: "Use Docker for deployment to ensure 
consistent environments across development, 
staging, and production. Docker containers 
encapsulate your application with all 
dependencies, eliminating 'it works on my 
machine' issues..."
```

#### 📊 Summarize
- Condense long text
- Key points only
- TL;DR

```
Original: [3 paragraphs]
AI Summary: "Docker ensures deployment consistency 
across environments by containerizing 
applications with dependencies."
```

#### 🎨 Rephrase
- Change tone (formal → casual)
- Different style
- Alternative wording

```
Original: "Please ensure optimal performance"
Casual: "Make sure it runs fast"
Technical: "Optimize for reduced latency and 
increased throughput"
```

#### 🔍 Explain
- Break down complex parts
- Define terms
- Provide context

```
Selection: "RESTful API"
Explanation: "REST (Representational State 
Transfer) is an architecture pattern for APIs 
that uses HTTP methods..."
```

---

## Document Management

### Create Document
1. Click **+ New**
2. Name it
3. Select format
4. Start writing

### Organize
- Folder structure
- Tags
- Search by name/content
- Favorite documents

### Version History
- Auto-saves every change
- Restore previous versions
- See who edited what
- Timestamp on each version

### Share
- Export as markdown/HTML/PDF
- Share link (read-only)
- Download file

### Delete
- Soft delete (can restore)
- Permanent delete (30-day grace)
- Confirm deletion

---

## Writing Workflow

### Example Workflow

```
1. Outline structure (headings)
2. Write draft (bare bones)
3. Highlight sections
4. Use AI Expand to flesh out
5. Review and edit
6. Highlight again
7. Use AI Edit to polish
8. Final review
9. Export/publish
```

### Tips

1. **Start simple**
   - Create outline first
   - Add content section by section
   - Use AI to help each section

2. **Use AI iteratively**
   - Write first draft (don't overthink)
   - Use AI Edit to improve
   - Repeat until happy

3. **Keep AI in bounds**
   - Don't let AI write entire doc
   - YOU write, AI assists
   - Review all AI changes

4. **Organize well**
   - Use headers
   - Link to other docs
   - Add table of contents

---

## Code Blocks

### Syntax Highlighting
Automatically detected:
```javascript
function hello(name) {
  console.log(`Hello ${name}!`);
}
```

### Copy Button
Each code block has copy button (top-right).

### AI Code Review
Highlight code block → Edit to:
- Fix bugs
- Improve performance
- Add error handling
- Add comments

---

## Tables

### Create Tables

**Markdown:**
```markdown
| Name | Age | City |
|------|-----|------|
| Alice | 30 | NYC |
| Bob | 25 | SF |
```

**CSV:**
Import CSV file directly, edit in-place.

### Sort & Filter
- Click header to sort
- Filter by value
- Export as CSV

---

## Collaboration

### Team Documents
- Shared documents
- Multiple editors
- See who's editing
- Conflict resolution

### Comments
- Add comments to text
- Thread discussions
- Resolve when done
- Track suggestions

---

## Integration

### From Email
- Forward email to Odysseus
- Creates document
- Extract text automatically

### From Web
- Save webpage as document
- Keep content locally
- Edit freely

### To Other Services
- Export to Blog
- Send to Email
- Save to Calendar as note

---

## Pro Tips

### 1. Keyboard Shortcuts
- `Ctrl+B` — Bold
- `Ctrl+I` — Italic
- `Ctrl+K` — Link
- `Ctrl+/` — Format menu

### 2. Templates
- Save templates for common docs
- Reuse structure
- Faster writing

### 3. Daily Notes
- Keep running document
- Add thoughts throughout day
- Summarize at end of day
- Archive when done

### 4. Knowledge Base
- Save research findings
- Create linked documents
- Build personal wiki
- Easy to search

### 5. Checklists
```markdown
- [ ] Task 1
- [ ] Task 2
- [x] Task 3 (done)
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| AI assist not working | Check internet, try again |
| Formatting broken | Check markdown syntax |
| Changes not saving | Refresh page, check disk space |
| Can't find document | Use search feature |

---

## Limits

- 📄 Max 1MB per document
- 📁 Max 1000 documents
- ✏️ Max 50 concurrent edits
- 📤 Export size depends on format

---

## Export Options

### Format Specific

**Markdown** → `.md`
**HTML** → `.html` (with CSS)
**CSV** → `.csv`
**PDF** → `.pdf` (rich formatting)

### Bulk Export
- Export all documents
- Creates ZIP file
- Good for backup

---

## See Also

- [Chat Service](./chat.md) — reference docs in chat
- [Memory Service](./memory.md) — save key points
- [Email Service](./email.md) — save emails as docs
