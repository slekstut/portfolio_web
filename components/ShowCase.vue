<template lang="">
    <div>
        <section class="section section-showcase">
        <div class="" ref="container" id="work">
            <h5 class="section__title container" ref="sectionTitle">showcase</h5>
            <div class="showcase__triangles">
                <svg ref="showcaseTriangles" width="23" height="186" viewBox="0 0 23 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3185 135.183L5.65926 128.347L6.88652e-05 121.512H11.3185H22.6321L16.9729 128.347L11.3185 135.183Z" fill="#FFEB3B"/>
                    <path d="M11.3185 104.808L5.65926 97.9682L6.88652e-05 91.133H11.3185H22.6321L16.9729 97.9682L11.3185 104.808Z" fill="#FFEB3B"/>
                    <path d="M11.3185 74.429L5.65926 67.5938L6.88652e-05 60.7585H11.3185H22.6321L16.9729 67.5938L11.3185 74.429Z" fill="#FFEB3B"/>
                    <path d="M11.3185 44.0498L5.65926 37.2146L6.88652e-05 30.3794L11.3185 30.3794H22.6321L16.9729 37.2146L11.3185 44.0498Z" fill="#FFEB3B"/>
                    <path d="M11.3185 13.6705L5.65926 6.83534L6.88652e-05 0.000141058L11.3185 0.000141058L22.6321 0.000141058L16.9729 6.83534L11.3185 13.6705Z" fill="#FFEB3B"/>
                </svg>
            </div>
            <div class="section__body" id="trigger__point">
                <div ref="showCasesRef" class="showcase" v-for="(showCase, index) in showCases" :key="index">
                    <div class="showcase__wrapper">
                        <img class="showcase__image" :src="showCase.image" alt="Project Image">
                        <div class="showcase__header">
                            <h1 class="showcase__title">{{ showCase.title }}</h1>
                            <h2 class="showcase__subtitle">{{ showCase.subtitle }}</h2>
                            <p class="showcase__tech">{{ showCase.tech }}</p>
                        </div>
                        <div class="showcase__link">
                            <a class="showcase__link--url" :href="showCase.url">
                                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6 24H12C8.68 24 5.85 22.83 3.51 20.49C1.17 18.15 0 15.32 0 12C0 8.68 1.17 5.85 3.51 3.51C5.85 1.17 8.68 0 12 0H21.6V4.8H12C10 4.8 8.3 5.5 6.9 6.9C5.5 8.3 4.8 10 4.8 12C4.8 14 5.5 15.7 6.9 17.1C8.3 18.5 10 19.2 12 19.2H21.6V24ZM14.4 14.4V9.6H33.6V14.4H14.4ZM26.4 24V19.2H36C38 19.2 39.7 18.5 41.1 17.1C42.5 15.7 43.2 14 43.2 12C43.2 10 42.5 8.3 41.1 6.9C39.7 5.5 38 4.8 36 4.8H26.4V0H36C39.32 0 42.15 1.17 44.49 3.51C46.83 5.85 48 8.68 48 12C48 15.32 46.83 18.15 44.49 20.49C42.15 22.83 39.32 24 36 24H26.4Z" fill="#F5F5FA"/>
                                </svg>
                            </a>
                            <a class="showcase__link--url" href="#">
                            <svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 0c-6.6289 0-12 5.4892-12 12.264 0 5.4173 3.4375 10.016 8.207 11.637 0.60156 0.1118 0.82031-0.2635 0.82031-0.5909 0-0.2914-0.01172-1.0619-0.01562-2.0839-3.3398 0.7386-4.043-1.6447-4.043-1.6447-0.54687-1.4172-1.332-1.7965-1.332-1.7965-1.0898-0.7585 0.08203-0.7425 0.08203-0.7425 1.2031 0.0878 1.8359 1.2615 1.8359 1.2615 1.0703 1.8763 2.8086 1.3334 3.4922 1.022 0.10937-0.7945 0.42187-1.3334 0.76171-1.6408-2.6641-0.3074-5.4648-1.3613-5.4648-6.0601 0-1.3413 0.46875-2.4352 1.2344-3.2935-0.12109-0.3074-0.53515-1.5569 0.11719-3.2456 0 0 1.0078-0.32735 3.3008 1.2575 0.95703-0.27147 1.9844-0.4072 3.0039-0.41119 1.0195 0.00399 2.0469 0.13972 3.0039 0.41119 2.293-1.5849 3.2969-1.2575 3.2969-1.2575 0.6562 1.6887 0.2461 2.9382 0.1211 3.2456 0.7695 0.85831 1.2304 1.9522 1.2304 3.2935 0 4.7108-2.8046 5.7447-5.4765 6.0521 0.4297 0.3753 0.8125 1.1258 0.8125 2.2676 0 1.6407-0.0117 2.9621-0.0117 3.3653 0 0.3274 0.2148 0.7106 0.8242 0.5909 4.7656-1.6248 8.1992-6.2198 8.1992-11.637 0-6.7747-5.3711-12.264-12-12.264z" clip-rule="evenodd" fill="#F5F5FA" fill-rule="evenodd"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

