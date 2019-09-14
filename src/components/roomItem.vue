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
        if (this.event.actual) {
          const startTime = moment()
          const endTime  = moment(this.event.end_time);
          return moment(startTime.diff(endTime, 'minutes')).format('HH:mm:s');
        } else {
            
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import "../css/main";

    .event-item {
        background: white;
        height: 200px;
        border-radius: 5px;
        margin-top: 5px;
        padding: 10px;
        overflow: hidden;

        &-title {
            font-size: 18px;
        }

        &-layout {
            width: 100%;
            cursor: pointer;
            height: 205px;
            background: $main-color;
            border-radius: 5px;
            margin-bottom: 5px;
        }
    }
</style>
