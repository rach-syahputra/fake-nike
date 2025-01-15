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
  selectedNavbarMenu: string
  setSelectedNavbarMenu: Dispatch<SetStateAction<string>>
  showNavbar: boolean
  setShowNavbar: Dispatch<SetStateAction<boolean>>
}

const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
)

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [onMobileMenu, setOnMobileMenu] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(true)
  const [selectedNavbarMenu, setSelectedNavbarMenu] = useState<string>('')

  return (
    <NavigationContext.Provider
      value={{
        onMobileMenu,
        setOnMobileMenu,
        selectedNavbarMenu,
        setSelectedNavbarMenu,
        showNavbar,
        setShowNavbar
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
