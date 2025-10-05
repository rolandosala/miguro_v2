<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-16 d-flex justify-end flex-wrap" v-if="showNavigation">
                <v-btn prepend-icon="mdi-arrow-left" color="primary" class=" my-md-3 mx-md-3" @click="goToPreviousLesson" :block="$vuetify.display.smAndDown">
                    Previous Lesson
                </v-btn>
                <v-btn prepend-icon="mdi-arrow-right" color="primary" class="my-1 my-md-3" @click="goToNextLesson" v-if="showBtns" :block="$vuetify.display.smAndDown">
                    Next Lesson
                </v-btn>
                <v-btn prepend-icon="mdi-school" color="primary" class="my-1 my-md-3" to="/exercises/Flashcard" v-if="!showBtns" :block="$vuetify.display.smAndDown">
                    Go To Exercises
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
/* const showNavigation = computed(() => route.name !== '/lessons/Introduction') */
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
]
const getLessonLinks = () =>
    menu.flatMap(item => {
        if (item.link) return [item.link];
        if (item.submenu) return item.submenu.map(sub => sub.link);
        return [];
    });
const routes = computed(() => getLessonLinks());
const currentIndex = computed(() => routes.value.indexOf(route.path));
const hasPrevious = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < routes.value.length - 1);

const showNavigation = computed(() => currentIndex.value > 0);
const showBtns = computed(() => currentIndex.value != routes.value.length - 1);

const goToNextLesson = () => {
    if (hasNext.value) {
        router.push(routes.value[currentIndex.value + 1]);
    }
};

const goToPreviousLesson = () => {
    if (hasPrevious.value) {
        router.push(routes.value[currentIndex.value - 1]);
    }
};
</script>
