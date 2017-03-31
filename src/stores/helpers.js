export function randomArray(arr) {
    return arr.sort(() => .5 - Math.random());
}

export function limitArray(arr, size) {
    return arr.slice(0, size);
}