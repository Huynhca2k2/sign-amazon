import React from 'react'

export default function FooterMobile() {
    return (
        <footer className='nav-mobile nav-ftr-batmobile'>
            <div
                id='nav-ftr'
                className='nav-t-footer-basicNoAuth nav-sprite-v3'
            >
                <div className='icp-container-mobile'>
                    <a
                        href='/customer-preferences/edit?from=mobile&amp;ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=footer_lang'
                        aria-label='Choose a language for shopping.'
                        className='icp-touch-link-2'
                        id='icp-touch-link-language'
                    >
                        <div className='icp-nav-globe-img-2 icp-mobile-globe-2'></div>
                        <span className='icp-color-base'>English</span>
                        <span className='nav-arrow icp-up-down-arrow'></span>
                    </a>

                    <a
                        href='/customer-preferences/country?ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=navm_footer_icp_cp'
                        aria-label='Choose a country/region for shopping.'
                        className='icp-touch-link-2'
                        id='icp-touch-link-country'
                    >
                        <span className='icp-flag-3 icp-flag-3-us'></span>
                        <span className='icp-color-base'>United States</span>
                    </a>
                </div>

                <ul className='nav-ftr-horiz'>
                    <li className='nav-li'>
                        <a
                            href='/gp/help/customer/display.html?nodeId=508088&amp;ref_=navm_ftr_cou'
                            id=''
                            className='nav-a'
                        >
                            Conditions of Use
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a
                            href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468496&amp;ref_=footer_privacy'
                            id=''
                            className='nav-a'
                        >
                            Privacy Notice
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a
                            href='/privacyprefs?ref_=footer_iba'
                            id=''
                            className='nav-a'
                        >
                            Your Ads Privacy Choices
                        </a>
                    </li>
                    <li className='nav-li'>
                        <span id='nav-icon-ccba' className='nav-sprite'></span>
                    </li>
                </ul>

                <div id='nav-ftr-copyright'>
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </div>
                <div id='nav-ftr-legal'></div>
            </div>
        </footer>
    )
}
