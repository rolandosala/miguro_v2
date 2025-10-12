<template>
    <v-btn prepend-icon="mdi-robot" color="primary" @click="dialog = true" block>
        AI Chatbot
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="800">
        <v-card>
            <v-card-title>Chat with AI</v-card-title>
            <v-card-text class="px-10 py-10" style="overflow-y: scroll">
                <!-- Loop messages -->
                <div v-for="(msg, index) in messages" :key="index" class="d-flex my-2"
                    :class="msg.sender === 'user' ? 'justify-end' : 'justify-start'">
                    <div class="pa-3 rounded-lg" :class="msg.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-grey-lighten-3 text-black'" style="max-width: 70%; word-wrap: break-word;">
                        {{ msg.text }}
                    </div>
                </div>
            </v-card-text>
            <v-card-text >
                <v-text-field label="Start Conversation.." v-model="userMessage" @keyup.enter="send"></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="d-flex justify-end">
                <v-btn color="red" @click="dialog = false">Exit Conversation</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref(false)
const messages = ref([
    { sender: 'ai', text: 'Konnichiwa!' }
])
const userMessage = ref('')

const send = () => {
    if (userMessage.value.trim() !== '') {
        // Push user message
        messages.value.push({
            sender: 'user',
            text: userMessage.value
        })

        // (Optional) Mock AI reply
        setTimeout(() => {
            const aiReply = getAIResponse(messages.value[messages.value.length - 1].text)
            messages.value.push({
                sender: 'ai',
                text: aiReply
            })
        }, 500)

        userMessage.value = '' // clear input
    }
}

const getAIResponse = (userText: string) => {
    userText = userText.toLowerCase()
    console.log(messages.value[messages.value.length - 1].text)
    if (userText.includes("konnichiwa")) {
        return "Ogenki desu ka?"
    } else if (userText.includes("nanji")) {
        return `The current time is ${new Date().toLocaleTimeString()}.`
    } else if (userText.includes("bye")) {
        return "Goodbye! Talk to you later."
    } else {
        return "Sorry, I don’t quite understand. Can you rephrase?"
    }
}
</script>