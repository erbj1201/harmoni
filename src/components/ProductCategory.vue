<!-- Product category component-->
<template>
  <h2 id="product">Sortera våra produkter efter produkttyp</h2>
  <div class="product-category">
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Ansikte')">
      <p>Ansikte</p>
      <img src="../assets/face.jpg" alt="ansiktsprodukter">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Hårstyling')">
      <p>Hårstyling</p>
      <img src="../assets/hairstyling.jpg" alt="hårstylingprodukter">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Schampo & balsam')">
      <p>Schampo & balsam</p>
      <img src="../assets/schampo.jpg" alt="schampo och balsam">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Kropp')">
      <p>Kropp</p>
      <img src="../assets/body.jpg" alt="Kroppsvård">
    </div>
    <div class="category-selected" @click="selectCategory('Övrigt')">
      <p>Övrigt</p>
      <img src="../assets/ovrigt.jpg" alt="övriga produkter">
    </div>
  </div>
  <div class="selected"> <!-- Show selected categoryname-->
    <h3>{{ selectedCategory || 'Alla våra produkter' }}</h3>
  </div>
</template>
<script>
export default {
  //Name component
  name: "ProductCategory",
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
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category; // update selectedCategory
      this.$emit('category-selected', category);
    }
  },
}
</script>
<style scoped>
/*Scoped css desktop*/
#product {
  margin: auto;
  text-align: center;
}

.selected {
  margin: 3em auto;
}

.selected h3 {
  text-align: center;
}

/*Category sort */
.product-category {
  display: flex;
  justify-content: space-between;
  justify-self: center;
  max-width: 950px;
  width: 100%;
  margin: auto;
  padding: 1em;
}

.category-selected {
  margin: auto;
  padding: 1em;
  width: 100%;
}

.category-selected img {
  margin: auto;
  max-width: 130px;
  border: 1px solid black;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
  padding: 0.5em;
}

.category-selected:hover {
  background-color: rgba(0, 0, 0, 0.397);
}

/*tablet*/
@media screen and (min-width: 600px) and (max-width: 1024px) {

  /*Category sort */
  .product-category {
    display: block;
    justify-content: space-between;
    justify-self: center;
    max-width: 300px;
    width: 100%;
    margin: auto;
    padding: 1em;
    text-align: center
  }

  .category-selected {
    margin: 1em;
    padding: 1em 0;
    width: 100%;
    background-color: #e0dbdb;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
    border: 1px solid black;
  }

  .category-selected img {
    display: none;
  }
}

/*mobile */
@media screen and (max-width: 600px) {
  .category-selected {
    width: 50%;
    margin: 2em auto;
    background-color: #e0dbdb;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
    border: 1px solid black;

  }

  .category-selected img {
    display: none;
  }

  .product-category {
    display: block;
    margin: auto;
    text-align: center;
  }
}
</style>