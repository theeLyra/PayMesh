/*
 *  ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
 *  ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
 *  ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
 *  ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
 *  ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 *  ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
 *
 *  Built with Arc Studio
 *  https://studio.arc.io
 */

import './tracing'
import './console-capture'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider } from './paymesh/theme'
import { installShareSync } from './lib/share'
import './index.css'

installShareSync()

// A new release removes the old page files. If an open tab asks for one, reload once to pick up the new version.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  if (!sessionStorage.getItem('paymesh:reloaded-after-error')) {
    sessionStorage.setItem('paymesh:reloaded-after-error', '1')
    window.location.reload()
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)
