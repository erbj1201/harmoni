<!--Treatment category sort -->
<template>
  <h2 id="treatment">Sortera våra behandlingar efter behandlingstyp</h2>
  <div class="treatment-category">
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Spa')">
      <p>Spa</p>
      <img src="../assets/spa.jpg" alt="Behandligstyp spa">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Massage')">
      <p>Massage</p>
      <img src="../assets/massage.jpg" alt="Behandligstyp massage">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Ansiktsbehandling')">
      <p>Ansiktsbehandling</p>
      <img src="../assets/ansiktbehandling.jpg" alt="Behandligstyp ansiktsbehandling">
    </div>
    <!-- When click, show selected category-->
    <div class="category-selected" @click="selectCategory('Skrubb')">
      <p>Skrubb</p>
      <img src="../assets/skrubb.jpg" alt="Behandligstyp skrubb">
    </div>
    <div class="category-selected" @click="selectCategory('Övrigt')">
      <p>Övrigt</p>
      <img src="../assets/ovrigt.jpg" alt="Övriga behandlingar">
    </div>
  </div>
  <div class="selected"> <!-- Show selected categoryname-->
    <h3>{{ selectedCategory || 'Alla våra behandlingar' }}</h3>
  </div>
</template>
<script>
export default {
  //name component
  name: "TreatmentCategory",
  data() {
    return {
      selectedCategory: null,
      treatments: []
    }
  }, //emots
  emits: ['category-selected'],
  computed: {
    //Choosen category
    ChosenCategory() {
      //If selected category 
      if (this.selectedCategory) {
        //Filter and show category
        return this.treatments.filter(treatment => treatment.treatmentCategory === this.selectedCategory);
      }
      return this.treatments;
    },
  }, //selected category
  methods: {
    selectCategory(category) {
      this.selectedCategory = category; // Uppdatera selectedCategory
      this.$emit('category-selected', category);
    }
  },
}
</script>
<style scoped>
/*Scoped css desktop*/
#treatment {
  margin: auto;
  text-align: center;
}
.selected {
  margin: 3em auto;
}
.selected h3 {
  text-align: center;
}
/*category*/
.treatment-category {
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
  .treatment-category {
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
  } /*hide image*/
  .category-selected img {
    display: none;
  }
}
/*mobile */
@media screen and (max-width: 600px) {
  /*Category sort */
  .treatment-category {
    display: block;
    margin: auto;
    text-align: center;
  }
  .category-selected {
    width: 50%;
    margin: 2em auto;
    background-color: #e0dbdb;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
    border: 1px solid black;
  }
  /*hide image*/
  .category-selected img {
    display: none;
  }
}
</style>