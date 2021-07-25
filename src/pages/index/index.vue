<template>
    <scroll-view
      :scroll-top="scrollTop" 
      scroll-y="true" 
      class="index" 
      @scrolltoupper="upper" 
      @scrolltolower="lower"
      @scroll="scroll">
    <view>
      <view class="index-nav">
        <view
          class="index-nav-item"
          v-for="item of navItems"
          @click="goDetail"
          :key="item.code">
          <span>{{item.icon}}</span>
          <span>{{item.title}}</span>
        </view>
      </view>
      <view class="index-nav">
        <view
          class="index-nav-item"
          v-for="item of navItems" 
          :key="item.code">
          <span>{{item.icon}}</span>
          <span>{{item.title}}</span>
        </view>
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="uni-padding-wrap">
      <view class="page-section swiper">
        <view class="page-section-spacing">
          <swiper 
            class="swiper" 
            :indicator-dots="indicatorDots" 
            :autoplay="autoplay" 
            :interval="interval"
            :circular="circular"
            :duration="duration">
            <swiper-item>
              <view class="swiper-item uni-bg-red">A</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-green">B</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-blue">C</view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
    <view class="text-box" scroll-y="true">
      <text>新基金</text>
    </view>
    <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
    <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
    <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
  </scroll-view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { Getter } from 'vuex-class'

@Component
export default class Index extends Vue {
  @Getter('setting/setting')
  setting: any

  navItems: any = []
  background = ['color1', 'color2', 'color3']
  indicatorDots = true
  circular = true
  autoplay = true
  interval = 2000
  duration = 500

  scrollTop = 0
  old = {
    scrollTop: 0
  }
  onLoad() {
    console.log('ddd', this.setting)
    for (let i = 0; i < 4; i++) {
      this.navItems.push({
        code: i,
        icon: "icon" + i,
        title: "全部基金",
      });
    }
  }

  upper (e: any) {
    console.log(e)
  }

  lower (e: any) {
    console.log(e)
  }

  goDetail() {
    console.log('detail')
    uni.navigateTo({
      url: '/pages/detail/index?id=1&name=uniapp'
    });
  }

  scroll (e: any) {
    console.log(e)
    this.old.scrollTop = e.detail.scrollTop
  }
}
</script>

<style lang="less" scoped>
.index-nav {
  display: flex;
}
.index-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.uni-padding-wrap {
  width: 100%;
}
.swiper-item {
  height: 150rpx;
}
.page-section-spacing {
  height: 150rpx;
  padding: 0 20rpx;
}
.uni-bg-red {
  background: @red;
}
.uni-bg-green {
  background: @green;
}
.uni-bg-blue {
  background: @blue;
}

.index {
  height: 100%;
}

.scroll-view-item {
  height: 1000rpx;
  line-height:1000rpx;
  text-align: center;
  font-size: 72rpx;
}
</style>
