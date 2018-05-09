import { storiesOf } from '@storybook/vue'
import AppButton from '../parts/app-button.vue'

storiesOf('app-button', module)
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
