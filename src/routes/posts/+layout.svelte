<script lang="ts">
    import type { LayoutData } from "./$types"
    export let data: LayoutData

</script>

<div class="w-screen h-screen flex">
    <aside class="bg-slate-900 px-7 py-8">
        <div>

        </div>
        <nav class="flex flex-col gap-3">
            <h4 class="text-cyan-300 text-xl">Ultimos Posts lidos</h4>

            <ul class="text-cyan-800 flex flex-col list-disc">
                {#each data.posts as {slug, title}}
                    <li class="py-2 px-4 hover:text-cyan-200 transition-all hover:bg-slate-800/70 max-w-60 overflow-hidden rounded-2xl">
                        <a href="/posts/{slug}">{title}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>

    <main class="bg-slate-950 flex-1 p-10 ">
        <slot />
    </main>
</div>