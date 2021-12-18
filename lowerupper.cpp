#include <iostream>
using namespace std;
 
int main() {
    char c;
    
    cout << "Enter a character\n";
    cin >> c;
  
    if (c == 'a'|| c == 'z')
        cout << c << " is lowercase alphabet.";
         else
        cout << c << " is upercase alphabet.";
    
  
    return 0;