---
title: Decisions shaping Intent Capture
date: 2026-09-09T01:00:00.000Z
description: The choices shaping Intent Capture, how our thinking has developed, and what still needs to be tested or agreed.
author:
  - Paul Smith
layout: post
---

As Intent Capture develops, we are making choices about its scope, how people interact with it and how we build and evaluate it. This post brings together the original design positions and the decisions emerging from subsequent team discussions. Some are agreed boundaries. Others remain proposals that need testing.

## Intent Capture is not triage

Our established scope decision is that Intent Capture should help understand what someone is trying to do and support their next step. It should not diagnose a condition, carry out a clinical assessment or determine the final care someone needs.

People may describe symptoms, worries or practical tasks in the same input field. Recognising that someone might need urgent help is a reason to hand them to an appropriate route, rather than continue an unrestricted AI conversation. The distinction matters because a convincing response can easily be mistaken for clinical advice.

The boundary is agreed, but its implementation still needs work. We need to define the safety checks, which requests should bypass clarification, and how to explain the handover. People must not be left thinking the tool is monitoring them or that someone will follow up.

## Start with people's own words

The original proposal was a "conversation-first" interaction: let people describe their need before asking them to choose an NHS service category. That remains a useful design direction, but it should not be read as a commitment to a chatbot or a long conversation.

Early research found that people could express relevant concerns in free text, while also showing that they did not consistently want a back-and-forth exchange. We are developing clarification patterns for cases where the person, request or goal is unclear. How much clarification is useful, when to stop and what information to pass onward remain design questions.

For the first qualitative research round, we agreed to test one best-current design rather than compare several variants as an informal A/B test. This helped focus the research on understanding and behaviour. It did not settle the final interaction or naming.

## Make the use of AI clear

The original proposal to "show the seams of AI" means explaining when AI is being used, what it does and where its responsibility ends. We should avoid overstating certainty and make transitions to other NHS services understandable.

The research prototype puts part of this into practice. Its introductory page explains that it uses AI to find NHS services and information, does not access medical records, and offers an option not to use the tool. The exact wording and placement still need testing. These are working design choices, not proof that everyone understands the service's limits.

## Recommend a route without removing choice

September discussions made the approach to recommendations explicit: people should be able to leave a recommendation and choose another appropriate route. Suggesting self-referral, for example, should not lock someone into that option.

The design needs to explain why a route is suggested and make alternatives understandable. This also fits the research finding that people with a clear task in mind may prefer direct access. Intent Capture should help people who are unsure, while allowing those who know what they want to continue.

## Preserve approved NHS wording

We agreed that clinically assured NHS website content retrieved through the proposed Model Context Protocol (MCP) connection must be presented without an LLM summarising or rewriting it. Changing the wording would take it outside the assurance attached to the source content.

This separates finding relevant information from generating new advice. How much content to display, whether to show one or several results, and where to link people onward remain open design questions. We have agreed to investigate the value of this content connection, but have not decided to include it in the MVP.

## Use a limited prototype and reusable outcomes

In July, we agreed to use a testable prototype to learn about interaction, interpretation and useful next steps. Its initial scope should cover a limited set of intents and defined outcomes, with an explicit fallback for unsupported requests. A research prototype does not establish that the service is clinically assured or ready for production.

We also agreed to use reusable outcome-page patterns: one suggested route, several routes with a recommendation, or several equally weighted routes. Route-specific content can fit into those patterns, while situations such as safeguarding may need a different treatment. This gives us a consistent starting point without assuming every outcome should look the same.

## Let user needs guide the build

The team is continuing to design clarification and unsupported-request journeys while technical options are explored. We will make assumptions about AI capability explicit, then use concrete designs to discuss feasibility and alternatives with technical colleagues.

A scenario that cannot be supported in the first version still needs a helpful response. It should not disappear from the design simply because we assume the technology cannot handle it.

The latest sprint decision is to prioritise defining the MVP backlog, design work and targeted technical exploration before substantial architecture build work. We also agreed to develop shared test and evaluation datasets from existing feedback, search queries and research. That work is planned, rather than a completed evaluation of the service.

## What remains open

"Ask the NHS" remains a suggested name. The final clarification rules, emergency handling, supported outcomes and handover arrangements still need design, technical and clinical input. The wider relationship with Intelligent Navigation also needs further definition.

These choices will continue to develop through research and delivery. The [progress report](/posts/2026-09-09-intent-capture-progress-report/) describes the prototype and the findings informing that work.
