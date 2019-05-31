export default {
  // 异步获取商品
  setProducts(state,products){
    state.all=products
  },

  // 用户没有点击，创建一个商品信息
  pushProductToCart(state,{id}){
    state.items.push({
      id,
      quantity: 1  // 商品数量
    })
  },
  // 用户点击了，改变商品的数量
  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  // 用户每点击一次，则商品总数量--
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },

  // 提示信息
  setCheckoutStatus (state, msg) {
    state.checkoutStatus = msg
  },
  // 清空购物车的商品列表
  setCartItems (state, { items }) {
    state.items = items
  }

}
