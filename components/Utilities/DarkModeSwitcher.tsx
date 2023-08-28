import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeSwitcher = (): JSX.Element => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => { currentTheme === 'dark' ? setTheme('light') : setTheme('dark') }}
        className="dur absolute top-0 h-12 w-6 z-50 m-0 cursor-pointer opacity-0"
      />
      { currentTheme === 'dark'
        ? <FaSun className={'fa-xl'} />
        : <FaMoon className={`fa-xl ${theme === 'dark' ? 'hidden' : 'visible'}`}/>
      }

    </div>
  )
}

export default DarkModeSwitcher
