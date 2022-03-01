<template>
    <div class="bg-gradient-to-r from-app-primary to-app-secondary">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <h2
                    class="text-center text-4xl font-extrabold text-white sm:text-5xl"
                >{{ title }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}

</script>