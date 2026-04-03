<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div
    class="flex min-h-screen flex-col items-center justify-center gap-6 text-center"
>
    <p class="text-2xl font-semibold">{data.message}</p>
    <p class="text-lg text-gray-600">
        Il reste <strong>{data.daysUntilFatour}</strong> jours avant le début de la
        Fatour.
    </p>
</div>
