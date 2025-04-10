<template>
	<Flex vert="auto" gap align="center">
		<Flex class="name">{{ name }}</Flex>
		<Flex hor="auto" :gap="5">
			<Flex>{{ description }} v{{ version }}，查看</Flex>
			<RouterLink to="/guide">指南</RouterLink>
		</Flex>
		<Flex sandbox>
			<MdPreviewVue :model-value="(installMd as any)"></MdPreviewVue>
		</Flex>
	</Flex>
</template>

<script lang="ts" setup>
import { Flex } from '@gluttons/fortress-ui';

import MdPreviewVue from '@/components/MdPreview.vue';

import pkg from '../../../package.json';

const { name, version, description } = pkg;

import installMd from './install.md';
</script>

<style lang="scss" scoped>
.name {
	font-size: _rem(30px);
}

a {
	color: #d3d35a;

	&:hover {
		text-decoration: underline;
	}
}
</style>
