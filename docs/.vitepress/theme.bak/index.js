import Layout from './Layout.vue';
import Foo from '../components/Foo.vue'

const theme = {
    Layout,
    NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
        app.component('Foo', Foo)
    }
};
export default theme;
