<template>
  <div class="bg-white w-full m-4 p-4">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="tab1" :tab="t('business.data.personal.group.title')">
        <Group />
      </TabPane>
      <TabPane key="tab2" :tab="t('business.data.personal.list.title')" force-render>
        <List />
      </TabPane>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
  import Group from '/@/views/dashboard/data/personal/group/Group.vue';
  import { TabPane, Tabs } from 'ant-design-vue';
  import List from '/@/views/dashboard/data/personal/list/List.vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';

  const { t } = useI18n();
  const activeKey = ref('tab1');
</script>

<style scoped lang="less"></style>
