<script lang="ts">
    async function subscribe(event:Event) {
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);


        await fetch('api/newsletter', {
            method: "POST",
            body: data
        })
    }
</script>


<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email" id="email">
    <button>Subscribe</button>
</form>