---
title: "Build Autonomously with GRC Agent: Execute, and Diagnose GNU Radio Flowgraphs"
date: "2026-09-18"
slug: "build-with-grc-agent"
draft: false
cover:
    alt: 'Build Autonomously with GRC Agent'
    caption: 'An embedded AI companion integrated directly into the GNU Radio Companion window.'
tags: ['SDR','AI','LLM','agents','GNU Radio','open source']
categories: ['tech-blog']
---

Qoherent's GRC Agent is an embedded AI companion, completely integrated directly into the GNU Radio Companion (GRC) window. There's no external web server, no detached browser tabs, no subprocess bridging, and no copy-pasting code between tools.

It shares the live in-memory FlowGraph object with your active canvas via gbulb, applies 7-phase transactional edits with auto-layout, executes bounded hardware-safe runs, and grounds every decision in an offline Hybrid RRF (k=60) knowledge base.

{{< toc >}}

## Why Use GRC Agent? (Beyond Generic Coding CLIs)

Generic coding assistants (like Cursor, Claude Code, Aider) treat GNU Radio flowgraphs like plain text files. When they are working with.grc files, they will hallucinate block IDs, pass Hertz to blocks requiring radians/sample, corrupt visual wire layouts, and execute blind shell commands that risk damaging connected RF hardware.

GRC Agent operates from within the GRC runtime, removing the above problems thanks to:

### In-Memory Co-Presence

- The agent and canvas run in the same single process
- Sharing the active FlowGraph in memory
- Edits are redrawn instantly, with no reload prompts

### Interactive Canvas Highlighting & Panning

- Every block mentioned in chat becomes an interactive chip
- Hovering highlights the block on canvas; clicking pans directly to it
- Canvas zoom (Ctrl+scroll) automatically rescales chat typography

### Grounded Anti-Hallucination RAG

- Fuses sqlite-vec embeddings with SQLite FTS5 BM25 lexical keyword ranking over official GNU Radio C++ SWIG headers and wiki guides
- GRCAgent will know exact parameter semantics (e.g. carrier tracking max_freq is in radians per sample, NOT Hertz)

### RF Hardware Safety Gates & Bounded Auto-Stop

- Native execution via GRC's toolbar path that requires human approval before RF transmission
- Bounded runs (stop_after_seconds) prevent runaway background processes and lingering emissions

### Automated Failure Bus Diagnostics

- Interception of non-zero exit codes immediately, parses stdout/stderr run logs, isolates root causes, and proposes fixes in a single turn

### Multimodal RF & Signal Vision (Ctrl+V)

- Paste spectrum waterfalls, FFT plots, and constellation diagrams directly into chat for visual signal inspection

### Total Coding Freedom in a Scoped Sandbox

- Designate a project directory that roots all shell execution (GrcShell)
- File read/write (GrcFileSystem)
- Custom Embedded Python Block (EPB) generation with NumPy vectorization.

## Domain Tools

GRC Agent provides a strictly-typed tool contract registered directly into Pydantic AI:

| Tool | Category | What It Does |
|---|---|---|
| inspect_graph | Canvas | Reads active flowgraph topology directly from memory (blocks, parameters, enabled states, and connections) pruned of canvas coordinate noise. |
| change_graph | Canvas (Gated) | Applies batch structural mutations in a single 7-phase transaction: auto-resolves port data types from neighbors, runs Sugiyama auto-layout, and rolls back cleanly on error. |
| save_graph | Canvas | Saves untitled flowgraphs into the project folder and re-saves titled pages with atomic fsync writes, updating tabs and recent files without manual Ctrl+S interruptions. |
| run_flowgraph | Execution (Gated) | Triggers GRC's native toolbar Execute/Stop action. Start action is gated by human approval to protect RF hardware; stop_after_seconds halts bounded runs cleanly. |
| get_run_log | Execution | Captures stdout and stderr streams from the executing top_block process for automated crash diagnosis. |
| query_knowledge | Intelligence | Queries the offline knowledge corpus using Hybrid RRF ($k=60$) fusion, returning verified block parameters and implementation docstrings. |
| generate_python | Intelligence | In-memory preview of generated Python top_block scripts and Embedded Python Blocks (EPB) with zero disk I/O. |
| save_block | Intelligence (Gated) | Saves custom Embedded Python Blocks (EPBs) directly to ~/.grc_gnuradio or the project directory for custom NumPy DSP algorithms. |

In addition to domain tools, the agent is equipped with project-scoped terminal execution (run_command), file tools (read_file, write_file), web search, and PromptInjectionDefender.

## 12 Hot-Swappable Providers with Zero Restart

Switch providers mid-session with no restarts from the Settings dialog, while preserving chat history. AgentGRC offers:

- **100% Offline & Private Logs:** Local Ollama (qwen3.8:latest with 120k context).
- **Cloud & Reasoning Endpoints:** Ollama Cloud (deepseek-v4-flash:0731), OpenRouter, Anthropic Claude Sonnet, OpenAI API, and Google Gemini.
- **ChatGPT Plus/Pro Subscription:** One-click browser OAuth sign-in (openai_codex) with no API keys or per-token fees required.
- **Self-Hosted Infrastructure:** Universal OpenAI-compatible base URL support (vLLM, llama.cpp server, LM Studio).

## Quick Start (Ubuntu 24.04 / 26.04)

### 1. Prerequisites

Install GNU Radio and GTK bindings from your system package manager (never from PyPI):

```bash
sudo apt install gnuradio python3-gi python3-gi-cairo

sudo udevadm control --reload-rules  # SDR hardware permissions
```

### 2. Clone & Setup Virtual Environment

Explicitly target /usr/bin/python3 to bridge GNU Radio's compiled C++ bindings:

```bash
git clone https://github.com/qoherent/grc-agent.git

cd grc-agent

uv venv --system-site-packages --python /usr/bin/python3

uv sync --extra dev --locked --python .venv/bin/python
```

### 3. Launch GRC Agent

```bash
uv run grc-agent
```

(On native Wayland sessions, launch with GDK_BACKEND=x11 uv run grc-agent to prevent dropped GTK menu grabs).

Configure your preferred model provider in Settings, open any .grc flowgraph, and start collaborating directly on your DSP canvas.

License: AGPL-3.0 Open Source

Repository: github.com/qoherent/grc-agent
