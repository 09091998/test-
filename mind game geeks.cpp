#include <iostream>
using namespace std;
class solution {
public:
int mindGame(int k){
int x;
x=(rand()%10)+1; //in C++ for generation of random number
int o=x;
x=x*2;
x=x+K;
x=x/2;
return (x-o); 
}
};