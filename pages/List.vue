<template>
<div class= "Header">
<h1>About</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      Foods: [
        {
          name: "Fried Chicken",
          img: "https://sweetiepiess.com/wp-content/uploads/2013/08/southern-oven-fried-chicken-3058647-5_preview-5b0ec6ecba61770036491ed7-5-1024x683.jpeg",
          date: "12/24/21"
        },
        {
          name: "Pizza",
          img: "https://img3.mashed.com/img/gallery/you-should-never-fold-pizza-slices-heres-why/l-intro-1602105889.jpg",
          date: "12/24/21"
        },
        {
          name: "Pasta",
          img: "https://images.eatsmarter.com/sites/default/files/styles/facebook/public/spicy-pasta-dish-463607.jpg",
          date: "12/24/21"
        },
        {
          name: "Ice Cream",
          img: "https://healthyhelperkaila.com/wp-content/uploads/2019/07/IMG_9607.png",
          date: "12/24/21"
        },
    ]
   }
  },
};

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.25rem;
}
</style>