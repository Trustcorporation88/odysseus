# Notes & Tasks Service

## Overview

**Notes & Tasks** is your quick planning tool:
- **Notes** — quick thoughts, reminders
- **Tasks** — todo list with deadlines
- **Reminders** — ntfy, email, or browser popup
- **Scheduled tasks** — Agent automation

---

## Notes

### Create Note

1. Go to **Notes**
2. Click **+ New Note**
3. Write text/markdown
4. Add tags
5. Set reminder (optional)
6. Save

### Features

#### Tags
Organize with tags:
- `#personal`
- `#work`
- `#project-name`
- Multiple tags per note

#### Reminders
Get notified at specific time:
- 📱 Browser popup
- 📧 Email notification
- 🔔 ntfy push notification
- Combine multiple

#### Search
Search notes by:
- Text content
- Tags
- Date range
- Reminder status

#### Archive
Keep notes organized:
- Archive old notes
- Hide from view
- Still searchable
- Delete permanently

---

## Tasks

### Create Task

1. Go to **Tasks**
2. Click **+ New Task**
3. Add checklist items
4. Set due date
5. Assign tags
6. Save

### Checklist

Check off items as you go:
```
- [ ] Research topic
- [ ] Write outline
- [x] Write draft
- [ ] Proofread
- [ ] Publish
```

### Due Dates

Set deadline:
- Today, Tomorrow
- Next week/month
- Specific date
- Recurring (daily, weekly, monthly)

### Priority

Mark importance:
- 🔴 Critical
- 🟠 High
- 🟡 Medium
- ⚪ Low

### Subtasks

Break big task into steps:
```
Main: "Launch new feature"
  - Design mockups
  - Get approval
  - Develop
  - Test
  - Deploy
```

### Collaborators

Assign to others:
- Invite team member
- Share task
- Comment on progress
- Assign subtasks

---

## Reminders

### How Reminders Work

1. Set reminder time on note/task
2. At that time:
   - Browser popup (if online)
   - Email sent
   - ntfy notification
3. Mark as done
4. Snooze if needed

### Notification Types

**Browser Popup:**
- Shows while app open
- Click to open note/task

**Email:**
- Sent at exact time
- Works offline
- Can reply

**ntfy Push:**
- Mobile notification
- Phone/desktop alerts
- Requires ntfy setup

### Snooze

Delay reminder:
- 5 minutes
- 30 minutes
- 1 hour
- Custom time

---

## Scheduled Tasks

### Agent Automation

Create tasks Agent runs automatically:

**Example:**
```
Name: Weekly Report
Schedule: 0 9 * * 1 (Monday, 9 AM)
Action: "Generate sales report for last week"
```

### Schedule Syntax

Use CRON notation:
```
*    *    *    *    *
|    |    |    |    |
|    |    |    |    └─ Day of week (0-6)
|    |    |    └────── Month (1-12)
|    |    └─────────── Day of month (1-31)
|    └──────────────── Hour (0-23)
└───────────────────── Minute (0-59)
```

**Examples:**
```
0 9 * * * — 9 AM every day
0 9 * * 1 — 9 AM every Monday
0 0 1 * * — midnight on 1st of month
*/15 * * * * — every 15 minutes
```

### Agent Actions

What tasks can do:
- Run scripts
- Send emails
- Create events
- Update database
- API calls
- File operations
- And more!

---

## Templates

### Task Templates

Save task template:
```
Template: Code Review
Items:
- [ ] Check for bugs
- [ ] Review performance
- [ ] Check security
- [ ] Verify tests
- [ ] Update docs

Reminder: 1 day before
```

Reuse for recurring tasks!

---

## Integration

### From Email
Create task from email:
- Star email
- Click **Create Task**
- Auto-links to email
- Due date suggested

### From Chat
Ask Agent:
```
"Create task: Write quarterly report, due Friday"
```

### From Calendar
Link task to event:
- Task due when event starts
- Reminder same as event
- Auto-open on day of

### To Calendar
Convert task to event:
- Click **Add to Calendar**
- Select date/time
- Creates event
- Reminder synced

---

## Pro Tips

### 1. Weekly Review
Every Friday:
1. Review completed tasks
2. Plan next week
3. Archive done items
4. Schedule new tasks

### 2. Inbox Zero
- Process all tasks daily
- Archive completed
- Defer non-urgent
- Focus on today's 3 main

### 3. Time Blocking
```
Monday:
- 9-11 AM: Focus time (no interrupts)
- 11-12: Email
- 1-2 PM: Meetings
- 2-5 PM: Focus time
- 5-6: Planning
```

### 4. Recurring Tasks
Set up repeating:
- Daily standup
- Weekly review
- Monthly reports
- Quarterly planning

### 5. Deadline Alerts
Set reminders:
- 1 day before
- Morning of
- 1 hour before
- Never miss deadline!

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Reminder didn't fire | Check time, check notification settings |
| Task won't delete | Archive instead, or confirm |
| Scheduled task failed | Check Agent logs, try again |
| Reminder went spam | Check email filter, whitelist Odysseus |

---

## Limitations

- 📌 Max 1000 notes
- ✅ Max 500 active tasks
- ⏰ Reminders need active session/email
- 📱 Push requires ntfy setup

---

## Best Practices

1. **Be specific**
   - ❌ "Do stuff"
   - ✅ "Write quarterly report by Friday 5 PM"

2. **Set deadlines**
   - Without deadline, task gets lost
   - Be realistic about time

3. **Review regularly**
   - Daily review (2 min)
   - Weekly review (10 min)
   - Remove what's no longer relevant

4. **Use templates**
   - Recurring tasks → template
   - Common patterns → template
   - Save creation time

5. **Combine tools**
   - Tasks + Calendar together
   - Tasks + Email linked
   - Agent for automation

---

## See Also

- [Calendar Service](./calendar.md) — schedule with calendar
- [Memory Service](./memory.md) — remember patterns
- [Agent Service](./agent.md) — automate tasks
- [Email Service](./email.md) — create from emails
