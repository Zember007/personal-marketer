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
import SearchInput from './components/ui/SearchInput.vue'


app
    .component('TextInput', TextInput)
    .component('RadioInput', RadioInput)
    .component('CheckInput', RadioInput)
    .component('PhoneInput', PhoneInput)
    .component('SelectInput', SelectInput)
    .component('PrimaryButton', PrimaryButton)
    .component('SecondaryButton', SecondaryButton)
    .component('CheckInput', CheckInput)
    .component('SearchInput', SearchInput)


// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// import 'simplebar/dist/simplebar.css';

// // You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
// import ResizeObserver from 'resize-observer-polyfill';
// window.ResizeObserver = ResizeObserver;


