#include <iostream>
using namespace std;
class  solution {
public:
long long solve(int n, long long a[], long long b)
   {
      
      for(int i=0;i<n;i++){
          
          if(a[i] == b){
              b = 2*b;
              continue;
          }
      }
      return b;