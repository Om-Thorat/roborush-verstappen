<script lang="ts">
    import { mode, sip } from "../store";// Assuming you have a mode store defined
    import Button from "./components/ui/button/button.svelte";
    import Label from "./components/ui/label/label.svelte";
    import { toast } from "svelte-sonner";
    
    let ip = "";
    sip.subscribe((value) => {
        ip = value;
    });
    function setMode(value: number) {
    toast.success(`Switched to mode ${value}`, {
      description: value == 1 ? "IR mode" : "Manual mode",
    });
        fetch(`http://${ip}/cmd?State=M${value}`)
        mode.set(value);
    }
</script>

<div class="flex flex-col justify-center items-center gap-5 w-1/2">
  <span class="text-2xl f1-bold">Modes</span>
  <div class="flex flex-row gap-7">
    <Button variant="outline" on:click={() => setMode(1)}>IR</Button>
    <Button variant="outline" on:click={() => setMode(2)}>Manual</Button>
  </div>
</div>
