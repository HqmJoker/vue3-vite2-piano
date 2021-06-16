<template>
 <div class="messageBox" :class="{ 'messgae-error' :showTips }">{{ messageText }}</div>
  <div class="song-name">
    <span>选择歌名：</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
  <p class="game-intr">
    游戏介绍：
    使用键盘上的S~L键操作钢琴白键,E,R,Y,U,I操作钢琴黑键，也可以通过鼠标点击来弹奏钢琴。可通过快捷键V键控制琴键上数字的显示与隐藏。目前只支持四首歌曲，晴天，最长的电影，同桌的你，送别。
  </p>
  <ul class="piano">
    <li class="white-btn"><span class="white-value">1</span><p class="black-btn"></p></li>
    <li class="white-btn"><span class="white-value">2</span><p class="black-btn"></p></li>
    <li class="white-btn"><span class="white-value">3</span></li>
    <li class="white-btn"><span class="white-value">4</span><p class="black-btn"></p></li>
    <li class="white-btn"><span class="white-value">5</span><p class="black-btn"></p></li>
    <li class="white-btn"><span class="white-value">6</span><p class="black-btn"></p></li>
    <li class="white-btn"><span class="white-value">7</span></li>
    <li class="white-btn"><span class="white-value">8</span></li>
  </ul>
  <el-button class="start" @click="start">开始</el-button>
</template>

<script>
  import { songObj } from '@/assets/data/index.js'

  export default {
    data() {
      return {
        options: [
          { value: 'qingtian', label: '晴天' },
          { value: 'zuichangdedianying', label: '最长的电影' },
          { value: 'tongzhuodeni', label: '同桌的你' },
          { value: 'songbie', label: '送别' }
        ],
        value: '',
        showTips: false, // 是否显示消息框
        messageText: '', // 消息框文本
      }
    },
    mounted() {
    },
    methods: {
      // 开始演奏
      start() {
        if(!this.value) {
          this.showMessage('请选择歌名！');
          return;
        }
        const lyric = songObj[this.value];
        console.log(lyric);
      },
      // 显示消息提示
      showMessage(msg) {
        this.messageText = msg;
        console.log(msg)
        this.showTips = true;
        let timer = setTimeout(() => {
          this.showTips = false;
          clearTimeout(timer);
        }, 2000)
      },
    },
  }
</script>

<style lang="scss" scoped>

.song-name, .game-intr, .piano {
  width: 480px;
  margin: 0 auto 20px;
}
.piano {
  height: 360px;
  display: flex;
  .white-btn {
    position: relative;
    width: 60px;
    height: 100%;
    background: rgba(255,255,255,.3);
		border: 1px solid rgba(0, 0, 0, .8);
		border-bottom-left-radius : 8px;
		border-bottom-right-radius: 8px;
		box-sizing: border-box;
		box-shadow: inset 5px -8px  0  #00000023;
    cursor: pointer;
    .white-value {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .black-btn {
      height: 200px;
      width: 40px;
      background-color: #000;
      border-bottom-left-radius : 5.5px;
      border-bottom-right-radius: 5.5px;
      box-shadow: inset 5px -7px 0 #2c2c2c;
      position: absolute;
      top:0;
      left: 40px;
      z-index: 999;
      &:hover {
        background: linear-gradient(45deg, #4c4c4c, #444444);
      }
    }
    .black-btn-down {
      box-shadow:inset 3px -5px 0 #2c2c2c;
    }
  }
  .white-down {
		box-shadow: inset 3px -2px  0  #00000036;
		background: linear-gradient(45deg, rgba(255,255,255,.7), rgba(255,255,255,.5));
	}
  .next-btn {
		background: rgb(255, 97, 97) !important;
	}
}
.messageBox {
  position: fixed;
  top: 0;
  left: 50%;
  width: 30%;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  transform: translate(-50%, -100%);
  z-index: 99;
  transition: transform 0.2s linear;
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
  border-radius: 5px;
}
.messgae-error {
  margin-top: 10px;
  transform: translate(-50%, 0);
}
</style>

