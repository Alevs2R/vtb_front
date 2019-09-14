<template>
    <div class="event-item-layout">
        <div class="event-item">
            <div class="event-item-title">
                {{event.title}}
            </div>
            <div class="event-item-status" :style="{ 'color': getStatusColor }">
                {{getStatus}}
            </div>
            <div class="event-item-time">
                {{timeLeft}}
                <div class="event-item-timelabel">{{getTimeText}}</div>
            </div>
            <div class="event-item-stat">
                <div>
                    <img :src="group_icon" />
                    {{event.user_count}}
                </div>
                <div>
                    <img :src="attachment_icon" />
                    {{event.file_count}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import group_icon from '../assets/group.svg'
  import attachment_icon from '../assets/attachment.svg';

  export default {
    name: "roomItem",
    props: ['event'],
    data: function() {
      return {
        timeLeft: this.getTime(),
        group_icon,
        attachment_icon
      };
    },
    computed: {

      getStatus() {
        return (this.event.actual) ? 'голосование идет' : 'голосование закончено'
      },

      getStatusColor() {
        return (this.event.actual) ? '#3da917' : 'black'
      },

      getTimeText() {
        const nowTime = Date.now();
        if (nowTime < this.event.start_time) return 'время на принятие решения';
        if (this.event.actual && nowTime < this.event.end_time) return 'времени до конца';
        return ''
      },

    },

    methods: {
      updateTimeLeft() {
        this.timeLeft = this.getTime();
      },
      getTime() {
        const nowTime = Date.now();

        if (this.event.actual) {
          return moment(this.event.end_time - nowTime).format('HH:mm:s');
        } else {
          if (nowTime < this.event.start_time)
            return `${moment(this.event.start_time).format('HH:mm')}-${moment(this.event.end_time).format('HH:mm:s')}`;
          else return ''
        }
      },
    },
    mounted() {
      this.timer = setInterval(() => {
        this.updateTimeLeft();
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }

</script>

<style lang="scss" scoped>
    @import "../css/main";

    .event-item {
        background: white;
        border-radius: 5px;
        padding: 15px 20px;
        overflow: hidden;
        font-size: 16px;

        &-title {
            font-size: 22px;
        }

        &-layout {
            width: 100%;
            cursor: pointer;
            background: $main-color;
            border-radius: 5px;
            margin-bottom: 20px;
            padding-top: 5px;
        }
        &-time {
            font-size: 20px;
            margin: 15px 0;
        }
        &-timelabel {
            font-size: 16px;
        }
        &-stat {
            display: flex;
            flex-direction: row;
            color: $gray-color;
            img {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
            &>div {
                margin-right: 2em;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
</style>
