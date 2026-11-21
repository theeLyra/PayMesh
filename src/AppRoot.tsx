import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import { Toaster } from 'sonner'
import { config } from './config'
import App from './App'
import { useTheme } from './paymesh/themeContext'

const queryClient = new QueryClient()

/** Everything that needs a wallet. Loaded only when the visitor opens the app, never for the landing page or docs. */
export default function AppRoot() {
  const { resolved } = useTheme()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider mode={resolved}>
          <App />
          <Toaster position="top-center" theme={resolved} />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
