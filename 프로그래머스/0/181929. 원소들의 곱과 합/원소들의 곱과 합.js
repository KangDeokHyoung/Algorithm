function solution(num_list) {
    let add = 0;
    let mul = 1;
    for(let i = 0; i < num_list.length; i++){
        mul *= num_list[i];
        add += num_list[i];
    }
    add = add*add;
    return mul < add ? 1 : 0;
}