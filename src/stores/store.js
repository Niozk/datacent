import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    const isPasswordCorrect = ref(false);

    return { isPasswordCorrect }
})
