import type { ToastProps } from '#ui/types'
import { useState } from '#imports'

export interface Toast extends Omit<ToastProps, 'defaultOpen'> {
  id: string | number
  click?: (toast: Toast) => void
}

export function useToast() {
  const toasts = useState<Toast[]>('toasts', () => [])

  function add(toast: Partial<Toast>): Toast {
    const body = {
      id: new Date().getTime().toString(),
      open: true,
      ...toast
    }

    const index = toasts.value.findIndex((t: Toast) => t.id === body.id)
    if (index === -1) {
      toasts.value.push(body)
    }

    toasts.value = toasts.value.slice(-5)

    return body
  }

  function update(id: string | number, toast: Partial<Toast>) {
    const index = toasts.value.findIndex((t: Toast) => t.id === id)
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        ...toast
      }
    }
  }

  function remove(id: string | number) {
    const index = toasts.value.findIndex((t: Toast) => t.id === id)
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index],
        open: false
      }
    }

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: Toast) => t.id !== id)
    }, 200)
  }

  return {
    toasts,
    add,
    update,
    remove
  }
}