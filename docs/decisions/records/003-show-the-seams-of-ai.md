---
layout: content-page
title: "003: Show the seams of AI"
description: The service should make clear when AI is being used, what it is doing and what it is not doing.
permalink: /decisions/003-show-the-seams-of-ai/
status: Proposed
---

## Status

Proposed.

## Context

In health contexts, people may reasonably assume that a digital conversation is clinical, personalised or monitored by a professional. AI can increase that risk because it can appear more capable, more certain or more human than it is.

The early design history states that the service should show its seams: people should understand when they are using AI, what it is doing, what it is not doing and where responsibility sits.

## Decision

The service should make the use of AI visible and understandable.

It should explain its role in plain language, avoid overstating certainty, and make clear when a person is being moved into another NHS service or pathway.

## Consequences

This may make the interaction feel less seamless, but that is an acceptable trade-off in a safety-critical public service context. Trust should be built through clarity, not by hiding system boundaries.

## Open questions

- What wording best explains the AI role without increasing anxiety?
- Where should explanations appear in the journey?
- How should handover points be shown to users?
