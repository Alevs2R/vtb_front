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
                            :value="title"
                            @input="title = $event.target.value"
                            clear-button
                    ></f7-list-input>

                    <f7-list-input
                            label="Описание голосования"
                            type="textarea"
                            :value="description"
                            @input="description = $event.target.value"
                            placeholder="Введите описание повестки"
                            clear-button
                    ></f7-list-input>
                </f7-list>
                <div class="section-title" style="margin-top: -20px">Документы</div>
                <div class="myrow">
                    <div class="attachment" v-for="file in files">
                        <img :src="Attachment" />
                        {{file.name}}
                        <div class="attachment-cross" @click="delFile(file)">
                            <img :src="Multiply" />
                        </div>
                    </div>
                        <div class="light_button" style="width: 130px;position: relative;" @click="">
                            <input type="file" class="file" ref="file" @change="changeMaterial" />
                            Добавить
                        </div>

                </div>
                <div class="section-title">Вопросы</div>
                <div class="votings">

                    <f7-row>
                        <f7-col width="100" tablet-width="50" desktop-width="50">
                            <div class="voting" v-for="poll in listPolls">
                                <input
                                        type="text"
                                        placeholder="Ваш вопрос"
                                        class="myinput"
                                        @change="poll.title = $event.target.value"
                                />
                                <div style="font-size: 12px; margin: 20px 0 10px">Варианты ответа</div>
                                <CreateVoteOption
                                        v-for="answer in poll.answers"
                                        :key="answer.id"
                                        @change="setAnswer"
                                        @done="pushAnswersValue(poll.id, answer.id)"
                                />
                                <div class="light_button" style="width: 250px" @click="pushAnswers(poll)">Добавить вариант ответа</div>
                            </div>
                        </f7-col>
                        <f7-col width="100" tablet-width="50" desktop-width="50">
                            <div class="light_button" style="width: 200px;margin-top: 30px" @click="pushListPolls">Добавить вопрос</div>
                        </f7-col>
                    </f7-row>
                </div>
                <div style="padding: 15px;">
                    <div class="light_button" style="width: 200px" @click="peoplePopupOpened = true">Выбрать участников</div>
                </div>
                <f7-list no-hairlines-md>
                    <f7-list-input
                            label="Начало голосования"
                            type="text"
                            placeholder="Введите время"
                            :value="startTime"
                            @input="startTime = $event.target.value"
                            clear-button
                    ></f7-list-input>
                    <f7-list-input
                            label="Конец голосования"
                            type="text"
                            placeholder="Введите время"
                            :value="endTime"
                            @input="endTime = $event.target.value"
                            clear-button
                    ></f7-list-input>
                </f7-list>
                <div style="padding: 15px">
                <div class="main_button" @click="saveRoom">Сохранить голосование</div>
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
                        <f7-chip
                                v-for="chuser in changeUsers"
                                :key="chuser.id"
                                :text="getFullName(chuser.firstName, chuser.secondName)"
                                deleteable @click="deleteChip(chuser)"></f7-chip>
                    </f7-block>
                    <f7-block-title>Выберите из списка</f7-block-title>
                    <f7-list>
                        <f7-list-item v-for="user in users"
                                      link="#"
                                      :key="user.id"
                                      :title="getFullName(user.firstName, user.secondName)"
                                      :after="user.role"
                                      @click="changePersons(user)"
                        >
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
  import moment from 'moment'


  export default {
    components: { Navbar, CreateVoteOption },
    name: "createroom",
    data() {
      return {
        Attachment, Multiply,
        peoplePopupOpened: false,
        users: [],
        changeUsers: [],
        title: '',
        description: '',
        files:[],
        startTime: '',
        endTime: '',
        answer:'',
        listPolls: [{
          id: 1,
          title: '',
          answers:[{
            value:'',
            id: 1
          }]
        }]
      };
    },
    methods: {
      getFullName (firstName, secondName) {
        return `${firstName} ${secondName}`
      },

      changePersons(user) {
        if (!(this.changeUsers.map((item) =>item.id).indexOf(user.id)+1)) {
          this.changeUsers.push(user)
        }
      },
      deleteChip(user){
        const indexDel = this.changeUsers.map((item) =>item.id).indexOf(user.id)
        this.changeUsers.splice(indexDel,1)
      },
      changeMaterial() {
        this.files.push(this.$refs.file.files[0]);
        if (this.file && this.file.size / (1024 * 1024) > 10) {
          this.$f7.dialog.alert("Выберите файл до 10Мб", "Ошибка");
        }
      },

      delFile(file){
        const indexDel = this.files.map((item) =>item.name).indexOf(file.name)
        this.files.splice(indexDel,1)
      },

      setAnswer(value) {
        this.answer = value
      },

      pushListPolls () {

        this.listPolls.push({
          id: this.listPolls[this.listPolls.length-1].id + 1,
          title: '',
          answers:[{
            value:'',
            id: 1,
          }]
        })
      },

      pushAnswers(poll) {
        let item = this.listPolls.map((item) =>item.id).indexOf(poll.id);
        let arrayList = this.listPolls[item].answers
        arrayList.push({
          value: '',
          id: arrayList[arrayList.length-1].id + 1
        })
        this.listPolls = arrayList;
      },

      pushAnswersValue(pollId, answerId) {
        let item = this.listPolls.map((item) => item.id).indexOf(pollId)
        let arrayList = this.listPolls[item].answers
        arrayList[answerId] = this.answer
        this.listPolls[item].answers = arrayList
        console.log(this.listPolls)
      },

      uploadFiles() {
        let material = new FormData();
        material.append("files", this.files)
        this.$store.dispatch('uploadFiles', material)
      },

      saveRoom() {
        if (!this.title && !this.startTime && !this.endTime ) {
          var toastCenter = this.$f7.toast.create({
            text: "Заполните все поля",
            position: "center",
            closeTimeout: 1000
          });
          toastCenter.open();
        }
        this.$store.dispatch('savePolls', {
          usrs: this.changeUsers,
          title: this.title,
          description: this.description,
          listPolls: this.listPolls,
          start_time: moment().hour(this.startTime).valueOf(),
          end_time: moment().hour(this.endTime).valueOf()
        })
          .then(()=>{
            this.uploadFiles()
            this.$f7router.back();
          })
          .catch(()=>{
            var toastCenter = this.$f7.toast.create({
              text: "Проблемы с подключением к интернету",
              position: "center",
              closeTimeout: 1000
            });
            toastCenter.open();
          })
      }
    },
    created() {
       this.$store.dispatch('getUsers')
         .then((data) => {
           this.users = data
         })
    }
  };
</script>

<style lang="scss" scoped>
    @import '../css/main';

    .container {
        max-width: 1100px;
        margin: 30px auto 20px;
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
        margin-bottom: 10px;
    }

    .myinput {
        font-size: 18px;
        width: 100%!important;
    }

    .file {
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

</style>
