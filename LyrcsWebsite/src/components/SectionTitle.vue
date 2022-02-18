<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="max-w-2xl lg:mx-auto lg:text-center">
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >{{ title }}</h2>
                <p
                    class="mt-4 text-gray-500"
                >{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
}

</script>