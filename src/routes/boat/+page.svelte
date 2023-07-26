<script lang="ts">
    import { text } from '@sveltejs/kit';
    import { enhance } from "$app/forms";
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.boatName}</h1>
<form method="post" action="?/rename" use:enhance>
    <input type="text" name="boatName">
    <button type="submit" class="btn-success">Submit</button>
    <button formaction="?/capitalize" class="btn-success">Capitalize</button>
</form>