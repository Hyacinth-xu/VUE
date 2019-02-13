<style scoped lang="less">
.share-page {
  font-size: 14px;
  padding-bottom: 50px;
}

.open-app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 12px;
  margin-bottom: 10px;
  background-color: #333;
  color: #fff;

  .right {
    display: flex;

    .pic-wrap {
      margin-right: 6px;

      img {
        width: 38px;
        height: 38px;
        border-radius: 8px;
      }
    }
    .header-pic {
      width: 100px;

      img {
        width: 100%;
      }
    }

    .name {
      line-height: 20px;
      font-size: 14px;
      letter-spacing: 0.09px;
    }

    .invite-code {
      line-height: 18px;
      font-size: 12px;
    }
  }

  .left {
    width: 68px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #ff8e9c;
    border-radius: 4px;
  }
}

.main-content {
  background-color: #fff;
  padding: 10px 10px 0;
  margin: 0 10px;
  border-radius: 10px;
  margin-bottom: 85px;

  .header-wrap {
    // height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .person-info {
      display: flex;

      .pic-wrap {
        position: relative;
        width: 40px;
        height: 40px;
        // background-color: #ff8e9c;
        margin-right: 8px;

        .header-img {
          width: 100%;
          border-radius: 50%;
        }

        .header-icon {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      .name {
        font-size: 14px;
        color: #666666;
        letter-spacing: 0.3px;
        line-height: 20px;
        margin-bottom: 2px;
      }

      .publish-time {
        font-size: 11px;
        color: #b5b5b5;
        letter-spacing: 0.24px;
        line-height: 16px;
      }
    }

    .not-attention {
      width: 48px;
      height: 21px;
      text-align: center;
      font-size: 12px;
      line-height: 21px;
      color: #ff8e9c;
      border: 1px #ff8e9c solid;
      border-radius: 30px;
    }

    .attention {
      font-size: 12px;
      color: #b5b5b5;
      letter-spacing: 0;
    }
  }

  .text-content {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.4px;
  }

  .text-more {
    line-height: 21px;
    font-size: 15px;
    color: #af5152;
    letter-spacing: 0.32px;
    margin-top: 5px;
  }

  .img-list {
    overflow: hidden;

    .img-item {
      float: left;
      width: calc(33.3% - 4px);
      // width: 107px;
      // max-width: 107px;
      // height: 107px;
      margin: 6px 6px 0 0;
      border-radius: 8px;
      overflow: hidden;

      .banner-img {
        // width: 100%;
        display: block;
        width: 108px;
        height: 108px;
      }
    }

    .img-item:nth-child(3n) {
      margin-right: 0;
    }
  }

  .product-info {
    display: flex;
    align-items: center;
    height: 64px;
    background: #f8f8f8;
    border-radius: 6px;
    padding: 6px;
    margin-top: 8px;

    .product-img-wrap {
      width: 52px;
      height: 52px;
      margin-right: 8px;

      .product-img {
        display: block;
        width: 100%;
        border-radius: 6px;
      }
    }

    .tit {
      line-height: 20px;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0.6px;
    }

    .price {
      line-height: 20px;
      font-weight: bold;
      font-size: 14px;
      color: #ff8e9c;
      letter-spacing: 0.6px;
      margin-top: 2px;
    }
  }

  .focus {
    font-size: 13px;
    line-height: 18px;
    color: #303030;
    letter-spacing: 0;
    padding: 17px 10px;
    text-align: right;

    // .good {
    //   margin-right: 30px;
    // }

    .focus-amount {
      margin-left: 30px;
    }
  }
}

.video-img-wrap {
  position: relative;
  margin-top: 6px;
  // background-color: pink;
  .video-img {
    width: 100%;
    display: block;
    border-radius: 6px;
  }
  .play-mark {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: skyblue;
    background: url("../../assets/imgs/icon/play.png") no-repeat center;
    background-size: 30px 30px;
  }
}

.footer {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  height: 49px;
  width: 100%;
  max-width: 768px;
  border-top: 1px #e5e5e5 solid;
  background-color: #fff;
  padding: 10px 0 9px;

  .footer-item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    .icon {
      width: 21px;
      height: 21px;
      vertical-align: middle;
      margin-right: 8px;
    }

    .is-like {
      color: #ff8e9c;
    }
  }

  .footer-item {
    border-right: #e5e5e5 2px solid;
  }
  .footer-item:last-child {
    border: none;
  }
}

.share-mark {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: right;

  img {
    width: 235px;
    height: 100px;
    margin: 10px 7px 0 0;
  }
}
</style>

