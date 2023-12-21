<template>
  <Form layout="inline">
    <FormItem>
      <Select
        style="width: 183px"
        v-model:group="group"
        :placeholder="t('business.data.proxy.proxyList.search.group')"
      />
    </FormItem>
    <Button class="mr-4" type="submit"
      ><SearchOutlined />{{ t('business.data.proxy.proxyList.search.search') }}</Button
    >
    <Button class="mr-4" type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.data.proxy.proxyList.search.insert') }}
    </Button>
    <Button class="mr-4" type="button">
      {{ t('business.data.proxy.proxyList.search.import') }}
    </Button>
    <Button class="mr-4" type="button">
      {{ t('business.data.proxy.proxyList.search.export') }}
    </Button>
    <Button class="mr-4" color="success" type="button">
      <ShoppingCartOutlined />
      {{ t('business.data.proxy.proxyList.search.purchase') }}
    </Button>
    <Button color="error"
      ><DeleteOutlined />{{ t('business.data.proxy.proxyList.search.batchDelete') }}</Button
    >
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Select } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { Icon } from '/@/components/Icon';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { DeleteOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';

  const { t } = useI18n();
  const group = ref('');
</script>

<style scoped lang="less"></style>
