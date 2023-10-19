import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import App from './App.vue'
// import App from './components/Test.vue'
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App)
app.use(PrimeVue);
app.use(DialogService);
app.use(ConfirmationService);
app.mount('#app');

