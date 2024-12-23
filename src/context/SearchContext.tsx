'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ISearchContext {
  onSearch: boolean
  setOnSearch: Dispatch<SetStateAction<boolean>>
}

const SearchContext = createContext<ISearchContext | undefined>(undefined)

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [onSearch, setOnSearch] = useState<boolean>(false)

  return (
    <SearchContext.Provider value={{ onSearch, setOnSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = (): ISearchContext => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

export { SearchProvider, useSearch }
