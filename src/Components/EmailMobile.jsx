import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEmail } from '../context/contextData'

export default function EmailMobile() {
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
                <div className='a-section a-spacing-none'></div>

                <div className='a-section a-spacing-none auth-pagelet-mobile-container'>
                    {showErrorMessage && (
                        <div
                            id='auth-warning-message-box'
                            className='a-box a-alert a-alert-warning auth-server-side-message-box a-spacing-base'
                            aria-live='polite'
                            aria-atomic='true'
                        >
                            <div className='a-box-inner a-alert-container'>
                                <h4 className='a-alert-heading'>
                                    No account found with email address
                                </h4>
                                <div className='a-alert-content'>
                                    <ul
                                        className='a-unordered-list a-nostyle a-vertical'
                                        role='alert'
                                    >
                                        <li>
                                            <span className='a-list-item'>
                                                Please check your email address
                                                or click Create Account if you
                                                are new to Amazon.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        id='outer-accordion-signin-signup-page'
                        className='a-section'
                    >
                        <h2 className='font-400'>Welcome</h2>
                        <div
                            id='accordion-signin-signup-page'
                            data-a-accordion-name='accordion-signin-signup-page'
                            className='a-box-group a-accordion a-spacing-medium a-spacing-top-mini'
                            role='radioGroup'
                        >
                            <div
                                id='accordion-row-register'
                                className='a-box text-aline'
                                data-a-accordion-row-name='accordion-row-register'
                            >
                                <div className='a-box-inner a-accordion-row-container'>
                                    <div
                                        className='a-accordion-row-a11y'
                                        role='radio'
                                        aria-checked='false'
                                        aria-expanded='false'
                                    >
                                        <a
                                            id='register_accordion_header'
                                            data-csa-c-func-deps='aui-da-a-accordion'
                                            data-csa-c-type='widget'
                                            data-csa-interaction-events='click'
                                            data-action='a-accordion'
                                            className='a-accordion-row a-declarative'
                                            aria-label=''
                                            data-csa-c-id='2uqav0-87vesk-a9vm1z-1i8nlw'
                                        >
                                            <i className='a-icon a-accordion-radio a-icon-radio-inactive'></i>
                                            <h5>
                                                <div className='a-row'>
                                                    <span className='a-size-base a-text-bold'>
                                                        Create account
                                                    </span>

                                                    <span className='a-size-small accordionHeaderMessage'>
                                                        New to Amazon?
                                                    </span>
                                                </div>
                                            </h5>
                                        </a>
                                    </div>

                                    <div className='a-accordion-inner'>
                                        <span
                                            className='a-declarative'
                                            data-action='a-modal'
                                            data-csa-c-type='widget'
                                            data-csa-c-func-deps='aui-da-a-modal'
                                            id='auth-verify-modal-action'
                                            data-csa-c-id='1sf4c3-cww7z1-e59h3h-etkmz6'
                                        ></span>

                                        <div
                                            className='a-popover-preload'
                                            id='a-popover-verifyContinueModal'
                                        >
                                            <div className='a-row'>
                                                <p>
                                                    We will send you a text to
                                                    verify this number:
                                                </p>
                                            </div>

                                            <div className='a-row'>
                                                <span
                                                    id='auth-register-verify-mobile-number-text'
                                                    className='a-size-small a-text-bold'
                                                >
                                                    <span id='auth-verify-mobile-country-code'></span>
                                                    <span>
                                                        +
                                                        <span id='auth-verify-mobile-calling-code'></span>
                                                    </span>
                                                    <span id='auth-verify-mobile-national-number'></span>
                                                </span>
                                            </div>

                                            <div className='a-row a-spacing-top-extra-large'>
                                                <span className='a-size-mini'>
                                                    Message and Data rates may
                                                    apply.
                                                </span>
                                            </div>

                                            <hr
                                                aria-hidden='true'
                                                className='a-divider-normal'
                                            />

                                            <div className='a-row'>
                                                <div className='a-column a-span6'>
                                                    <span
                                                        className='a-declarative'
                                                        data-action='a-popover-close'
                                                        data-csa-c-type='widget'
                                                        data-csa-c-func-deps='aui-da-a-popover-close'
                                                        data-a-popover-close='{}'
                                                        data-csa-c-id='7j3wee-qjpplx-js8ovs-7y2fax'
                                                    >
                                                        <span
                                                            id='auth-verification-cancel'
                                                            className='a-button a-button-span12 a-button-base'
                                                        >
                                                            <span className='a-button-inner'>
                                                                <input
                                                                    className='a-button-input'
                                                                    type='submit'
                                                                    aria-labelledby='auth-verification-cancel-announce'
                                                                />
                                                                <span
                                                                    id='auth-verification-cancel-announce'
                                                                    className='a-button-text'
                                                                    aria-hidden='true'
                                                                >
                                                                    Cancel
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>

                                                <div className='a-column a-span6 a-span-last'>
                                                    <span
                                                        className='a-declarative'
                                                        data-action='auth-verify-modal-complete'
                                                        data-csa-c-type='widget'
                                                        data-csa-c-func-deps='aui-da-auth-verify-modal-complete'
                                                        data-auth-verify-modal-complete='{}'
                                                        data-csa-c-id='h08lki-4wze01-5ee6bk-eqfgk0'
                                                    >
                                                        <span
                                                            id='auth-verification-ok'
                                                            className='a-button a-button-span12 a-button-primary'
                                                        >
                                                            <span className='a-button-inner'>
                                                                <button
                                                                    id='auth-verification-ok-announce'
                                                                    className='a-button-text'
                                                                    type='button'
                                                                >
                                                                    OK
                                                                </button>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='a-section a-spacing-large mp_reg_fix'>
                                            <form
                                                id='ap_register_form'
                                                name='register'
                                                method='post'
                                                action=''
                                                data-enable-mobile-account-js='true'
                                                data-show-optional-email-field='true'
                                                className='fwcim-form auth-validate-form auth-clearable-form ap_ango_email'
                                            />

                                            <input
                                                type='hidden'
                                                name='appActionToken'
                                                value='gj0UqRCjLTcKeHmVlCnJHOdJoFoj3D'
                                            />
                                            <input
                                                type='hidden'
                                                name='appAction'
                                                value='REGISTER'
                                            />
                                            <input
                                                type='hidden'
                                                name='shouldShowPersistentLabels'
                                                value='true'
                                            />

                                            <input
                                                type='hidden'
                                                name='metadata1'
                                                value='true'
                                            />

                                            <input
                                                type='hidden'
                                                name='openid.return_to'
                                                value='ape:aHR0cHM6Ly93d3cuYW1hem9uLmNvbS8/cmVmXz1uYXZfY3VzdHJlY19zaWduaW4='
                                            />

                                            <input
                                                type='hidden'
                                                name='prevRID'
                                                value='ape:NzRQRFZWNUQwMzdLN1lCSDM1WlA='
                                            />

                                            <input
                                                type='hidden'
                                                name='workflowState'
                                            />

                                            <div className='a-row a-spacing-base'>
                                                <label
                                                    htmlFor='ap_customer_name'
                                                    aria-hidden='true'
                                                    className='a-form-label'
                                                >
                                                    First and last name
                                                </label>
                                                <div className='a-input-text-wrapper auth-required-field accordionFontFamily'>
                                                    <input
                                                        type='text'
                                                        maxLength='50'
                                                        id='ap_customer_name'
                                                        autoComplete='name'
                                                        name='customerName'
                                                        aria-label='First and last name'
                                                    />
                                                </div>

                                                <div
                                                    id='auth-customerName-missing-alert'
                                                    className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                    role='alert'
                                                >
                                                    <div className='a-box-inner a-alert-container'>
                                                        <i className='a-icon a-icon-alert'></i>
                                                        <div className='a-alert-content'>
                                                            Enter your name
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <input
                                                type='hidden'
                                                name='countryCode'
                                                value='US'
                                                id='auth-country-picker'
                                                className='auth-country-picker'
                                                disabled='disabled'
                                            />

                                            <div className='a-row a-spacing-base'>
                                                <label
                                                    htmlFor='ap_email'
                                                    aria-hidden='true'
                                                    className='a-form-label'
                                                >
                                                    Mobile number or email
                                                </label>

                                                <div
                                                    data-validation-id='email'
                                                    className='a-input-text-wrapper auth-required-field auth-require-claim-validation moa-single-claim-input-field-container'
                                                >
                                                    <input
                                                        type='email'
                                                        maxLength='64'
                                                        value='ass@g'
                                                        id='ap_email'
                                                        autoComplete='tel'
                                                        name='email'
                                                        aria-label='Mobile number or email'
                                                        autoCorrect='off'
                                                        autoCapitalize='off'
                                                        className='auth-require-email-validaton auth-clear-icon-visible w-100'
                                                    />

                                                    <div
                                                        id='auth-email-missing-alert'
                                                        className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                        role='alert'
                                                    >
                                                        <div className='a-box-inner a-alert-container'>
                                                            <i className='a-icon a-icon-alert'></i>
                                                            <div className='a-alert-content'>
                                                                Enter your email
                                                                or mobile phone
                                                                number
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id='auth-email-invalid-claim-alert'
                                                        className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                        role='alert'
                                                    >
                                                        <div className='a-box-inner a-alert-container'>
                                                            <i className='a-icon a-icon-alert'></i>
                                                            <div className='a-alert-content'>
                                                                Wrong or Invalid
                                                                email address or
                                                                mobile phone
                                                                number. Please
                                                                correct and try
                                                                again.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id='country_bottom_sheet_container'
                                                        className='aok-hidden'
                                                    >
                                                        <div className='a-container ap-no-padding'>
                                                            <span
                                                                className='a-declarative'
                                                                data-action='select_country'
                                                                data-csa-c-type='widget'
                                                                data-csa-c-func-deps='aui-da-select_country'
                                                                data-select_country='{}'
                                                                data-csa-c-id='6adxt1-9co97q-pwwwye-gkzh4j'
                                                            >
                                                                <ul
                                                                    id='ap-countries-list'
                                                                    className='a-unordered-list a-nostyle a-vertical ap-countries-list'
                                                                ></ul>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id='auth-register-mobile-custom-message'></div>

                                                <label
                                                    htmlFor='ap_password'
                                                    aria-hidden='true'
                                                    className='a-form-label'
                                                >
                                                    Create a password
                                                </label>

                                                <div className='a-row a-spacing-small'>
                                                    <div className='a-row auth-password-row'>
                                                        <div
                                                            id='auth-password-container'
                                                            className='a-input-text-wrapper auth-required-field auth-require-password-validation auth-inline-password-container auth-password-container auth-password input_table_layout'
                                                        >
                                                            <input
                                                                type='password'
                                                                maxLength='1024'
                                                                id='ap_password'
                                                                name='password'
                                                                spellCheck='false'
                                                                aria-label='Create a password'
                                                                autoCorrect='off'
                                                                autoCapitalize='off'
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        id='passwordInformationMessage'
                                                        className='a-section a-spacing-top-mini auth-inlined-information-message aok-hidden'
                                                    >
                                                        Minimum 6 characters
                                                        required
                                                    </div>

                                                    <div
                                                        id='auth-password-missing-alert'
                                                        className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-small a-spacing-top-mini'
                                                        role='alert'
                                                    >
                                                        <div className='a-box-inner a-alert-container'>
                                                            <i className='a-icon a-icon-alert'></i>
                                                            <div className='a-alert-content'>
                                                                Minimum 6
                                                                characters
                                                                required
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        id='auth-password-invalid-password-alert'
                                                        className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-small a-spacing-top-mini'
                                                        role='alert'
                                                    >
                                                        <div className='a-box-inner a-alert-container'>
                                                            <i className='a-icon a-icon-alert'></i>
                                                            <div className='a-alert-content'>
                                                                Minimum 6
                                                                characters
                                                                required
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='a-row auth-visible-password-container auth-show-password-empty'>
                                                        <span
                                                            id='auth-visible-password'
                                                            className='a-size-small a-color-secondary auth-visible-password'
                                                        ></span>
                                                    </div>

                                                    <input
                                                        type='hidden'
                                                        name='showPasswordChecked'
                                                        value='true'
                                                        id='ap_show_password_checked'
                                                    />
                                                </div>

                                                <div className='a-row'>
                                                    <div className='a-column a-span12 a-spacing-medium'>
                                                        <div
                                                            id='auth-show-password-checkbox-container'
                                                            className='a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox'
                                                        >
                                                            <label htmlFor='auth-register-show-password-checkbox'>
                                                                <input
                                                                    id='auth-register-show-password-checkbox'
                                                                    type='checkbox'
                                                                    name=''
                                                                    value=''
                                                                    checked=''
                                                                />
                                                                <i className='a-icon a-icon-checkbox'></i>
                                                                <span className='a-label a-checkbox-label'>
                                                                    <span className='a-size-small auth-password-margin'>
                                                                        Show
                                                                        password
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='a-section ap_mobile_number_fields'>
                                                    <span
                                                        id='auth-continue'
                                                        className='a-button a-spacing-medium a-button-primary'
                                                    >
                                                        <span className='a-button-inner'>
                                                            <input
                                                                id='continue'
                                                                className='a-button-input'
                                                                type='submit'
                                                                aria-labelledby='auth-continue-announce'
                                                            />
                                                            <span
                                                                id='auth-continue-announce'
                                                                className='a-button-text'
                                                                aria-hidden='true'
                                                            ></span>
                                                        </span>
                                                    </span>
                                                </div>

                                                <div
                                                    id='legal-section'
                                                    className='a-section'
                                                >
                                                    <div
                                                        id='legalTextRow'
                                                        className='a-row a-spacing-top-medium a-size-small'
                                                    >
                                                        By creating an account,
                                                        you agree to Amazon's{' '}
                                                        <a href='/gp/aw/help/ref=ap_mobile_register_notification_condition_of_use?id=508088'>
                                                            Conditions of Use
                                                        </a>{' '}
                                                        and{' '}
                                                        <a href='/gp/aw/help/ref=ap_mobile_register_notification_privacy_notice?id=468496'>
                                                            Privacy Notice
                                                        </a>
                                                        .
                                                    </div>
                                                </div>

                                                <div
                                                    id='ab-reg-link-section'
                                                    className='a-section'
                                                >
                                                    <div className='a-divider a-divider-break'>
                                                        <h5 aria-level='5'>
                                                            Buying for work?
                                                        </h5>
                                                    </div>

                                                    <a
                                                        id='ab-registration-link'
                                                        href='https://www.amazon.com/business/register/org/landing?ref_=ap_altreg_ab'
                                                        className='a-touch-link a-box a-touch-link-noborder'
                                                    >
                                                        <div className='a-box-inner'>
                                                            <i className='a-icon a-icon-touch-link'></i>
                                                            Create a free
                                                            business account
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id='accordion-row-login'
                                        className='a-box a-accordion-active'
                                        data-a-accordion-row-name='accordion-row-login'
                                    >
                                        <div className='a-box-inner a-accordion-row-container'>
                                            <div
                                                className='a-accordion-row-a11y'
                                                role='radio'
                                                aria-checked='true'
                                                aria-expanded='true'
                                            >
                                                <a
                                                    id='login_accordion_header'
                                                    data-csa-c-func-deps='aui-da-a-accordion'
                                                    data-csa-c-type='widget'
                                                    data-csa-interaction-events='click'
                                                    data-action='a-accordion'
                                                    className='a-accordion-row a-declarative'
                                                    href='#'
                                                    aria-label=''
                                                    data-csa-c-id='pdq3qz-65w7iq-14nh5e-usvu9l'
                                                >
                                                    <i className='a-icon a-accordion-radio a-icon-radio-active'></i>
                                                    <h5>
                                                        <div className='a-row'>
                                                            <span className='a-size-base a-text-bold'>
                                                                Sign in
                                                            </span>

                                                            <span className='a-size-small accordionHeaderMessage'>
                                                                Already a
                                                                customer?
                                                            </span>
                                                        </div>
                                                    </h5>
                                                </a>
                                            </div>

                                            <div className='a-accordion-inner'>
                                                <form
                                                    id='ap_login_form'
                                                    name='signIn'
                                                    method='post'
                                                    action='https://www.amazon.com/ap/signin'
                                                    className='auth-validate-form fwcim-form auth-clearable-form'
                                                    data-fwcim-id='Euoea4AB'
                                                />

                                                <input
                                                    type='hidden'
                                                    name='appActionToken'
                                                    value='2tHpj2B1VFYp3WPKwlFaWzvkJUWIIj3D'
                                                />
                                                <input
                                                    type='hidden'
                                                    name='appAction'
                                                    value='SIGNIN_PWD_COLLECT'
                                                />

                                                <input
                                                    type='hidden'
                                                    name='metadata1'
                                                />

                                                <input
                                                    type='hidden'
                                                    name='openid.return_to'
                                                    value='ape:aHR0cHM6Ly93d3cuYW1hem9uLmNvbS8/cmVmXz1uYXZfY3VzdHJlY19zaWduaW4='
                                                />

                                                <input
                                                    type='hidden'
                                                    name='prevRID'
                                                    value='ape:NzRQRFZWNUQwMzdLN1lCSDM1WlA='
                                                />

                                                <input
                                                    type='hidden'
                                                    name='workflowState'
                                                />

                                                <div
                                                    id='passkey-error-alert'
                                                    className='a-box a-alert a-alert-error aok-hidden'
                                                    role='alert'
                                                >
                                                    <div className='a-box-inner a-alert-container'>
                                                        <h4 className='a-alert-heading'>
                                                            Passkey error
                                                        </h4>
                                                        <div className='a-alert-content'>
                                                            <p id='passkey-client-error-message'>
                                                                Something went
                                                                wrong, please
                                                                sign-in another
                                                                way or follow
                                                                any instructions
                                                                provided by your
                                                                device.
                                                            </p>
                                                            <p
                                                                id='passkey-generic-server-error-message'
                                                                className='aok-hidden'
                                                            >
                                                                Sorry, your
                                                                passkey isn't
                                                                working. There
                                                                might be a
                                                                problem with the
                                                                server. Sign in
                                                                with your
                                                                password or try
                                                                your passkey
                                                                again later.
                                                            </p>
                                                            <p
                                                                id='passkey-server-error-message'
                                                                className='aok-hidden'
                                                            ></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='a-input-text-group a-spacing-medium a-spacing-top-micro'>
                                                    <label
                                                        htmlFor='ap_email_login'
                                                        aria-hidden='true'
                                                        className='a-form-label'
                                                    >
                                                        Email or phone number
                                                    </label>
                                                    <input
                                                        type='hidden'
                                                        name='subPageType'
                                                        value='SignInClaimCollect'
                                                    />
                                                    <input
                                                        type='hidden'
                                                        name='shouldShowPersistentLabels'
                                                        value='true'
                                                    />

                                                    <input
                                                        type='hidden'
                                                        name='countryCode'
                                                        value='US'
                                                        id='auth-country-picker-signin'
                                                        className='auth-country-picker'
                                                        disabled='disabled'
                                                    />
                                                    <div className='a-row a-spacing-base'>
                                                        <span
                                                            className='a-declarative'
                                                            data-action='country_picker_bottom_sheet'
                                                            data-csa-c-type='widget'
                                                            data-csa-c-func-deps='aui-da-country_picker_bottom_sheet'
                                                            data-country_picker_bottom_sheet='{}'
                                                            data-csa-c-id='mig60m-yi5fuk-psv4yq-cplgit'
                                                        ></span>
                                                        <div className='a-input-text-wrapper auth-required-field auth-fill-claim moa-single-claim-input-field-container'>
                                                            <div
                                                                className='a-section country-picker aok-hidden'
                                                                value='US'
                                                            >
                                                                <span
                                                                    className='a-declarative'
                                                                    data-action='a-sheet'
                                                                    data-csa-c-type='widget'
                                                                    data-csa-c-func-deps='aui-da-a-sheet'
                                                                    data-a-sheet='{"sheetType":"web","name":"country_bottom_sheet_signin","preloadDomId":"country_bottom_sheet_container_signin","closeType":"icon"}'
                                                                    data-csa-c-id='uqyczj-9p33r9-14dzlb-ezzbvh'
                                                                >
                                                                    <span className='country-display-text'>
                                                                        US +1
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <input
                                                                type='email'
                                                                maxLength='128'
                                                                id='ap_email_login'
                                                                name='email'
                                                                aria-label='Email or phone number'
                                                                autoCorrect='off'
                                                                autoCapitalize='off'
                                                                className='auth-clear-icon-visible w-100'
                                                                value={email}
                                                                onChange={
                                                                    handleInputChange
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div
                                                        id='country_bottom_sheet_container_signin'
                                                        className='aok-hidden'
                                                    >
                                                        <div className='a-container ap-no-padding'>
                                                            <span
                                                                className='a-declarative'
                                                                data-action='select_country_signin'
                                                                data-csa-c-type='widget'
                                                                data-csa-c-func-deps='aui-da-select_country_signin'
                                                                data-select_country_signin='{}'
                                                                data-csa-c-id='svn73n-4bp09x-jjyqij-jyfysj'
                                                            >
                                                                <ul
                                                                    id='ap-countries-list-signin'
                                                                    className='a-unordered-list a-nostyle a-vertical ap-countries-list'
                                                                ></ul>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='a-input-text-wrapper hide'>
                                                    <input
                                                        type='password'
                                                        maxLength='1024'
                                                        id='ap-credential-autofill-hint'
                                                        autoComplete='current-password'
                                                        name='password'
                                                    />
                                                </div>

                                                <div
                                                    id='auth-email-missing-alert'
                                                    className='a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini'
                                                    role='alert'
                                                >
                                                    <div className='a-box-inner a-alert-container'>
                                                        <i className='a-icon a-icon-alert'></i>
                                                        <div className='a-alert-content'>
                                                            Enter your email or
                                                            mobile phone number
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='a-section'>
                                                    <div className='a-button-stack'>
                                                        <span
                                                            id='continue'
                                                            className='a-button a-button-span12 a-button-primary'
                                                            onClick={
                                                                handleContinueClick
                                                            }
                                                        >
                                                            <span className='a-button-inner'>
                                                                <input
                                                                    id='continue'
                                                                    className='a-button-input'
                                                                    type='submit'
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
                                                        <div className='a-section a-spacing-medium'>
                                                            <div
                                                                id='legalTextRow'
                                                                className='a-row a-spacing-top-medium a-size-small'
                                                            >
                                                                By continuing,
                                                                you agree to
                                                                Amazon's
                                                                <a href='/gp/aw/help/ref=ap_mobile_signin_notification_condition_of_use?id=508088'>
                                                                    Conditions
                                                                    of Use
                                                                </a>{' '}
                                                                and
                                                                <a href='/gp/aw/help/ref=ap_mobile_signin_notification_privacy_notice?id=468496'>
                                                                    Privacy
                                                                    Notice
                                                                </a>
                                                                .
                                                            </div>
                                                        </div>
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
                                                            href='javascript:void(0)'
                                                            data-action='a-expander-toggle'
                                                            className='a-expander-header a-declarative a-expander-inline-header a-link-expander'
                                                            data-a-expander-toggle='{"allowLinkDefault":true, "expand_prompt":"", "collapse_prompt":""}'
                                                            data-csa-c-id='kh7q1c-dmhhfi-5gc5w8-zb4jlv'
                                                        >
                                                            <i className='a-icon a-icon-expand'></i>
                                                            <span className='a-expander-prompt'>
                                                                Need help?
                                                            </span>
                                                        </a>
                                                        <ul className='a-unordered-list a-nostyle a-vertical'>
                                                            <li>
                                                                <span className='a-list-item'></span>
                                                            </li>

                                                            <li>
                                                                <span className='a-list-item'></span>
                                                            </li>
                                                        </ul>
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
                                                            Buying for work?
                                                        </span>
                                                    </div>

                                                    <a
                                                        id='ab-sign-in-ingress-link'
                                                        className='a-link-normal'
                                                        href='https://www.amazon.com/business/register/welcome?ref_=ab_reg_signin'
                                                    >
                                                        <span>
                                                            Shop on Amazon
                                                            Business
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
