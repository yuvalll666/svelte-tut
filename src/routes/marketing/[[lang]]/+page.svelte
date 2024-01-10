<script lang="ts">
	import { page } from '$app/stores';

	const greetings = {
		en: 'Hello!',
		es: 'Hola!',
		fr: 'Bonjour!'
	};

	const { lang = 'en' } = $page.params;
	const greeting = (greetings as Record<string, string>)[lang];
</script>

<h1>{greeting}</h1>
