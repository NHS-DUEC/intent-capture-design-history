---
title: Designing the mobile navigation pattern
date: 2026-04-29
description: Why we moved away from a hamburger menu and what we replaced it with.
layout: post
---

## The problem

Over 70% of NHS.UK traffic comes from mobile devices, yet our prototype had been designed and tested primarily on desktop. When we reviewed the prototype on mobile, several issues emerged:

- The task-led groupings required significant scrolling to reach on smaller screens
- The top navigation was hidden behind a hamburger menu that many participants did not notice
- Tapping targets for some links were too small to use comfortably

## What we explored

We explored three patterns for mobile navigation:

1. **Hamburger menu** — the existing approach, now widely understood but still frequently missed by users
2. **Bottom navigation bar** — a persistent bar at the bottom of the screen with 4–5 key destinations
3. **Visible stacked links** — surfacing the most common tasks directly on the page without requiring any menu interaction

## What we decided

We chose a hybrid of options 2 and 3. The most common tasks ("Get help now", "Book an appointment", "Find a service") are visible as large tappable cards on the homepage. A bottom navigation bar persists across the site for users who need to navigate between sections.

We ruled out the hamburger menu as the primary pattern based on usability testing evidence. While recognition of the hamburger icon has improved over time, participants with lower digital confidence still hesitated before using it.

## Usability testing results

We tested the mobile pattern with 10 participants, including 4 who described themselves as having low digital confidence.

- 9 out of 10 participants completed their primary task without assistance
- Average task completion time dropped by 22% compared to the hamburger prototype
- All 4 low-confidence participants successfully navigated to their destination on the first attempt

## What we are doing next

We are now working on how the navigation pattern adapts across breakpoints, ensuring a consistent experience from small mobile screens up to large desktop displays. We will share findings from that work in the next post.
