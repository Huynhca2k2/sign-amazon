import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FooterPc from './Components/FooterPc'
import EmailPc from './Components/EmailPc'
import PassworkPc from './Components/PassworkPc'
import { EmailProvider } from './context/contextData'
import FooterMobile from './Components/FooterMobile'
import EmailMobile from './Components/EmailMobile'
import PassworkMobile from './Components/PassworkMobile'
import { useEffect, useState } from 'react'

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 640)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <EmailProvider>
            <BrowserRouter>
                <Routes>
                    {isMobile ? (
                        <>
                            <Route path='/' element={<EmailMobile />} />
                            <Route path='/email' element={<EmailMobile />} />
                            <Route
                                path='/password'
                                element={<PassworkMobile />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path='/' element={<EmailPc />} />
                            <Route path='/email' element={<EmailPc />} />
                            <Route path='/password' element={<PassworkPc />} />
                        </>
                    )}
                </Routes>

                <FooterMobile />
            </BrowserRouter>
        </EmailProvider>
    )
}

export default App
