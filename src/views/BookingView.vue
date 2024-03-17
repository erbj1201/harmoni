<!--Bookingview-->
<template>
    <div class="hero-image">
        <picture>
            <source type="image/jpg" media="(min-width: 1024px) and (max-width: 1900px)"
                srcset="../assets/header_5large.jpg">
            <source type="image/jpg" media="(min-width: 601px) and (max-width: 1024px)"
                srcset="../assets/header_5medium.jpg">
            <source type="image/jpg" media="(max-width: 600px)" srcset="../assets/header_5small.jpg">
            <img src="../assets/header_5large.jpg" alt="Harmoni spa och relax boka behandling" class="heroimg">
        </picture>
        <div class="hero-content">
            <a href="/boka" class="herobtn">Boka ditt besök hos oss</a>
        </div>
    </div>
    <h1 class="main-heading">Boka ditt besök hos oss på Harmoni spa & relax</h1>
    <p> <!--Routerlink to treatments -->
        <RouterLink class="RouterLink" to="/behandlingar">Vill du veta mer om våra behandlingar?</RouterLink>
    </p>
    <AddBooking />
</template>
<script>
//imports
import AddBooking from "../components/AddBooking.vue";

export default {
    //Components
    components: {
        AddBooking
    },
}
</script>
<style scoped>
/*style for desktop*/
p {
    margin: auto;
    text-align: center;
    font-family: "Inter", sans-serif;
}

.RouterLink {
    padding: 2em 1em;
    margin: 1em auto;
    background-color: #333030;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.212);
    color: white;
    text-decoration: none;
    border-radius: 2%;
}

.RouterLink:hover {
    background-color: rgb(226, 201, 121);
    color: black;
}

/*Media for mobile*/
@media screen and (max-width: 600px) {
    .RouterLink {
        padding: 0.5em;
        margin: 1em auto;
        background-color: #333030;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.212);
        color: white;
        text-decoration: none;
        border-radius: 2%;
    }
}
</style>