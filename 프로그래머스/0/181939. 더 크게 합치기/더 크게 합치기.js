function solution(a, b) {
    const A = a.toString();
    const B = b.toString();
    if(Number(A + B) < Number(B + A)) return Number(B + A)
    return Number(A + B)
}