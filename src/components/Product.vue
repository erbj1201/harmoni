<!--Product Component for writing products to dom-->
<template>
    <article>
        <div class="product-container">
            <div class="info">
                <h3>{{ product.productName }}</h3>
            </div>
            <div class="price">
                <p><strong>{{ product.productPrice }}</strong></p>
            </div>
        </div>
    </article>
</template>


<script>
//props from parent
export default {
    props: {
        product: Object
    }
}
</script>
<style scoped>
/*desktop*/
.product-container {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: auto;
}
/*tablet*/
@media screen and (min-width: 600px) and (max-width: 1024px){
    .product-container {
        max-width: 500px;
        margin: auto;
    }
}
/*mobile*/
@media screen and (max-width: 600px){
    .product-container {
        max-width: 300px;
        margin: auto;
    }
}
</style>