<template>
  <view class="content">
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="chartData" />
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from  "vue-property-decorator";
@Component
export default class Index extends Vue {
  title = "Hello"

  chartData = {
    categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
    series: [{
      name: "目标值",
      data: [35, 36, 31, 33, 13, 34]
    }, {
      name: "完成量",
      data: [18, 27, 21, 24, 6, 28]
    }]
  }

  onLoad() {}

}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.charts-box {
  width: 400px;
  height: 400px;
}

</style>
