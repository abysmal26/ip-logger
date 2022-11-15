<script lang="ts">
    import { onMount } from 'svelte';
    import { LogIP } from './logger';

    onMount(() => LogIP());
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abysmal</title>
</svelte:head>

<h1>Checking your browser...</h1>