<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { basicProps } from './props';

  defineProps({
    // eslint-disable-next-line vue/valid-define-props
    ...basicProps,
  });
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

  onMounted(() => {
    setOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '11/14',
          '11/15',
          '11/16',
          '11/17',
          '11/18',
          '11/19',
          '11/20',
          '11/21',
          '11/22',
          '11/23',
          '11/24',
          '11/25',
          '11/26',
          '11/27',
          '11/28',
          '11/29',
          '11/30',
          '12/01',
          '12/02',
          '12/03',
          '12/04',
          '12/05',
          '12/06',
          '12/07',
          '12/08',
          '12/09',
          '12/10',
          '12/11',
          '12/12',
          '12/13',
        ],
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: 'rgba(226,226,226,0.5)',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          type: 'value',
          max: 200,
          splitNumber: 4,
          axisTick: {
            show: false,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)'],
            },
          },
        },
      ],
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      series: [
        {
          name: '消息数',
          smooth: true,
          data: [
            45, 12, 76, 23, 56, 89, 33, 67, 10, 44, 78, 90, 11, 55, 88, 32, 75, 9, 67, 22, 46, 84,
            18, 51, 79, 6, 39, 63, 28, 52,
          ],
          type: 'line',
          areaStyle: {},
          itemStyle: {
            color: '#5ab1ef',
          },
        },
        {
          name: '好友数',
          smooth: true,
          data: [
            25, 8, 45, 15, 38, 64, 21, 55, 7, 32, 58, 72, 10, 43, 70, 23, 63, 6, 55, 18, 36, 78, 14,
            42, 68, 4, 28, 49, 15, 49,
          ],
          type: 'line',
          areaStyle: {},
          itemStyle: {
            color: '#019680',
          },
        },
      ],
    });
  });
</script>
