#include<iostream>

using namespace std;

int main()
{
	int number, reminder, digitProduct = 1;
	
	while (number > 0)
	{
    	reminder = number % 10;
    	digitProduct = digitProduct * reminder;
    	number = number / 10;
    	
    	cout << "\nDigit = " << reminder << " and the Digit Product = " << digitProduct;
	}
	
 	return 0;
}