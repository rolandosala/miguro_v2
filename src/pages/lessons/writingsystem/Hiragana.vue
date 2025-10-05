<template>
    <v-container class="px-5 py-5 px-md-16 py-md-5">
        <v-row>
            <v-col cols="12" md="12" sm="12" >
                <h4 class="text-h5 font-weight-bold mb-4">Introduction to Hiragana (ひらがな)</h4>
                <p class="mb-4">Hiragana is one of the three writing systems used in the Japanese language, alongside
                    Katakana and Kanji. It's often the first script Japanese children and new learners of the language are taught.
                </p>
                <h5 class="text-h6 font-weight-bold">Why Learn Hiragana?</h5>
                <label>Hiragana is essential for:</label>
                <v-list density="compact">
                    <v-list-item>Reading native Japanese words not written in Kanji</v-list-item>
                    <v-list-item>Grammar particles (like は, を, で)</v-list-item>
                    <v-list-item>Verb and adjective endings</v-list-item>
                    <v-list-item>Furigana (small Hiragana written next to Kanji to show pronunciation)</v-list-item>
                </v-list>
                <p class="font-weight-bold">Mastering Hiragana opens the door to reading and writing basic Japanese!</p>
            </v-col>
            <v-col cols="12" md="12" sm="12" class="px-5 d-flex flex-row">
                <v-row>
                    <v-col cols="12" md="6" sm="12">
                        <CharacterInformationComponent :characters="characters" :title="'Hiragana Character'" />
                        <CharacterInformationComponent :characters="dakuten" :title="'Dakuten Characters'" />
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <CharacterInformationComponent :characters="yoonCharacters" :title="'Yoon Characters'" />
                        <p>Note: ぢ (ji) and づ (zu) are rarely used and usually replaced with じ and ず, except in
                            certain native words or compounds.</p>
                        <v-alert icon="mdi-information" title="Tips for Learning Hiragana">
                            <v-list-item>Practice writing: Each character has a stroke order. Repetition helps
                                memorization.</v-list-item>
                            <v-list-item>Use mnemonics: Visual cues can help (e.g., さ "sa" looks like a fishhook –
                                "catching salmon").</v-list-item>
                            <v-list-item>Flashcards: Great for testing recognition.</v-list-item>
                            <v-list-item>Apps and games: Make it interactive!</v-list-item>
                            <v-list-item>Read children’s books: Most are written in Hiragana.</v-list-item>
                        </v-alert>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
const characters = ref([
    { character: ['あ (a)', 'い (i)', 'う (u)', 'え (e)', 'お(o)'] },
    { character: ['か (ka)', 'き (ki)', 'く (ku)', 'け (ke)', 'こ (ko)'] },
    { character: ['さ (sa)', 'し (shi)', 'す (su)', 'せ (se)', 'そ (so)'] },
    { character: ['た (ta)', 'ち (chi)', 'つ (tsu)', 'て (te)', 'と (to)'] },
    { character: ['な (na)', 'に (ni)', 'ぬ (nu)', 'ね (ne)', 'の (no)'] },
    { character: ['は (ha)', 'ひ (hi)', 'ふ (fu)', 'へ (he)', 'ほ (ho)'] },
    { character: ['ま (ma)', 'み (mi)', 'む (mu)', 'め (me)', 'も (mo)'] },
    { character: ['ら (ra)', 'り (ri)', 'る (ru)', 'れ (re)', 'ろ (ro)'] },
    { character: ['や (ya)', '-', 'ゆ (yu)', '-', 'よ(yo)'] },
    { character: ['わ (wa)', '-', '-', '-', 'を (wo)'] },
    { character: ['ん (n)', '-', '-', '-', '-'] },
])
const dakuten = ref([
    { character: ['が (ga)', 'ぎ (gi)', 'ぐ (gu)', 'げ (ge)', 'ご (go)'] },
    { character: ['ざ (za)', 'じ (ji)', 'ず (zu)', 'ぜ (ze)', 'ぞ (zo)'] },
    { character: ['だ (da)', 'ぢ (ji)', 'づ (zu)', 'で (de)', 'ど (do)'] },
    { character: ['ば (ba)', 'び (bi)', 'ぶ (bu)', 'べ (be)', 'ぼ (bo)'] },
    { character: ['ぱ (pa)', 'ぴ (pi)', 'ぷ (pu)', 'ぺ (pe)', 'ぽ (po)'] }
])
const yoonCharacters = ref([
    { character: ['きゃ (kya)', 'きゅ (kyu)', 'きょ (kyo)'] },
    { character: ['ぎゃ (gya)', 'ぎゅ (gyu)', 'ぎょ (gyo)'] },
    { character: ['しゃ (sha)', 'しゅ (shu)', 'しょ (sho)'] },
    { character: ['じゃ (ja)', 'じゅ (ju)', 'じょ (jo)'] },
    { character: ['ちゃ (cha)', 'ちゅ (chu)', 'ちょ (cho)'] },
    { character: ['にゃ (nya)', 'にゅ (nyu)', 'にょ (nyo)'] },
    { character: ['ひゃ (hya)', 'ひゅ (hyu)', 'ひょ (hyo)'] },
    { character: ['びゃ (bya)', 'びゅ (byu)', 'びょ (byo)'] },
    { character: ['ぴゃ (pya)', 'ぴゅ (pyu)', 'ぴょ (pyo)'] },
    { character: ['みゃ (mya)', 'みゅ (myu)', 'みょ (myo)'] },
    { character: ['りゃ (rya)', 'りゅ (ryu)', 'りょ (ryo)'] }
])
</script>