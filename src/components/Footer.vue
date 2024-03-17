<!--Footer with static text and links-->
<template>
    <footer>
        <div class="footer-container">
            <img src="../assets/harmoni_logo.png" alt="Harmoni spa och relax">
            <p>Harmoni spa & relax - Sundsvall</p>
            <p>Relaxvägen 1, 852 38 Sundsvall, Sverige | Telefon: +46 60 60 00 06 | Mejl: kontakt@harmonisparelax.se</p>
        </div>
        <div class="footer-btns">
            <RouterLink class="availability" to="/tillganglighet">Tillgänglighetsredogörelse</RouterLink>
            <RouterLink class="availability" to="/boka">Boka ditt besök hos oss</RouterLink>
        </div>

    </footer>
</template>
<script>
//Import 
import { RouterLink } from 'vue-router';
//export default
export default {
    name: "Footer"
}
</script>
<style scoped>
/*Styling footer scoped*/
footer {
    font-family: "Inter", sans-serif;
    width: 100%;
    height: auto;
    font-size: 1em;
    text-align: center;
    box-shadow: none;
    margin: 0 auto;
    padding: 2em 0;
    background-color: #333030;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.212);
}

.footer-container {
    margin: auto;
    text-align: center;
}

.footer-container p {
    margin: auto;
    padding: 0.5em;
    color: white;
}

.footer-container img {
    margin: 2em;
}

.footer-btns {
    display: block;
    padding: 1em;
    margin: 2em auto;
}
/*Links*/
.availability {
    color: rgb(250, 250, 250);
    text-decoration: underline;
    padding: 0.5em 1em;
    border-radius: 2%;
    border: none;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.212);
    font-size: 1.2em;

}

.availability:hover {
    background-color: rgba(226, 201, 121, 0.692);
    color: black;
}

/*media querie mobile phones*/
@media screen and (max-width: 600px) {
    .availability {
        display: none;
    }
}
</style>