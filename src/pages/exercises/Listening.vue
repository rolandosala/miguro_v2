<template>
    <v-sheet class="px-16 py-10">
        <h4 class="text-h5 font-weight-bold">Listening Exercise</h4>
        <hr>
        <v-row>
            <v-col cols="12" md="3" sm="12" v-for="(data, index) in cards">
                <v-card class="mt-10" @click="showQuestions">
                    <div class="d-flex justify-center flex-column align-center py-8 px-8">
                        <img :src="data.img" alt="" style="width: 70%;">
                        <h5 class="text-h6 font-weight-bold">{{ data.title }}</h5>
                    </div>
                </v-card>
            </v-col>
            <v-dialog v-model="dialog" max-width="500" persistent v-for="data in cards">
                <v-card title="Listening Exercise">
                    <v-divider></v-divider>
                    <v-card-text>
                        <div class="d-flex justify-center align-center flex-column">
                            <audio id="birdAudio" :src="'/audio/' + audio + '.mp3'" type="audio/mp3" autoplay>
                                <!-- <source   /> -->
                            </audio>
                            <img src="/miguro_1.webp" alt="" style="width: 30%;">
                            <v-btn onclick="document.getElementById('birdAudio').play()" color="primary">Play</v-btn>
                            <v-col cols="12" md="12" sm="12">
                                <v-text-field label="Please type your answer.." v-model="user_answer" class="mt-5"
                                    block />
                            </v-col>
                        </div>
                        <div class="d-flex justify-space-between align-center">
                            <p><b class="text-h6">{{ count + 1 }}/{{ cards[0].questions.length }}</b></p>
                            <v-btn color="primary" @click="submitAnswer" v-if="submit">Submit</v-btn>
                            <v-btn color="primary" @click="nextQuestion" v-else>Next</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogListeningResult" max-width="500">
                <v-card title="Listening Result">
                    <v-card-text>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Correct Answer</th>
                                    <th>Your Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in preview_answer">
                                    <td>{{ data.no }}</td>
                                    <td>{{ data.correctAnswer }}</td>
                                    <td>{{ data.userAnswer }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <div class="mt-5 d-flex justify-end">
                            <v-btn color="red" @click="reset">Close</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-sheet>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const audio = ref('')
const answer = ref('')
const count = ref(0)
const user_answer = ref('')
const submit = ref(false)
const preview_answer = ref([])
const cards = [
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Listening 1',
        questions: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    },
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Listening 2',
        questions: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    },
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Listening 3',
        questions: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    },
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Listening 4',
        questions: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    },
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Listening 5',
        questions: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    }
]
const dialog = ref(false)
const dialogListeningResult = ref(false)
const showQuestions = () => {
    count.value;
    const rand = Math.floor(Math.random() * cards[0].questions.length)
    audio.value = cards[0].questions[rand].audio;
    answer.value = cards[0].questions[rand].answer;
    dialog.value = true
}
const nextQuestion = () => {
    preview_answer.value.push({
        no: count.value + 1, userAnswer: user_answer.value, correctAnswer: answer.value
    });
    count.value++;
    showQuestions();
    if (count.value === cards[0].questions.length - 1) {
        submit.value = true;
    }
    user_answer.value = '';
}
const submitAnswer = () => {
    preview_answer.value.push({
        no: count.value + 1, userAnswer: user_answer.value, correctAnswer: answer.value
    });
    dialogListeningResult.value = true
    dialog.value = false
}
const reset = () => {
    count.value = 0;
    user_answer.value = '';
    submit.value = false;
    dialog.value = false;
    dialogListeningResult.value = false
    preview_answer.value = []
}

</script>