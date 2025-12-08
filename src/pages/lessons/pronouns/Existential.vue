<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold">Existential Pronouns</h4>
                <p> To say somewhere or anywhere, add the particle か ka right after the question word どこ doko. </p>
                <p>You can use the same method with other question words, such as だれ dare (who). The fol
                    lowing table provides some examples. The particles が ga and を o are usually deleted after such
                    existential pronouns.</p>
                <v-table>
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>Japanese</th>
                            <th>Romaji</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="x in data">
                            <td><b>{{ x.english }}</b></td>
                            <td>{{ x.japanese }}</td>
                            <td>{{ x.romaji }}</td>
                            <td>
                                <ul v-for="i in x.example">
                                    <li>{{ i.japanese }} / {{ i.english }}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold">Negative Pronouns</h4>
                <p> If you are going nowhere, add も mo after どこに doko ni and make the verb negative. </p>
                <v-table>
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>Japanese</th>
                            <th>Romaji</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="x in data">
                            <td><b>{{ x.english }}</b></td>
                            <td>{{ x.japanese }}</td>
                            <td>{{ x.romaji }}</td>
                            <td>
                                <ul v-for="i in x.example">
                                    <li>{{ i.japanese }} / {{ i.english }}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const data = [
    {
        english: 'someone / anyone', japanese: 'だれか', romaji: 'dareka', example: [
            { japanese: 'だれかと一緒にしますか。', english: 'Will (you) do (it) together with someone?' },
            { japanese: 'だれか来ますか。', english: 'Will someone come?' },
        ]
    },
    {
        english: 'somewhere/anywhere', japanese: 'どこか', romaji: 'dokoka', example: [
            { japanese: 'どこかに行きますか。', english: 'Will you go somewhere?' },
        ]
    },
    {
        english: 'something/anything', japanese: '何か', romaji: 'nanika', example: [
            { japanese: '何かと合います。', english: ' (It) will suit with something. ' },
            { japanese: '何か買いますか。', english: '  Will you buy something? ' },
        ]
    }
]
const negative = [
    {
        english: 'no one (not . . . anyone)', japanese: 'だれ . . . も', romaji: 'dare . . . mo', example: [
            { japanese: 'だれとも話しません。', english: '(He) does not talk with anyone.' },
            { japanese: 'だれも来ません。', english: 'No one will come.' },
        ]
    },
    {
        english: 'nowhere (not . . . anywhere)', japanese: 'どこ . . . も', romaji: 'doko . . . mo', example: [
            { japanese: 'どこにも行きません。', english: 'I will not go anywhere.' },
        ]
    },
    {
        english: 'nothing (not . . . anything)', japanese: '何 . . . も', romaji: 'nani . . . mo', example: [
            { japanese: '何とも合いません。', english: '(It) does not suit with anything. ' },
            { japanese: '何も買いません。', english: '(I) will not buy anything. ' },
        ]
    }
]
</script>