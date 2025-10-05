<template>

    <v-container class="bg-primary" fluid>
        <v-row class="px-8 py-8 px-md-16 py-md-16 text-md-center  text-white d-flex flex-column justify-center align-center ">
            <v-col cols="12" md="12" sm="12" >
                <v-img src="@/assets/logo.png" alt="Japanese learning" max-height="200" contain class="mb-8"></v-img>
                <h1 class="text-h4 text-left text-md-center text-md-h3 font-weight-bold mb-4">
                    Master Japanese with AI-powered lessons and community support
                </h1>
                <p class="text-h6 mb-8">
                    Your journey to fluency starts here—whether you're preparing for JLPT, learning for travel, or just
                    curious about the culture.
                </p>
            </v-col>
            <v-col cols="12" md="4" sm="12">
                <v-btn rounded="xl" size="x-large" block to="/lessons/Introduction"> Get Started Free</v-btn>
            </v-col>
        </v-row>
    </v-container>

    <!-- Features Section -->
    <v-container class="py-16 px-8" fluid>
        <h2 class="text-h4 font-weight-bold text-center mb-12">Why Miguro?</h2>
        <v-row class="d-flex jusify-center mb-8 align-center" dense>
            <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i">
                <v-card class="pa-6 text-center elevation-2 rounded-xl">
                    <v-icon size="48" color="primary" class="mb-4">{{ feature.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
                    <p class="text-body-2">{{ feature.text }}</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Social Proof -->
    <v-container class="py-16">
        <h2 class="text-h4 font-weight-bold text-center mb-8">
            Join hundreds of learners worldwide
        </h2>
        <p class="text-body-1 text-center mb-12">
            See why students, hobbyists, and professionals trust Miguro for their Japanese journey.
        </p>
        <v-row justify="center" dense>
            <v-col cols="12" md="8">
                <v-card class="pa-6 rounded-xl elevation-2 text-center">
                    <p class="text-body-1 mb-2">
                        “Miguro made learning Japanese fun and less overwhelming.
                        The AI chatbot feels like I’m practicing with a real person!”
                    </p>
                    <strong>- Aki, Beginner Learner</strong>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- CTA Footer -->
    <v-container fluid class="py-16 text-center bg-primary text-white d-flex flex-column justify-center align-center">
        <h2 class="text-h4 font-weight-bold mb-4">
            Ready to start your journey?
        </h2>
        <p class="text-body-1 mb-8">
            Sign up today and take your first step toward fluency.
        </p>
        <v-col cols="12" md="4" sm="6">
            <v-btn rounded="xl" size="x-large" block>Create Free Account</v-btn>
        </v-col>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
const features = ref([
    {
        icon: "mdi-book-open-page-variant",
        title: "Structured Lessons",
        text: "Step-by-step grammar, vocabulary, and cultural insights tailored for beginners to advanced learners.",
    },
    {
        icon: "mdi-robot",
        title: "AI Study Partner",
        text: "Practice Japanese conversations anytime with an intelligent chatbot.",
    },
    {
        icon: "mdi-gamepad-variant",
        title: "Interactive Tools",
        text: "Games, quizzes, and exercises that make learning stick.",
    },
    {
        icon: "mdi-account-group",
        title: "Community Hub",
        text: "Connect, share, and learn with other Japanese learners worldwide.",
    },
    {
        icon: "mdi-file-document-edit",
        title: "Mock Exams",
        text: "Prepare with JLPT-style practice tests and track your progress.",
    },
])
</script>

<style scoped>
.v-application {
    background: #fff;
}
</style>
