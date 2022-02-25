import useTheme from '@/hooks/useTheme'

import Button from '../atoms/Button'

import clsx from 'clsx'
import { HiMoon, HiSun } from 'react-icons/hi'

const DarkMode: React.FC = () => {
  const { theme, mounted, changeTheme } = useTheme()

  if (!mounted) return null

  return (
    <Button
      className={clsx(
        'accessible relative',
        'h-10 md:text-xl',
        'aspect-square rounded-xl',
        'bg-primary-100 dark:bg-theme-800'
      )}
      onClick={changeTheme}
    >
      {theme === 'light' ? <HiMoon className='text-primary-700' /> : <HiSun className='text-yellow-400' />}
      <span className='sr-only'>Switch Theme</span>
    </Button>
  )
}

export default DarkMode
