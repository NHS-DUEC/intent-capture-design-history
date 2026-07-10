---
layout: content-page
title: "001: Intent Capture is not triage"
description: Intent Capture should understand what a person is trying to do without becoming a clinical assessment or triage service.
permalink: /decisions/001-intent-capture-is-not-triage/
status: Accepted
---

## Status

Accepted.

## Context

People may arrive at the NHS with symptoms, worries, questions or practical tasks. Some of those inputs will need urgent clinical assessment, but not every expression of need is a triage problem.

There is a risk that any AI-enabled conversation about health is interpreted as clinical triage, either by users or stakeholders. That would raise the safety bar, increase complexity and blur the boundary between understanding what someone needs and deciding what clinical care they should receive.

## Decision

Intent Capture should not be treated as triage.

It should help understand a person's goal, need or problem well enough to support routing, orchestration or onward movement into an appropriate service or pathway. Where a person may need urgent or emergency help, the service should move them to a safer route rather than attempt to resolve the situation itself.

## Consequences

This decision helps keep the scope clearer. Intent Capture can focus on understanding, clarification and handover rather than diagnosis, clinical assessment or final care disposition.

It also means the service needs strong boundaries. Users must not be led to believe that the AI is clinically assessing them, monitoring them or making a final judgement about their care.

## Open questions

- What minimum safety checks are needed before Intent Capture can hand someone to another service?
- Which inputs should immediately bypass Intent Capture?
- How should the service explain its limits without undermining trust?
