---
version: alpha
name: MEI Consultoria
description: Design system for a MEI consultancy landing page, professional and approachable.
colors:
  primary: "#1E3A8A"   # Blue 800
  secondary: "#6B7280" # Gray 500
  accent: "#10B981"    # Emerald 500
  background: "#F9FAFB" # Gray 50
  text: "#111827"      # Gray 900
typography:
  h1:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    fontWeight: 500
  button-secondary-hover:
    backgroundColor: "{colors.accent}"
  input:
    borderColor: "{colors.secondary}"
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
    borderWidth: "1px"
  input-focus:
    borderColor: "{colors.accent}"
    boxShadow: "0 0 0 2px {colors.accent}33"
---
## Overview

MEI Consultoria design system blends professional trust (blue) with growth and success (green accent). Clean, accessible, and focused on conversion.

## Colors

- **Primary (#1E3A8A):** Deep blue for trust, authority, and main actions.
- **Secondary (#6B7280):** Neutral gray for secondary information and less emphasized actions.
- **Accent (#10B981):** Vibrant green representing growth, success, and call-to-action highlights.
- **Background (#F9FAFB):** Light gray for page background, ensuring content stands out.
- **Text (#111827):** Dark gray for optimal readability.

## Typography

Inter is chosen for its excellent readability on screen and professional appearance. Hierarchy uses weight and size to guide the user's eye.

## Layout

Consistent spacing using the 8px grid system ensures alignment and visual harmony.

## Components

- **button-primary:** Main call-to-action, uses primary background with white text.
- **button-primary-hover:** Switches to accent color on hover for feedback.
- **button-secondary:** Secondary actions with secondary background.
- **input:** Form fields with subtle border and focus ring using accent color.

## Do's and Don'ts

- Do use the accent color sparingly to highlight important elements.
- Don't use pure black (#000000) for text; use the defined text color for better contrast.
- Do maintain ample whitespace around components to avoid clutter.
- Don't mix multiple font families; stick to Inter for consistency.