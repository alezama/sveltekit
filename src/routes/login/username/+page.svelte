<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import { db, user} from "$lib/firebase"
    import {doc, getDoc, writeBatch } from "firebase/firestore"

    let username = "";
    let loading = false;
    let isAvailable = false;
    
    let debounceTimer: NodeJS.Timeout;


    async function checkAvailability() {
        isAvailable = false;
        clearTimeout(debounceTimer);
        loading = true;
        debounceTimer = setTimeout(async () => {
        console.log("check availability of", username);
        const ref = doc(db, "usernames", username);
        const exits = await getDoc(ref).then((doc) => doc.exists());
        isAvailable = !exits;
        loading = false;
        }, 500);
    }
    async function confirmUserName () {
        console.log("corfirming username", username);
        const batch = writeBatch(db);
        batch.set(doc(db, "usernames", username), {uid: $user?.uid });
    }

</script>

<AuthCheck>
<h2>Username</h2>
<form class="w-2/5" on:submit|preventDefault={confirmUserName}>
    <input
        type="text"
        placeholder="Username"
        class="input w-full"
        bind:value={username}
        on:input={checkAvailability}/>
        <p>Is Available? {isAvailable}</p>
        <button class="btn btn-success">Confirm username @{username}</button>
</form>
</AuthCheck>