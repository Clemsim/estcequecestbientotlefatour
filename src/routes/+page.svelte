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
    {#if data.isFatour}
        <div class="mt-4 flex flex-col items-center gap-4">
            <p class="text-lg">Le roadbook est disponible !</p>
            <div class="flex gap-4">
                <a
                    href="/roadbook2027.pdf"
                    target="_blank"
                    class="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                    Visionner le roadbook
                </a>
                <a
                    href="/roadbook2027.pdf"
                    download
                    class="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
                >
                    Télécharger
                </a>
            </div>
        </div>
    {/if}
</div>
