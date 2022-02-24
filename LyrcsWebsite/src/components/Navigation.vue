<template>
    <div class="bg-gray-50">
        <div class="relative">
            <div
                class="absolute inset-y-0 h-full w-full bg-gradient-to-r from-app-primary to-app-secondary"
                aria-hidden="true"
            ></div>

            <div class="relative py-6">
                <Popover>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6">
                        <nav
                            class="relative flex items-center justify-between sm:h-10 md:justify-center"
                            aria-label="Global"
                        >
                            <div
                                class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
                            >
                                <div class="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <span class="sr-only">Lyrcs</span>
                                        <img
                                            class="h-8 w-auto sm:h-10"
                                            src="@/assets/logo.svg"
                                            alt="Logo"
                                        />
                                    </a>
                                    <div class="-mr-2 flex items-center md:hidden">
                                        <PopoverButton
                                            class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <span class="sr-only">Open main menu</span>
                                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:flex md:space-x-10">
                                <router-link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :to="item.href"
                                    class="font-medium text-gray-100 hover:text-gray-300"
                                >{{ item.name }}</router-link>

                                <!-- <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="item.href"
                                    class="font-medium text-gray-500 hover:text-gray-900"
                                >{{ item.name }}</a>-->
                            </div>
                            <div
                                class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
                            >
                                <span class="inline-flex rounded-md shadow">
                                    <a
                                        :href="this.konstantAppStoreURL"
                                        target="about:_blank"
                                        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-app-primary bg-white hover:bg-gray-200"
                                    >{{ cta }}</a>
                                </span>
                            </div>
                        </nav>
                    </div>

                    <transition
                        enter-active-class="duration-150 ease-out"
                        enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100"
                        leave-active-class="duration-100 ease-in"
                        leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95"
                    >
                        <PopoverPanel
                            focus
                            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div class="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Logo" />
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <span class="sr-only">Close main menu</span>
                                            <XIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="px-2 pt-2 pb-3 space-y-1">
                                    <router-link
                                        v-for="item in navigation"
                                        :key="item.name"
                                        :to="item.href"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >{{ item.name }}</router-link>

                                    <!-- <a
                                        v-for="item in navigation"
                                        :key="item.name"
                                        :href="item.href"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >{{ item.name }}</a>-->
                                </div>
                                <a
                                    :href="this.konstantAppStoreURL"
                                    target="about:_blank"
                                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                                >{{ cta }}</a>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
    inject: ["konstantAppStoreURL", "konstantNavigationSupport"],
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon,
    },
    data() {
        return {
            navigation: [
                { name: 'Support', href: this.konstantNavigationSupport },
                { name: 'Savings', href: '/savings' },
                // { name: 'Competitors', href: '/competitors' } 
            ],
            cta: "Download"
        }
    },
}
</script>