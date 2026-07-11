---
layout: content-page
title: Claims and evidence index
description: A traceability table connecting important claims to evidence gaps and next validation steps.
permalink: /evidence/claims/
---

This page connects important claims in the design history to supporting evidence, known gaps and next validation steps.

It is intended to make the design history easier to challenge. Claims should become stronger over time as they are linked to research, analytics, decision records, meeting notes, pilots and technical discovery.

Related pages:

- [Evidence](/evidence/) explains evidence levels.
- [Assumptions register](/evidence/assumptions/) records beliefs that still need validation.
- [Decision records](/decisions/) record material choices that should be reflected here.
- [Architecture](/concepts/architecture/) records the current system model.

## Evidence levels

- **Established**: supported by agreed decisions, research, operational evidence or repeated stakeholder alignment.
- **Emerging**: seen across multiple discussions or artefacts, but not yet formally agreed.
- **Hypothesis**: a proposed idea that still needs to be tested.
- **Open question**: a material uncertainty that still needs exploration.

## Current claims

| Claim | Evidence level | Supporting artefacts | Gaps | Next validation |
|---|---:|---|---|---|
| People should not need to understand NHS structure before asking for help. | Established | First design history post; [user needs](/userneeds/). | Needs stronger user research examples and quotes. | Link to research findings when available. |
| Intent Capture is distinct from triage. | Emerging | [Decision record](/decisions/001-intent-capture-is-not-triage/); [concepts page](/concepts/); first design history post. | Needs explicit clinical safety and product agreement. | Review with clinical safety, product and service owners. |
| Conversation-first interaction is a useful starting pattern. | Hypothesis | [Decision record](/decisions/002-conversation-first-interaction/); early design principles. | Needs testing with different types of intent and literacy levels. | Prototype and evaluate structured clarification patterns. |
| The service should show the seams of AI. | Emerging | [Decision record](/decisions/003-show-the-seams-of-ai/); first design history post. | Needs tested wording and placement. | Test content variants for AI disclosure and handover. |
| Structured intent could help downstream orchestration. | Hypothesis | [Concepts page](/concepts/); [architecture page](/concepts/architecture/). | Needs technical and service integration evidence. | Define example structured intent payloads and handover points. |
| Users should always have a non-AI route. | Emerging | Early design principles and inclusion concerns. | Needs explicit decision record. | Add a decision record and test visibility of alternatives. |
| Intent Capture may be useful in the NHS App. | Hypothesis | Strategic framing around joined-up access. | Needs placement evidence and risk assessment. | Use placement matrix and compare against NHS.UK and 111 online placements. |
| The same expressed intent may need different routes depending on context. | Emerging | Taxonomy and typology work; [architecture page](/concepts/architecture/). | Needs scenario mapping. | Map sample intents against urgency, age, location and service availability. |

## Maintenance rule

When a design history post makes a strong claim, add it to this index if it affects scope, safety, architecture, product direction or evaluation. Claims should also be linked to the [assumptions register](/evidence/assumptions/) when they depend on unvalidated beliefs.
