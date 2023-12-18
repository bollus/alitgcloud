<template>
  <Form layout="inline">
    <FormItem aria-label="">
      <Input
        v-model:nickname="nickname"
        :placeholder="t('business.account.accountManage.search.nickname')"
      />
    </FormItem>
    <FormItem>
      <Input
        v-model:phone="phone"
        :placeholder="t('business.account.accountManage.search.phone')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:group="group"
        :placeholder="t('business.account.accountManage.search.group')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:customer="customer"
        :placeholder="t('business.account.accountManage.search.customerService')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:online="online"
        :placeholder="t('business.account.accountManage.search.onlineStatus')"
      >
        <SelectOption value="all">{{
          t('business.account.accountManage.search.all')
        }}</SelectOption>
        <SelectOption value="online">{{
          t('business.account.accountManage.search.online')
        }}</SelectOption>
        <SelectOption value="offline">{{
          t('business.account.accountManage.search.offline')
        }}</SelectOption>
      </Select>
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:status="status"
        :placeholder="t('business.account.accountManage.search.accountStatus')"
      >
        <SelectOption value="all">{{
          t('business.account.accountManage.search.all')
        }}</SelectOption>
        <SelectOption value="normal">{{
          t('business.account.accountManage.search.normal')
        }}</SelectOption>
        <SelectOption value="irregular">{{
          t('business.account.accountManage.search.irregular')
        }}</SelectOption>
        <SelectOption value="banned">{{
          t('business.account.accountManage.search.banned')
        }}</SelectOption>
        <SelectOption value="frequently">{{
          t('business.account.accountManage.search.frequently')
        }}</SelectOption>
        <SelectOption value="sale">{{
          t('business.account.accountManage.search.sale')
        }}</SelectOption>
      </Select>
    </FormItem>
    <Button type="submit"
      ><SearchOutlined />{{ t('business.account.accountManage.search.search') }}</Button
    >
  </Form>
</template>

<script setup lang="ts">
  import { Form, FormItem, Input, Select, SelectOption } from 'ant-design-vue';
  import { Button } from '/src/components/Button';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '/src/hooks/web/useI18n';
  import { ref } from 'vue';

  const { t } = useI18n();
  const nickname = ref('');
  const phone = ref('');
  const group = ref('');
  const customer = ref('');
  const online = ref('');
  const status = ref('');
</script>

<style scoped lang="less"></style>
