#include <iostream>
using namespace std;

int main()
{
    int r=4, n = 1;

    for(int i = 1; i <= 4; i++)
    {
        for(int j = 1; j<=i; j++)
        {
            cout << n << " ";
            n++;
        }

        cout << endl;
    }

    return 0;
}