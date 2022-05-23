<template>
  <div>
    <Header />
    <h2 class = "title"> Welcome to my blog </h2>
  </div>
  
</template>

<script>
export default {
    data() {
    return{
        Blog: [],
      }
  },
  async fetch() {
    this.Blog = await this.$content('Blog').fetch()
  }
}

</script>

<style scoped>
.title {
    font-size: 30px;
    text-align: center;
    margin-top: 5rem;
};
</style>



