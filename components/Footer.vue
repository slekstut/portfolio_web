<template>
    <footer>
        <div class="footer container">
            <ul class="social">
                <li class="social_link linkedin">
                    <nuxt-link to="https://www.linkedin.com/in/sarunas-lekstutis-296854108/" target="_blank">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.21739 24.15H0V7.83856H5.21739V24.15ZM2.60974 5.6637C1.16661 5.6637 0 4.44469 0 2.94404C0 1.44339 1.1687 0.226562 2.60974 0.226562C4.04765 0.226562 5.21739 1.44557 5.21739 2.94404C5.21739 4.44469 4.04765 5.6637 2.60974 5.6637ZM24 24.15H18.984V16.2118C18.984 14.3185 18.9496 11.8838 16.3763 11.8838C13.7645 11.8838 13.3628 13.9456 13.3628 16.0747V24.15H8.34783V7.8266H13.1624V10.0569H13.2303C13.9002 8.77375 15.5374 7.42099 17.9791 7.42099C23.0609 7.42099 24 10.8018 24 15.1972V24.15Z"
                                fill="#F5F5FA" />
                        </svg>
                    </nuxt-link>
                </li>
                <li class="social__link facebook">
                    <nuxt-link to="https://www.facebook.com/sarunas.lekstutis.5" target="_blank">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0.226562C5.37273 0.226562 0 5.60967 0 12.2498C0 18.2777 4.43182 23.2548 10.2065 24.1243V15.4364H7.23764V12.276H10.2065V10.173C10.2065 6.69121 11.8996 5.16263 14.7878 5.16263C16.1711 5.16263 16.9025 5.26537 17.2489 5.31237V8.07115H15.2787C14.0525 8.07115 13.6244 9.23576 13.6244 10.5485V12.276H17.2178L16.7302 15.4364H13.6244V24.15C19.4815 23.3537 24 18.3362 24 12.2498C24 5.60967 18.6273 0.226562 12 0.226562Z"
                                fill="#F5F5FA" />
                        </svg>
                    </nuxt-link>
                </li>
                <li class="social__link github">
                    <nuxt-link to="https://github.com/slekstut" target="_blank">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 0.226562C5.37109 0.226562 0 5.71576 0 12.4904C0 17.9078 3.4375 22.5067 8.20703 24.1275C8.80859 24.2393 9.02734 23.8641 9.02734 23.5367C9.02734 23.2453 9.01562 22.4748 9.01172 21.4528C5.67188 22.1913 4.96875 19.808 4.96875 19.808C4.42188 18.3908 3.63672 18.0116 3.63672 18.0116C2.54688 17.2531 3.71875 17.269 3.71875 17.269C4.92188 17.3569 5.55469 18.5306 5.55469 18.5306C6.625 20.4069 8.36328 19.8639 9.04688 19.5525C9.15625 18.7581 9.46875 18.2192 9.80859 17.9118C7.14453 17.6044 4.34375 16.5504 4.34375 11.8517C4.34375 10.5103 4.8125 9.41648 5.57812 8.55817C5.45703 8.25078 5.04297 7.00123 5.69531 5.31256C5.69531 5.31256 6.70312 4.9852 8.99609 6.57008C9.95312 6.29862 10.9805 6.16288 12 6.15889C13.0195 6.16288 14.0469 6.29862 15.0039 6.57008C17.2969 4.9852 18.3008 5.31256 18.3008 5.31256C18.957 7.00123 18.5469 8.25078 18.4219 8.55817C19.1914 9.41648 19.6523 10.5103 19.6523 11.8517C19.6523 16.5624 16.8477 17.5964 14.1758 17.9038C14.6055 18.279 14.9883 19.0296 14.9883 20.1713C14.9883 21.8121 14.9766 23.1335 14.9766 23.5367C14.9766 23.8641 15.1914 24.2473 15.8008 24.1275C20.5664 22.5027 24 17.9078 24 12.4904C24 5.71576 18.6289 0.226562 12 0.226562Z"
                                fill="#F5F5FA" />
                        </svg>
                    </nuxt-link>
                </li>
            </ul>
            <div class="footer__text">
                Copyright © 2023 sarunas lekstutis. All rights reserved.
            </div>
            <div class="footer__subtext">
                design by { sl }
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.footer {
    margin-top: 212px;
    margin-bottom: 36px;
    display: flex;
    justify-content: space-between;

    .social {
        display: flex;
        gap: 24px;

        &__link {
            svg {
                transition: all .25s ease-in-out;
            }

            &:hover {
                svg {
                    path {
                        fill: $color-pink-800;
                    }
                }
            }
        }
    }
}
</style>