function solution(my_string, k) {
    const result = []
    for(i = 0;  i < k; i++ ){
        result.push(my_string);
    }    
    return result.join("")
}