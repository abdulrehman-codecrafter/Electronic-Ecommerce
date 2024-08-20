import React from 'react'
import Frontened from './Frontened'
import Auth from './Auth'
import Dashboard from './Dashoard'
import { Route,Routes } from 'react-router-dom'
export default function Index() {
  return (
    <Routes >
      <Route path="/*" element={<Frontened />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  )
}
