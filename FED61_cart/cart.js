
function add(items) {
    var tbody = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0].children[0].children[1]

    let count = tbody.children.length
    let price = parseFloat(tfoot.innerText.match(/\d+.\d+/)[0])

    let tr = ''
    for (let i in items) {
        count += 1
        price = parseFloat((price + items[i].price).toFixed(2))
        tr += `<tr><td>${items[i].name}</td><td>${items[i].price.toFixed(2)}
                    </td><td><a href="javascript:void(0);">删除</a>
                    </td></tr>`
    }
    var tf = `${price.toFixed(2)}(${count}件商品)`
    tfoot.innerText = tf
    tbody.innerHTML = tbody.innerHTML + tr
}

function bind() {
    var tbody = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0].children[0].children[1]

    tbody.addEventListener('click', function (e) {
        let number = tbody.children.length
        console.log(e)
        console.log(tbody)
        console.log(e.target.tagName)
        console.log(e.target.parentNode)
        if (e.target.tagName == 'A') {
            let price = parseFloat(e.target.parentNode.parentNode.innerText.match(/^.*\t(\d*\.?\d*)\t.*$/)[1])
            let total = parseFloat(tfoot.innerText.match(/\d+.\d+/)[0])
            total = parseFloat((total - price).toFixed(2))
            var tf = `${total.toFixed(2)}(${number - 1}件商品)`
            tfoot.innerText = tf
            e.target.parentNode.parentNode.remove()
        }
    })
}

bind()