#include <iostream>
#include <math.h>
 
using namespace std;
 
int main()
{
    int num, sum=0, firstDigit, lastDigit;

    cout<<"Enter any number:";
    cin>>num;
 
     lastDigit = num % 10;
 
    firstDigit = num;
 
    while(num >= 10)
    {
        num = num / 10;
    }
    firstDigit = num;
 
    sum = firstDigit + lastDigit;
 
    cout<<"Sum of first and last digit: "<<sum;
 
    return 0;
}