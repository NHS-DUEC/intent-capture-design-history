---
title: Intent Capture progress report
date: 2026-09-09T00:00:00.000Z
description: What early research has taught us and how it is shaping the next stage of Intent Capture design and delivery.
author:
  - Paul Smith
layout: post
---

Since our last update, we have tested an early Intent Capture prototype in an NHS App context and reviewed how people describe their concerns and respond to suggested next steps. We are now using those findings to develop the interaction and define the work needed for a minimum viable product (MVP).

## Why we are trying "Ask the NHS"

The prototype uses the suggested name "Ask the NHS". Intent Capture describes the capability we are developing, while "Ask the NHS" gives people a simple invitation to seek help. In early design discussions, it was favoured as a clearer, more memorable name that could be recognised wherever the service appears.

We had also considered "Tell us how we can help". The concern was that this wording was less clear about what would happen next and could sound like a request for feedback. "Ask the NHS" was also considered easier to understand than "Intelligent Navigation". One question raised was whether "Ask" fits requests that are statements rather than questions. The intended invitation includes both: people should be able to describe a problem without having to phrase it as a question.

This is a working name, rather than a final naming decision or a research finding that it performs better than the alternatives. We still need to understand what people expect from it and whether the surrounding content explains the service clearly enough. In the research prototype, the introductory page explains that the tool uses AI to find NHS services and information, does not access medical records, and offers an option not to use it. The name and that explanation need to work together so people understand what they are choosing to use.

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="/images/intent-capture-research/ask-the-nhs-research-input.webp" alt="Ask the NHS prototype in an NHS App phone frame, with an explanation of AI use, a concern text field, a Continue button and an option not to use the tool." width="1836" height="1836" loading="lazy" decoding="async">
  <figcaption class="nhsuk-image__caption">The prototype taken to research: asking people to describe their concern in their own words.</figcaption>
</figure>

## What we learned from research

The research review gave us some encouraging findings. Participants were generally willing to try the tool and entered relevant information without overwhelming the text field. Some valued seeing their concern reflected back to them: it helped them feel understood and made the response feel more personal.

The results also exposed weaknesses. Generic recommendations could quickly reduce confidence. Participants often associated "111" with an urgent telephone call, even when the intended destination was 111 online. We need to make the next step clearer and explain how it relates to what the person has told us.

<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="/images/intent-capture-research/ask-the-nhs-research-outcome.webp" alt="Prototype outcome screen headed What to do next, recommending a headache symptom check through 111 online, with a second card for NHS headache advice partly visible." width="1758" height="1758" loading="lazy" decoding="async">
  <figcaption class="nhsuk-image__caption">An example outcome from the research prototype, showing a recommended 111 online route and NHS information.</figcaption>
</figure>

## What the research cannot yet tell us

We also need to be careful about what this research tells us. Participants were often recalling past experiences and already knew which service or action they wanted. That limited what we could learn about whether someone facing an unfamiliar problem would choose Intent Capture. People with a clear task in mind should still be able to go directly to it. The research did not show a consistent preference for a chat interface.

## Developing the interaction

Our current design work focuses on clarification: what happens when it is unclear who a request concerns, what someone means or what they want to achieve. We are exploring whether reusable patterns can handle these situations and how to respond helpfully when a request falls outside the initial scope. The interactive prototype also needs updating to reflect the latest outcome screens and clarification designs.

At our latest sprint planning session, we agreed to explore how NHS website content could support more useful explanations and outcomes. This includes a small design investigation into the proposed content connection, known as MCP. Its inclusion in the MVP remains undecided. The investigation should establish whether it adds enough value to justify the complexity.

## Preparing for the next stage

We have also started identifying intents and possible outcomes from existing 111 online feedback and search queries. The next step is to develop shared test and evaluation datasets, so design and technical colleagues can assess how different requests should be handled.

The next sprint prioritises defining the MVP backlog, developing the designs and targeted technical exploration. Substantial architecture build work is deferred while we make the required capabilities and dependencies clearer. This gives us a more concrete basis for deciding what the first version should support, how it should respond when it cannot help, and what needs further testing.
