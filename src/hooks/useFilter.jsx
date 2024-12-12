export const useFilter = (searchTerm, array) => {
  const filterResult = array?.filter((element) => {
    const lowerSearchTerm = searchTerm.toLowerCase() 
    const titleMatch = element.title?.toLowerCase().includes(lowerSearchTerm)
    const descriptionMatch = element.description?.toLowerCase()
      .includes(lowerSearchTerm)
    const description_Match = element.description_?.toLowerCase()
      .includes(lowerSearchTerm)
    const button_textMatch = element.button_text?.toLowerCase()
      .includes(lowerSearchTerm)
    const spanMatch = element.span?.toLowerCase().includes(lowerSearchTerm)
    return (
      titleMatch ||
      descriptionMatch ||
      description_Match ||
      button_textMatch ||
      spanMatch
    )
  })
  return filterResult
}
