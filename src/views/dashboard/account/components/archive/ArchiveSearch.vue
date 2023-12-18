<template>
  <Form layout="inline">
    <FormItem>
      <Input
        v-model:nickname="nickname"
        :placeholder="t('business.account.archive.search.nickname')"
      />
    </FormItem>
    <FormItem>
      <Input v-model:phone="phone" :placeholder="t('business.account.archive.search.phone')" />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:group="group"
        :placeholder="t('business.account.archive.search.group')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:customerService="customerService"
        :placeholder="t('business.account.archive.search.customerService')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:accountStatus="accountStatus"
        :placeholder="t('business.account.archive.search.accountStatus')"
      >
        <SelectOption value="all">
          {{ t('business.account.archive.search.all') }}
        </SelectOption>
        <SelectOption value="normal">
          {{ t('business.account.archive.search.normal') }}
        </SelectOption>
        <SelectOption value="irregular">
          {{ t('business.account.archive.search.irregular') }}
        </SelectOption>
        <SelectOption value="banned">
          {{ t('business.account.archive.search.banned') }}
        </SelectOption>
        <SelectOption value="frequently">
          {{ t('business.account.archive.search.frequently') }}
        </SelectOption>
        <SelectOption value="sale">
          {{ t('business.account.archive.search.sale') }}
        </SelectOption>
      </Select>
    </FormItem>
    <Button type="submit">
      <SearchOutlined />
      {{ t('business.account.archive.search.search') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input, Select, SelectOption } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Button } from '/@/components/Button';
  import { ref } from 'vue';

  const { t } = useI18n();
  const nickname = ref('');
  const phone = ref('');
  const group = ref('');
  const customerService = ref('');
  const accountStatus = ref('');
</script>

<style scoped lang="less"></style>
