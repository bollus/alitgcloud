<template>
  <div class="bg-white w-full m-4 p-4">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="tab1" :tab="t('business.account.accountManage.title')">
        <AccountManage />
      </TabPane>
      <TabPane key="tab2" :tab="t('business.account.groupManage.title')" force-render>
        <GroupManage />
      </TabPane>
      <TabPane key="tab3" :tab="t('business.account.archive.title')">
        <Archive />
      </TabPane>
    </Tabs>
  </div>
</template>

<style scoped lang="less"></style>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import AccountManage from '/src/views/dashboard/account/components/accountManage/AccountManage.vue';
  import GroupManage from '/src/views/dashboard/account/components/groupManage/GroupManage.vue';
  import Archive from '/@/views/dashboard/account/components/archive/Archive.vue';

  const { t } = useI18n();
  const activeKey = ref('tab3');
</script>
