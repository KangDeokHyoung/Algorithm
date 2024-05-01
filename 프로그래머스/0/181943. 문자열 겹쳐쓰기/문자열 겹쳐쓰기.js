function solution(my_string, overwrite_string, s) {
    const first = my_string.substr(0,s);
    const lastIndex = Number(s) + Number(overwrite_string.length);
    const last = my_string.substr(lastIndex ,my_string.length)
    
    var answer = `${first}${overwrite_string}${last}`;
    return answer;
}