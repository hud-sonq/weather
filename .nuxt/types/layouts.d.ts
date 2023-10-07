import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/hudsonx86/Desktop/_/PROGRAMZ/weather/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}