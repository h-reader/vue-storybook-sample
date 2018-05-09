import { storiesOf } from '@storybook/vue'
import Button from '../parts/app-button.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }));
