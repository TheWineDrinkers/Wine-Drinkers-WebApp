<script lang="ts">

    import Button from "$lib/components/Button.svelte";
    import { onMount } from "svelte";

    export let title: string;

    let titleHeight : number;

    onMount(() => {
        titleHeight = document.getElementById("title")?.getBoundingClientRect().height * 1.75;
    });

    $: headerHeight= `height: ${titleHeight}px`;

</script>


<div id="header" style={headerHeight} class="bg-amethyst text-[#E7ECEF]  sticky w-full flex flex-row justify-between items-center px-10">
    <button id="navigation"><i class="fa-solid fa-bars h-6"></i></button>
    <div id="title">
        <h1>{title}</h1>
    </div>
<!-- NavBar-->
    <Button buttonText="Login" />
</div>