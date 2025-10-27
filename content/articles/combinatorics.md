---
title: Combinatorics
date: 2025-06-17
type: article
tags:
  - math
  - placeholder
---

# Addition Rule
If a task can be done in $A$ ways or $B$ ways, and these choices are **mutually exclusive** (cannot happen at the same time), then the total number of ways is:
$$
\huge\text{If }A\text{ ways OR } B \text{ ways} \Rightarrow A+B \text{ ways}
$$
**Example**:
- A student can choose a project from 4 science topics **or** 3 math topics.
$4+3=7$ choices 
- A cafe offers 5 hot drinks and 6 cold drinks. If you’re only allowed to order **one drink**, the total number of options is:
$5+6=11$ drinks

# Multiplication Rule
If a task involves a two or more **independent** stages, and the first stage can be done in $A$ ways, and the second in $B$ ways, then the total number of ways is:
$$
\huge\text{If } A \text{ ways AND } B \text{ ways} \Rightarrow A \times B \text{ ways}
$$
**Example**:
- A meal consists of 3 options for main course, 2 drinks, and 4 desserts.
$3 \times 2 \times 4 = 24$ meal combinations
- A license plate has 1 letter, followed by 4 digits, **and** then 2 letters. Letters and digits may repeat. How many such plates are possible?
$26 \times 10^4 \times 26^2=175,760,000$ possible license plates

# Permutations of $n$
Number of ways to **arrange** $n$ objects.
$$
n! = n \times (n-1)\times(n-2)\times\dots \times 2 \times 1
$$

# $k$-permutations of $n$
Number of ways to **choose and order** $k$ objects from *n*.
$$
P(n,k) =\frac{n!}{(n-k)!}
$$

# Permutations of Multisets
When some elements **repeat**, divide by the factorial of identical items.
$$
n! \over k_{1}!\cdot k_{2}!\cdot \dots \cdot k_{r}!
$$
Where:
- $n$ = total elements
- $k_1, k_{2}, \dots$ = frequency of repeated item

Example: permutations of “AYAAAIS”:
$$
\frac{7!}{4!}=\frac{7 \cdot 6 \cdot 5 \cdot \cancel{4!}}{\cancel{4!}}=210 \text{ ways}
$$

# Circular Permutations
Total number of **unique arrangements in a circle** (no fixed starting point).
$$
(n-1)!
$$

# Combinations
Number of ways to **choose** $k$ objects from $n$ **without caring about order**.
$$
\binom{n}{k}=\frac{n!}{(n-k)! \cdot k!}
$$

# Stars and Bars Theorem
Used to count ways to **distribute $n$ indistinguishable items into $k$ groups**, often used in combinations with repetition.

- Each group must get at least one item:

$$
\binom{n-1}{k-1}
$$

- Groups may be empty:

$$
\binom{n+k-1}{k-1}
$$

# Derangement (Complete Shuffle)
Number of ways to **rearrange $n$ items so none stay in their original position**.
$$
!n=n! \left( 1-\frac{1}{1!}+\frac{1}{2!}-\frac{1}{3!}+\dots+(-1)^n \frac{1}{n!} \right) 
$$
Approximation:
$$
!n \approx \frac{n!}{e}
$$

