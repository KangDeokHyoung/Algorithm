function solution(str1, str2) {
    const first= str1.split("");
    
    const result = first.map((item, index) => {
        return `${item}${str2[index]}`
    })
    
    return result.join("")
}