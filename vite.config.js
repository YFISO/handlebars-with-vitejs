import handlebars from 'vite-plugin-handlebars';
import data from './data.json';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input : {
        main: 'index.html',
        bootstrap: 'index-bootstrap.html',
        materialize: 'materialize.html'
      }
    },
  },
  base : 'responsive-webpages',
  plugins: [handlebars({
    context : {
        /*
        previous setup here
        */
        data   // add this
    }
  })],
});
