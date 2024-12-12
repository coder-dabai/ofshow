export default [
  {
    key: 'Input',
    name: '单行输入',
    icon: 'input.svg',
    type: 'Input',
    options: {
      label: '单行输入',
      placeholder: '请输入',
      defaultValue: '',
      width: '100%',
    },
  },
  {
    key: 'Textarea',
    name: '多行输入',
    icon: 'textArea.svg',
    type: 'Textarea',
    options: {
      label: '多行输入',
      placeholder: '请输入',
      defaultValue: '',
      width: '100%',
    },
  },
  {
    key: 'Select',
    name: '下拉选择',
    icon: 'select.svg',
    type: 'Select',
    options: {
      label: '下拉选择',
      placeholder: '请选择',
      defaultValue: undefined,
      style: { width: '100%' },
    },
  },
];