import api from '../api/shop'

export default {
  // 异步获取商品数据
  getAllProducts ({commit}){
    api.getProducts(products=>{
      commit('setProducts',products)
    })
  },

  // 加入购物车
  addProductToCart({state,commit},product){
    commit('setCheckoutStatus', null);
    if(product.inventory>0){
      // 商品数据的id是否等于用户点击的商品列表id
      const cartItem=state.items.find(item=>item.id===product.id);
      if(!cartItem){// 用户没有点击，创建一个商品信息
        commit('pushProductToCart',{id:product.id})
      }else{// 用户点击了，改变商品的数量
        commit('incrementItemQuantity',cartItem)
      }
      // 用户每点击一次，则商品总数量--
      commit('decrementProductInventory', { id: product.id }, { root: true })
    }
  },

  // 清空购物车
  checkout ({commit}){
    commit('setCheckoutStatus', 'successful');
    commit('setCartItems',{items:[]});
  }
}
