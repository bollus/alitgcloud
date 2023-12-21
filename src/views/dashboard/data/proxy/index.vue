<template>
  <div class="bg-white w-full m-4 p-4">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="tab1" :tab="t('business.data.proxy.proxyList.title')">
        <List />
      </TabPane>
      <TabPane key="tab2" :tab="t('business.data.proxy.proxyGroup.title')" force-render>
        <Group />
      </TabPane>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
  import List from '/@/views/dashboard/data/proxy/proxyList/List.vue';
  import { TabPane, Tabs } from 'ant-design-vue';
  import { ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import Group from '/@/views/dashboard/data/proxy/proxyGroup/Group.vue';

  const { t } = useI18n();
  const activeKey = ref('tab1');
</script>

<style scoped lang="less"></style>
