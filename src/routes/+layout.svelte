<script>
    import { page } from "$app/stores"
</script>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>

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