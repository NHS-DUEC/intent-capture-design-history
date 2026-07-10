---
title: From AI Navigation to Intent Capture
date: 2026-07-10T00:00:00.000Z
description: How the work evolved from a broad idea about AI helping people navigate the NHS into a more specific capability for understanding intent.
author:
  - Paul Smith
layout: post
---

When this work began, we used the language of **AI Navigation**. That was a useful starting point because it described the broad ambition: exploring whether AI could help people find the right NHS service or support more easily and safely.

Over time, that language started to feel too broad.

Navigation describes the movement of a person through the system. It includes helping someone understand what to do next, moving them into an existing pathway, signposting to trusted information, or helping them reach an appropriate service.

But the first design problem we kept returning to was more specific than navigation.

Before the system can help someone move to the right place, it needs to understand what they are trying to do.

That is why the work has moved towards the term **Intent Capture**.

## What changed

The early framing was about AI helping people navigate the NHS.

That framing was not wrong. It helped us describe the opportunity in terms that were easy to understand. People often come to the NHS with a need, worry, symptom or question, but they do not necessarily know which service they need.

However, as we discussed the work with product, design, clinical, architecture and delivery colleagues, it became clearer that we were talking about several different capabilities at once:

- understanding what someone is trying to do
- identifying whether there may be urgent or emergency need
- clarifying ambiguous inputs
- deciding whether an existing service or pathway is more appropriate
- handing someone over safely
- helping the wider system route or orchestrate the next step

Calling all of that AI Navigation risked making the concept too large.

Intent Capture gives us a narrower and more useful design object.

## Why intent matters

People do not always arrive with a neat service request.

They may say:

> I have chest pain and I am worried.

They may say:

> I need to know if this can wait until tomorrow.

They may say:

> I am trying to get help for my child but I do not know where to start.

They may say:

> I need to speak to someone about my prescription.

Some of these are symptom descriptions. Some are service requests. Some are practical tasks. Some are expressions of worry or uncertainty.

Intent Capture is concerned with understanding what the person is trying to achieve, not just classifying the words they used.

A symptom may be part of the input, but it is not always the intent.

For example, “I have chest pain” may point towards several possible intents:

- I need to know if this is an emergency
- I need urgent help now
- I want reassurance
- I want to understand what could be causing it
- I want to know whether I should use 111 online, call 999, contact my GP or go somewhere else

The design challenge is to understand enough of that intent to help the person move safely and usefully to the next step.

## Why the distinction matters

Separating Intent Capture from navigation helps clarify responsibility.

Intent Capture is not the whole journey. It is one capability within a wider access, triage and navigation system.

It should help the system understand a person's goal, need or problem well enough to support an onward move. That onward move might be into 111 online, NHS.UK content, NHS services near you, the NHS App, a GP route, urgent care, emergency care, or another service.

Navigation is broader. It covers how the person is supported through the system after their need has been understood.

Orchestration is broader again. It concerns how the system coordinates services, rules, pathways, responsibilities and handovers.

This distinction matters because it stops a single interaction from becoming responsible for too much.

## What Intent Capture is not

Intent Capture is not triage.

It may identify that someone needs triage, but it should not be assumed to perform clinical assessment or determine the final care outcome.

Intent Capture is not diagnosis.

It should not tell people what condition they have.

Intent Capture is not a replacement for existing NHS services.

It should help people move into those services more clearly and safely.

Intent Capture is not just a chatbot.

Conversation may be a useful interaction pattern, but the service capability is broader than the interface. The important output is not a conversation; it is a better-understood need that can support the next step.

## What this means for design

The shift from AI Navigation to Intent Capture changes the design questions.

Instead of asking:

> How might AI help people navigate the NHS?

we can ask more precise questions:

> What does the system need to understand before it can move someone safely to the next step?

> How should people express their need without needing to know NHS service structures?

> What clarification is useful, and when does clarification become friction?

> What information should be handed over to another service or pathway?

> How do we make the boundary between intent capture, triage and onward navigation clear?

These questions are more actionable because they focus on the capability we are designing.

## What remains true from the earlier framing

The early AI Navigation framing still contains important principles.

The service should still be useful before it is clever.

It should still show its seams.

It should still be safe by design.

It should still work with the NHS, not around it.

It should still be inclusive from the start.

Those principles remain relevant. What has changed is the precision of the design object.

## Current position

Our current working position is that Intent Capture should be treated as a distinct capability within a wider access, triage and navigation model.

It should help understand what a person is trying to do, identify when they may need a safer route, and provide enough structure to support onward movement into the right service or pathway.

This does not remove the need for navigation. It makes navigation more possible.

A person cannot be helped to the right place until the system has understood enough about what they need.

That is the role of Intent Capture.

## Open questions

This shift gives us more clarity, but it does not resolve everything.

We still need to answer:

- What is the minimum useful intent data needed for different onward routes?
- How much clarification should happen before handover?
- Which intents should bypass Intent Capture entirely?
- What should be handled by Intent Capture, and what should be handled by Intelligent Navigation or another orchestration layer?
- How should we evaluate whether Intent Capture improved the user's outcome?
- How should we explain the capability to users without introducing technical or organisational language?

These questions should shape the next phase of prototyping, research and evaluation.
