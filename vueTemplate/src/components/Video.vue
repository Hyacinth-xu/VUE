<style scoped lang="less">
.video-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  width: 100%;
  position: relative;
}
.play-mark {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: skyblue;
  background: url("../assets/imgs/icon/play.png") no-repeat center;
  background-size: 60px 60px;
}
</style>

<template>
  <div>
    <div class="video-wrap" @click="goBack">
      <div class="video"  @click.stop="play">
      <div class="play-mark" v-show="showPlayBtn"></div>
      <video
        ref="video"
        :src="data.playUrl"
        :poster="data.videoImage"
        autoplay
        preload
        width="100%"
      ></video>
        <!-- :width="data.width"
        :height="data.height" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",

  props: {},

  data() {
    return {
      showPlayBtn: false,
      data: {}
    };
  },

  computed: {},

  watch: {},

  created() {
    this.data = JSON.parse(this.$route.query.data) 
  },

  mounted() {
    this.$refs.video.onended = () => {
      this.showPlayBtn = true;
    };
  },

  methods: {
    play() {
      if (this.showPlayBtn) {
        this.$refs.video.play();
        this.showPlayBtn = false;
      } else {
        this.$refs.video.pause();
        this.showPlayBtn = true;
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>
