<template>
	<div class="header">asdasd</div>
	<div class="main">
		<router-view />
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$headerHeight: 30px;

.header {
	overflow: hidden;
	height: $headerHeight;
}

.main {
	overflow: hidden;
	height: calc(100% - #{$headerHeight});
}
</style>
