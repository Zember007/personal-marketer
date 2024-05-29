import { createApp } from 'vue'
import './style/global.css'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'



const app = createApp(App)

app.use(router)
    .use(VueTheMask)    
    .mount('#app')


// UI

import TextInput from './components/ui/TextInput.vue'
import RadioInput from './components/ui/RadioInput.vue'
import PhoneInput from './components/ui/PhoneInput.vue'
import SelectInput from './components/ui/SelectInput.vue'
import PrimaryButton from './components/ui/PrimaryButton.vue'
import SecondaryButton from './components/ui/SecondaryButton.vue'
import CheckInput from './components/ui/CheckInput.vue'


app
    .component('TextInput', TextInput)
    .component('CheckInput', RadioInput)
    .component('PhoneInput', PhoneInput)
    .component('SelectInput', SelectInput)
    .component('PrimaryButton', PrimaryButton)
    .component('SecondaryButton', SecondaryButton)
    .component('CheckInput', CheckInput)


