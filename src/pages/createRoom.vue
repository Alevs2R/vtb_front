<template>
    <f7-page class="board-page">
        <div>
            <navbar is-back></navbar>
            <div class="container">
                <h1 style="font-weight: normal; margin-left: 15px; margin-bottom: -10px">Создание голосования</h1>
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
                                <input
                                        type="text"
                                        placeholder="Ваш вопрос"
                                        class="myinput"
                                />
                                <div style="font-size: 12px; margin: 20px 0 10px">Варианты ответа</div>
                                <CreateVoteOption />
                                <CreateVoteOption />
                                <CreateVoteOption />
                                <div class="light_button" style="width: 250px" @click="">Добавить вариант ответа</div>
                            </div>
                        </f7-col>
                        <f7-col width="100" tablet-width="50" desktop-width="50">
                            <div class="light_button" style="width: 200px" @click="">Добавить вопрос</div>
                        </f7-col>
                    </f7-row>
                </div>
                <div style="padding: 15px;">
                    <div class="light_button" style="width: 200px" @click="">Выбрать участников</div>
                </div>

                <div style="padding: 15px">
                <div class="main_button" @click="">Сохранить голосование</div>
                </div>
            </div>
        </div>
        <f7-popup class="demo-popup" :opened="peoplePopupOpened" @popup:closed="peoplePopupOpened = false">
            <f7-page>
                <f7-navbar title="Выбор участников">
                    <f7-nav-right>
                        <f7-link popup-close>Закрыть</f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <f7-block>
                    <f7-block-title>Участники</f7-block-title>
                    <f7-block strong>
                        <f7-chip text="Example Chip" deleteable @click="deleteChip"></f7-chip>
                        <f7-chip text="Chris" media="C" media-bg-color="orange" text-color="black" deleteable @click="deleteChip"></f7-chip>
                        <f7-chip text="Jane Doe" deleteable @click="deleteChip">
                            <img slot="media" src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"/>
                        </f7-chip>
                        <f7-chip text="One More Chip" deleteable @click="deleteChip"></f7-chip>
                        <f7-chip text="Jennifer" media-bg-color="pink" media="J" deleteable @click="deleteChip"></f7-chip>
                        <f7-chip text="Adam Smith" deleteable @click="deleteChip">
                            <img slot="media" src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"/>
                        </f7-chip>
                    </f7-block>
                    <f7-block-title>Выберите из списка</f7-block-title>
                    <f7-list>
                        <f7-list-item link="#" title="Ivan Petrov" after="CEO">
                            <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
                        </f7-list-item>
                        <f7-list-item link="#" title="John Doe" after="Cleaner">
                            <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
                        </f7-list-item>
                        <f7-list-item link="#" title="Jenna Smith">
                            <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
                        </f7-list-item>
                    </f7-list>
                </f7-block>
            </f7-page>
        </f7-popup>
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
        Attachment, Multiply,
        peoplePopupOpened: true,
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

    .myinput {
        font-size: 18px;
        width: 100%!important;
    }

</style>
