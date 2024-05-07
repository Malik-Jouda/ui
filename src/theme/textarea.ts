export default (config: { colors: string[] }) => ({
  slots: {
    root: 'relative',
    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500'
  },
  variants: {
    size: {
      xs: {
        base: 'px-2 py-1 text-xs'
      },
      sm: {
        base: 'px-2.5 py-1.5 text-xs'
      },
      md: {
        base: 'px-2.5 py-1.5 text-sm'
      },
      lg: {
        base: 'px-3 py-2 text-sm'
      },
      xl: {
        base: 'px-3 py-2 text-base'
      }
    },
    variant: {
      outline: '',
      none: 'bg-transparent focus:ring-0 focus:shadow-none'
    },
    color: {
      ...Object.fromEntries(config.colors.map((color: string) => [color, ''])),
      white: '',
      gray: ''
    }
  },
  compoundVariants: [
    ...config.colors.map((color: string) => ({
      color,
      variant: 'outline',
      class: `shadow-sm bg-transparent text-gray-900 dark:text-white ring ring-inset ring-${color}-500 dark:ring-${color}-400 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400`
    })), {
      color: 'white',
      variant: 'outline',
      class: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
    }, {
      color: 'gray',
      variant: 'outline',
      class: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'white',
    variant: 'outline'
  }
})