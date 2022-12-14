module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {}
  this.totalQuantity = oldCart.totalQuantity || 0
  this.totalPrice = oldCart.totalPrice || 0

  this.add = function (item, id) {
    var storedItem = this.items[id]

    if (!storedItem) {
      storedItem = this.items[id] = { item: item, quantity: 0, price: 0 }
    }

    storedItem.quantity++
    storedItem.price = storedItem.item.price * storedItem.quantity

    this.totalQuantity++
    this.totalPrice += storedItem.item.price
  }

  this.reduceByOne = function (id) {
    this.items[id].quantity--
    this.items[id].price -= this.items[id].item.price
    this.totalQuantity--
    this.totalPrice -= this.items[id].item.price

    if (this.items[id].quantity <= 0) delete this.items[id]
  }

  this.generateArr = function () {
    var arr = []

    for (var id in this.items) {
      arr.push(this.items[id])
    }

    return arr
  }
}