<template>
  <div class="share-page">
    <transition name="fade">
      <div class="loading-mark" v-show="loading">
        <van-loading color="white" size="100px"/>
      </div>
    </transition>
    <div class="open-app" v-show="!loading">
      <div class="right">
        <div class="pic-wrap">
          <img class="header-pic" :src="userInfo.headImageUrl" alt>
        </div>
        <div class="name-wrap">
          <p class="name">{{userInfo.nickName}}</p>
          <p class="invite-code">邀请码: {{userInfo.shopCode}}</p>
        </div>
      </div>
      <div class="left" @click="openApp">打开APP</div>
    </div>

    <div class="main-content" v-show="!loading">
      <div class="header-wrap">
        <div class="person-info">
          <div class="pic-wrap">
            <img class="header-img" :src="info.headImageUrl || info.materialUserAvatar" alt>
            <img
              class="header-icon"
              src="../../assets/imgs/icon/vip.png"
              alt
              v-if="info.userRole == 2 || info.userRole == 3"
            >
            <img
              class="header-icon"
              src="../../assets/imgs/icon/major.png"
              alt
              v-if="info.userRole == 4"
            >
            <img
              class="header-icon"
              src="../../assets/imgs/icon/partner.png"
              alt
              v-if="info.userRole == 5"
            >
          </div>
          <div class="name-wrap">
            <p class="name">{{info.nickName || info.materialUserName}}</p>
            <p class="publish-time">{{info.viewTime}}</p>
          </div>
        </div>
        <div
          class="not-attention"
          @click="addFocus"
          v-show="materialType === '-1' && info.focus !== 1"
        >关注</div>
        <div class="attention" v-show="materialType === '-1' && info.focus === 1" @click="cancelFocus">已关注</div>
      </div>
      <div class="text-content">{{textContent}}</div>
      <p class="text-more" v-show="showMore" @click="showMoreHandle">全文</p>
      <p class="text-more" v-show="showPackup" @click="packUpHandle">收起</p>
      <ul class="img-list" v-show="info.mediaType === 'image'">
        <li class="img-item" v-for="(item, index) in imgList" :key="index" @click="showPic(index)">
          <img :src="item" alt class="banner-img">
        </li>
      </ul>
      <div
        class="video-img-wrap"
        ref="videoImg"
        v-show="info.mediaType === 'video'"
        @click="showVideo"
      >
        <div class="play-mark"></div>
        <img class="video-img" :src="videoInfo.videoImage" alt>
      </div>
      <div class="product-info" v-if="materialType === '-1' && info.price" @click="goGoods">
        <div class="product-img-wrap">
          <img class="product-img" :src="info.goodsImg" alt>
        </div>
        <div class="desc">
          <p class="tit">{{info.goodsName}}</p>
          <p class="price">¥{{info.price}}</p>
        </div>
      </div>
      <div class="focus">
        <span class="good">{{info.likeCount}}人点赞</span>
        <span class="focus-amount" v-if="materialType === '-1'">{{info.focusCount}}人关注</span>
      </div>
    </div>

    <div class="footer">
      <div class="footer-item" v-show="info.islike !== 1" @click="addLike">
        <img src="../../assets/imgs/icon/like.png" class="icon" alt>
        <span>{{info.likeCount}}</span>
      </div>
      <div class="footer-item" v-show="info.islike=== 1" @click="canelLike">
        <img src="../../assets/imgs/icon/like_active.png" class="icon" alt>
        <span class="is-like">{{info.likeCount}}</span>
      </div>
      <div class="footer-item" @click="share">
        <img src="../../assets/imgs/icon/transpond.png" class="icon" alt>
        <span>{{info.shareCount}}</span>
      </div>
    </div>
    <div class="share-mark" @touchmove.prevent v-show="wxShare" @click="hideShare">
      <img src="../../assets/imgs/wx-share.png" alt>
    </div>
  </div>
</template>

