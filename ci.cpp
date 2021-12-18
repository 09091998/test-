#include <iostream>
using namespace std;
 
int main()
{
    double principle = 1000, rate = 5, time = 2;
 
    double A = principle * ((1 + rate / 100)* time);
      double CI = A- principle;
 
    cout << "Compound interest is " << CI;
 
    return 0;
}}