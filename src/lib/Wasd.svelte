<script lang="ts">
    import { sip } from "../store";

    let ip = "";
    sip.subscribe((value) => {
        ip = value;
    });

    function cmd(x:string){
        fetch(`http://${ip}/cmd?State=${x}`);
    }
    let w:HTMLDivElement;
    let a:HTMLDivElement;
    let s:HTMLDivElement;
    let d:HTMLDivElement;

    function onKeyDown(e: KeyboardEvent) {
        cmd(e.key)
        switch (e.key) {
            case 'w':
                w.classList.replace('bg-background', 'bg-primary');
                w.classList.replace('text-primary', 'text-background');
                break;
            case 'a':
                a.classList.replace('bg-background', 'bg-primary');
                a.classList.replace('text-primary', 'text-background');
                // Code to handle 'a' key press
                break;
            case 's':
                s.classList.replace('bg-background', 'bg-primary');
                s.classList.replace('text-primary', 'text-background');
                // Code to handle 's' key press
                break;
            case 'd':
                d.classList.replace('bg-background', 'bg-primary');
                d.classList.replace('text-primary', 'text-background');
                // Code to handle 'd' key press
                break;
            default:
                // Code to handle other key presses
                break;
        }
    }

    function onKeyUp(e: KeyboardEvent) {
        cmd(e.key)
        switch (e.key) {
            case 'w':
                w.classList.replace('bg-primary', 'bg-background');
                w.classList.replace('text-background', 'text-primary');
                break;
            case 'a':
                a.classList.replace('bg-primary', 'bg-background');
                a.classList.replace('text-background', 'text-primary');
                // Code to handle 'a' key press
                break;
            case 's':
                s.classList.replace('bg-primary', 'bg-background');
                s.classList.replace('text-background', 'text-primary');
                // Code to handle 's' key press
                break;
            case 'd':
                d.classList.replace('bg-primary', 'bg-background');
                d.classList.replace('text-background', 'text-primary');
                // Code to handle 'd' key press
                break;
            default:
                // Code to handle other key presses
                break;
        }
    }
</script>


<div class="grid grid-cols-3 gap-4">
    <!-- Grid items -->
    <div class="bg-transparent aspect-square h-16"></div>
    <div class="bg-background f1-bold text-primary flex items-center justify-center outline-primary outline-1 outline rounded-sm  aspect-square h-16" bind:this={w} >W</div>
    <div class="bg-transparent aspect-square h-16"></div>
    <div class="bg-background f1-bold text-primary flex items-center justify-center outline-primary outline-1 outline rounded-sm aspect-square h-16" bind:this={a} >A</div>
    <div class="bg-transparent aspect-square h-16"></div>
    <div class="bg-background f1-bold text-primary flex items-center justify-center outline-primary outline-1 outline rounded-sm aspect-square h-16" bind:this={d} >D</div>
    <div class="bg-transparent aspect-square h-16"></div>
    <div class="bg-background f1-bold text-primary flex items-center justify-center outline-primary outline-1 outline rounded-sm aspect-square h-16" bind:this={s} >S</div>
    <div class="bg-transparent aspect-square h-16"></div>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup|preventDefault={onKeyUp}/>