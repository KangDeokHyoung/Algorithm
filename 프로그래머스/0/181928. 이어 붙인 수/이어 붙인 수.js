function solution(num_list) {
    const L = [];
    const J = [];
    num_list.forEach(el => {
        if(el % 2 === 0) J.push(el);
        else L.push(el)
    })
    return (Number(L.join("")) + Number(J.join("")))
}