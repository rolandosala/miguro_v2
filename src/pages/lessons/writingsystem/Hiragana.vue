<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold mb-4">Introduction to Hiragana (ひらがな)</h4>
                <p class="mb-4">Hiragana is one of the three writing systems used in the Japanese language, alongside
                    Katakana
                    and
                    Kanji. It's often the first script Japanese children and new learners of the language are taught.
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
                        <v-card title="Hiragana Characters" flat>
                            <v-table title="table">
                                <tbody>
                                    <tr v-for="item in characters">
                                        <td v-for="char in item.character" :key="char" @click="toggleDialog(char)"
                                            class="cursor-pointer hover:bg-red-100">{{ char }}</td>
                                    </tr>
                                </tbody>
                            </v-table>

                        </v-card>
                        <v-card title="Dakuten Characters" flat>
                            <v-table title="table">
                                <tbody>
                                    <tr v-for="item in dakuten">
                                        <td v-for="char in item.character" :key="char" @click="toggleDialog(char)"
                                            class="cursor-pointer hover:bg-red-100">{{ char }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-card title="Yoon Characters" flat>
                            <v-table title="table">
                                <tbody>
                                    <tr v-for="item in yoonCharacters">
                                        <td v-for="char in item.character" :key="char" @click="toggleDialog(char)"
                                            class="cursor-pointer hover:bg-red-100">{{ char }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card>
                        <p>Note: ぢ (ji) and づ (zu) are rarely used and usually replaced with じ and ず, except in
                            certain native words or compounds.</p>
                        <v-alert icon="$vuetify" title="Tips for Learning Hiragana">
                            <v-list-item>Practice writing: Each character has a stroke order. Repetition helps
                                memorization.</v-list-item>
                            <v-list-item>Use mnemonics: Visual cues can help (e.g., さ "sa" looks like a fishhook –
                                "catching
                                samon").</v-list-item>
                            <v-list-item>Flashcards: Great for testing recognition.</v-list-item>
                            <v-list-item>Apps and games: Make it interactive!</v-list-item>
                            <v-list-item>Read children’s books: Most are written in Hiragana.</v-list-item>
                        </v-alert>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </v-container>


    <v-dialog v-model="dialog" max-width="400">
        <v-card class="pa-5">
            <v-card-title>Character Information</v-card-title>
            <v-row>
                <v-col cols="12" md="8" sm="6">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p class="text-h1 font-weight-bold text-center">{{ splitChar(selectedChar).kana }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                    Romaji:
                    <p class="text-h4">{{ splitChar(selectedChar).romaji }}</p>
                </v-col>
            </v-row>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref } from 'vue'
const dialog = ref(false)
const selectedChar = ref('')
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
const toggleDialog = (char) => {
    dialog.value = true
    selectedChar.value = char
}
const splitChar = (str) => {
    const match = str.match(/^(.+?)\s*\((.+)\)$/);
    if (match) {
        return { kana: match[1], romaji: match[2] };
    }
    return { kana: str, romaji: "" };
};
</script>