<script>
import { queryShopCode, getDetail, getDetailUniversity } from "@/api/";
import { ImagePreview } from "vant";
import { downAppFun, jumpProductDetails } from "@/untils/common.js";
import { WX_SHARE } from "@/untils/wxUntils.js";
export default {
  data() {
    return {
      loading: false,
      wxShare: false,
      materialType: "", // -1 素材入口; 1 2 3姿美大学入口
      textLimit: 81,
      materialsId: "",
      shareUserId: "",
      userInfo: {
        headImageUrl: ""
      },
      info: {
        headImageUrl: "",
        content: ""
      },
      imgList: [],
      videoInfo: {},
      textContent: ""
    };
  },

  computed: {
    showMore() {
      return (
        this.info.content.length > this.textLimit &&
        this.textContent.length < this.textLimit + 3
      );
    },
    showPackup() {
      return (
        this.info.content.length > this.textLimit &&
        this.textContent.length >= this.textLimit + 3
      );
    }
  },

  created() {
    this.materialType = this.$route.query.materialType + "";
    this.shareUserId = this.$route.query.shareUserId;
    this.materialsId = this.$route.query.materialsId;

    // this.materialType = "-1";
    // this.materialsId = "2084"; // 2092图片 2093视频横 2084竖屏
    // this.shareUserId = "U633960";

    this.init();
  },

  mounted() {},

  methods: {
    init() {
      this.loading = true;
      queryShopCode({ userId: this.shareUserId }).then(res => {
        if (res.tag === 0) {
          this.userInfo = res.data.result;
        }
      });
      if (this.materialType === "-1") {
        let params = {
          materialsId: this.materialsId
        };
        getDetail(params).then(res => {
          this.loading = false;
          if (res.tag === 0) {
            this.info = res.data.result.materialsList[0];
            this.textContent =
              this.info.content.length > this.textLimit
                ? this.info.content.slice(0, this.textLimit - 1) + "..."
                : this.info.content;
            if (this.info.mediaType === "image") {
              let imgs = this.info.media ? JSON.parse(this.info.media) : [];
              imgs.forEach(item => {
                this.imgList.push(item.url);
              });
            } else if (this.info.mediaType === "video") {
              this.videoInfo = this.info.media
                ? JSON.parse(this.info.media)
                : {};

              this.$refs.videoImg.style.width =
                this.videoInfo.width / 300 + "rem";
              this.$refs.videoImg.style.height =
                this.videoInfo.height / 300 + "rem";
            }

            // 注册分享
            this.initShare();
          }
        });
      } else {
        let params = {
          Id: this.materialsId,
          materialType: this.materialType
        };

        getDetailUniversity(params).then(res => {
          this.loading = false;
          if (res.tag === 0) {
            this.info = res.data.result[0];
            this.textContent =
              this.info.content.length > this.textLimit
                ? this.info.content.slice(0, this.textLimit - 1) + "..."
                : this.info.content;
            if (this.info.mediaType === "image") {
              let imgs = this.info.media ? JSON.parse(this.info.media) : [];
              imgs.forEach(item => {
                this.imgList.push(item.url);
              });
            } else if (this.info.mediaType === "video") {
              this.videoInfo = this.info.media
                ? JSON.parse(this.info.media)
                : {};

              this.$refs.videoImg.style.width =
                this.videoInfo.width / 100 + "rem";
              this.$refs.videoImg.style.height =
                this.videoInfo.height / 100 + "rem";
            }

            // 注册分享
            this.initShare();
          }
        });
      }
    },

    // 打开app
    openApp() {
      downAppFun();
    },

    // 预览图片
    showPic(index) {
      ImagePreview({
        images: this.imgList,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },

    // 播放视频
    showVideo() {
      this.$router.push({
        name: "Video",
        query: {
          data: this.info.media
        }
      });
    },

    // 查看更多
    showMoreHandle() {
      this.textContent = this.info.content;
    },

    // 收起
    packUpHandle() {
      this.textContent = this.info.content.slice(0, this.textLimit - 1) + "...";
    },

    // 添加关注
    addFocus() {
      this.$set(this.info, "focus", 1);
      this.$set(this.info, "focusCount", ++this.info.focusCount);
    },
    cancelFocus() {
      this.$set(this.info, "focus", 0);
      this.$set(this.info, "focusCount", --this.info.focusCount);
    },

    // 点赞
    addLike() {
      this.$set(this.info, "islike", 1);
      this.$set(this.info, "likeCount", ++this.info.likeCount);
    },
    // 取消点赞
    canelLike() {
      this.$set(this.info, "islike", 0);
      this.$set(this.info, "likeCount", --this.info.likeCount);
    },

    // 查看商品
    goGoods() {
      jumpProductDetails(
        this.info.goodsCode +
          "&shareUserId=" +
          this.shareUserId +
          "&shareShopCode=" +
          this.userInfo.shopCode
      );
    },

    // 分享
    share() {
      this.wxShare = true;
    },
    hideShare() {
      this.wxShare = false;
    },
    initShare() {
      console.log("注册分享");
      WX_SHARE({
        materialsId: this.materialsId,
        desc: this.info.content
      });
    }
  }
};
</script>
