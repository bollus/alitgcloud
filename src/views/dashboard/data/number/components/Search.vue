<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.data.phoneData.search.group')">
      <Input v-model:group="group" :placeholder="t('business.data.phoneData.search.groupInput')" />
    </FormItem>
    <Button class="mr-4" type="submit"
      ><SearchOutlined />{{ t('business.data.phoneData.search.search') }}</Button
    >
    <Button class="mr-4" type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.data.phoneData.search.insert') }}
    </Button>
    <Button type="button" color="primary">
      <ShoppingCartOutlined />
      {{ t('business.data.proxy.proxyList.search.purchase') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Icon } from '/@/components/Icon';
  import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';

  const { t } = useI18n();
  const group = ref('');
</script>

<style scoped lang="less"></style>
