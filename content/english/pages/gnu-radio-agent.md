---
title: "GRC Agent"
meta_title: "GRC Agent | AI assistant inside GNU Radio Companion"
description: "A free, open-source AI assistant that lives inside GNU Radio Companion. It reads your live flowgraph, answers questions from the real GNU Radio documentation, and edits the graph through validated tool calls."
slug: "gnu-radio-agent"
draft: false
---

# GRC Agent

A free, open-source AI assistant that lives inside **GNU Radio Companion**. It reads the flowgraph you have open, answers questions grounded in the real GNU Radio block catalog and wiki, and edits the graph directly through validated tool calls rather than by rewriting your `.grc` file.

It runs entirely on your own machine with a local model, or with any OpenAI-compatible API.

{{< image src="images/grc-agent/interface.webp" alt="GRC Agent running inside GNU Radio Companion" class="img-fluid" >}}

<div class="button-group" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
  <style>
    .button-group a { text-decoration: none; }
  </style>
  {{< button label="Source code on GitHub" link="https://github.com/qoherent/GRC-Agent" style="solid" >}}
  {{< button label="Talk to us" link="/contact" style="outline" >}}
</div>

## Why not a general coding assistant

General-purpose coding assistants treat a flowgraph as a text file. A `.grc` is YAML, and most of it is canvas bookkeeping: block coordinates, rotations, port bus structures. Editing that as text produces graphs that look valid and are not.

GRC Agent works on the live flowgraph in memory instead:

- It looks up block names, parameters and units in a searchable GNU Radio catalog and docs wiki rather than recalling them, so it does not invent block IDs or pass Hertz to a block that expects radians per sample. Keyword search works out of the box; semantic search is an optional one-click install.
- **Every edit needs your approval first.** You see the agent's reason and a summary of the proposed change, then Approve, Deny, or Always accept. That is the default. A Mode toggle switches to Auto when you want it to stop asking, and back again whenever you like.
- Every edit is applied as a single batch and then handed to GNU Radio's own validator. If validation fails the whole batch is rolled back and your graph is left exactly as it was.
- Topology changes re-layout the whole graph into clean layered rows, so the canvas does not degrade into a pile of blocks after multi-step edits.
- Running a flowgraph also needs approval, because it may transmit on connected hardware. Stopping never does. Ask for a bounded run and the agent stops the graph itself when the time is up.
- A separate read-only **Planner mode** researches and drafts a step-by-step plan without touching anything. Nothing changes until you hand it to the executor.

## What it looks like in use

Asked for a live ADS-B aircraft tracker from a PlutoSDR, it built the full receive and decode chain and a browser dashboard, then tracked real aircraft.

{{< image src="images/grc-agent/adsb-flowgraph.jpg" alt="The generated GNU Radio flowgraph: PlutoSDR Source into an ADS-B decoder" class="img-fluid" >}}

{{< image src="images/grc-agent/adsb-tracker.jpg" alt="Live aircraft tracked over Toronto from a PlutoSDR" class="img-fluid" >}}

{{< image src="images/grc-agent/adsb-counters.jpg" alt="Dashboard counting CRC-valid ADS-B frames from live reception" class="img-fluid" >}}

Asked for a simulated BPSK link with an adjustable noise channel, it built the flowgraph and a dashboard showing the transmitted and recovered message, live bit error rate and signal-to-noise ratio.

{{< image src="images/grc-agent/bpsk-dashboard.jpg" alt="Simulated BPSK radio link dashboard with an adjustable noise channel" class="img-fluid" >}}

## Who it is for

- RF engineers and researchers using GNU Radio for prototyping
- Teams building SDR testbeds who need faster iteration
- Educators who want guided examples and consistent labs
- Anyone working somewhere their designs are not allowed to leave the building

## Questions

{{< accordion "Can I use this at work?" >}}
GRC Agent is released under AGPLv3, although alternative permissive and commercial licensing options are available upon request. Please [contact us](/contact) for further details.

Using GRC Agent to design flowgraphs places no obligation on you, and it does not make your flowgraphs open source. Your designs are your own work. AGPL obligations apply if you modify GRC Agent's own source and then distribute it or run your modified version as a network service.
{{< /accordion >}}

{{< accordion "Does my data leave my machine?" >}}
If you run a local model, your flowgraph, your prompts and the replies all stay on your machine.

Two exceptions. The agent includes web search and page fetch tools and will reach the internet when it uses either. And if you choose a cloud provider instead of a local model, your prompts and graph content go to that provider like any other API call.
{{< /accordion >}}

{{< accordion "What do I need to run it?" >}}
Ubuntu 24.04 or 26.04, Python 3.12 to 3.14, and GNU Radio 3.10.

Ubuntu 22.04 will not work. It ships Python 3.10 and GNU Radio's Python bindings are compiled against that version, so there is no way to bridge to the 3.12 the agent requires without rebuilding GNU Radio.
{{< /accordion >}}

{{< accordion "What if it breaks my flowgraph?" >}}
It cannot leave your graph half-edited. Changes are applied as one batch and validated by GNU Radio itself; a failure rolls the whole batch back and the agent retries using the validator's own error message.

Agent edits and your own manual edits also share a single undo history, so either of you can undo the other's last change.
{{< /accordion >}}

{{< accordion "Will it change or run anything without asking?" >}}
Not by default. Every graph edit and every shell command shows you an approval card first, with the exact change or the full literal command. You can approve once, always allow a given command for the session, or switch the Mode toggle to Auto if you would rather it stopped asking.

Starting a flowgraph always needs approval because it may transmit on connected hardware. Stopping never does. Runs can be bounded so a flowgraph stops itself after a set number of seconds.

Destructive shell commands are denied outright, the agent is sandboxed to your project folder, and your provider API keys are stripped from the environment of anything it runs.
{{< /accordion >}}

{{< accordion "What does it cost?" >}}
The software is free and open source. Running a local model costs nothing. If you use a cloud provider you pay that provider's usual rates.
{{< /accordion >}}

<div class="button-group" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
  <style>
    .button-group a { text-decoration: none; }
  </style>
  {{< button label="Get it on GitHub" link="https://github.com/qoherent/GRC-Agent" style="solid" >}}
  {{< button label="Talk to us" link="/contact" style="outline" >}}
</div>
