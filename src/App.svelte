<script lang="ts">
import { ModeWatcher } from "mode-watcher";
import Modetoggle from "$lib/Modetoggle.svelte";
import Input from "$lib/components/ui/input/input.svelte";
import Button from "$lib/components/ui/button/button.svelte";
import { login, mode, sip } from "./store";
import Modes from "$lib/Modes.svelte";
import { Toaster } from "$lib/components/ui/sonner";
import Wasd from "$lib/Wasd.svelte";

let aud:HTMLAudioElement;
let ip = "";

let Llogin = true;
login.subscribe((value) => {
  Llogin = value;
});

let Lmode = 1;
mode.subscribe((value) => {
  Lmode = value;
});

function play(){
  sip.set(ip);
  login.set(false);
  aud.play();
}
</script>

<ModeWatcher />
<Toaster />
<main class="bg-background w-screen h-[100svh] flex flex-col gap-7 items-center justify-center">
  <audio id="audio" bind:this={aud} src="/verstappen.mp3"></audio>
  <Modetoggle /> 
  {#if Llogin}
  <h1 class="text-primary text-4xl font-extrabold f1-bold">Ready for the race?</h1>
  <div class="flex w-full max-w-sm items-center space-x-2 gap-3">
    <Input bind:value={ip} placeholder="Your car's local ip" />
    <Button on:click={play} class="px-8">Race!</Button>
  </div>
  {:else}
    <div class="flex flex-row w-screen h-full fade-in">
    <div class="w-1/2 flex flex-col justify-center items-center gap-5">
    {#if Lmode === 1}
      <span class="text-3xl f1-bold z-10">IR Mode</span>
      <span class="text-4xl f1-bold z-10">Hope for the best!</span>
      <div class="h-full absolute -translate-x-12 min-w-16 bg-primary"></div>
      <div class="h-full absolute translate-x-12 min-w-16 bg-primary "></div>
    {:else if Lmode===2}
      <Wasd />
    {/if}
    </div>
    <Modes />
    </div>
  {/if}
</main>

<style>
  .fade-in {
    animation: fadeIn 1000ms ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
