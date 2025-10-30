<template>
    <v-app-bar color="primary">
        <v-row class="d-flex flex-row">
            <v-col cols="2" md="8" sm="8" class="d-flex flex-row align-center">
                <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="mx-10">Miguro.com</v-toolbar-title>
            </v-col>
            <DictionarySearch />
        </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :rail="rail && !mobile" @click="rail = false" :temporary="mobile" app>
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/lego/7.jpg" title="Username">
                <template v-slot:append>
                    <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list v-for="(item, i) in menu" :key="i" density="compact">
            <v-list-group :value="item.item" v-if="item.submenu.length > 0">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :title="item.item" :to="item.link"
                        prepend-icon="$vuetify"></v-list-item>
                </template>
                <v-list-item v-for="(subitem, i) in item.submenu" :title="subitem.item" :to="subitem.link"
                    prepend-icon="$vuetify"></v-list-item>
            </v-list-group>
            <v-list-item :title="item.item" :value="item.item" :to="item.link" prepend-icon="$vuetify"
                v-else></v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <v-divider class="mt-8"></v-divider>
        <v-list v-for="(item, i) in exercises" :key="i" density="compact">
            <v-list-group :value="item.item" v-if="item.submenu.length > 0">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :title="item.item" :to="item.link"
                        prepend-icon="$vuetify"></v-list-item>
                </template>
                <v-list-item v-for="(subitem, i) in item.submenu" :title="subitem.item" :to="subitem.link"
                    prepend-icon="$vuetify"></v-list-item>
            </v-list-group>
            <v-list-item :title="item.item" :value="item.item" :to="item.link" prepend-icon="$vuetify"
                v-else></v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <v-divider class="mt-8"></v-divider>
        <v-col cols="12" md="12" sm="12" color="surface-dark">
           <!--  <AIChatbot /> -->
            <!-- <v-btn prepend-icon="mdi-earth" color="success" class="mt-3" block>
                Community
            </v-btn> -->
        </v-col>
    </v-navigation-drawer>
