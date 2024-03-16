<script lang="ts">
    import type {PageData} from "./$types";

    export let data: PageData;

    $: ({posts} = data)
</script>

<h1>Posts</h1>

<h2>Showing {posts.length} Posts.</h2>

{#each posts as {slug, title}}
    <ul>
        <li>
            <a href="/posts/{slug}">{title}</a>
        </li>
    </ul>
{/each}