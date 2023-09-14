<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<nav class="bg-blue-400 flex justify-center p-4">
			<RouterLink to="/" class="px-2">Interviews</RouterLink>
			<RouterLink to="/applications" class="px-2">Applications</RouterLink>
			<RouterLink to="/saved" class="px-2">Saved</RouterLink>
			<RouterLink to="/archive" class="px-2">Archive</RouterLink>
		</nav>
	</header>
	<RouterView />
</template>


