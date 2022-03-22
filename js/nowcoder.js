function namespace(oNamespace, sPackage) {
    let list = sPackage.split('.')
    let temp = oNamespace
    console.log(list)
    console.log(oNamespace)
    for (var k in list) {
        console.log(k)
        console.log(list[k])
        console.log(temp[list[k]])
        console.log(typeof temp[list[k]])
        if (typeof temp[list[k]] !== 'object') {
            temp[list[k]] = {}
            console.log(k)
            console.log(list[k])
            console.log(temp[list[k]])
            console.log(typeof temp[list[k]])
        }
        console.log(oNamespace)
        console.log(temp)
        temp = temp[list[k]]
        console.log(temp)
    }
}


namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d')
