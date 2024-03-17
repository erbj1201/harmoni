<!--TreatmentView-->
<template>
  <div class="hero-image">
    <picture>
      <source type="image/jpg" media="(min-width: 1024px) and (max-width: 1900px)" srcset="../assets/header_4large.jpg">
      <source type="image/jpg" media="(min-width: 601px) and (max-width: 1024px)" srcset="../assets/header_4medium.jpg">
      <source type="image/jpg" media="(max-width: 600px)" srcset="../assets/header_4small.jpg">
      <img src="../assets/header_4large.jpg" alt="Harmoni spa och relax behandlingar" class="heroimg">
    </picture>
    <div class="hero-content">
      <a href="/boka" class="herobtn">Boka ditt besök hos oss</a>
    </div>
  </div>
  <h1 class="main-heading">Våra behandlingar</h1>
  <section class="main-content">
    <TreatmentCategory @category-selected="treatmentSelection" />
    <div v-if="selectedCategory">
      <Treatment v-for="treatment in ChosenCategory" :treatment="treatment" :key="treatment.id" />
    </div>
    <div v-else>
      <Treatment v-for="treatment in treatments" :treatment="treatment" :key="treatment.id" />
    </div>
  </section>

</template>
<script>
//imports
import Treatment from "../components/Treatment.vue";
import TreatmentCategory from "../components/TreatmentCategory.vue";
export default {
  //Components
  components: {
    Treatment, TreatmentCategory
  },
  data() {
    return {
      selectedCategory: null,
      treatments: []
    }
  }, //emits
  emits: ['category-selected'],

  computed: {
    //Choosen category
    ChosenCategory() {
      //If selected category 
      if (this.selectedCategory) {
        //Filter and show category
        return this.treatments.filter(treatment => treatment.treatmentCategory === this.selectedCategory);
      }
      return this.treatment;
    },
  }, //get treatments by fetch
  methods: {
    async getTreatments() {
      const resp = await fetch("http://localhost:5108/api/treatment");
      const data = await resp.json();
      this.treatments = data;
    },
    treatmentSelection(category) {
      this.selectedCategory = category;
    }
  },
  mounted() {
    this.getTreatments();
  }
}
</script>
<style scoped>
.treatment-category {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
}
</style>