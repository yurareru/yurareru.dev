---
title: "Markdown Elements"
date: "2025-10-25"
type: article
tags:
  - typography
  - placeholder
---

# Main Heading (H1)

This is the main paragraph. It includes **bold text**, *italic text*, ~~strike text~~, and `inline code`.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.


## Subheading (H2)

Here is an unordered list:

- First bullet item
- Second bullet item
- Third bullet item

And an ordered list:

1. First numbered item
2. Second numbered item
3. Third numbered item

### Subheading (H3)

#### Blockquote

> This is a blockquote example.  

```cpp
// https://cses.fi/problemset/task/2413
#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define nl '\n'
#define berak break
#define Bismillah ios_base::sync_with_stdio(0);
#define AC cin.tie(0);

const int MOD = 1e9 + 7;
const int INF = 1e9;
const int MAX_N = 1e6 + 5;

ll add(ll a, ll b) { return (a + b) % MOD; }

ll dp[MAX_N][3];

void solve();

int main() {
    Bismillah AC;
    solve();
    return 0;
}

void solve() {
    int n;
    cin >> n;
    dp[1][1] = dp[1][2] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i][1] = add(2 * dp[i - 1][1], dp[i - 1][2]);

        dp[i][2] = add(dp[i - 1][1], 4 * dp[i - 1][2]);
    }
    cout << add(dp[n][1], dp[n][2]) << nl;
}

```

#### Links & Images

[Visit GitHub](https://github.com)  

![Placeholder Image](https://placehold.co/400)

#### Table

| Name   | Age | City   |
|--------|-----|--------|
| Foo    | 20  | Where  |
| Bar    | 25  | Where  |

#### Inline Math

Inline math example: $E = mc^2$  

#### Block Math

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

