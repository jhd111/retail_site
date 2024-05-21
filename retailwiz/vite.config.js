import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     '/api':'http://5.189.157.38:4000/retailService.asmx?WSDL'
  //   }
  // },
  plugins: [react()],
})
