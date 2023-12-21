<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 8 }" :label="t('business.data.proxy.proxyGroup.search.group')">
      <Input
        :placeholder="t('business.data.proxy.proxyGroup.search.groupInput')"
        v-model:group="group"
      />
    </FormItem>
    <Button class="mr-4" type="submit">
      <SearchOutlined />
      {{ t('business.data.proxy.proxyGroup.search.search') }}
    </Button>
    <Button class="mr-4" type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.data.proxy.proxyGroup.search.insert') }}
    </Button>
    <Button color="error"
      ><DeleteOutlined />{{ t('business.data.proxy.proxyGroup.search.batchDelete') }}</Button
    >
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { DeleteOutlined, SearchOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';
  import { ref } from 'vue';

  const { t } = useI18n();
  const group = ref('');
</script>

<style scoped lang="less"></style>
