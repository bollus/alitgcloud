<template>
  <Form layout="inline">
    <FormItem :labelCol="{ span: 6 }" :label="t('business.data.personal.list.search.content')">
      <Input
        v-model:content="content"
        :placeholder="t('business.data.personal.list.search.contentInput')"
      />
    </FormItem>
    <FormItem>
      <Select
        style="width: 183px"
        v-model:group="group"
        :placeholder="t('business.data.personal.list.search.group')"
      />
    </FormItem>
    <Button class="mr-4" type="submit">
      <SearchOutlined />
      {{ t('business.data.personal.list.search.search') }}
    </Button>
    <Button class="mr-4" type="button">
      <Icon display="contents" icon="material-symbols:forms-add-on-rounded" />
      {{ t('business.data.personal.list.search.insert') }}
    </Button>
    <Button color="success" type="button">
      {{ t('business.data.personal.list.search.import') }}
    </Button>
  </Form>
</template>
<script setup lang="ts">
  import { Form, FormItem, Input, Select } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { Icon } from '/@/components/Icon';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';

  const { t } = useI18n();
  const content = ref('');
  const group = ref('');
</script>

<style scoped lang="less"></style>
