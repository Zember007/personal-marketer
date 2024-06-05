<template>
    <AuthLayout>
        <div class="login">
            <div class="login__inf">
                <h2>Создайте новый аккаунт</h2>
                <div class="auth_description">"Создать новый аккаунт легко и быстро
                    - это не займет много времени."</div>
            </div>
            <form action="#">
                <PhoneInput label="Ваш номер телефона" />
                <div class="check-box">
                    <CheckInput />
                    <span class="auth__text">Я принимаю <a href="#" @click.prevent="open_privacy_policy">политику конфиденциальности</a></span>
                </div>
                <RouterLink to="/auth/verification">
                    <PrimaryButton style="width: 100%;">Создать аккаунт</PrimaryButton>
                </RouterLink>
            </form>
            <span class="auth__text">Уже есть аккаунт? <RouterLink to="/login">Войдите</RouterLink></span>
            <div class="easy_login">
                <span></span>
                <div class="easy_login-nav">
                    <a href="#">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="32" height="32" fill="url(#pattern0_31_612)" />
                            <defs>
                                <pattern id="pattern0_31_612" patternContentUnits="objectBoundingBox" width="1"
                                    height="1">
                                    <use xlink:href="#image0_31_612" transform="scale(0.00833333)" />
                                </pattern>
                                <image id="image0_31_612" width="120" height="120"
                                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABHNCSVQICAgIfAhkiAAAFmRJREFUeJztnXmYFdWZ/z/vqap7by80S7MvgoAojGAEZBPkp4IbGonLOC6TScY46zP5ZfwlohjjOG5BdJxoHCeTOE82s5mYxLigoHGLbEZF1EQRUESWZu31LlV13t8fDdq03XTf7lv33sb7eZ5+up+uqvO+Vd86p87ynnOgRIkSJUoUKVJoB3KIASr43PwyTTUksMQxNoY1Lsa6IAZEsICqRdQiJsTYAMQntOmfnj0vddlXbksBjUBQ2NvJDT1Z4Co9a2Z/rFZjqAZGgIxGOSppw6G1fjgwo7Y6VKrEUOaJwRVBFUJVMmoBUkao84zs623cmgrH2Q76AbAJMe+j4R48s1ceXbkH2FPQu+0iPU3g4Tp/5kiE0RgmoXr8trQ/wYejKhwDgEiLW1JFD/7ZKiFp+buNa9LWIqo7BidifzYqbyL2NazZJM+9+T7puveAMIL7yzk9QeChOm/GRFyZCDpldyacnFEdF3c+dl31kwLmAuGA9gqBKqr64eBE7BWUtUj4ujyxZh3wXgSmc0axCuzq2TNPRMOTwczYH9hpSWuP9kQQARuFmp3goOCBgmB3DnS91SCrcHlRHlu5FkgVxrP2KTaBYzp/5qkYzkaYtSOTmeSIiR/IREXFwQeXDq0dVhZ7A9WViCyTJ1Y+BTQV0reWFIvAomfOOAeRvwRmbkv7Y+NGRCk+YVsjB37SqgzwnPc95CXC8CFZsfa3gC2we4UX+F8mnDDtnuHlX1aH2dtS/si4kaIXtT0E8K0yIO5udZUXN9YF945d+fJLhfapUFTqmdNuRdzPbU+nh3nGmJ4qbGsEyFjVofHYh6j9lTy5ajEFKrYLJfD5eubMu2t8f7gR8Y4UYVsjgFX8gTH3A1m28h+BpwrhQz6J6fyT/nefcmGgJIqx8pRrDt6jJ5Ls4/B9eXLNP+Xbfr6YkZ4//cf7rR1jOPKFbY0AocIA13nNeWrVBcDmfNmNHD1j2nXbfXtTzBGvUG3YYsEAoWp9SuQfRz699sGo7UUqsF7ct5ra4+78IJP5QpljPnW5tj2MgG9tarAbWyJPrbwdSEdlKzKBde7U40g4d273gwWelMRtjRFIhjYcHot/B9t4oyxftzsSOxGkKXrG1OnE3f/e6YclcdvBKiSMcWr8zOU48fOisuPmOD3RedPnIHxzVxDMNNJzOy3yQQzqqxz3Plm26jdR2chlES06b+YcHO7YFQTTc5juEUkc6quMc68sX3UHUBuVnZzlYD1j6jTE3r4rsCVxO8CDxnyICzn6BuvcqceBu2RXEM7KRXpHMo5qqo8xd8vyVUuIWFzIgcAr/vm4ahLOnTuDYG4RjF0UNWGotp/jLpHlq+8A6vJhs9tF9Okbet+1LQgWxIq8ttz61cunrwdHmYZ4zo2yfNXdNAf15YVuCaxnzVi8Ne3/TcIUj7gGPoqz0QNOZawlZRVRTYpirSEWN8aLm4NxXHDwFdAWcVy5QIDQKkMc91pZvupb5DnqozsCz9yWDm4qBnHNgaC5tLUEod05IO6+UibOOmAT8AHG7EVNgBJiQ8XBoI6LoRdWhwGjQSdsT/tTApGx5Y4DdF/sg+IOctwbZMWquyhAKG5XP5rxpnnT/9SEPbqQ8VFGhLS1qNW3hsa9X4EuR2QTMS8lj7yQBDJ0/FANENdL5iXYX5tAzGBU5uzJ+BenYHaZ42C7IPRH4rrO9bJ89V1E2B3ZkR9Zo2fOeLAmCC8rRJXqoLANmYAKI9+v9sz3cN1X5ImVAeDnyIyjp02JYWRUUs2V2/z0V/rG4k5nhW4l7n9QwGC8rmh0wd55Jz0YKol8Z15HhGQYsLkpfd+c1W/eSP6C0RO/mTL+usm9yr9R4TqE2v6dtyqWl1KgnNvSn2zopWfOfH1XEIyKwpnDYUSoT6cfPfqFdVeQh/ZjOyTeO+WEH1XG4hfZdkQODlaoCvTNbU1W7WA9e/qtNb4/LF9F88FoCFfYUi3OgqNfWHcehRMXIDXq+XUXVzvhQoPdphyaQ8JQ7RDXuUFWrPoWRSAuZJGDfzl7/PQLK/s+tNv3R+SraHaFdF/H+bU8uer/AdvyZLZT6NQTRtMvcf/u0J4GuEY11dyJsWopeWzndkSnBdZ503+8LQwu84yJPAMr0EvM7jK4W1asvhtIRm2zi1TrWTNuTYW6MKHme7Ji5RKgvtBOtaRTYuljLNDvTbtvz34dqVGMILfAKvT3nM2O6L/JstUPUvSTvCoH4OhfEDaupwhnIHZGrjjGvWTf7B1HmaGZ5scdURltVRkU8952LItk2eofUvTiAjTsImx8liIUF8Dp6AR92pmPJ38XH1xbLf0V9V3sztjHczZyhCoMiDkbRez18uTqh3KX8qebjroqXUTOakrLmLjnEBu5C1PRhKkeTPq5KjAO5Gg+Ql/XbDeh3izL1/wyJwmWADrIwfqMmYLIPzhGhqkCajAVPu7AWswQQ/BOHHynE+VA+wgQF2koF7lLlq/5b4pgwtaRxOG/wY7MTmWYdEgetYKUKfHxW6m4fAfOsEa0qWs1LwEsGla58rA8tfrbFEnb8UjicMoMwcp015H4JzptVEAcvJE1VCz8kPisfdAgWVe+LFDtuu/IstU3UGTNiyOFdgXWFc4klGlyuIqUGpz+DZSdspWyC3aBbyHsfM3LEwmcMLwO2JKFzyWyoP0cbJiU8jn6MP3qzahgKjPET/iQiiu2Y3ql0XTnRC4XHj4wUbpERLQn8AhEpsbcTuZGFcS1xMbUUHnZB3jHNqJN7V/bHMISkli+5stZe1wiK9oUWJ9xRgYhk7NLqrlh7Ayso/KzG0nM3dc85dl+Umgjwjt1qaXAzuxdLpENbWYzfc7962SKH3pOF3syREFDUuuGk1rRH0164OhHBlOBZcRzfyyFYOaBtnJwFVYnxjtbPLeFCuBSNmUrFRdtwRmRaq4ya3Pu3ev793c98RLZ8IkuCl3NMHzzRVUZ2+0+Kmtw+zfhjtiHzVSguz0Cq4x9/tVLgX3dTb5Ex3wyBze51cmMTMiVAQ0cnOqQyjPeJjFnP5mq1BZgY67SL3F42uqLrvZ9jorlct6hFYgbKmZvonKq920im0vXMfOX6mfJXXBeoRGg1nF4c9nVsr+tE1rL6ABHVZQJHbZ/s/ZEqG8yVPVK/zy3KWdHmGk8ctrdIqgNP7CxXl+inRV8WhfR5aCjo6jeikDctS+TkUhmsn9asTasstC3veOtBK4oA0ZENYcsHjPPy3wtDSjkClUE7e0I1e2dcojA+nQygTIsGmcAWMOR8/0rCowTB6imnT6NVjlY4mlfBkbhSDpQMPonPn1LZEVLs6zVQGVbhw8V2GgsHWh1riUQgXRG60HbrOmV6CZKH6CirUOHCizihlaqcp3FRMAzbEWlVDznHAGhCki0dfRQga240s6J3aUszm60FLGRawRAqbj4Pu2EwGDiHjlvAwMYR+oQLcVbRYAIZY0ZvLaOte7oECeqwHYlTUZKAkeAQiydaTtCNuJ5CiXyhOt4bWvZ+p8aRpXHhDjxqCe+fHoJ26m+tn7gNu0fuk9UrrCqVYiUBI6G0Ejb8eSt28GBRrTcQGOaATg5XxuzBIAS2E4JrBo4RutynYFVIfQZTqBt1vRKdJuMeG03QVu3gzNxV/bkerBBFRIxqUSl3VGPEt2iSe6RTFsHWn0TNR33tCYKD2KegOh4Susd5pQD6/40LN/U9qf1EIHl9LIUwoeReCKAyjRou0FeouuIUE87dadWObgxCWyJarwnHehcfVZKFa0co7CXdtYFad1saUJlUxT6qkLGN5PJaCTDkZ9arIKyh3Z2Vmudm0IMHzQ0KpWJ3MZliSoJL4AqzgS+k7uUsyMM2qyLRIsq4sUwOa9+CGHQhMQq2g1BbqO4tLvjnnlfYGSu9HUJqcXyq+QsflTT7+/g0YIJ7Cb6ziL/85AbMo01v3MSvcZoLsdbBMR4u1VoN87tkwI7dm/Ckz9ZKyNz4YMrPhuDMn7aOJNH/N74RiYD44B3cpF+tjy9SFYWwu6cG7aOye1CxQCCm+i9A9u+wJ/oOpQ57AZe775pcPFZlT6KW+rm8otMXwI1eK7hhPvOurq76fcwjvXK+kYwDqsA219ZJLvaO6OtvuE6kPUpv+vOGCwhPr9NTeLq+s/wclhJjOaga1XF6RX/ez5F7eGJf/VfF0fYDb9l72FWAWzbqqObEx7vZL+mnWII2WVj3NtwMgsbjiGpMRLox2oqOAmP8UvPuDPb1Hsq/SZc+qUooii0ucK4mcOs39mmwHJK+L4xvJKNseYtsJR3gqF8o24W/54cyhTAbeO7o1YpH1xxNTA0Gxs9lJMcNzYyp5UraJ7VIG5NaA+/i2l75cZWVP+Y6WQxLVhS6rA6fSxfqJvEM34/xok9bBksnuGkR/7yW50y0IM57Q79aiQxUICXqNzc+JoctrLa/odBeT0RZ1NHxbQhZI+t5InURGbXjyNpy+nT2cictF04T2+4oHMn90jGE/rnRpJy8+rzG9f8jLcPd1q7Asvp4XpgTXt7MgiKEZ/NwRC+2zCRixtGMRmHWBZNAQ3UrXtsw23AqE5f1IOYt0S/rjZVlvuUBWsD38Kf6WD5qcNV7bajuioINdU6wsOgBAS8lj6OaxvGc296CFNFsw/wEgjr/bGnvHLVLUBVtpcXM3P/Q88FXSBEsPyygJvovTkGazs69fCaxHgxEWNdSw9dQvap5fnUiSysP4a3/L6M6EawpBic5OZ9C8/VxV8m97uhFooRnmVR6Nf3jiR1taBsXPY16Z7AMjt8DWVlyj+w6ob4bAr78avGmVzVMIpqjVPe3UhYBfW1YtfvNv7zubr4rzvyqQdQftpS/ZrNJE+SSAbOBFVSVvkjnVjCuKOHGRLqsnJP3xXxeTU9hv9pmMSdqcH0w7TZBOoqYWMweNfjm79+rl5/Uc4SzT9y6jf1KgOXozYeyTw7ASdeucXUPfRkJ0/vkJi+Gv/f37034fJfBoNZG5ZTRjTZTK3i9om/0//s0d94TG79BT1sJuJpd+jnRbhF0w0jIglNBdQGOLHev1mxSC6kEyvzdkanDBXpn95fPvb912wF5Z28qCuIEYLa9Ljdj2385jm6+Av0oG/y6Uv1ciP8m03XRyYuCE6i926U39LJZZc7pZWM47H60YOfd/2wjXXrcouIENb7o3b/dsPSBeG11wHlEZvsLu6p39S/B+6w6fqjIw39bu4N27ziWvlFZy/ptDc1C164NzGwYmtehggEbMpW73z43etnPfv57wPD82C1K/Q6fYnebtS/UzMNQ4k0rl/A8Zos/Jx2ojfauarzzFp55X+m39v3TyKSv8A5Vaxrtrpje//LmhMfKOACTIcyH50Y3lNzP3V9ZiF+Hl57Bafy7WeulRPIYru8rF65l2Y+sNirin+QtW/dQQQT6nC7ofbXn/nBZ5+C9hccyRdTfnnh7Xt+eN5r9dWLT/Z7vyBYl8hHP8UEjdvX/hdZ7oXYFa/Om/rQhb8gjGai+OEQI9h0SGZP8oH1X1l2PfldrVaO//Y514ontyT6lRm1CoSgSWJ1lxHfcw4SVkBEM2SdeMUby78qE7O9rkuv3fTHL/1BWJv5fKGG7MUIQTIAT3465NIJ31Vk9RNyi09uV/DxztcbPZ/M6JqH3vmiX5/+cqwq4WpzFGMLFJU6vMb5JPZcgMkM/ej/uUFQDe3vv151KvB89ld3DW/qry95SzLhWI1oKKxDpLnGbQOLDe27lROqH+4zeciToBtC/OTjckeK5uKsI9EFiAGx8/SmhCWTAMY0vL331Pq1O84XIycYz6DaWthDUWnATR9DfO/f4DaNA3XJichisE7Zz55dJJd26fJumJ465ccLXxLP9aIa7+w0IoiA9UOsH+x1q+KvVv7FoHWV4/ptEnSLxdkFgS+Y0DZHRhkX64JbbrEDwR5V+8edY5Kb94/3m9Inup7X27gHtq7PZotzyUAYI7HvKrz6E5Gwku6ILGIIQn//czf0HkYWNedD0uiydWDGC5dfk9ncuMTEneLpczogdvM71+yUDRQNArDN24aAeI6LYzz3wBOQg5c2X9etF9YCDXj1VxDfPxuTHtK177IIYbpJ1dornr950E+66k23v6Jz37zqew2v7r5SPFM8IrdHy7uN1FdFpRav6RTi+8/HaToma6NqQ5xY1XdWLJJ/6I4n3W6ZD5ww/ZrKiQMe0bDY1YUDYWN5eBEF0T745atJDvhP/N5rUTLQ2RUsRHBiVc+nmrih+57kgLN10bjGNTX3N22qPS26ftgeigSI9fFq/5Z47TTEHwjS/sQKEQNe2Z8D5QvPXSOru2u+G7sOfsy7N/1hz/HfPeetsDY9wa/LHFWSuCUGxCFMvIx6ASaswvEHNG9c0goRg8IOMd5Xf3+NrMiF9ZwIDLDhphe2TXjgnA1hbeq4oM4fURK5Jc3zPGxsAza+E6ECkx4E4nDweyFiCIP0PifW6xtPXyM/J0d7J+e0d3yZ3P6HqpOHLSobXvliwZtORYcAHmH8LVL9fkS6/9OoqQd1mptDfrLRife5zenDD4CcTYHMWQ4+yLs3vbhl4gML1msyGJPZkxotEcSc9VwEMKhpIIxvQL1G3GAQNplocCv63Kr7uW/FNdKl9u7hLEbCAr3mmIb1tUsbXq85v0c0ofKORcSFxmMbBg+++eZXz+GerUjOl7CKNHtdqf/ad8MbyTsaXttxpYm5ud/powcjRlC1e/pflFi8zPnJd4koC+Sl/Dz591d8NbWt8VbjOrGC9V0XEwLqyIfJ9fVfeuumJ5dFbCpvTDnpdxf9RBvsuE9zW1mtEh9Y9sJL8x78Kw4z7TNX5PtJO9OfuOSBsCG4pBDjyYVGPKnz+pX9z0un/uhrebOZL0OtWDDjsUvvCeozw5GspjP1PASwGsQGlP3ppXkPXg3kpAMjG/OFonzO6i/eEtb6F6ZqGocbz5gjSmgB9S3xgRVbTIXzmxdP/sG/0slQ1xy7UVjGeEOmjHxr4f9terd2TmZPcpTp6U0qAQ0sbt+y9yuP6bfypWO+fVcSXi6gO8XBmbroLN3tX1L3yo5ZmV1NY43nNivdE8Q+MKZsMwFeddnG3pMHrzKDev1smfz7o0XhWhHhLdDFcw3m7H1/2Dqr6f3azxjHJFqM4BcXB/yyoU2XDe21vu//GbHSEix7XJY8TZbRj1FRbAIfxPlc5isnBF7V7NS2uhn7V314kk0FY8U1NJeBBRT7QBNPA4uJOZurThr8cmJkn1VK+OLjcturFNnWfcUqcEsGn6c3Hg/+xMZNdVPrXt42JczosU6sZTd6REV5i3AeaN7vwJS5f+4zecgr5aP7vQr6+iNy8xvkoT3bVXqCwC0Zdp5eN9LiHS3oxL3Pvnd8anvjeM2Eo52yj4PPDy3R9ZBfHyGf+KMFChaCTJBx4s7GxPCqt/udPGK9g74RYLc+Kre9RxGL2pKeJnBLel2qt/WvI9lPoFqQ4ao6pnbth0eldzYOCRozg2xGq1FbJUoFrmDc5tFRG1g0VLCkxZF6caTWJNxdblW8pnxU720Vx/TbYjDvBbDDovvSs97c98zKh3fRxcjGQtKTBW6NAconMaj8aP3beIiNQzym4DmoExAa98DssAC1giiY0MEEgvUtZFx6pX8t16SA5IGfEiVKlChRIir+Pxkq3qV9KhceAAAAAElFTkSuQmCC" />
                            </defs>
                        </svg>

                    </a>
                    <a href="#">
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.429 20C6.49584 20 0.259838 12.4925 0 0H5.47658C5.65647 9.16917 9.69384 13.0531 12.8918 13.8539V0H18.0488V7.90791C21.2069 7.56757 24.5244 3.96396 25.6437 0H30.8006C29.9411 4.88488 26.3433 8.48849 23.7849 9.96997C26.3433 11.1712 30.441 14.3143 32 20H26.3234C25.1041 16.1962 22.0663 13.2533 18.0488 12.8529V20H17.429Z"
                                fill="#0077FF" />
                        </svg>

                    </a>
                    <a href="#">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.4423 0.00440516C16.8223 -0.115595 21.2323 2.22441 23.4923 6.00441C25.0323 8.3244 25.6123 11.1944 25.4223 13.9544C25.2223 15.6344 24.6823 17.4844 23.1823 18.4444C21.3023 19.7844 18.5923 19.1144 17.2923 17.3244C15.4123 19.0344 12.5923 19.6944 10.2223 18.6244C6.92234 17.3444 5.31234 13.0644 6.96234 9.93441C8.38234 6.67441 12.7223 5.3344 15.7723 7.09441C17.8823 8.21441 19.2523 10.5744 19.1223 12.9744C19.1823 14.0744 18.8323 15.4944 19.8223 16.2944C20.7323 16.9844 22.1623 16.4244 22.5023 15.3844C23.8323 11.1844 21.8023 6.2844 18.0323 4.0844C14.6323 1.9444 9.96234 2.0844 6.74234 4.52441C2.92234 7.1444 1.42234 12.5744 3.39234 16.7744C5.17234 21.1844 10.3623 23.8244 14.9923 22.6544C16.1323 22.4544 17.1523 21.8944 18.1523 21.3544C18.7923 21.8444 19.4623 22.5444 19.7923 23.2944C15.7823 26.0944 10.1023 26.1544 5.99234 23.5144C1.76234 20.9344 -0.647663 15.7344 0.152337 10.8444C0.842337 6.10441 4.40234 1.91441 9.01234 0.574405C10.1323 0.214405 11.2823 0.134405 12.4423 0.00440516ZM12.3323 8.9044C9.87234 9.00441 8.09234 11.9444 9.14234 14.1644C9.75234 15.7344 11.4723 16.8344 13.1623 16.5544C14.7923 16.4344 16.2023 15.1144 16.5323 13.5244C17.1423 11.0944 14.8123 8.50441 12.3323 8.9044Z"
                                fill="#FB9609" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../../layouts/AuthLayout.vue'
export default {
    components: {
        AuthLayout
    },
    
    methods: {
        open_privacy_policy(){
            window.open('/privacy-policy.pdf','_blank')
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 16px;
    padding: 32px 60px;
    background: var(--background-background-primary);
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.auth_description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-secondary);
    max-width: 290px;
}

.login__inf {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.check-box {
    display: flex;
    align-items: center;
    gap: 12px;
}

.auth__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-primary);

    a {
        font-weight: 500;
        text-decoration: underline;
        text-decoration-skip-ink: none;
    }
}

.easy_login {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.easy_login-nav {
    display: flex;
    gap: 10px;

    a{
        border-radius: 4px;
        background: var(--background-background-secondary);
        padding: 14px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media(max-width:550px) {
    .login {
        padding: 32px 20px;
    }
    .auth_description{
        font-size: 16px;
        max-width: auto;
    }
    .auth__text{
        font-size: 12px;
    }
}
</style>