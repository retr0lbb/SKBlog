<script lang="ts">
    import type {PageData} from "./$types";
    import {invalidate, invalidateAll} from "$app/navigation" 
    export let data: PageData;

    $: ({posts} = data)

</script>

<div>
    <h1 class="text-cyan-200 text-4xl font-mono">Posts</h1>
    <h2 class="text-cyan-800">Showing {posts.length} Posts.</h2>
</div>

<ul class="text-slate-600 mt-5">
{#each posts as {slug, title}}
        <li class="hover:text-slate-200 transition-all">
            <a href="/posts/{slug}">{title}</a>
        </li>
{/each}
</ul>