interface ShowCase {
    id: number;
    title: string;
    subtitle: string;
    tech: string;
    image: string;
    url?: string;
    urlGit?: string;
}

export default {
    setup() {
        const showCases = ref<ShowCase[]>([
            {
                id: 1,
                title: 'Personal Portfolio',
                subtitle: 'Design and Development',
                tech: 'vue js, nuxt, scss, typescript',
                image: 'https://i.ibb.co/K0n45MP/Rectangle-11-2.png',
                url: 'https://example.com/project1'
            },
            {
                id: 2,
                title: 'url shortening api',
                subtitle: 'development',
                tech: 'vue js, scss',
                image: 'https://i.ibb.co/1R7b3Yb/Rectangle-12-3.png" alt="Rectangle-12-3',
                urlGit: 'https://github.com/slekstut/url-shortening-api-master',
                url: 'https://slekstut.github.io/url-shortening-api-master/'
            },
            {
                id: 3,
                title: 'IP address tracker',
                subtitle: 'development',
                tech: 'vue js, scss ',
                image: 'https://i.ibb.co/B2F5rh0/Rectangle-12-2.png',
                urlGit: 'https://github.com/slekstut/ip-address-tracker',
                url: 'https://slekstut.github.io/ip-address-tracker/',
            },
            {
                id: 4,
                title: 'crud app',
                subtitle: 'development',
                tech: 'vue js, scss ',
                image: 'https://i.ibb.co/QDzdd2C/Rectangle-11-3.png',
                urlGit: 'https://github.com/slekstut/todo-vue',
                url: 'https://github.com/slekstut/todo-vue',
            }
        ]);

        const showCasesRef = ref<HTMLElement | null>(null)
        const showcaseTriangles = ref<HTMLElement | null>(null)

        onMounted(() => {
            gsap.utils.toArray<HTMLElement>(".showcase").forEach((showcase, index) => {
                gsap.set(showcase, { y: 100, opacity: 0 })

                ScrollTrigger.create({
                    trigger: showcase,
                    start: "bottom bottom",
                    onEnter: () => {
                        gsap.to(showcase, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: index * 0.25, stagger: 0.25 });
                    },
                    onLeaveBack: () => {
                        gsap.to(showcase, { y: 100, opacity: 0, duration: 0.5, ease: "power3.in", delay: index * 0.25, stagger: 0.25 });
                    },
                })
            })

            const paths = gsap.utils.toArray<SVGPathElement>(
                showcaseTriangles.value?.querySelectorAll('path')
            )

            const duration = paths.length * 0.05

            paths.forEach((path, index) => {
                ScrollTrigger.create({
                    trigger: showcaseTriangles.value,
                    start: 'bottom bottom',
                    end: 'bottom top+=100%',
                    toggleActions: 'restart pause reverse pause',
                    onEnter: () => {
                        gsap.to(path, {
                            y: '-=10',
                            repeat: -1,
                            yoyo: true,
                            duration: duration,
                            delay: index * (duration / paths.length), // Adjust delay based on total paths
                        })
                    },
                })
            })
        })

        return {
            showCases,
            showCasesRef,
            showcaseTriangles,
        }
    }

}
</script>

<style lang="scss">
 @import '@/assets/scss/main.scss';
.section-showcase {
    margin-top: 512px;
    position: relative;

    .section__body {
        margin-top: 64px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .showcase {
        display: flex;
        flex: 1 50%;

        &:hover {
            .showcase__image {
                transform: scale(1.025);
            }
        }

        &__wrapper {
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        &__image {
            position: relative;
            width: 100%;
            transition: transform .3s ease-in-out;

        }

        &__header {
            position: absolute;
            bottom: 30px;
            left: 60px;
        }

        &__link {
            position: absolute;
            bottom: 30px;
            right: 60px;
            display: flex;
            gap: 16px;

            &--url {
                svg {
                    transition: all .3s ease-in-out;
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

        &__title {
            max-width: 580px;
            font-size: 4rem;
            line-height: 4rem;
            font-weight: 700;
        }

        &__subtitle {
            margin-top: 4px;
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 1.75;
        }

        &__tech {
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.15;
        }
    }

    .showcase__triangles {
        position: absolute;
        top: -20%;
        left: 20%;
        transform: translate(-20%, 20%);
    }
}
</style>