<script lang="ts">
    import type {PageData} from "./$types";
    import {invalidate, invalidateAll} from "$app/navigation" 
    export let data: PageData;

    $: ({posts} = data)


    function rerunLoadFunc(){
        /* 1° */
        invalidate("app:posts")

        /* 2° */
        //invalidate("api/posts")
        
        /* 3° */
        //invalidateAll()
    }
</script>

<h1>Posts</h1>
<button on:click={rerunLoadFunc}>ReRun</button>

<h2>Showing {posts.length} Posts.</h2>

{#each posts as {slug, title}}
    <ul>
        <li>
            <a href="/posts/{slug}">{title}</a>
        </li>
    </ul>
{/each}
