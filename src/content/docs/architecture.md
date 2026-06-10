---
title: Architecture
description: The full Rayo OS skill architecture — domains, the V2 pattern, and the doc convention.
---

Rayo OS is a set of decision and operating skills for Claude Code, split by **life-domain**. One domain is built; the rest are mapped.

## The model
- **Plugin = domain.** One plugin per life-domain, colon-namespaced (like `claude-mem:` or `claude-obsidian:`).
- **Inside a domain:** numbered command pipelines for sequences, trigger-named skills for the engines.
- **A loop, not a list.** Every skill names what it leads to, so they compose. See [the pattern](../patterns/the-loop/).
- **Doc pattern:** each skill reads tagline → when to use → how it works → try it → pitfalls → leads to.

## Domains
| Domain | Status | Covers |
|---|---|---|
| [Productivity](../productivity/overview/) | **built** | deciding and shipping: the decide pipeline + route, fate, mcdm, ooc-emr, ctfar, ship-gate |
| [Content](../domains/content/) | planned | turning finished work into published content |
| [Comms](../domains/comms/) | planned | fast, decision-shaped business writing |
| [Money](../domains/money/) | planned | money decisions on real financial data |
| [Health](../domains/health/) | planned | functional-medicine and performance |
| [Ops](../domains/ops/) | planned | the infra and agents that run everything |
| [Coach](../domains/coach/) | planned | self-coaching and client coaching |

## How a domain gets built
A domain earns a build once it has real, repeated skills, each scored on FATE and shipped one at a time. Productivity went first because deciding is the spine everything else hangs off.
