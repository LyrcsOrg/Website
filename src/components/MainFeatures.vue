<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 bg-white overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{
          header.title
        }}</h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">{{ header.subtitle }}</p>
      </div>

      <div v-for="(item, index) in features" :key="item.title" class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div :class="{ 'lg:col-start-1': index % 2 !== 0, 'lg:col-start-2': index % 2 === 0 }">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">{{ item.title }}</h3>
            <p class="mt-3 text-lg text-gray-500">{{ item.subtitle }}</p>

            <dl class="mt-10 space-y-10">
              <div v-for="item in item.details" :key="item.name" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-10 w-10 rounded-md bg-app-primary text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">{{ item.description }}</dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 px-4 sm:px-6 lg:px-8"
            :class="{ 'lg:col-start-1': index % 2 === 0, 'lg:col-start-2': index % 2 !== 0 }">
            <img fetchpriority="low" class="relative mx-auto rounded-2xl drop-shadow-default" width="490" :src="item.image" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MenuIcon,
  ShareIcon,
  BackspaceIcon,
  CheckIcon,
  PlusIcon,
  MoonIcon,
  DesktopComputerIcon,
  PencilIcon,
  CursorClickIcon,
  ViewListIcon,
  ClipboardCopyIcon,
  ClockIcon,
  LightningBoltIcon,
  EyeIcon,
  ClipboardListIcon,
  DocumentIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/vue/outline'
import ScreenshotRhymes from '../assets/images/features_rhymes.webp'
import ScreenshotSyllables from '../assets/images/features_syllables.webp'
import ScreenshotDesign from '../assets/images/features_design.webp'
import ScreenshotSpelling from '../assets/images/features_spelling.webp'
import ScreenshotHighlight from '../assets/images/features_highlight.webp'
import ScreenshotPrinting from '../assets/images/features_printing.webp'

const header = {
  title: "Why You'll Love Lyrcs",
  subtitle: "All the essential tools you need to write the perfect story."
}

const features = [
  {
    title: "Rhyming Dictionary",
    subtitle: "Gone are the days of opening your browser to check rhymezone.",
    image: ScreenshotRhymes,
    details: [
      {
        name: 'No Wait Times',
        description:
          'Results are given in an instant.',
        icon: ClockIcon,
      },
      {
        name: 'Grouping',
        description:
          'Group the results how you like them; by syllables, letters or none at all.',
        icon: MenuIcon,
      },
      {
        name: 'Insert or Copy',
        description:
          'Insert results directly at your cursor or copy and paste to the perfect spot.',
        icon: ClipboardCopyIcon,
      }
    ]
  },
  {
    title: "Syllable Counting",
    subtitle: "Looking at your fingers to count syllables is now a thing of the past.",
    image: ScreenshotSyllables,
    details: [
      {
        name: 'Per Line',
        description:
          'View the exact number of syllables per line, making it easy to pair up verses.',
        icon: ViewListIcon,
      },
      {
        name: 'Per Selection',
        description:
          "Right click on selected text to view its syllable count.",
        icon: CursorClickIcon,
      },
      {
        name: 'Override',
        description:
          'If you pronounce a word differently or Lyrcs got it wrong (please let us know), right click to override the count.',
        icon: PencilIcon,
      },
    ]
  },
  {
    title: "Rhyme Highlighting",
    subtitle: "No need to keep track of which words rhyme at the end of a line, Lyrcs will do that for you.",
    image: ScreenshotHighlight,
    details: [
      {
        name: "Real-time",
        description:
          'No pushing a button to turn it on, rhymes are calculated blazingly fast in the background as you type.',
        icon: LightningBoltIcon
      },
      {
        name: "Color Blindness",
        description:
          `The 20 most distinct colors are used to improve accessibility. If you have any trouble consider turning on macOS Color Filters.`,
        icon: EyeIcon
      },
      {
        name: "Identical Words",
        description:
          'Sometimes when life gives you orange, you just have to orange again. Toggle the option to highlight identical words.',
        icon: ClipboardListIcon
      }
    ]
  },
  {
    title: "Delicious Design",
    subtitle: "Working late at night? Eyesight isn't what it used to be? Wish you could work without distractions? You're in good hands.",
    image: ScreenshotDesign,
    details: [
      {
        name: 'Minimalistic UI',
        description:
          'Lyrcs is designed to have as little distractions as possible, leaving you to focus on your content.',
        icon: DesktopComputerIcon,
      },
      {
        name: 'Dark Mode Support',
        description:
          'Get blinded by the brilliant work you create, not by white pixels.',
        icon: MoonIcon,
      },
      {
        name: 'Font Adjustable',
        description:
          'Leave your glasses at home grandma, use CMD -, CMD + or CMD 0 to adjust font.',
        icon: PlusIcon,
      },
    ]
  },
  {
    title: "Native macOS",
    subtitle: "Everything you come to expect from a native macOS app is included.",
    image: ScreenshotSpelling,
    details: [
      {
        name: 'Spelling and Grammar',
        description:
          "We didn't win any spelling bees as kids and if you didn't either, Lyrcs will check it all for you.",
        icon: CheckIcon,
      },
      {
        name: 'Undo Redo',
        description:
          'What kind of writing tool would Lyrcs be without this life saving feature?',
        icon: BackspaceIcon,
      },
      {
        name: 'Sharing',
        description:
          'Lyrics finished but needing to run it past the partner? File > Share',
        icon: ShareIcon,
      },
    ]
  },
  {
    title: "Print Perfect",
    subtitle: "Share your creations in hardcopy (or PDF for later).",
    image: ScreenshotPrinting,
    details: [
      {
        name: 'Page Format',
        description:
          "A3, B5, US Letter? Lyrcs doesn't discriminate.",
        icon: DocumentIcon,
      },
      {
        name: 'Text Properties',
        description:
          'Configure the text alignment and size to exactly the way you like it.',
        icon: DocumentTextIcon,
      },
      {
        name: 'Options',
        description:
          `Enable Show Syllables and Show Rhymes to keep those juicy numbers and colors.`,
        icon: LightBulbIcon,
      },
    ]
  },
]

export default {
  setup() {
    return {
      header,
      features
    }
  },
}
</script>