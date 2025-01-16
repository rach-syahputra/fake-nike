'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

interface ISearchContext {
  onSearch: boolean
  setOnSearch: Dispatch<SetStateAction<boolean>>
}

const SearchContext = createContext<ISearchContext | undefined>(undefined)

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [onSearch, setOnSearch] = useState<boolean>(false)

  useEffect(() => {
    if (onSearch) {
      // hide overvlow y scroll
      document.documentElement.style.overflowY = 'hidden'
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll'
    }
  }, [onSearch])

  return (
    <SearchContext.Provider value={{ onSearch, setOnSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = (): ISearchContext => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}

export { SearchProvider, useSearchContext }
