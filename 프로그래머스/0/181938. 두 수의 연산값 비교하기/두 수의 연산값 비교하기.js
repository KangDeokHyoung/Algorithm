function solution(a, b) {
    const A = a.toString();
    const B = b.toString();
    if(Number(A + B) < (2 * a * b)) return (2 * a * b);
    return Number(A + B)
}