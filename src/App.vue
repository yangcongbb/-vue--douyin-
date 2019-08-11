<template>
  <div class="mian_container">
    <div class="van_swipe">
      <van-swipe vertical style="height: 100%">
        <van-swipe-item v-for="(item,index) in videos" :key="index">
          <div class="videos-container">
            <button class="follow"></button>
            <button class="followed" v-on:click="followed(item,index)">
              <img class="followedimg" src="./assets/follow.png" v-if="videos[index].follow ==false">
              <img class="followedimg" src="./assets/followed.png" v-if="videos[index].follow ==true">
            </button>
            <button id="likebtn" class="like" v-on:click="like(item,index)">
              <img class="likeimg" src="./assets/like.png" v-if="videos[index].islike == false">
              <img class="likeimg" src="./assets/liked.png" v-if="videos[index].islike ==true">
            </button>
            <van-button class="commen" type="primary" @click="commen(item,index)"></van-button>
            <van-popup class="commensList" v-model="videos[index].commens">
              <div class="commens">
                网站维护中，暂时无法获取。
              </div>
              <button class="cancel_commes" v-on:click="cancelCommens(item,index)">取消</button>
            </van-popup>
            <button class="share" v-on:click="Share(item,index)"></button>
                    <div class="share_hover" v-show="videos[index].showShareBox"></div>
                    <div class="share_box" v-show="videos[index].showShareBox">
                          <div class="share_tips">分享到</div>
                          <div class="share_ul">
                                    <button class="share_weixin" @click="weixin()"></button>
                                    <button class="share_pengyouquan" @click="pengyouquan()"></button>            
                                    <button class="share_lianjie" @click="copyUrl()"></button>
                            </div>
                          <div class="share_cancel" v-on:click="cancelShare(item,index)">取消</div>
                      </div>
            <button class="playbutton" v-on:click="playVdo(item,index)"></button>
            <img src="./assets/playbutton.png" class="playimg" v-show="videos[index].count">
            <video close-on-click-overlay width="100%" height="100%" webkit-playsinline="true"
              x5-video-player-type="h5-page" v-bind:poster="item.cover" x5-video-player-fullscreen="true"
              x-webkit-airplay="true" x5-webkit-airplay="allow" x5-video-orientation="portrait" style="object-fit:fill;"
              type="video/mp4" id="video" class="video" v-bind:src="item.url" loop="loop" preload="auto"></video>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    Swipe,
    SwipeItem
  } from 'vant';
  import Popup from "vant";
  Vue.use(Popup);
  Vue.use(Swipe).use(SwipeItem);

  export default {
    name: 'App',
    data() {
      return {
        isVideoShow: true,
        videos: [{
            url: require('./assets/1.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster1.jpg'),
          },
          {
            url: require('./assets/2.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster2.jpg'),
          },
          {
            url: require('./assets/3.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster3.jpg'),
          },
          {
            url: require('./assets/4.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster4.jpg'),
          },
          {
            url: require('./assets/5.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster5.jpg'),
          },
          {
            url: require('./assets/6.mp4'),
            count: true,
            islike: false,
            follow: false,
            commens: false,
            showShareBox: false,
            cover: require('./assets/poster6.jpg'),
          }
        ]
      }
    },
    components: {
      Swipe,
      SwipeItem,
      Popup
    },
    methods: {
      playVdo: function (item, index) {
        var vdo = document.querySelectorAll("video")[index];
        if (vdo.paused) {
          vdo.play();
          this.videos[index].count = false
        } else if (this.current += this.current) {
          vdo.pause();
          this.videos[index].count = true
        } else {
          vdo.pause();
          this.videos[index].count = true
        }
        console.log(this.videos[index].count)
      },
      like: function (item, index) {
        this.videos[index].islike = !this.videos[index].islike
        console.log(this.videos[index].islike)
      },
      followed: function (item, index) {
        this.videos[index].follow = !this.videos[index].follow
        console.log(this.videos[index].follow)
      },
      commen(item, index) {
        this.videos[index].commens = true;
      },
      cancelCommens(item, index) {
        this.videos[index].commens = false;
      },
      Share(item, index) {
        this.videos[index].showShareBox = true;
      },
      cancelShare(item, index) {
        this.videos[index].showShareBox = false
      },
      copyUrl(item, index) {
        let httpUrl = window.location.href;
        var oInput = document.createElement('input');
        oInput.value = httpUrl;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        alert("链接复制成功")
      },
      weixin() {
        alert("维护中，暂时无法操作。")
      },
      pengyouquan() {
        alert("维护中，暂时无法操作。")
      }
    }
  }

