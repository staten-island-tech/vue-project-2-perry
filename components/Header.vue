<template>
    <header>
        <h1 class= "title">My Blog</h1>
        <nav></nav>
        <NuxtLink to="/index"></NuxtLink>
        <NuxtLink to="/about"></NuxtLink>
    </header>
</template>


<style scoped>

header {
	padding: 15px 30px;
	background-color: #FFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
header .title {
	color: #212121;
	font-size: 24px;
	font-weight: 900;
	text-transform: uppercase;
}

</style>

