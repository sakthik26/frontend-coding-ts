import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

//use it

const app = createApp(App)
app.use(Toast)
initializeRouter(app)

app.mount('#app')
