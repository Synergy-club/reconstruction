import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const notFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('../')
    }, 300)
    return () => clearTimeout(timeout)
  }, [navigate])
}

export default notFound
