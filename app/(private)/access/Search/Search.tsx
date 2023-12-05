'use client'

import React, { useState } from 'react'

export const SearchLogic = ({ dummyData }: any): React.ReactElement => {
  const [filteredUser, setFiltered] = useState([])
  const [searchItem, setSearch] = useState('')

  const filtering = (e: any): void => {
    const filteredList = e.target.value
    setSearch(filteredList)

    if (searchItem.length > 1) {
      const filtered = dummyData.data.filter((item: any) => item.Name.toLowerCase().includes(searchItem.toLowerCase()))
      setFiltered(filtered)
    } else {
      setFiltered([])
    }
    console.log(filteredUser)
  }
  return (
      <>
          <input onChange={filtering}></input>
          {filteredUser.map((item) => { return <ul key={item.Name}>{item.Name}</ul> }
          )}
      </>
  )
}
