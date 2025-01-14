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
}

const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
)

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [onMobileMenu, setOnMobileMenu] = useState<boolean>(false)
  const [selectedNavbarMenu, setSelectedNavbarMenu] = useState<string>('')

  return (
    <NavigationContext.Provider
      value={{
        onMobileMenu,
        setOnMobileMenu,
        selectedNavbarMenu,
        setSelectedNavbarMenu
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigation = (): INavigationContext => {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}

export { NavigationProvider, useNavigation }
