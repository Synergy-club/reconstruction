import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const notFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('../')
    }, 300)
    return
  }, [navigate])
}

export default notFound
