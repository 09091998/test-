#include<iostream>
using namespace std;

int main()
{
	int number;
	
	cout << "Enter any Number ";
	cin >> number;
	
	if(( number % 5 == 0 ) && ( number % 11 == 0 ))
	{
		cout << number << " is Divisible by 5 and 11";
	}
	else
	{
		cout << number << " is Not Divisible by 5 and 11";
	}
		
 	return 0;
}