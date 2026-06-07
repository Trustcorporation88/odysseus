# Email Service

## Overview

**Email** is your smart inbox with AI triage:
- Connect any email account
- Auto-categorize with ML
- Urgent email alerts
- Auto-summarize long threads
- Draft replies with AI
- Spam filtering

Work email smarter, not harder.

---

## Getting Started

### Connect Account

1. Go to **Email**
2. Click **+ Add Account**
3. Choose provider (Gmail, Outlook, etc.)
4. Grant IMAP/SMTP access
5. Sync begins automatically

### First Sync
- First sync takes a few minutes
- Imports last 6 months by default
- Shows progress bar
- Done when done!

---

## Features

### Auto-Tagging
ML automatically tags emails:
- 🏷️ **Urgent** — needs immediate attention
- 📋 **Work** — business related
- 🎯 **Action Required** — needs response
- 📧 **Newsletter** — subscriptions
- 🗑️ **Spam** — likely spam
- And more...

Customize tags in Settings!

### Urgency Alerts
Important emails highlighted:
- 🔴 **Critical** — from VIP, deadline soon
- 🟠 **High** — from known contacts, action needed
- 🟡 **Medium** — normal important
- ⚪ **Low** — can wait

### Auto-Summary
Long threads get auto-summarized:
- TL;DR generated
- Key points extracted
- Reduces reading time
- Click to expand

### Draft Replies
AI suggests response:
1. Click **Draft Reply**
2. AI generates response
3. Edit as needed
4. Click **Send**

### Spam Filter
- ML classifies spam
- Move to spam folder
- Learn from corrections
- Improves over time

---

## Email Organization

### Folders
- **Inbox** — new emails
- **Sent** — emails you sent
- **Drafts** — unsent emails
- **Archive** — old emails
- **Spam** — spam filter

### Search
- Search by sender, subject, content
- Filter by date, tag
- Full-text search

### Mark As...
- Read/unread
- Spam/not spam
- Important/normal
- Archive

---

## Settings

### Account Settings
**Email → Settings → [Account]**

- **IMAP/SMTP settings** — auto-filled
- **Sync frequency** — how often to check
- **Folders to sync** — which folders
- **Signature** — auto-add to replies

### Notification Settings
- **Desktop alert** — popup on new email
- **Email alert** — send notification email
- **Urgency filter** — only critical
- **Sound** — audio notification

### AutoReply & Vacation
- Set auto-reply when away
- Define vacation dates
- Exclude certain senders

### Spam Settings
- Adjust spam sensitivity
- Whitelist senders
- Block specific addresses

---

## Integration

### CalDAV Awareness
Email aware of your calendar:
- Sees when you're busy
- Smart urgency scoring
- Respects timezone
- Suggests meeting times

### Task Integration
Create tasks from emails:
- Flag email as task
- Due date auto-set
- Link to calendar event
- Agent can execute

### Note Taking
Attach notes to emails:
- Keep context
- Reference later
- Search notes
- Share with agent

---

## Advanced

### Email Rules
Create automatic rules:
```
IF: From boss
THEN: Label "urgent", Desktop alert

IF: Contains unsubscribe
THEN: Mark as newsletter

IF: To mailing list
THEN: Skip inbox, archive
```

### Email Templates
Save common responses:
```
Template: "Out of Office"
Subject: Auto-reply
Body: "Thanks for email, back {{return_date}}"
```

### Multi-Account
Manage multiple accounts:
- Switch between accounts
- Unified inbox view (coming soon)
- Per-account rules
- Different signatures

### Export
Export emails:
- As MBOX (standard format)
- As PDF
- As TXT
- Bulk export all

---

## Pro Tips

### 1. Urgent First
- Filter by "Urgent" tag
- Process critical emails first
- Use "Snooze" to defer rest

### 2. Weekly Digest
Enable weekly summary:
- Week overview email
- Key metrics
- Tasks/deadlines
- Sent to you

### 3. Smart Unsubscribe
- Use Odysseus unsubscribe detection
- One-click removal
- Block similar senders
- Reduces email noise

### 4. Draft Management
- Save drafts regularly
- Schedule send time
- A/B test subject lines (advanced)
- Track opens (advanced)

### 5. Communication Patterns
- See who emails you most
- Busiest times
- Response time analysis
- Productivity insights

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email won't sync | Re-authenticate, check IMAP enabled |
| Missing emails | Check sync date range in settings |
| Tags not working | Retrain ML (tag manually) |
| Urgent wrong | Adjust alert settings |
| Draft sent without review | Enable "confirm before send" |

---

## Security

### Encryption
- Passwords encrypted
- API keys never logged
- TLS for all connections
- No plaintext storage

### Privacy
- Emails stay on your server
- No scanning for ads
- No tracking pixels
- No third-party analysis

### Best Practices
- Use strong password
- Enable 2FA on email provider
- Regular backups
- Review app permissions

---

## Limitations

- 🌐 Requires internet (for sync)
- 📨 Limited to IMAP/SMTP
- 🔗 No Exchange support (yet)
- 📎 Large attachments may be slow

---

## See Also

- [Notes Service](./notes.md) — save email summaries
- [Tasks Service](./notes.md#tasks) — create from emails
- [Calendar Service](./calendar.md) — view with calendar
- [Settings](./settings.md) — configure providers
