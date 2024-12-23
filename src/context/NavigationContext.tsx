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
}

const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
)

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [onMobileMenu, setOnMobileMenu] = useState<boolean>(false)

  return (
    <NavigationContext.Provider value={{ onMobileMenu, setOnMobileMenu }}>
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