</template>
<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import AIChatbot from './AIChatbot.vue';
const drawer = ref(true)
const rail = ref(true)
const { mobile } = useDisplay();
watch(mobile, (isMobile) => {
    if (isMobile) {
        drawer.value = false       // Optional: auto-close on mobile
        rail.value = false         // Disable rail on mobile
    } else {
        drawer.value = true        // Ensure it's visible on desktop
        rail.value = true          // Enable rail mode if desired
    }
})
const menu = [
    { item: 'Introduction', link: '/lessons/Introduction', collapse: '', target: '', submenu: [] },
    {
        item: 'Writing System', link: '', collapse: 'collapse', target: 'writingsystems',
        submenu: [
            { item: 'Hiragana', link: '/lessons/writingsystem/Hiragana', icon: '' },
            { item: 'Katakana', link: '/lessons/writingsystem/Katakana', icon: '' },
            { item: 'Kanji', link: '/lessons/writingsystem/Kanji', icon: '' },
        ]
    },
    {
        item: 'Particles', link: '', collapse: 'collapse', target: 'particles', submenu: [
            { item: 'は (ha)', link: '/lessons/particles/Particle_Ha' },
            { item: 'が (ga)', link: '/lessons/particles/Particle_Ga' },
            { item: 'を (wo)', link: '/lessons/particles/Particle_Wo' },
            { item: 'に (ni)', link: '/lessons/particles/Particle_Ni' },
            { item: 'で (de)', link: '/lessons/particles/Particle_De' },
            { item: 'の (no)', link: '/lessons/particles/Particle_No' },
            { item: 'へ (e)', link: '/lessons/particles/Particle_E' },
            { item: 'と (to)', link: '/lessons/particles/Particle_To' },
            { item: 'も (mo)', link: '/lessons/particles/Particle_Mo' },
            { item: 'から (kara)', link: '/lessons/particles/Particle_Kara' },
            { item: 'まで (made)', link: '/lessons/particles/Particle_Made' },

        ]
    },
    {
        item: 'Conjugation', link: '', collapse: 'collapse', target: 'conjugations', submenu: [
            { item: 'Introduction', link: '/lessons/conjugation/ConjugationIntroduction' },
            { item: 'Dictionary', link: '/lessons/conjugation/Dictionary' },
            { item: 'Polite Non-Past', link: '/lessons/conjugation/PoliteNonPast' },
            { item: 'Polite Negative', link: '/lessons/conjugation/PoliteNegativeNonPast' },
            { item: 'Past Form', link: '/lessons/conjugation/PolitePastForm' },
            { item: 'Negative Past', link: '/lessons/conjugation/PolitePastNegativeForm' },
            { item: 'Te-form', link: '/lessons/conjugation/TeConjugationForm' },
            { item: 'Potential', link: '/lessons/conjugation/PotentialVerbConjugation' },
            { item: 'Volitional', link: '/lessons/conjugation/VolitionalConjugation' },
            { item: 'Imperative', link: '/lessons/conjugation/ImperativeConjugation' },
            { item: 'Conditional', link: '/lessons/conjugation/ConditionalConjugation' },
            { item: 'Passive', link: '/lessons/conjugation/PassiveConjugation' },
            { item: 'Causative', link: '/lessons/conjugation/CausativeConjugation' },
            /* { item: 'Causative-Passive', link: '/causative-passive' } */
        ]
    },
    {
        item: 'Conjunctions', link: '', collapse: 'collapse', target: 'conjunctions', submenu: [
            { item: 'Sequential', link: '/lessons/conjunctions/Sequential' },
            { item: 'Constractive', link: '/lessons/conjunctions/Constractive' },
            { item: 'Cause & Effect', link: '/lessons/conjunctions/CauseAndEffect' },
            { item: 'Condition', link: '/lessons/conjunctions/Condition' },
            { item: 'Addition', link: '/lessons/conjunctions/Addition' },
            { item: 'Emphasis', link: '/lessons/conjunctions/Emphasis' },
            { item: 'Summarizing', link: '/lessons/conjunctions/Summarizing' },
        ]
    },
    {
        item: 'Numbers', link: '', collapse: 'collapse', target: 'numbers', submenu: [
            { item: 'Introduction', link: '/lessons/numbers/Introduction' },
            { item: 'Age Expression', link: '/lessons/numbers/AgeExpression' },
            { item: 'Telephone', link: '/lessons/numbers/PhoneNumber' },
            { item: 'Telling Time', link: '/lessons/numbers/TellingTime' },
        ]
    },
    {
        item: 'W-H Questions', link: '', collapse: 'collapse', target: 'wh_questions', submenu: [
            { item: 'Introduction', link: '/lessons/questions/Introduction' },
            { item: 'What', link: '/lessons/questions/What' },
            { item: 'When', link: '/lessons/questions/When' },
            { item: 'Who', link: '/lessons/questions/Who' },
            { item: 'Where', link: '/lessons/questions/Where' },
            { item: 'Why', link: '/lessons/questions/Why' },
            { item: 'How', link: '/lessons/questions/How' },
        ]
    },
    {
        item: 'Vocabularies', link: '', collapse: 'collapse', target: 'vocabularies', submenu: [
            { item: 'Calendar', link: '/lessons/vocabularies/Calendar' },
            { item: 'Occupations', link: '/lessons/vocabularies/Occupation' },
            { item: 'Institutions', link: '/lessons/vocabularies/Institutions' },
            { item: 'Family', link: '/lessons/vocabularies/Family' },
        ]
    },
    {
        item: 'Kanji List', link: '/kanji/KanjiList', collapse: 'collapse', target: 'vocabularies', submenu: []
    },
]
const exercises = [
    {
        item: 'Exercises', link: '', collapse: 'collapse', target: 'practice',
        submenu: [
            { item: 'Flashcard', link: '/exercises/Flashcard' },
            { item: 'Translation', link: '/exercises/Translation' },
            { item: 'Reading', link: '/exercises/Reading' },
            { item: 'Listening', link: '/exercises/Listening' },
            { item: 'Grammar', link: '/exercises/Grammar' },
        ]
    },
    {
        item: 'Mock Test', link: '/mocktest/MockTest', collapse: '', target: '', submenu: []
    },
]
</script>