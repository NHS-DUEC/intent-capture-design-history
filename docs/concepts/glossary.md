---
layout: content-page
title: Glossary and terminology history
description: Working definitions and naming history for AI Intent Capture.
permalink: /concepts/glossary/
---

This glossary records the terms used in the AI Intent Capture design history. It also records terms that have changed, so the repository does not silently rewrite earlier thinking.

## How to use this glossary

Use these definitions when writing design history posts. Where a term is still contested, say so explicitly.

Related pages:

- [Concepts](/concepts/) gives fuller explanations of the core ideas.
- [Architecture](/concepts/architecture/) explains how the terms relate in the working system model.
- [Decisions shaping Intent Capture](/posts/2026-09-09-decisions-shaping-intent-capture/) explains the reasoning behind scope and interaction choices.

## Current terms

### Access

The point or process by which someone starts to seek NHS help, advice, information or care.

### AI Intent Capture

The named work exploring how AI can help understand what a person is trying to do, express, resolve or understand, so they can move to a safer or more appropriate next step.

### Channel

A route through which someone interacts with the NHS, such as the NHS App, NHS.UK, NHS 111 online, telephone or an in-person service.

### Clarification

A follow-up interaction used to understand a person's need well enough to support safe onward movement. Clarification should be limited and purposeful.

### Clinical assessment

A clinical process for assessing a person's symptoms, risk, urgency or care needs. Intent Capture should not be described as clinical assessment unless it has been explicitly designed and assured for that purpose.

### Clinical safety

The discipline and governance needed to identify, manage and reduce the risk of clinical harm from a service, product or system.

### Disposition

The outcome or recommended care route produced by a triage or clinical assessment process. Intent Capture should be careful not to imply that it is producing a clinical disposition.

### Expressed intent

What a person explicitly says they are trying to do or needs help with.

### Handover

The point at which information, context or a user journey moves from Intent Capture into another NHS service, route or pathway.

### Inferred intent

A system's interpretation of what a person may be trying to do, based on what they have typed, selected or provided.

### Intent

What a person is trying to do, express, resolve or understand at a particular point in their journey.

### Intent Capture

The capability to understand a person's goal, need or problem well enough to support an appropriate next step. See [Architecture](/concepts/architecture/) for the working model.

### Intelligent Navigation

A broader capability for routing and coordinating people across services and pathways based on what is known about their need, context and available options.

### Navigation

Helping someone move through the NHS system, including signposting, routing, handover and helping them understand where to go next.

### Non-AI route

An alternative route that allows someone to continue without using an AI-supported interaction.

### Orchestration

The system capability that coordinates movement between services, channels, rules, pathways and responsibilities. See [Architecture](/concepts/architecture/) for the relationship between Intent Capture and orchestration.

### Pathway

A defined route through services or care processes. Some pathways are clinical; others may be administrative, informational or operational.

### Route to care

The next meaningful step that helps a person get closer to appropriate help, advice, information or treatment.

### Service finder

A tool or service that helps people or professionals find appropriate services, usually based on location, service type or eligibility.

### Structured intent

A representation of a user's intent in a form that can be passed to another service, rule, pathway, decision point or analytics process.

### Triage

A process for assessing clinical urgency or priority. Intent Capture may identify that triage is needed, but it is not itself triage unless explicitly designed and assured as such. See [Intent Capture is not triage](/posts/2026-09-09-decisions-shaping-intent-capture/#intent-capture-is-not-triage).

## Terms that have changed

### AI Navigation

AI Navigation was the earlier, broader framing for the work. It was useful because it described the user-facing problem of helping people find the right NHS service or support.

The term became less useful as the team needed to define the specific capability being designed. Navigation describes a wider outcome. Intent Capture describes a more specific capability within that wider journey.

### NHS Navigator

NHS Navigator was explored as a potential name or framing. It is not currently the preferred term for the work because it suggests a broader destination or product, rather than the specific capability of understanding intent.

### Intent Capture

Intent Capture is now the preferred term for the core capability. It should be used when referring to the workstream or capability, while recognising that naming may still change for user-facing contexts.

## Terms to use carefully

### Diagnosis

Avoid unless referring to an explicitly clinical diagnostic process.

### Recommendation

Use carefully. It may imply a stronger clinical judgement than the service can provide.

### Advice

Use carefully. Health advice can imply clinical authority. Be clear whether the service is giving general information, signposting, routing or clinical advice.

### Safe

Use precisely. A service can be designed to reduce risk, but should not claim to be safe without evidence, assurance and governance.

### Personalised

Use only where the service is using information about the person in a clear, lawful and explainable way.

## Editorial rule

Do not silently replace older terms in historical posts unless the old term creates a safety, accuracy or accessibility problem. Where terminology has changed, add context rather than rewriting the history.
