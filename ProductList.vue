<template>
    <div>
      <h2>Products</h2>
      <ul>
        <li
          v-for="product in products"
          :key="product.id">
          {{ product.title }} - {{ product.price | currency}}
          <br>
          <button
            :disabled="!product.inventory"
            @click="addProductToCart(product)">
            Add to cart
          </button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        mounted() {
            // 获取商品
            this.$store.dispatch('getAllProducts')
        },
        computed:{
          products(){
            return this.$store.state.all
          }
        },
        // 添加商品
        methods:{
          addProductToCart(product){
            this.$store.dispatch('addProductToCart',product);
          }
        }
    }
</script>

<style scoped>

</style>
