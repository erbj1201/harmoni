<!-- ProductView-->
<template>
  <div class="hero-image">
    <picture>
      <source type="image/jpg" media="(min-width: 1024px) and (max-width: 1900px)" srcset="../assets/header_2large.jpg">
      <source type="image/jpg" media="(min-width: 601px) and (max-width: 1024px)" srcset="../assets/header_2medium.jpg">
      <source type="image/jpg" media="(max-width: 600px)" srcset="../assets/header_2small.jpg">
      <img src="../assets/header_2large.jpg" alt="Harmoni spa och relax produkter" class="heroimg">
    </picture>
    <div class="hero-content">
      <a href="/boka" class="herobtn">Boka ditt besök hos oss</a>
    </div>
  </div>
  <h1 class="main-heading">Våra produkter</h1>
  <section class="main-content">
    <ProductCategory @category-selected="productSelection" />
    <div v-if="selectedCategory">
      <Product v-for="product in ChosenCategory" :product="product" :key="product.id" />
    </div>
    <div v-else>
      <Product v-for="product in products" :product="product" :key="product.id" />
    </div>
  </section>
</template>
<script>
//Import
import Product from "../components/Product.vue";
import ProductCategory from "../components/ProductCategory.vue";
export default {
  //components
  components: {
    Product, ProductCategory
  },
  data() {
    return {
      selectedCategory: null,
      products: []
    }
  }, //emits
  emits: ['category-selected'],
  computed: {
    //Choosen category
    ChosenCategory() {
      //If selected category 
      if (this.selectedCategory) {
        //Filter and show category
        return this.products.filter(product => product.productCategory === this.selectedCategory);
      }
      return this.products;
    },
  }, //get products with fetch
  methods: {
    async getProducts() {
      const resp = await fetch("http://localhost:5108/api/product");
      const data = await resp.json();
      this.products = data;
    },
    productSelection(category) {
      this.selectedCategory = category;
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>
<style scoped></style>