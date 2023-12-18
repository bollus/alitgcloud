<template>
  <div class="mt-10">
    <Button class="mr-4 mt-1 mb-1" size="small" color="warning">{{
      t('business.account.accountManage.action.archive')
    }}</Button>
    <Button class="mr-1 mt-1 mb-1" size="small" color="warning">{{
      t('business.account.accountManage.action.transferGroup')
    }}</Button>
    <Button class="mr-1 mt-1 mb-1" size="small" color="primary">{{
      t('business.account.accountManage.action.modifyInfo')
    }}</Button>
    <Button class="mr-1 mt-1 mb-1" size="small" color="warning">{{
      t('business.account.accountManage.action.batchStation')
    }}</Button>
    <Button class="mr-1 mt-1 mb-1" size="small" color="primary">{{
      t('business.account.accountManage.action.detectAccount')
    }}</Button>
    <Button class="mr-1 mt-1 mb-1" size="small" color="success">{{
      t('business.account.accountManage.action.online')
    }}</Button>
    <Button class="mr-4 mt-1 mb-1" size="small" color="error">{{
      t('business.account.accountManage.action.offline')
    }}</Button>
    <Dropdown :trigger="['click']">
      <template #overlay>
        <Menu>
          <MenuItem key="1">
            <SelectOutlined />{{ t('business.account.accountManage.action.assign') }}</MenuItem
          >
          <MenuItem danger key="2"
            ><DeleteOutlined />{{ t('business.account.accountManage.action.delete') }}</MenuItem
          >
        </Menu>
      </template>
      <Button class="mr-1" size="small" color="primary">
        <UserOutlined />{{ t('business.account.accountManage.action.assignCustomerService')
        }}<DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown :trigger="['click']">
      <template #overlay>
        <Menu>
          <MenuItem key="1"
            ><SelectOutlined />{{ t('business.account.accountManage.action.assign') }}</MenuItem
          >
          <MenuItem danger key="2"
            ><DeleteOutlined />{{ t('business.account.accountManage.action.delete') }}</MenuItem
          >
          <MenuItem type="primary" key="3"
            ><ShoppingCartOutlined />{{
              t('business.account.accountManage.action.purchase')
            }}</MenuItem
          >
        </Menu>
      </template>
      <Button class="mr-4" size="small" color="primary">
        <Icon icon="carbon:server-proxy" />
        Socks5
        <DownOutlined />
      </Button>
    </Dropdown>
    <Button class="mt-1 mb-1" size="small" color="error"
      ><DeleteOutlined />{{ t('business.account.accountManage.action.batchDelete') }}</Button
    >
  </div>
</template>

<script setup lang="ts">
  import { Button } from '/src/components/Button';
  import { Dropdown, Menu, MenuItem } from 'ant-design-vue';
  import {
    DownOutlined,
    UserOutlined,
    DeleteOutlined,
    SelectOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons-vue';
  import Icon from '/src/components/Icon/src/Icon.vue';
  import { useI18n } from '/src/hooks/web/useI18n';

  const { t } = useI18n();
</script>

<style scoped lang="less"></style>
