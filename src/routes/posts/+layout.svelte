<script lang="ts">
    import type { LayoutData } from "./$types"
    export let data: LayoutData
</script>

<div class="flex gap">
    <aside class="nav">
        <nav class="full">
            <h4>Posts</h4>

            <ul>
                {#each data.posts as {slug, title}}
                    <li>
                        <a href="/posts/{slug}">{title}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>

    <main>
        <slot />
    </main>
</div>

<style>
    .flex{
        display: flex;
    }
    .gap{
        gap: 5rem;
    }

    .nav{
        width: 20rem;
    }
    .full{
        width: 100%;
        height: 100%;
    }
</style>