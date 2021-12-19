#include <iostream>
using namespace std;

int main() {
    int p, q, i, g, x;

    cout << "enter the number\n";
    cin >> p >> q;

    for (i = 1; i <= p && i <= q; ++i) {
        if (p % i == 0 && q % i == 0) {
            g = i;
        }
    }
    x = (p * q) / g;

    cout << "lcm of " << p << " & " << q << " is " << x << ".\n";
    return 0;
}