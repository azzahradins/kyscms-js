import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeSwitcher = ({ className }: { className?: string }): JSX.Element => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className={`dur ${className ?? 'z-50 cursor-pointer'}`}>
      <input
        type="checkbox"
        onChange={() => { currentTheme === 'dark' ? setTheme('light') : setTheme('dark') }}
        className={'absolute h-7 w-6 opacity-0'}
      />
      { currentTheme === 'dark'
        ? <FaSun className={'fa-xl'} />
        : <FaMoon className={`fa-xl ${theme === 'dark' ? 'hidden' : 'visible'}`}/>
      }

    </div>
  )
}

export default DarkModeSwitcher
