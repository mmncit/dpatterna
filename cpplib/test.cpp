#include<iostream>
#include<vector>
using namespace std;


template<typename T>
T sum(T a, T b) {
    return a + b;
}

int main(int argv, char** argc){
    int a = 10, b = 20, result;
    result = sum<int>(a, b);
    cout << "result = " << result << endl;
    vector<string> msg  = {"Hello", "C++"};
    return 0;
}

