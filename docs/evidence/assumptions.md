---
layout: content-page
title: Assumptions register
description: Working assumptions that need evidence, challenge or decisions.
permalink: /evidence/assumptions/
---

This assumptions register captures important things the team currently believes, suspects or is designing around, but which still need evidence, challenge or a decision.

Assumptions should not be treated as settled facts. They should be reviewed as research, prototyping, clinical safety work and technical discovery progress.

Related pages:

- [Evidence](/evidence/) explains evidence levels.
- [Claims and evidence index](/evidence/claims/) connects claims to evidence gaps and validation steps.
- [Architecture](/concepts/architecture/) describes the working model that several assumptions depend on.
- [Roadmap](/roadmap/) records the next documentation work needed to strengthen the evidence base.

## Confidence levels

### Low

Limited evidence. The assumption is plausible, but could easily change.

### Medium

Some evidence or repeated alignment, but more validation is needed.

### High

Strong supporting evidence or agreement, but still worth keeping visible because the assumption affects important decisions.

## Current assumptions

| Assumption | Confidence | Why it matters | How to test or evidence it |
|---|---:|---|---|
| People can describe their need in their own words well enough for useful intent capture. | Medium | This is the core interaction model. | Prototype with a broad set of urgent, non-urgent, administrative and informational intents. |
| The service can clarify intent without becoming open-ended or burdensome. | Medium | Clarification is useful only if it reduces effort rather than adding a new barrier. | Test conversation patterns and stopping rules. |
| Intent Capture can safely distinguish when to stop and hand over. | Low | Safety depends on knowing when not to continue. | Scenario review with clinical safety and service owners. |
| Intent Capture is distinct from triage. | Medium | This defines scope, governance and safety boundaries. | Validate through clinical safety review and the decision record [Intent Capture is not triage](/decisions/001-intent-capture-is-not-triage/). |
| Structured intent will be useful to downstream services. | Medium | The value of Intent Capture depends partly on whether onward services can use the captured information. | Test handover formats with NHS 111 online, NHS App, NHS.UK and other relevant teams. |
| Users will understand the service better if it shows the seams of AI. | Medium | Transparency is important, but explanations must not increase anxiety or reduce completion unnecessarily. | Test content around AI disclosure, limits and handover. See [Show the seams of AI](/decisions/003-show-the-seams-of-ai/). |
| A non-AI route is needed for trust, inclusion and safety. | High | Users should not be forced to use AI to access NHS help. | Record as a decision and test whether alternatives are visible and usable. |
| The NHS App may be a strong strategic entry point. | Medium | Placement affects audience, context, integration and risk. | Compare placement options using evidence-based criteria. |
| Intent Capture can support orchestration rather than becoming a standalone destination. | Medium | This shapes the architecture and service model. | Model service flows and technical integration options. See [Architecture](/concepts/architecture/). |
| The same intent may need different routes depending on context. | High | Routing cannot depend on intent label alone. | Map example intents against age, location, urgency, service availability and user context. |

## Review questions

Use these questions when reviewing assumptions:

- What decision depends on this assumption?
- What evidence currently supports it?
- What evidence might disprove it?
- Who needs to challenge or validate it?
- What should change if the assumption is wrong?

If an assumption becomes strong enough to affect product direction, link it to the [claims and evidence index](/evidence/claims/) or convert it into a [decision record](/decisions/).
