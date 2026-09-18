import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './custom.css'
import { initHud } from './hud.js'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      initHud()
    })
  }
}
