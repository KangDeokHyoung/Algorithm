function solution(rny_string) {
    const result = [];
    rny_string.split("").forEach((el, i) => {
        if(el === "m") result.push("rn")
        else result.push(el)
    })
    return result.join("")
}