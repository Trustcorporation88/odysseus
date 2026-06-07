# Calendar Service

## Overview

**Calendar** is your local-first event manager:
- Create & edit events
- CalDAV sync (Apple, Google, Nextcloud, Radicale)
- Reminders & notifications
- Agent-aware scheduling
- Timezone support

---

## Getting Started

### Create Event

1. Go to **Calendar**
2. Click on date/time slot
3. Fill in event details:
   - Title
   - Time/date
   - Reminder
   - Calendar
4. Save

### View Modes

- 📅 **Month** — full month overview
- 📋 **Week** — 7 days horizontal
- 📝 **Day** — single day detailed
- 📑 **Agenda** — upcoming events list

---

## Event Details

### Basic Info
- **Title** — event name
- **Date/Time** — when it happens
- **Duration** — how long
- **Location** — where (address or Zoom link)
- **Description** — notes

### Recurring Events
```
Options:
- One-time
- Daily
- Weekly (Mon/Wed/Fri)
- Monthly (1st of month)
- Yearly
- Custom pattern
```

### All-Day Events
- No specific time
- Spans full day
- Useful for birthdays, holidays

### Busy/Free
Mark as:
- **Busy** — don't book over this
- **Free** — can double-book
- **Tentative** — unsure

---

## Reminders

### When to Notify
- 15 minutes before
- 1 hour before
- 1 day before
- Morning of
- Custom time

### How to Notify
- 📱 Browser popup
- 📧 Email notification
- 📞 Phone call (if provider supports)
- Multiple reminders

### Snooze
Delay reminder:
- 5, 15, 30 minutes
- 1, 2, 8 hours
- 1 day
- Custom

---

## Syncing Calendars

### Connect Provider

1. Go to **Calendar Settings**
2. Click **+ Add Calendar**
3. Choose provider
4. Grant access
5. Select calendars to sync
6. Confirm

### Supported Providers
- **Apple Calendar** — iCloud
- **Google Calendar** — Gmail account
- **Microsoft Outlook** — Outlook account
- **Nextcloud** — self-hosted
- **Radicale** — self-hosted CalDAV
- **Generic CalDAV** — any provider

### Sync Direction
- **Two-way** — changes sync both directions
- **Read-only** — view calendar only
- **Write-only** — create events only

### Frequency
- **Real-time** — instant sync
- **5 minutes** — every 5 minutes
- **15 minutes** — every 15 minutes
- **Hourly** — once per hour

---

## Organization

### Multiple Calendars
Create separate calendars:
- **Work** — job events
- **Personal** — life events
- **Holidays** — national holidays
- **Projects** — project milestones
- **Birthdays** — contacts' birthdays

### Color-Coding
Assign colors:
- 🔴 Red — high priority
- 🟠 Orange — medium
- 🟡 Yellow — low
- 🟢 Green — personal
- 🔵 Blue — work
- Custom colors

### Visibility
- Public — share with others
- Private — nobody else sees
- Shared — specific people

---

## Sharing

### Share Calendar

1. Click calendar → Settings
2. Click **Share**
3. Add email addresses
4. Set permissions:
   - View only
   - Edit
   - Admin (can manage sharing)

### Shared Calendars
Calendars others shared with you:
- View in sidebar
- Can be color-coded
- Edit if permitted
- Remove if unwanted

### Public Links
Generate link:
- Share via link
- Read-only
- No account needed
- Can disable anytime

---

## Integration

### With Notes
Link note to event:
- Create note during event
- Attach to calendar event
- Review later
- Search together

### With Email
Calendar aware of emails:
- Declining meeting sends email
- Accepting notifies others
- Meeting requests auto-create events

### With Agent
Agent aware of schedule:
- Can't book you over busy times
- Sees deadlines
- Aware of timezones
- Helps with scheduling

### With Tasks
Connect tasks to events:
- Create task for event prep
- Task due date matches event
- Reminder synced

---

## Time Zones

### Automatic Detection
- System timezone detected
- Applies to all events
- Updated if you travel

### Per-Event Timezone
Set different timezone:
- Useful for phone calls with other zones
- Stores both local and UTC
- Converts automatically

### Display Options
- Show in your timezone
- Show in event timezone
- Show both

---

## Recurring Events

### Create Recurring

1. Create event
2. Set **Repeat** option
3. Choose pattern:
   - Daily
   - Weekly (select days)
   - Monthly (date or day)
   - Yearly
4. Set end date (or infinite)
5. Save

### Edit Series
When you edit:
- **This event only** — just this occurrence
- **This and future** — this + all after
- **All events** — entire series

### Break Series
Stop a recurring event at certain point:
- Keep past occurrences
- Delete future ones
- Or create new series

---

## Pro Tips

### 1. Time Blocking
```
Monday:
9-10:30 AM: Meeting with team
11-12: Focus time (no calendar)
1-2 PM: Lunch
2-5 PM: Deep work
```

### 2. Buffer Time
Add 30 min between meetings:
- Gives break
- Prevents back-to-back fatigue
- Time for notes

### 3. Decline Gracefully
```
When declining:
1. Suggest alternative time
2. Offer to reschedule
3. Explain briefly
4. Be professional
```

### 4. Busy Blocks
Block out time as "busy":
- Focus blocks
- Lunch
- Exercise
- Personal time

### 5. Timezone Travel
When traveling:
1. Update system timezone
2. Check all meetings times
3. Send updated calendar link
4. Confirm attendance

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Won't sync | Re-authenticate, check provider |
| Time wrong | Check timezone setting |
| Event missing | Check calendar visibility |
| Can't edit | Check permissions |
| Reminder not firing | Check browser/email settings |

---

## Best Practices

1. **Be specific with times**
   - Not just "Monday morning"
   - Use specific time like "Monday 9 AM"

2. **Add descriptions**
   - Why the meeting?
   - What to prepare?
   - Agenda items?

3. **Include locations**
   - Building + room
   - Or Zoom link
   - With password if needed

4. **Set reminders**
   - 1 day before
   - Morning of
   - 30 min before
   - Different for each

5. **Review weekly**
   - Sunday planning
   - Week overview
   - Prepare for week
   - Adjust as needed

---

## Limitations

- 🌐 Sync needs internet
- 🔗 CalDAV provider required for sync
- 📱 Mobile calendar app can't edit (view only)
- ⏰ Recurring patterns limited to standard types

---

## See Also

- [Notes Service](./notes.md) — attach notes to events
- [Tasks Service](./notes.md#tasks) — link tasks to events
- [Email Service](./email.md) — meeting requests
- [Settings](./settings.md) — configure providers
