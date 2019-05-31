<template>
  <div>
    <h2>Your Cart</h2>
    <p v-show="!ShoppingList.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in ShoppingList" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p v-show="ShoppingList.length">Total: 数量：{{count}} 总价：{{ price | currency }}</p>
    <p>
      <button :disabled="!ShoppingList.length" @click="checkout()">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{checkoutStatus}}.</p>
  </div>
</template>

<script>
    export default {
        name: "ShoppingCart",
        computed:{
            // 获取购物车商品
            ShoppingList(){
              return this.$store.getters.cartProducts
            },
            price(){
              return this.$store.getters.cartTotalPrice
            },
            count(){
              return this.$store.getters.cartTotalCount
            },
            // 设置提示信息
            checkoutStatus(){
              return this.$store.state.checkoutStatus
            }
        },
        // 清空购物车
        methods:{
          checkout(){
            this.$store.dispatch('checkout')
          }
        }
    }
</script>

<style scoped>

</style>
