<script setup>
import FAQ from '@/components/FAQ.vue'
import KeyboardShortcuts from '@/components/KeyboardShortcuts.vue'
import PageTitle from '@/components/PageTitle.vue';
import Footer from '@/components/Footer.vue';
import SectionTitle from '../components/SectionTitle.vue';
import StatsMini from '../components/StatsMini.vue';
import CTA from '../components/CTA.vue';
</script>

<template>
    <PageTitle title="Savings"></PageTitle>
    <StatsMini></StatsMini>
    <div class="relative pb-16 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                    Every song is different so every usage will vary but here's a common scenario that leads to the results above. We'll be looking at the song
                    <a
                        href="https://open.spotify.com/track/4CNilDDYSlQ5KMP4OK8XmT?si=eeab09c134df4157"
                        class="underline"
                    >No Connection - PASTYL</a> and extrapolating it to an album of 12 songs.
                    It's your typical pop banger with an ABC-ABC-D-C structure coming in at 4:03 minutes and 355 words.
                </p>
                <p>No Connection contains the following sets of 11 near or perfect rhymes.</p>
                <div class="columns-2">
                    <ul>
                        <li class="mt-0">subject, aspect</li>
                        <li>easy, baby</li>
                        <li>me, be, baby</li>
                        <li>me, see</li>
                        <li>clear, here</li>
                        <li>are, guitar</li>
                        <li>easy, baby</li>
                        <li>hard, car</li>
                    </ul>
                </div>
                <h2>Minutes</h2>
                <p>When coming up with rhymes we'll often use online rhyming dictionaries and when counting syllables we'll often use our fingers. The problem with these approaches is not only do they take you away from your work but they take time to do. Since not every rhyme search and syllable count takes the same amount of time we'll need to come up with some values to use.</p>
                <p>We've assumed the following:</p>
                <ul>
                    <li>
                        <strong>10 seconds</strong> for the act of opening a browser and navigating to a rhyme dictionary
                    </li>
                    <li>
                        <strong>2 seconds</strong> waiting for a rhyme dictionary to return a rhyme result
                    </li>
                    <li>
                        <strong>5 seconds</strong> copying and pasting the result into your lyric editor
                    </li>
                    <li>
                        <strong>2 seconds</strong> counting a 3-syllable word
                    </li>
                </ul>
                <p>
                    Combining this together becomes
                    <strong>{{ this.konstantStatsMinutes }} minutes</strong>:
                </p>
                <ul>
                    <li>
                        <strong>10 seconds</strong> to open the browser and navigate to a rhyme dictionary
                    </li>
                    <li>
                        <strong>22 seconds</strong> to individually return 11 rhymes of 2 seconds each
                    </li>
                    <li>
                        <strong>55 seconds</strong> to copy and paste 11 rhyme results, taking 5 seconds each
                    </li>
                    <li>
                        <strong>100 seconds</strong> to count 50, 3-syllable words
                    </li>
                    <li>
                        <strong>2,244 seconds</strong> when extrapolating the above to 12 songs in an album
                    </li>
                </ul>

                <h2>Memory</h2>
                <p>When accessing a website our browser downloads data and then presents that data as a webpage. Different rhyme dictionary search results will download different amounts of data.</p>
                <p>The following assumption will be made:</p>
                <ul>
                    <li>
                        <strong>1 MB</strong> downloaded for the rhyme dictionary home page
                    </li>
                    <li>
                        <strong>1.5 MB</strong> downloaded for each rhyme result
                    </li>
                </ul>
                <p>
                    Combining this together becomes
                    <strong>{{ this.konstantStatsMemory }}</strong>:
                </p>
                <ul>
                    <li>
                        <strong>1 MB</strong> to open the browser and navigate to a rhyme dictionary
                    </li>
                    <li>
                        <strong>16.5 MB</strong> to individually return 11 rhyme results of 1.5 MB each
                    </li>
                    <li>
                        <strong>210 MB</strong> when extrapolating the above to 12 songs in an album
                    </li>
                </ul>

                <h2>Relationships</h2>
                <p>
                    Perhaps the most important part; how does Lyrcs save relationships? This is much harder to come up with an assumption for but here are some examples of how
                    <a
                        href="https://open.spotify.com/track/4CNilDDYSlQ5KMP4OK8XmT?si=eeab09c134df4157"
                        class="underline"
                    >No Connection - PASTYL</a> may have provided relationship saving:
                </p>
                <ul>
                    <li>
                        Your top line singer gets frustrated with how long it takes you to come up with new lyrics. They don't want to hear that your slow internet connection is what's to blame and decide to never work with you again.
                        <strong>Lyrcs could have saved the relationship with its instant rhyme results</strong>.
                    </li>
                    <li>
                        You and your band book a remote cabin for songwriting but only once you arrive do you find out there's no internet available. It was your job to check if the place had internet and now everyone is voting to kick you out because of how long it's taking you figure out rhymes.
                        <strong>Lyrcs could have saved the relationships with its offline rhyme results</strong>.
                    </li>
                    <li>
                        You and your sibling have put all your rivalry in the past and are looking forward to collaborating on a new duo act. Trouble strikes when you argue that
                        <i>antidisestablishmentarianism</i> is 12 syllables and they argue 11. The duo is short lived and your song never lives to see the light of day.
                        <strong>Lyrcs could have saved the relationship with its perfect syllable counting</strong>.
                    </li>
                </ul>

                <h2>Conclusion</h2>
                <p>Lyrcs is a time, memory and relationship saver. You work too hard on your art to let it be impacted by slow tools, unreliable connections and misunderstandings between partners.</p>
                <p>Let Lyrcs save you.</p>
            </div>
        </div>
    </div>
    <CTA></CTA>
    <Footer></Footer>
</template>

<script>
export default {
    inject: ["konstantStatsMinutes", "konstantStatsMemory", "konstantStatsRelationships"]
}
</script>