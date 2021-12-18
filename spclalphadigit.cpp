#include <iostream>
using namespace std;
 
int main() {
    char c;
    cout << "Enter a character\n";
    cin >> c;
  
    if((c >= 'a'&& c <= 'z') || (c >= 'A' && c <= 'Z')) 
        cout << c << " is an Alphabet.";
        else if ( c >= '0' && c <= '9')
        cout << c << "is a digit";
     else
        cout << c << " is a special charecter.";
    
  
    return 0;
}