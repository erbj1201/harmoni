<!--HomeView-->
<template>
  <div class="hero-image">
    <picture>
      <source type="image/jpg" media="(min-width: 1024px) and (max-width: 1900px)" srcset="../assets/header_1large.jpg">
      <source type="image/jpg" media="(min-width: 601px) and (max-width: 1024px)" srcset="../assets/header_1medium.jpg">
      <source type="image/jpg" media="(max-width: 600px)" srcset="../assets/header_1small.jpg">
      <img src="../assets/header_1large.jpg" alt="Välkommen till harmoni spa och relax" class="heroimg">
    </picture>
    <div class="hero-content">
      <a href="/boka" class="herobtn">Boka ditt besök hos oss</a>
    </div>
  </div>
  <h1 class="main-heading">Välkommen till Harmoni spa & relax!</h1>
  <section class="main">
    <img src="../assets/ansiktbehandling.jpg" alt="ansiktbehandling hos harmoni spa">
    <article>
      <h2>Kom precis som du är</h2>
      <p>
        När du besöker oss på Harmoni spa & relax kan du komma precis som du är. Vi vill att du ska ha tid för
        återhämtning och avslappning.
        Du, som kund och att du är nöjd med ditt besök är alltid viktigast för oss.
        <br><br>När du besöker oss kan du förvänta dig:
      </p>
      <ul>
        <li>Lugn och ro, en fristad från vardagsstress</li>
        <li>Skräddarsydda behandlingar</li>
        <li>Avkopplande atmosfär</li>
        <li>Bra bemötande och god service</li>
        <li>Ekologiska, noga utvalda produkter</li>
        <li>Modern och fräsch standard</li>
      </ul>
    </article>
  </section>
</template>
<script setup>
</script>
<style scoped>
/*desktop*/
h2 {
  text-align: center;
  margin: 2em auto;
}

article {
  display: grid;
  align-content: start;
  margin: 2em;
}

article p {
  line-height: 1.5;
  max-width: 50em;
}

ul {
  line-height: 2;
}

.main {
  max-width: 1500px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

}

.main img {
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 4em 2em;
  padding: 1em;
  border: black 1px solid;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
}

/*media tablet*/
@media screen and (min-width: 600px) and (max-width: 1024px) {

  /*main-content*/
  .main img {
    max-width: 250px;
    height: 100%;
    width: 100%;
  }
}

/*media mobile*/
@media screen and (max-width: 600px) {

  /*main-content*/
  .main {
    display: grid;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .main img {
    display: none;
  }

  h2 {
    margin: auto;
  }
}
</style>