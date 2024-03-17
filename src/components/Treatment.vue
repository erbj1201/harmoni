<!--Treatment component to write treatments to dom-->
<template>
    <article>
        <div class="treatment-container">
            <div class="info">
        <h3>{{ treatment.treatmentName }}</h3>
        <p>{{ treatment.treatmentDescription }}</p>
    </div>
    <div class="price">
        <p><strong>{{treatment.treatmentPrice }}</strong></p>
        </div>
    </div>
    
    </article>
</template>

<script>
export default {
    //props from parent
    props: {
        treatment: Object
    }
}
</script>
<style scoped>
/*desktop*/
.treatment-container{
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: auto;
}
/*tablet*/
@media screen and (min-width: 600px) and (max-width: 1024px){
    .treatment-container {
        max-width: 500px;
        margin: auto;
    }
}
/*mobile*/
@media screen and (max-width: 600px){
    .treatment-container {
        max-width: 300px;
        margin: auto;
    }
}
</style>