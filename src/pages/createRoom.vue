<template>
    <f7-page class="board-page">
        <navbar></navbar>
        <div class="container">
            <h1 style="font-weight: normal; margin-left: 15px">Создание голосования</h1>
            <f7-list no-hairlines-md>
                <f7-list-input
                        label="Название голосования"
                        type="text"
                        placeholder="Введите название"
                        clear-button
                ></f7-list-input>

                <f7-list-input
                        label="Описание повестки"
                        type="textarea"
                        placeholder="Введите описание повестки"
                        clear-button
                ></f7-list-input>
            </f7-list>
            <div class="section-title" style="margin-top: -20px">Документы</div>
            <div class="myrow">
                <div class="attachment">
                    <img :src="Attachment" />
                    PSW_web-track.pdf
                    <div class="attachment-cross">
                        <img :src="Multiply" />
                    </div>
                </div>
                <div class="attachment">
                    <img :src="Attachment" />
                    Критерии оценки.doc
                    <div class="attachment-cross">
                        <img :src="Multiply" />
                    </div>
                </div>
                <div class="light_button" style="width: 130px" @click="">Добавить</div>
            </div>
            <div class="section-title">Вопросы</div>
            <div class="votings">

                <f7-row>
                    <f7-col width="100" tablet-width="50" desktop-width="50">
                        <div class="voting">
                            <f7-input
                                    type="text"
                                    placeholder="Ваш вопрос"
                                    clear-button
                                    size="18"
                            ></f7-input>
                            <div style="font-size: 12px; margin: 20px 0 10px">Варианты ответа</div>
                            <CreateVoteOption />
                            <CreateVoteOption />
                            <CreateVoteOption />
                            <div class="light_button" style="width: 250px" @click="">Добавить вариант ответа</div>
                        </div>
                    </f7-col>
                </f7-row>
            </div>
        </div>
    </f7-page>
</template>

<script>
  import Navbar from "../components/navbar";
  import Attachment from "../assets/attachment.svg";
  import Multiply from "../assets/multiply.svg";
  import CreateVoteOption from "../components/CreateVoteOption";


  export default {
    components: { Navbar, CreateVoteOption },
    name: "create room",
    data() {
      return {
        Attachment, Multiply
      };
    },
    created() {
      // this.$store.dispatch('getRoom', {
      //   id: this.$f7route.params.roomId,
      // })
    }
  };
</script>

<style lang="scss" scoped>
    @import '../css/main';

    .container {
        max-width: 1100px;
        margin: 30px auto 0;
        background: white;
        border-radius: 5px;
        overflow: hidden;
    }

    .section-title {
        font-size: 12px;
        padding-left: 15px;
    }

    .attachment {
        background: $light-grey-color;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        padding: 10px;
        position: relative;
        margin-right: 20px;
        margin-bottom: 20px;
        & > img {
            width: 18px;
            height: 18px;
            margin-right: 10px;
        }

        &-cross {
            position: absolute;
            right: -10px;
            top: -10px;
            background: $gray-color;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            cursor: pointer;
            img {
                width: 12px;
                height: 12px;
            }
        }
    }

    .myrow {
        padding: 0 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 15px 0;
        flex-wrap: wrap;
    }

    .votings {
        margin: 15px;
    }

    .voting {
        border-radius: 5px;
        border: 1px solid #DCDBDB;
        padding: 20px 15px;
    }
</style>
