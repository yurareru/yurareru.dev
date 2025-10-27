---
title: Number Theory
date: 2025-06-13
type: article
tags:
  - math
  - placeholder
---
# Factors

Let $n=p_{1}^{e_{1}}\cdot p_{2}^{e_{2}}\dots p_{k}^{e_{k}}$
## Number of positive factors
$$
\tau(n)=(e_{1}+1)(e_{2}+1)\dots(e_{k}+1)
$$

## Sum of all positive factors
$$
\sigma(n)=(1+p_{1}+p_{1}^2\dots+p_{1}^{e_{1}})\dots\dots(1+p_{k}+p_{k}^2+\dots+p_{k}^{e_{k}})
$$

## Product of all postive factors
$$
\\product(n)=n^{\tau(n)/2}
$$

---
# Congruent
Modular arithmetic deals with **remainder** after division.

For integers $a$, $b$, and $n > 0$, we say that $a$ is congruent to $b$ modulo $n$
We say:
$$
a \equiv b \pmod n
$$
if $a$ and $b$ leave the same remainder when divided by $n$, or $n \mid (a-b)$

## Properties
Let $a \equiv b \pmod n$ and  $c \equiv d \pmod n$. Then:
-  $a+c \equiv b+d \pmod n$
-  $a-c \equiv b-d \pmod n$
 - $a\cdot c \equiv b\cdot d \pmod n$
 -  $a^k \equiv b^k \pmod n$

## Chinese Remainder Theorem
The CRT helps us solve systems of **modular congruences** like:
$$
\begin{cases} x \equiv a_{1} \pmod {m_{1}} \\
x \equiv a_{2} \pmod {m_{2}} \\
\vdots \\
x \equiv a_{k} \pmod {m_{k}}
\end{cases}
$$

#### Step-by-Step
1. Start with the first congruence $x \equiv a_{1}\pmod {m_{1}}$ and make a sequence:
$$
\{a_{1}, a_{1}+m_{1},a_{1}+2\cdot m_{1},a_{1}+3\cdot m_{1},\dots\}
$$
2. From the previous sequence, find the first value that satisfies the second congruence $x \equiv a_{2}\pmod {m_{2}}$. Then make a new sequence:
$$
\{x_{0},x_{0}+LCM(m_{1},m_{2}),x_{0}+2\cdot LCM(m_{1},m_{2}),x_{0}+3\cdot LCM(m_{1},m_{2}),\dots\}
$$
3. From this new sequence, find the first value that satisfies the third congruence $x \equiv a_{3}\pmod {m_{3}}$. Make another sequence:
$$
\{x_{0},x_{0}+LCM(m_{1},m_{2},m_{3}),x_{0}+2\cdot LCM(m_{1},m_{2},m_{3}),\dots\}
$$
4. Repeat this process for all remaining congruences:
$$
x=x_{0}+t\cdot LCM(m_{1},m_{2},\dots,m_{k-1})
$$
until you find one that satisfies:
$$
x \equiv a_{k}\pmod {m_{k}}
$$

#### Example:
$$
\begin{cases} x \equiv 3 \pmod {4} \\
x \equiv 5 \pmod {6} \\
x \equiv 2 \pmod {5}
\end{cases}
$$
1. For the first congruence, we can make a sequence:
$$
\{3,7,11,15,19,\dots\}
$$
2. From the previous sequence, find the first value that satisfies the second congruence:
$x \equiv 5\pmod {6}$
First match: $11 \equiv 5\pmod {6}$ 
Now make a new sequence, increasing by $LCM(4,6)=12$:
$$
\{11,23,35,47,59,\dots\}
$$
3. From this sequence, find the first value that satisfies the third congruence:
$x \equiv 2\pmod {5}$
First match: $47 \equiv 2\pmod {5}$ 
Final sequence increases by $LCM(4,6,5)=60$:
$$
\{47, 105, 17, 227,\dots\}
$$
Final Answer:
$$
\boxed{x \equiv 47\pmod {60}}
$$
This means all numbers of the form $x=47+60t$ are solutions.

## Euler’s Theorem
If $a$ and $n$ are coprime then:
$$
a^{\varphi(n)}\equiv1\pmod n
$$
This means: raising $a$ to the power of $\varphi(n)$ will always give $1$ modulo $n$, as long as $a$ and $n$ are **coprime**.
### Euler’s Totient Function
The totient function counts how many integers from $1$ to $n$ are coprime with $n$

Let $n$ be factored as: 
$$
n=p_{1}^{e_{1}}\cdot p_{2}^{e_{2}}\dots p_{k}^{e_{k}}
$$
Then:
$$
\varphi(n)=n\left( 1-\frac{1}{p_{1}} \right)\left( 1-\frac{1}{p_{2}} \right)\dots\left( 1-\frac{1}{p_{k}} \right)
$$

### Example
1. Find last digit of $3^{2026}$
Because of Euler’s theorem, we know that  $3^4 = 81\equiv 1 \pmod {10}$
$$
\begin{align}
3^{2026} \pmod {11} &\equiv (3^4)^{506} \cdot 3^2 \pmod {10} \\
& \equiv 1^{506} \cdot 9 \pmod {10} \\
& \equiv 9 \pmod {10} \\
\end{align}
$$
2. Find the last two digits of $17^{50}$
Because of Euler’s theorem, we know that $17^{40} \equiv 1 \pmod {100}$
$$
\begin{align}
17^{50} &\equiv 17^{40} \cdot 17^{10} \pmod {100} \\
&\equiv 1^{40} \cdot 17^{10} \pmod {100} \\
&\equiv 17^{10} \pmod {100}
\end{align}
$$
Now compute $17^{10} \pmod {100}$
$$
\begin{align}
17^2 &= 289 &\equiv 89 \pmod {100} \\
17^4 &= 89^2 = 7921 &\equiv 21 \pmod {100}\\
17^8 &= 21^2 = 441 &\equiv 41 \pmod {100} \\ \\
17^{10} &=17^8 \cdot 17^2  \\
&=41 \cdot 89 \\
&= 3649 &\equiv 49 \pmod {100}
\end{align}
$$
## Fermat’s Little Theorem
If $p$ is **prime number** and $a$ is an integer **not divisible** by $p$ then:
$$
a^{p-1}\equiv1 \pmod p
$$
You can multiply both sides by $a$ to get equivalent form that works **even if** $GCD(a, p)\neq1$:
$$
a^p \equiv a \pmod p
$$

## Wilson’s Theorem
$$
(p-1)! \equiv-1\pmod {p}
$$

