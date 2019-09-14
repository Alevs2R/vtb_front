<template>
    <div class="event-item-layout">
        <div class="event-item">
            <div class="event-item-title">
                {{event.title}}
            </div>
            <div class="event-item-status">
                {{getStatus}}
            </div>
            <div class="event-item-time">
                {{getTime}}
            </div>
            <div>
                <div>
                    <i class="f7-icons" style="padding-right: 10px;color: #797979;cursor:pointer;">persons</i>
                    {{event.user_count}}
                </div>
                <div>
                    <i class="f7-icons" style="padding-right: 10px;color: #797979;cursor:pointer;">attachment</i>
                    {{event.file_count}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "roomItem",
    props: ['event'],

    computed: {

      getStatus() {
        return (this.event.actual) ? 'голосование идет' : 'голосование закончено'
      },

      getTime() {
        const startTime  = moment(this.event.start_time);
        const endTime  = moment(this.event.end_time);
        const nowTime = moment()

        if (this.event.actual) {
          return moment(nowTime.diff(endTime, 'minutes')).format('HH:mm:s');
        } else {
          if (startTime.isAfter(nowTime))
            return `${startTime.format('HH:mm')}-${endTime.format('HH:mm')}`;
          else return ''
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import "../css/main";

    .event-item {
        background: white;
        border-radius: 5px;
        padding: 10px;
        overflow: hidden;

        &-title {
            font-size: 18px;
        }

        &-layout {
            width: 100%;
            cursor: pointer;
            background: $main-color;
            border-radius: 5px;
            margin-bottom: 20px;
            padding-top: 5px;
        }
    }
</style>
