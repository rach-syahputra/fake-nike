'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface INavigationContext {
  onMobileMenu: boolean
  setOnMobileMenu: Dispatch<SetStateAction<boolean>>
  showNavbar: boolean
  setShowNavbar: Dispatch<SetStateAction<boolean>>
  showNavbarMenu: boolean
  setShowNavbarMenu: Dispatch<SetStateAction<boolean>>
}

const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
)

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [onMobileMenu, setOnMobileMenu] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const [showNavbarMenu, setShowNavbarMenu] = useState<boolean>(false)

  return (
    <NavigationContext.Provider
      value={{
        onMobileMenu,
        setOnMobileMenu,
        showNavbar,
        setShowNavbar,
        showNavbarMenu,
        setShowNavbarMenu
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigationContenxt = (): INavigationContext => {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error(
      'useNavigationContenxt must be used within a NavigationProvider'
    )
  }
  return context
}

export { NavigationProvider, useNavigationContenxt }
