<script>
    import { page } from "$app/stores"
</script>

<svelte:head>
    <title>{$page.data.post?.title ?? "SKPOSTS"}</title>
</svelte:head>

<header>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/posts">Posts</a>
            </li>
        </ul>
    </nav>
</header>
<main>
    <slot />
</main>