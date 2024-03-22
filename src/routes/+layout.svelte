<script>
    import { page } from "$app/stores"
    import "../app.css"
</script>

<svelte:head>
    <title>{$page.data.post?.title ?? "SKPOSTS"}</title>
</svelte:head>
<main>
    <slot />
</main>