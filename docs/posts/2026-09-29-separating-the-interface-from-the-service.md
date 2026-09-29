---
title: Separating the interface from the service
date: 2026-09-29T13:10:00.000+01:00
description: We're thinking about separating the Ask the NHS interface from its
  underlying service to support future reuse while keeping the first pilot
  simple and easy to adapt as we learn.
author:
  - Paul Smith
layout: post
---
We are exploring how Ask the NHS could help people describe what they need in their own words and find an appropriate next step. As we move towards a test-and-learn pilot, we need to decide how to build its interface and how it will fit into existing NHS products.

Over the past week, our discussions have moved towards a clear architectural direction: separate the front end (the interface people use) from the underlying Ask the NHS logic and infrastructure.

![A website pilot connects to a shared Ask the NHS service, with dotted connections showing possible future reuse by the NHS App and other interfaces.](/images/frontend-example.png)

## Balancing early delivery with future flexibility

Our initial discussions reflected a familiar tension. We want to deliver something useful quickly, but decisions made for an MVP can remain in place much longer than intended.

Ask the NHS could eventually appear in several places, including the [NHS website](https://nhs.uk) and NHS App. Those environments have different technologies, user expectations and interaction patterns. Closely coupling the service's logic to one interface could make it harder to adapt later.

At the same time, designing every possible future integration now would delay the learning we need from a pilot. Our emerging approach is to establish a separation between the interface and the underlying service, then build the minimum needed to test the first experience.

## A shared back end, starting with our own interface

The direction discussed is for the underlying capabilities to be available through APIs. Our own front end would use those APIs, with scope for other interfaces to use them later.

This allows us to develop the user experience while keeping the intent-capture logic and central AI controls independent of where the interface appears.

It does not mean we have decided to hand interface design over to other teams. Providing NHS.uk with a data endpoint so it could build its own experience was one option discussed. For the initial pilot, we want to retain enough control to design, observe and adapt the complete journey ourselves.

## Keeping control so we can learn

Control of the interface is particularly important while we are still establishing how people understand and use Ask the NHS.

We may need to change the introduction, explain the service’s boundaries differently, adjust how people enter information or revise what happens next. Those changes could be prompted by research, observed behaviour or safety concerns.

We therefore want an approach that lets us make changes without depending on the NHS website's wider release cycle.

## Starting simply on nhs.uk

We discussed several ways to surface Ask the NHS on the NHS website:

* a link into a separate, team-controlled journey
* a text field that passes someone's request into that journey
* a more embedded interface, such as a widget or overlay

We will likely aim for a simple entry route for early testing. This would let us learn about the service before investing in deeper integration. It would also give us space to explore how Ask the NHS relates to existing website features, particularly search.

The precise entry point and integration pattern are yet to be determined and we look forward to collaborating with our colleagues from the nhs website. A dedicated landing URL (address) is also something we might wish to create.

## What we still need to decide

Separating the front end from the back end gives us more freedom to reconsider the implementation.

An exploratory spike suggested that adapting NHS.uk Frontend components to .NET Razor templates was more feasible than initially expected. A subsequent discussion raised a concern about .NET’s position on the technology radar, which needs checking with the team. React was mentioned as one possible approach to an embedded interface, but no framework has been selected.

We also need to establish how analytics will work across the NHS website and Ask the NHS. We want to understand how people enter the journey, how they interact with it and where they go afterwards.

Our next step is to document the options and trade-offs, confirm the initial front-end approach and make the decisions visible. The aim is to preserve the flexibility we need while keeping delivery focused on a pilot we can learn from.
