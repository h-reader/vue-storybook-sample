import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

import AppButton from '../parts/app-button.vue'

storiesOf('Usage button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      sizeとcolorの一覧
      size: minimum, small, normal, large, full
      color: default, primary, success, info, warning, danger, dark
    `
  )(() => {
    const ButtonText = text('text', 'default')
    const sizeOptions = {
      minimum: 'minimum',
      small: 'small',
      normal: 'normal',
      large: 'large',
      full: 'full',
    };
    const size = select('size', sizeOptions, 'large', 'sizeGroup')
    const colorOptions = {
      default: 'default',
      primary: 'primary',
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger',
      dark: 'dark',
    };
    const color = select('color', colorOptions, 'default', 'colorGroup')
    const disabled = boolean('disabled', false, 'disabledGroup');
    return {
      components: { AppButton },
      template: `<app-button text="${ButtonText}" size="${size}" kind="${color}" :btn-disabled="${disabled}" />`
    }
  }))

  storiesOf('Button', module)
  .add('default', () => ({
    components: { AppButton },
    template: `<app-button text="default" />`
  }))
  .add('color', () => ({
    components: { AppButton },
    template: `
      <div style="display: flex;">
        <app-button text='primary' kind='primary'/>
        <app-button text='default' kind='default'/>
        <app-button text='success' kind='success'/>
        <app-button text='info' kind='info'/>
        <app-button text='warning' kind='warning'/>
        <app-button text='danger' kind='danger'/>
        <app-button text='dark' kind='dark'/>
      </div>
    `
  }))
  .add('size', () => ({
    components: { AppButton },
    template: `
      <div>
        <div style="display: flex;">
          <app-button text='minimum' kind='primary' size="minimum"/>
          <app-button text='small' kind='primary' size="small"/>
          <app-button text='normal' kind='primary' size="normal"/>
          <app-button text='large' kind='primary' size="large"/>
        </div>
        <div style="display:flex;"><app-button text='full' kind='primary' size="full"/></div>
      </div>
      `
  }))
