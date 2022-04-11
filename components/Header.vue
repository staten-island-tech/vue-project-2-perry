<template>
    <header>
        <h1 class= "title">My Blog</h1>
        <nav></nav>
        <NuxtLink to="/">here</NuxtLink>
        <NuxtLink to="/about">there</NuxtLink>
    </header>
</template>


<style scoped>

header {
	padding: 20px 40px;
	background-color: #FFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.1);
	font-size: 40px;
}
.title {
	color: #212121;
	font-size: 30px;
	font-weight: 900;
	text-transform: uppercase;
}

</style>

