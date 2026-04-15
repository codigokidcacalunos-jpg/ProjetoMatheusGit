lista=[2,1,3]
// c = 2
// p1 = 1, p2 = p1
// p1 = p2, p2 = c
if (lista[0] > lista[1]){
    c = lista[0]
    lista[0] = lista[1]
    lista[1] = c
}
console.log (lista)