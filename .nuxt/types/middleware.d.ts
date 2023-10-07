import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/hudsonx86/Desktop/_/PROGRAMZ/weather/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}