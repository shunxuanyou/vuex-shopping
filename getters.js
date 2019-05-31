export default {
  // 获取购物车的列表
  //state是第一个参数 接受其他getter作为第二个参数 第三个参数好像也是state
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.all.find(product => product.id === id)
      // const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  // cartProducts: (state) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = state.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },
  // 购物车的总价格
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  // 购物车的总数量
  cartTotalCount: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity
    }, 0)
  }
}
