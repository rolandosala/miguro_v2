<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold mb-4">What is Katakana (カタカナ)?</h4>
                <p class="mb-4">Katakana is one of the three writing systems used in Japanese, alongside Hiragana (ひらがな)
                    and
                    Kanji (漢字). While Hiragana is used for native Japanese words and grammatical elements, Katakana is
                    primarily used for foreign words, names, loanwords (called gairaigo), and sometimes for emphasis —
                    similar to how we use italics or ALL CAPS in English.</p>
                <h5 class="text-h6 font-weight-bold">Why Learn Katakana?</h5>
                <label>If you want to read menus, follow signs in Japan, or understand pop culture references, knowing
                    Katakana is a must. Many modern Japanese words borrowed from English and other languages are written
                    in Katakana, such as:</label>
                <v-list density="compact">
                    <v-list-item>コンピューター (konpyūtā) – computer</v-list-item>
                    <v-list-item>アイスクリーム (aisu kurīmu) – ice cream</v-list-item>
                    <v-list-item>テレビ (terebi) – television</v-list-item>
                    <v-list-item>ジョン (Jon) – John</v-list-item>
                </v-list>

                <p>It’s also used in scientific terms, animal names, onomatopoeia, and branding.</p>
            </v-col>
            <v-col cols="12" md="12" sm="12">
                <v-row>
                    <v-col cols="12" md="6" sm="12">
                        <v-card title="Katakana Characters" flat>
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
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="12" sm="12">
                <h5 class="text-h6 font-weight-bold">Why Learn Katakana?</h5>
                <v-table title="table">
                    <tbody>
                        <tr v-for="item in otherCharacters">
                            <td class="cursor-pointer hover:bg-red-100">{{ item.character }}</td>
                            <td class="cursor-pointer hover:bg-red-100">{{ item.usage }}</td>
                        </tr>
                    </tbody>
                </v-table>
                <h5 class="text-h6 font-weight-bold">Common Mistakes to Watch Out For</h5>
                <v-list-item>Similar-looking characters: For example, シ (shi) vs ツ (tsu), or ソ (so) vs ン
                    (n).</v-list-item>
                <v-list-item>Over-relying on English pronunciation: Japanese loanwords often sound different than their
                    English counterparts.</v-list-item>
                <v-list-item>Example: “McDonald’s” becomes マクドナルド (Makudonarudo).</v-list-item>
                <p>Katakana is a powerful tool for reading and writing modern Japanese. It opens up a huge part of the
                    language — from everyday products to pop culture. Mastering Katakana early on will accelerate your
                    Japanese learning journey and make the language feel a lot more accessible.

                    Ready to dive in? Check out our [Katakana Practice Tools] and [Interactive Flashcards] to get
                    started!</p>
                <v-alert icon="$vuetify" title="Tips for Learning Katakana" class="mt-4">
                    <v-list-item v-for="(step, index) in tips" :key="index">
                        <template #prepend>
                            <strong>{{ index + 1 }}. </strong>
                        </template>
                        {{ step }}
                    </v-list-item>
                </v-alert>
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
    { character: ['ア (a)', 'イ (i)', 'ウ (u)', 'エ (e)', 'オ (o)'] },
    { character: ['カ (ka)', 'キ (ki)', 'ク (ku)', 'ケ (ke)', 'コ (ko)'] },
    { character: ['サ (sa)', 'シ (shi)', 'ス (su)', 'セ (se)', 'ソ (so)'] },
    { character: ['タ (ta)', 'チ (chi)', 'ツ (tsu)', 'テ (te)', 'ト (to)'] },
    { character: ['ナ (na)', 'ニ (ni)', 'ヌ (nu)', 'ネ (ne)', 'ノ (no)'] },
    { character: ['ハ (ha)', 'ヒ (hi)', 'フ (fu)', 'ヘ (he)', 'ホ (ho)'] },
    { character: ['マ (ma)', 'ミ (mi)', 'ム (mu)', 'メ (me)', 'モ (mo)'] },
    { character: ['ラ (ra)', 'リ (ri)', 'ル (ru)', 'レ (re)', 'ロ (ro)'] },
    { character: ['ヤ (ya)', '-', 'ユ (yu)', '-', 'ヨ (yo)'] },
    { character: ['ワ (wa)', '-', '-', '-', 'ヲ (wo)'] },
    { character: ['ん (n)', '-', '-', '-', '-'] },
])
const dakuten = ref([
    { character: ['ガ (ga)', 'ギ (gi)', 'グ (gu)', 'ゲ (ge)', 'ゴ (go)'] },
    { character: ['ザ (za)', 'ジ (ji)', 'ズ (zu)', 'ゼ (ze)', 'ゾ (zo)'] },
    { character: ['ダ (da)', 'ヂ (ji/di)', 'ヅ (zu/du)', 'デ (de)', 'ド (do)'] },
    { character: ['バ (ba)', 'ビ (bi)', 'ブ (bu)', 'ベ (be)', 'ボ (bo)'] },
    { character: ['パ (pa)', 'ピ (pi)', 'プ (pu)', 'ペ (pe)', 'ポ (po)'] },
])
const yoonCharacters = ref([
    { character: ['キャ (kya)', 'キュ (kyu)', 'キョ (kyo)'] },
    { character: ['ギャ (gya)', 'ギュ (gyu)', 'ギョ (gyo)'] },
    { character: ['シャ (sha)', 'シュ (shu)', 'ショ (sho)'] },
    { character: ['ジャ (ja)', 'ジュ (ju)', 'ジョ (jo)'] },
    { character: ['チャ (cha)', 'チュ (chu)', 'チョ (cho)'] },
    { character: ['ニャ (nya)', 'ニュ (nyu)', 'ニョ (nyo)'] },
    { character: ['ヒャ (hya)', 'ヒュ (hyu)', 'ヒョ (hyo)'] },
    { character: ['ビャ (bya)', 'ビュ (byu)', 'ビョ (byo)'] },
    { character: ['ピャ (pya)', 'ピュ (pyu)', 'ピョ (pyo)'] },
    { character: ['ミャ (mya)', 'ミュ (myu)', 'ミョ (myo)'] },
    { character: ['リャ (rya)', 'リュ (ryu)', 'リョ (ryo)'] },
])
const otherCharacters = ([
    { character: 'ー', usage: 'Long vowel mark (e.g., コーヒー "coffee")' },
    { character: 'ヴ', usage: '"V" sound, often used in foreign words (e.g., ヴァイオリン for "violin")' },
    { character: 'ヵ / ヶ', usage: 'Small versions of カ and ケ, used in counters and place names' },
    { character: 'ㇰ, ㇱ, etc.', usage: 'Rare small katakana for Ainu or linguistic use (not commonly used in standard Japanese)' },
])
const tips = [
    "Start with recognition – Learn to read and pronounce Katakana before worrying about writing it.",
    "Use flashcards or apps – Consistent repetition helps with memorization.",
    "Spot it in the wild – Katakana is everywhere in Japan. Try reading signs, menus, or packaging.",
    "Practice with real words – Learning words like コーヒー (coffee) and パン (bread) makes it more fun and practical.",
    "Compare with Hiragana – It’s useful to understand the difference and when each is used."
]
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