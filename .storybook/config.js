import { addDecorator, configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'CCR Storybook',
  showAddonPanel: false,
})

configure(() => require('../src/stories'), module)
