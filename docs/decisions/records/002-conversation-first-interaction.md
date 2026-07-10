---
layout: content-page
title: "002: Use a conversation-first interaction model"
description: Intent Capture should allow people to describe their need in their own words before forcing them into NHS service categories.
permalink: /decisions/002-conversation-first-interaction/
status: Proposed
---

## Status

Proposed.

## Context

The starting problem is that people often do not know which NHS service, route or pathway matches their need. Asking people to choose the correct service too early can reproduce the same problem the work is trying to solve.

A conversation-first model allows the service to begin with the person's own words, then clarify only where needed.

## Decision

Intent Capture should begin by allowing people to describe what they need in natural language, rather than first asking them to choose from NHS service categories.

The conversation should be structured enough to support safety, accessibility and handover, but flexible enough to recognise varied language, uncertainty and context.

## Consequences

This supports a more user-centred entry point, but it introduces design and governance challenges. The team will need to decide how much clarification is appropriate, how to avoid open-ended conversations, and how to make handover into existing services reliable.

## Open questions

- What is the minimum useful amount of clarification?
- When should the service stop asking questions and move the user onward?
- How should structured intent data be represented after a conversational interaction?
