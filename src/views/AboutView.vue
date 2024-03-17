<template>
     <div class="hero-image">
        <picture>
            <source type="image/jpg" media="(min-width: 1024px) and (max-width: 1900px)"
                srcset="../assets/header_3large.jpg">
            <source type="image/jpg" media="(min-width: 601px) and (max-width: 1024px)"
                srcset="../assets/header_3medium.jpg">
            <source type="image/jpg" media="(max-width: 600px)" srcset="../assets/header_3small.jpg">
            <img src="../assets/header_3large.jpg" alt="Harmoni spa och relax boka behandling" class="heroimg">
        </picture>
        <div class="hero-content">
            <a href="/boka" class="herobtn">Boka ditt besök hos oss</a>
        </div>
    </div>
    <h1 class="main-heading">Om oss</h1>
<section class="main-content">
    <article class="contact">
    <h2>Vill du komma i kontakt med oss?</h2>
    <p>Du kan kontakta oss genom att skicka mejl till <br>
        <a href="kontakt@harmonisparelax.se">kontakt@harmonisparelax.se</a> 
        <br>eller ringa till <a href="+46 60 60 00 06">+46 60 60 00 06</a>.</p>
</article>
<article class="about">
    <h2>Hur grundades vi?</h2>
    <p>
Harmoni spa & relax började med att grundaren hade en vision om att skapa en plats där människor kan 
fly från vardagens stress och hitta ro i en fridfull miljö. Vårt fokus har alltid varit att erbjuda kvalitativa 
upplevelser som främjar både kroppslig och mental hälsa.
</p>
<h3>Vi strävar alltid efter:</h3>
<ul>
    <li>Varje individ förtjänar att bli omhändertagen på ett personligt och professionellt sätt</li>
    <li>Erbjuda en atmosfär av harmoni och lugn</li>
    <li>Kunder ska känna sig välkomna och omhändertagna från första stund</li>
    <li>Skräddarsydda upplevelser som är anpassade efter individuella önskemål</li>
    <li>Avkopplande miljö med möjlighet för återhämtning</li>
</ul>
<p>

</p>
<h3>Om spa, relax och våra behandlingar</h3>
<p>
Vår spaavdelning är utformad för att erbjuda en heltäckande upplevelse av 
avkoppling och välbefinnande. Med olika pooler och bastur kan du fördjupa dig i en värld av lugn och ro, 
medan våra professionella terapeuter erbjuder skräddarsydda behandlingar som är utformade för att lösa 
upp spänningar och främja en känsla av inre frid.
</p>
<p>
Oavsett om du besöker oss för en avkopplande spadag, 
en skräddarsydd behandling eller bara för att koppla av en stund i vår fridfulla miljö, 
så kan du vara säker på att din upplevelse hos oss kommer att överträffa dina förväntningar. 
Vi är här för att skapa magiska stunder av avkoppling och välbefinnande för dig att ta med dig
 långt efter att du har lämnat våra dörrar. Välkommen till Harmoni Spa & Relax, där frid och välbefinnande möts.</p>
</article>
</section>
</template>
<script>
</script>
<style scoped>

.main-heading{
    padding: 1em 0;
}
.about{
    max-width: 47em;
    font-size: 1.2em;
    line-height: 1.5;
    margin: 3em auto;
}
ul{
    font-size: 1.2em
}
.contact{
    text-align: center;
    padding: 4em 3em;
    background-color: #e0dbdb;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
    border: 1px solid black;
    margin: 1em auto;
    font-size: 1.2em;
}
</style>