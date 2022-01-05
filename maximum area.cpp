#include<iostream>
using namespace std;
class solution {
public:
    int getHypotenuse(long long N) {
        // code here
        long long int p=N*4;
        for(int i=1; i<1e10; i++)
        {
            if(i*i>p)
            {
                return i-1;
                
            }
            else if(i*i==p)
            {
                return i;
                
            }
        }
        return 0;
    }
};