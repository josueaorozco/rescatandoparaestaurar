import { createContext, useContext } from 'react'

export const DonationContext = createContext(() => {})
export const useDonation = () => useContext(DonationContext)
