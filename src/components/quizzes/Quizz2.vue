<template>
    <img src="/miguro_2.webp" alt="" style="width: 70%;">
    <v-btn color="success" variant="elevated" class="mt-5" @click="dialog = true">Would you like to
        practice?</v-btn>
    <v-dialog v-model="dialog" max-width="500">
        <v-card :title="title">
            <v-divider></v-divider>
            <v-card-text class="text-center">
                <h1 class="text-h1">{{ question }}</h1>
                <div v-if="showAnswer">
                    <h4>{{ romaji }}</h4>
                    <h5>{{ meaning }}</h5>
                </div>
                <v-text-field label="Please type your answer in romaji.." class="mt-5" @keyup="showSubmitBtn"
                    v-model="userAnswer" :disabled="showAnswer" />
                <span class="text-left" v-if="showAnswer"><b>{{ text }}!</b></span>
                <div class=" d-flex flex-row justify-end">
                    <v-btn color="primary" class="mx-2" v-if="submit" @click="checkAnswer">Submit</v-btn>
                    <v-btn color="success" v-if="next" @click="nextQuestion">Next</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogQuizResult" max-width="400">
        <v-card title="Quiz Result">
            <v-divider></v-divider>
            <v-card-text class="text-center">
                <h1>{{ score }} out {{ quizQuestions.length }}</h1>
                <h2>Perfect!</h2>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <div class=" d-flex flex-row justify-end mt-5">
                    <v-btn color="red" class="mx-2" @click="reset">Close</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const dialog = ref(false)
const dialogQuizResult = ref(false)
const submit = ref(false)
const next = ref(false)
const showAnswer = ref(false)
const userAnswer = ref('')
const count = ref(0)
const question = ref('')
const romaji = ref('')
const meaning = ref('')
const text = ref('')
const score = ref(0)
const answeredItem = ref([])
const props = defineProps<{
    quizQuestions: Array<{ word: string, romaji: string, meaning: string }>,
    title: string
}>()


const showSubmitBtn = () => {
    userAnswer.value === '' ? submit.value = false : submit.value = true
}
const nextQuestion = () => {
    if (count.value === props.quizQuestions.length - 1) {
        dialog.value = false
        dialogQuizResult.value = true
    } else {
        count.value++
        loadPracticeQuestion()
    }
    submit.value = false
    showAnswer.value = false
    next.value = false
    userAnswer.value = ''
}
const checkAnswer = () => {
    if (userAnswer.value == romaji.value) {
        text.value = 'Correct'
        score.value++
    } else {
        text.value = 'Incorrect'
    }

    submit.value = false
    showAnswer.value = true
    next.value = true
}
const loadPracticeQuestion = () => {
    try {
        let random;
        do {
            random = Math.floor(Math.random() * props.quizQuestions.length);
        } while (answeredItem.value.includes(random));

        answeredItem.value.push(random);

        question.value = props.quizQuestions[random].word;
        romaji.value = props.quizQuestions[random].romaji;
        meaning.value = props.quizQuestions[random].meaning;

    } catch (error) {
        console.log(error)
    }
}
const reset = () => {
    score.value = 0
    count.value = 0
    dialogQuizResult.value = false
    answeredItem.value = []
}
onMounted(() => {
    loadPracticeQuestion()
})
</script>