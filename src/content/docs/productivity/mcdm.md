---
title: mcdm
description: Many options, one honest ranking. Weights before scores.
---

> Many options, one honest ranking. Weights before scores.

## When to use

Choosing among multiple known options: tools, vendors, apartments, hires, designs. Not for a single go/no-go (that is [fate](../fate/)) or a values-level life call (that is [ooc-emr](../ooc-emr/)).

## How it works

1. List the options.
2. List the criteria.
3. Set weights BEFORE scoring (the honest step).
4. Score each option per criterion (1-5).
5. Weighted sum, then rank.
6. Sensitivity check: would small weight changes flip the winner? If yes it is close — use pairwise (AHP) on the finalists.

## Try it

`mcdm pick a project-management tool` →

- a weighted table, the winner with its score, and a one-line sensitivity note (robust, or a coin-flip?).

Rule: the numbers do not decide, they show what you already believe.

## Pitfalls

- Setting weights after seeing the scores (rigging the matrix). Weights first.
- Overriding the math silently when the winner feels wrong. The weights are wrong — fix them, do not fudge.

## Leads to

- chosen → [ship-gate](../ship-gate/)
- finalists tied → pairwise (AHP), inside this skill
- the choice is really values-level → [ooc-emr](../ooc-emr/)