</script>

<style>
  .van_swipe {
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .commens {
    width: 100%;
    height: 30%
  }

  .video {
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    position: absolute;
    z-index: 3;
  }

  .videos-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
  }

  .commensList {
    z-index: 7;
    position: absolute;
    overflow: hidden;
    color: red;
    width: 100%;
    background-color: white;
  }

  .cancel_commes {
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    text-align: center;
    width: 100%;
    border-top: outset;
  }

  .share_hover {
    position: absolute;
    z-index: 8;
    background-color: #fff;
    height: 100%;
    width: 100%;
    opacity: 0;
    justify-content: center;
    filter: blur(2px);
  }

  .share_box {
    top: 40%;
    position: absolute;
    z-index: 8;
    background: #fff;
    border-radius: 50%;
    transition: .5s;
    box-shadow: 3px 3px 25px green;
    right: 10px;
    left: 10px;
  }

  .share_tips {
    z-index: 8;
    width: 100%;
    text-align: center;
    line-height: 38px;
    color: #333;
  }

  .share_ul {
    text-align: center;
  }

  .share_weixin {
    background-image: url("assets/wx.png");
    margin-left: 10%;
    margin-right: 10%;
    z-index: 8;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .share_pengyouquan {
    background-image: url("./assets/pyq.png");
    margin-left: 10%;
    margin-right: 10%;
    z-index: 8;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .share_lianjie {
    background-image: url("assets/lianjie.png");
    margin-left: 10%;
    margin-right: 10%;
    z-index: 8;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .share_li i {
    z-index: 8;
    font-size: 44px;
  }

  .share_cancel {
    z-index: 8;
    width: 100%;
    text-align: center;
    line-height: 38px;
    color: #333;
  }

  .pengyouquan {
    z-index: 8;
    color: #47D000;
  }

  .pengyouquan_li {
    z-index: 8;
    animation: rotating 8s linear infinit;
  }

  @keyframes rotating {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg)
    }
  }

  .weixin {
    z-index: 8;
    color: #20CA2E;
  }

  .lianjie {
    z-index: 8;
    color: #cdcdcd;
  }

  .share_active {
    z-index: 8;
    position: absolute;
    bottom: 0px;
  }

  .playbutton {
    width: 100%;
    height: 100%;
    opacity: 0;
    background-size: cover;
    justify-content: center;
    position: absolute;
    z-index: 5;
  }

  .playimg {
    left: 40%;
    top: 40%;
    width: 20%;
    height: 20%;
    opacity: 0.5;
    position: absolute;
    z-index: 4;
    animation: play 0.2s 0s 1;
  }

  @keyframes play {
    from {
      opacity: 0.5;
      width: 30%;
      height: 30%;
    }

    to {
      opacity: 0.5;
      width: 20%;
      height: 20%;
    }
  }

  #likebtn {
    top: 350px;
    right: 14px;
    position: absolute;
    z-index: 6;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
  }

  .likeimg {
    width: 50px;
    height: 50px;
    color: #f44;
    animation: Heart .5s ease-in-out 0s;
  }

  @keyframes Heart {
    0% {
      color: #f44;
      transform: scale(1);
    }

    25% {
      color: #fff;
      transform: scale(0);
    }

    80% {
      color: #f44;
      transform: scale(1.2);
    }

    100% {
      color: #f44;
      transform: scale(1);
    }
  }

  .follow {
    top: 260px;
    right: 10px;
    background-image: url("./assets/tx.png");
    position: absolute;
    z-index: 6;
    width: 50px;
    height: 50px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .followed {
    top: 300px;
    right: 30px;
    position: absolute;
    z-index: 6;
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  .followedimg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: follow .5s ease-in-out 0s;
  }

  @keyframes follow {
    0% {
      transform: rotate(-90deg);
      filter: blur(3px);
    }

    25% {
      transform: rotate(-180deg);
      filter: blur(3px);
    }

    80% {

      transform: rotate(-270deg);
    }

    100% {

      transform: rotate(-360deg);
      transform: scale(1);
    }
  }

  .commen {
    top: 430px;
    right: 14px;
    background-image: url("assets/commen.png");
    position: absolute;
    z-index: 6;
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
  }

  .commen:hover {
    width: 40px;
    height: 40px;
  }


  .share {
    top: 500px;
    right: 14px;
    background-image: url("assets/share.png");
    position: absolute;
    z-index: 6;
    width: 35px;
    height: 33px;
    background-color: transparent;
    background-size: cover;
    border: none;
    outline: none;
  }

  .share:hover {
    width: 40px;
    height: 40px;
  }

</style>
