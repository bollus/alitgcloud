<template>
  <div class="mt-10">
    <Button size="small" color="primary" class="mr-1">{{
      t('business.account.archive.action.import')
    }}</Button>
    <Button size="small" class="mr-1">{{ t('business.account.archive.action.export') }}</Button>
    <Button size="small" color="success" class="mr-4">{{
      t('business.account.archive.action.enable')
    }}</Button>
    <Dropdown :trigger="['click']">
      <template #overlay>
        <Menu>
          <MenuItem key="1"
            ><Icon icon="ep:sell" />{{ t('business.account.archive.action.sale') }}</MenuItem
          >
          <MenuItem key="2"
            ><Icon icon="ep:sold-out" />{{
              t('business.account.archive.action.cancelSale')
            }}</MenuItem
          >
        </Menu>
      </template>
      <Button class="mr-1" size="small" color="primary">
        <Icon icon="bx:purchase-tag" />
        {{ t('business.account.archive.action.accountSale') }}
        <DownOutlined />
      </Button>
    </Dropdown>
    <Button size="small" color="warning" class="mr-1">{{
      t('business.account.archive.action.transferGroup')
    }}</Button>
    <Button size="small" color="primary" class="mr-4">{{
      t('business.account.archive.action.transferAccount')
    }}</Button>
    <Button size="small" color="error" class="mr-4">
      <DeleteOutlined />
      {{ t('business.account.archive.action.batchDelete') }}</Button
    >
    <span class="mr-2"
      ><Select style="width: 183px" :placeholder="t('business.account.archive.action.country')"
    /></span>
    <span class="mr-2">
      <Select style="width: 183px" :placeholder="t('business.account.archive.action.price')" />
    </span>
    <Button size="small" class="mr-1" color="primary">
      <SearchOutlined />{{ t('business.account.archive.action.queryOld') }}</Button
    >
    <Button size="small" color="success">
      <ShoppingCartOutlined />{{ t('business.account.archive.action.bulkPurchase') }}</Button
    >
  </div>
</template>
<script setup lang="ts">
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import {
    DownOutlined,
    DeleteOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons-vue';
  import { Dropdown, Menu, MenuItem, Select } from 'ant-design-vue';
  import Icon from '/@/components/Icon/src/Icon.vue';

  const { t } = useI18n();
</script>

<style scoped lang="less"></style>
