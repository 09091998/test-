#include <iostream>
#include <math.h>
 using namespace std;
 int main()
{
    int num, last;
 
     cout<<"Enter any number:";
    cin>>num;
     last = num%10;
    cout<<"The last digit of entered number: "<< last<<endl;
     while(num>=10)
    {
        num = num/10;
    }
 cout<<"The first digit of entered number: "<<num;
 
    return 0;
}