<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    function formatDate(date: Date){
        return new Intl.DateTimeFormat("en", {
            dateStyle: "long"
        }).format(date)
    }
</script>

<hgroup>
    <h1>{data.posts?.title}</h1>
    <h3>{data.posts?.createdAt}</h3>


    <div class="content">
        {@html data.posts?.content}
    </div>
</hgroup>