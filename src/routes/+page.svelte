<div class="w-screen h-screen bg-slate-900 flex items-center
flex-col justify-center text-4xl
gap-16
">

    <h1 class="text-cyan-300 font-mono font-bold text-7xl drop-shadow-lg">
        Welcome to SKPOSTS
    </h1>
    
    <button on:click={() => {
        window.location.href = "/posts"
    }} class="text-cyan-50 bg-cyan-500 px-7 py-4 rounded-3xl hover:scale-105 transition-all">
        Posts
    </button>
    
</div>
