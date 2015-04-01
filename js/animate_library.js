var AnimateLibrary = [
    {
        groupName: 'Attention Seekers',
        list: [
            {
                name: 'bounce',
                keyframes: function() {/*
                    @keyframes bounce {
              0%, 20%, 53%, 80%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                -webkit-transform: translate3d(0,0,0);
                -ms-transform: translate3d(0,0,0);
                transform: translate3d(0,0,0);
              }

              40%, 43% {
                -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                -webkit-transform: translate3d(0, -30px, 0);
                -ms-transform: translate3d(0, -30px, 0);
                transform: translate3d(0, -30px, 0);
              }

              70% {
                -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                -webkit-transform: translate3d(0, -15px, 0);
                -ms-transform: translate3d(0, -15px, 0);
                transform: translate3d(0, -15px, 0);
              }

              90% {
                -webkit-transform: translate3d(0,-4px,0);
                -ms-transform: translate3d(0,-4px,0);
                transform: translate3d(0,-4px,0);
              }
            }
                */}
            },
            {
                name: 'flash',
                keyframes: function() {/*
                    @keyframes flash {
              0%, 50%, 100% {
                opacity: 1;
              }

              25%, 75% {
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'pulse',
                keyframes: function() {/*
                    @keyframes pulse {
              0% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }

              50% {
                -webkit-transform: scale3d(1.05, 1.05, 1.05);
                -ms-transform: scale3d(1.05, 1.05, 1.05);
                transform: scale3d(1.05, 1.05, 1.05);
              }

              100% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }
                */}
            },
            {
                name: 'rubberBand',
                keyframes: function() {/*
                    @keyframes rubberBand {
              0% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }

              30% {
                -webkit-transform: scale3d(1.25, 0.75, 1);
                -ms-transform: scale3d(1.25, 0.75, 1);
                transform: scale3d(1.25, 0.75, 1);
              }

              40% {
                -webkit-transform: scale3d(0.75, 1.25, 1);
                -ms-transform: scale3d(0.75, 1.25, 1);
                transform: scale3d(0.75, 1.25, 1);
              }

              50% {
                -webkit-transform: scale3d(1.15, 0.85, 1);
                -ms-transform: scale3d(1.15, 0.85, 1);
                transform: scale3d(1.15, 0.85, 1);
              }

              65% {
                -webkit-transform: scale3d(.95, 1.05, 1);
                -ms-transform: scale3d(.95, 1.05, 1);
                transform: scale3d(.95, 1.05, 1);
              }

              75% {
                -webkit-transform: scale3d(1.05, .95, 1);
                -ms-transform: scale3d(1.05, .95, 1);
                transform: scale3d(1.05, .95, 1);
              }

              100% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }
                */}
            },
            {
                name: 'shake',
                keyframes: function() {/*
                    @keyframes shake {
              0%, 100% {
                -webkit-transform: translate3d(0, 0, 0);
                -ms-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }

              10%, 30%, 50%, 70%, 90% {
                -webkit-transform: translate3d(-10px, 0, 0);
                -ms-transform: translate3d(-10px, 0, 0);
                transform: translate3d(-10px, 0, 0);
              }

              20%, 40%, 60%, 80% {
                -webkit-transform: translate3d(10px, 0, 0);
                -ms-transform: translate3d(10px, 0, 0);
                transform: translate3d(10px, 0, 0);
              }
            }
                */}
            },
            {
                name: 'swing',
                keyframes: function() {/*
                    @keyframes swing {
              20% {
                -webkit-transform: rotate3d(0, 0, 1, 15deg);
                -ms-transform: rotate3d(0, 0, 1, 15deg);
                transform: rotate3d(0, 0, 1, 15deg);
              }

              40% {
                -webkit-transform: rotate3d(0, 0, 1, -10deg);
                -ms-transform: rotate3d(0, 0, 1, -10deg);
                transform: rotate3d(0, 0, 1, -10deg);
              }

              60% {
                -webkit-transform: rotate3d(0, 0, 1, 5deg);
                -ms-transform: rotate3d(0, 0, 1, 5deg);
                transform: rotate3d(0, 0, 1, 5deg);
              }

              80% {
                -webkit-transform: rotate3d(0, 0, 1, -5deg);
                -ms-transform: rotate3d(0, 0, 1, -5deg);
                transform: rotate3d(0, 0, 1, -5deg);
              }

              100% {
                -webkit-transform: rotate3d(0, 0, 1, 0deg);
                -ms-transform: rotate3d(0, 0, 1, 0deg);
                transform: rotate3d(0, 0, 1, 0deg);
              }
            }
                */}
            },
            {
                name: 'tada',
                keyframes: function() {/*
                    @keyframes tada {
              0% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }

              10%, 20% {
                -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
                -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
                transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
              }

              30%, 50%, 70%, 90% {
                -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
                -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
                transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
              }

              40%, 60%, 80% {
                -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
                -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
                transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
              }

              100% {
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }
                */}
            },
            {
                name: 'wobble',
                keyframes: function() {/*
                    @keyframes wobble {
              0% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }

              15% {
                -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
              }

              30% {
                -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
              }

              45% {
                -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
              }

              60% {
                -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
              }

              75% {
                -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
              }

              100% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Bouncing Entrances',
        list: [
            {
                name: 'bounceIn',
                keyframes: function() {/*
                    @keyframes bounceIn {
              0%, 20%, 40%, 60%, 80%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              }

              0% {
                opacity: 0;
                -webkit-transform: scale3d(.3, .3, .3);
                -ms-transform: scale3d(.3, .3, .3);
                transform: scale3d(.3, .3, .3);
              }

              20% {
                -webkit-transform: scale3d(1.1, 1.1, 1.1);
                -ms-transform: scale3d(1.1, 1.1, 1.1);
                transform: scale3d(1.1, 1.1, 1.1);
              }

              40% {
                -webkit-transform: scale3d(.9, .9, .9);
                -ms-transform: scale3d(.9, .9, .9);
                transform: scale3d(.9, .9, .9);
              }

              60% {
                opacity: 1;
                -webkit-transform: scale3d(1.03, 1.03, 1.03);
                -ms-transform: scale3d(1.03, 1.03, 1.03);
                transform: scale3d(1.03, 1.03, 1.03);
              }

              80% {
                -webkit-transform: scale3d(.97, .97, .97);
                -ms-transform: scale3d(.97, .97, .97);
                transform: scale3d(.97, .97, .97);
              }

              100% {
                opacity: 1;
                -webkit-transform: scale3d(1, 1, 1);
                -ms-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }
            }
                */}
            },
            {
                name: 'bounceInDown',
                keyframes: function() {/*
                    @keyframes bounceInDown {
              0%, 60%, 75%, 90%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              }

              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, -3000px, 0);
                -ms-transform: translate3d(0, -3000px, 0);
                transform: translate3d(0, -3000px, 0);
              }

              60% {
                opacity: 1;
                -webkit-transform: translate3d(0, 25px, 0);
                -ms-transform: translate3d(0, 25px, 0);
                transform: translate3d(0, 25px, 0);
              }

              75% {
                -webkit-transform: translate3d(0, -10px, 0);
                -ms-transform: translate3d(0, -10px, 0);
                transform: translate3d(0, -10px, 0);
              }

              90% {
                -webkit-transform: translate3d(0, 5px, 0);
                -ms-transform: translate3d(0, 5px, 0);
                transform: translate3d(0, 5px, 0);
              }

              100% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'bounceInLeft',
                keyframes: function() {/*
                    @keyframes bounceInLeft {
              0%, 60%, 75%, 90%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              }

              0% {
                opacity: 0;
                -webkit-transform: translate3d(-3000px, 0, 0);
                -ms-transform: translate3d(-3000px, 0, 0);
                transform: translate3d(-3000px, 0, 0);
              }

              60% {
                opacity: 1;
                -webkit-transform: translate3d(25px, 0, 0);
                -ms-transform: translate3d(25px, 0, 0);
                transform: translate3d(25px, 0, 0);
              }

              75% {
                -webkit-transform: translate3d(-10px, 0, 0);
                -ms-transform: translate3d(-10px, 0, 0);
                transform: translate3d(-10px, 0, 0);
              }

              90% {
                -webkit-transform: translate3d(5px, 0, 0);
                -ms-transform: translate3d(5px, 0, 0);
                transform: translate3d(5px, 0, 0);
              }

              100% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'bounceInRight',
                keyframes: function() {/*
                    @keyframes bounceInRight {
              0%, 60%, 75%, 90%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              }

              0% {
                opacity: 0;
                -webkit-transform: translate3d(3000px, 0, 0);
                -ms-transform: translate3d(3000px, 0, 0);
                transform: translate3d(3000px, 0, 0);
              }

              60% {
                opacity: 1;
                -webkit-transform: translate3d(-25px, 0, 0);
                -ms-transform: translate3d(-25px, 0, 0);
                transform: translate3d(-25px, 0, 0);
              }

              75% {
                -webkit-transform: translate3d(10px, 0, 0);
                -ms-transform: translate3d(10px, 0, 0);
                transform: translate3d(10px, 0, 0);
              }

              90% {
                -webkit-transform: translate3d(-5px, 0, 0);
                -ms-transform: translate3d(-5px, 0, 0);
                transform: translate3d(-5px, 0, 0);
              }

              100% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'bounceInUp',
                keyframes: function() {/*
                    @keyframes bounceInUp {
              0%, 60%, 75%, 90%, 100% {
                -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              }

              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, 3000px, 0);
                -ms-transform: translate3d(0, 3000px, 0);
                transform: translate3d(0, 3000px, 0);
              }

              60% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0);
                -ms-transform: translate3d(0, -20px, 0);
                transform: translate3d(0, -20px, 0);
              }

              75% {
                -webkit-transform: translate3d(0, 10px, 0);
                -ms-transform: translate3d(0, 10px, 0);
                transform: translate3d(0, 10px, 0);
              }

              90% {
                -webkit-transform: translate3d(0, -5px, 0);
                -ms-transform: translate3d(0, -5px, 0);
                transform: translate3d(0, -5px, 0);
              }

              100% {
                -webkit-transform: translate3d(0, 0, 0);
                -ms-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Bouncing Exits',
        list: [
            {
                name: 'bounceOut',
                keyframes: function() {/*
                    @keyframes bounceOut {
              20% {
                -webkit-transform: scale3d(.9, .9, .9);
                -ms-transform: scale3d(.9, .9, .9);
                transform: scale3d(.9, .9, .9);
              }

              50%, 55% {
                opacity: 1;
                -webkit-transform: scale3d(1.1, 1.1, 1.1);
                -ms-transform: scale3d(1.1, 1.1, 1.1);
                transform: scale3d(1.1, 1.1, 1.1);
              }

              100% {
                opacity: 0;
                -webkit-transform: scale3d(.3, .3, .3);
                -ms-transform: scale3d(.3, .3, .3);
                transform: scale3d(.3, .3, .3);
              }
            }
                */}
            },
            {
                name: 'bounceOutDown',
                keyframes: function() {/*
                    @keyframes bounceOutDown {
              20% {
                -webkit-transform: translate3d(0, 10px, 0);
                -ms-transform: translate3d(0, 10px, 0);
                transform: translate3d(0, 10px, 0);
              }

              40%, 45% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0);
                -ms-transform: translate3d(0, -20px, 0);
                transform: translate3d(0, -20px, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, 2000px, 0);
                -ms-transform: translate3d(0, 2000px, 0);
                transform: translate3d(0, 2000px, 0);
              }
            }
                */}
            },
            {
                name: 'bounceOutLeft',
                keyframes: function() {/*
                    @keyframes bounceOutLeft {
              20% {
                opacity: 1;
                -webkit-transform: translate3d(20px, 0, 0);
                -ms-transform: translate3d(20px, 0, 0);
                transform: translate3d(20px, 0, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(-2000px, 0, 0);
                -ms-transform: translate3d(-2000px, 0, 0);
                transform: translate3d(-2000px, 0, 0);
              }
            }
                */}
            },
            {
                name: 'bounceOutRight',
                keyframes: function() {/*
                    @keyframes bounceOutRight {
              20% {
                opacity: 1;
                -webkit-transform: translate3d(-20px, 0, 0);
                -ms-transform: translate3d(-20px, 0, 0);
                transform: translate3d(-20px, 0, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(2000px, 0, 0);
                -ms-transform: translate3d(2000px, 0, 0);
                transform: translate3d(2000px, 0, 0);
              }
            }
                */}
            },
            {
                name: 'bounceOutUp',
                keyframes: function() {/*
                    @keyframes bounceOutUp {
              20% {
                -webkit-transform: translate3d(0, -10px, 0);
                -ms-transform: translate3d(0, -10px, 0);
                transform: translate3d(0, -10px, 0);
              }

              40%, 45% {
                opacity: 1;
                -webkit-transform: translate3d(0, 20px, 0);
                -ms-transform: translate3d(0, 20px, 0);
                transform: translate3d(0, 20px, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, -2000px, 0);
                -ms-transform: translate3d(0, -2000px, 0);
                transform: translate3d(0, -2000px, 0);
              }
            }
                */}
            }
        ]
    },

    {
        name: 'Fading Entrances',
        list: [
            {
                name: 'fadeIn',
                keyframes: function() {/*
                    @keyframes fadeIn {
              0% {
                opacity: 0;
              }

              100% {
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'fadeInDown',
                keyframes: function() {/*
                    @keyframes fadeInDown {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, -100%, 0);
                -ms-transform: translate3d(0, -100%, 0);
                transform: translate3d(0, -100%, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInDownBig',
                keyframes: function() {/*
                    @keyframes fadeInDownBig {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, -2000px, 0);
                -ms-transform: translate3d(0, -2000px, 0);
                transform: translate3d(0, -2000px, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInLeft',
                keyframes: function() {/*
                    @keyframes fadeInLeft {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(-100%, 0, 0);
                -ms-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInLeftBig',
                keyframes: function() {/*
                    @keyframes fadeInLeftBig {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(-2000px, 0, 0);
                -ms-transform: translate3d(-2000px, 0, 0);
                transform: translate3d(-2000px, 0, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInRight',
                keyframes: function() {/*
                    @keyframes fadeInRight {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(100%, 0, 0);
                -ms-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInRightBig',
                keyframes: function() {/*
                    @keyframes fadeInRightBig {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(2000px, 0, 0);
                -ms-transform: translate3d(2000px, 0, 0);
                transform: translate3d(2000px, 0, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInUp',
                keyframes: function() {/*
                    @keyframes fadeInUp {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                -ms-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'fadeInUpBig',
                keyframes: function() {/*
                    @keyframes fadeInUpBig {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(0, 2000px, 0);
                -ms-transform: translate3d(0, 2000px, 0);
                transform: translate3d(0, 2000px, 0);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Fading Exits',
        list: [
            {
                name: 'fadeOut',
                keyframes: function() {/*
                    @keyframes fadeOut {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'fadeOutDown',
                keyframes: function() {/*
                    @keyframes fadeOutDown {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, 100%, 0);
                -ms-transform: translate3d(0, 100%, 0);
                transform: translate3d(0, 100%, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutDownBig',
                keyframes: function() {/*
                    @keyframes fadeOutDownBig {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, 2000px, 0);
                -ms-transform: translate3d(0, 2000px, 0);
                transform: translate3d(0, 2000px, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutLeft',
                keyframes: function() {/*
                    @keyframes fadeOutLeft {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(-100%, 0, 0);
                -ms-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutLeftBig',
                keyframes: function() {/*
                    @keyframes fadeOutLeftBig {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(-2000px, 0, 0);
                -ms-transform: translate3d(-2000px, 0, 0);
                transform: translate3d(-2000px, 0, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutRight',
                keyframes: function() {/*
                    @keyframes fadeOutRight {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(100%, 0, 0);
                -ms-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutRightBig',
                keyframes: function() {/*
                    @keyframes fadeOutRightBig {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(2000px, 0, 0);
                -ms-transform: translate3d(2000px, 0, 0);
                transform: translate3d(2000px, 0, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutUp',
                keyframes: function() {/*
                    @keyframes fadeOutUp {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, -100%, 0);
                -ms-transform: translate3d(0, -100%, 0);
                transform: translate3d(0, -100%, 0);
              }
            }
                */}
            },
            {
                name: 'fadeOutUpBig',
                keyframes: function() {/*
                    @keyframes fadeOutUpBig {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(0, -2000px, 0);
                -ms-transform: translate3d(0, -2000px, 0);
                transform: translate3d(0, -2000px, 0);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Flippers',
        list: [
            {
                name: 'flip',
                keyframes: function() {/*
                    @keyframes flip {
              0% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
                transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
              }

              40% {
                -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
                -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
                transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
              }

              50% {
                -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
                -ms-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
                transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
              }

              80% {
                -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
                -ms-transform: perspective(400px) scale3d(.95, .95, .95);
                transform: perspective(400px) scale3d(.95, .95, .95);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
              }

              100% {
                -webkit-transform: perspective(400px);
                -ms-transform: perspective(400px);
                transform: perspective(400px);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
              }
            }
                */}
            },
            {
                name: 'flipInX',
                keyframes: function() {/*
                    @keyframes flipInX {
              0% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                -webkit-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
                opacity: 0;
              }

              40% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                -webkit-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
              }

              60% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
                transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
                opacity: 1;
              }

              80% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
                transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
              }

              100% {
                -webkit-transform: perspective(400px);
                -ms-transform: perspective(400px);
                transform: perspective(400px);
              }
            }
                */}
            },
            {
                name: 'flipInY',
                keyframes: function() {/*
                    @keyframes flipInY {
              0% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                -webkit-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
                opacity: 0;
              }

              40% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
                transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
                -webkit-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
              }

              60% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
                transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
                opacity: 1;
              }

              80% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
                transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
              }

              100% {
                -webkit-transform: perspective(400px);
                -ms-transform: perspective(400px);
                transform: perspective(400px);
              }
            }
                */}
            },
            {
                name: 'flipOutX',
                keyframes: function() {/*
                    @keyframes flipOutX {
              0% {
                -webkit-transform: perspective(400px);
                -ms-transform: perspective(400px);
                transform: perspective(400px);
              }

              30% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                opacity: 1;
              }

              100% {
                -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                -ms-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'flipOutY',
                keyframes: function() {/*
                    @keyframes flipOutY {
              0% {
                -webkit-transform: perspective(400px);
                -ms-transform: perspective(400px);
                transform: perspective(400px);
              }

              30% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
                transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
                opacity: 1;
              }

              100% {
                -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                -ms-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
                opacity: 0;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Lightspeed',
        list: [
            {
                name: 'lightSpeedIn',
                keyframes: function() {/*
                    @keyframes lightSpeedIn {
              0% {
                -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
                -ms-transform: translate3d(100%, 0, 0) skewX(-30deg);
                transform: translate3d(100%, 0, 0) skewX(-30deg);
                opacity: 0;
              }

              60% {
                -webkit-transform: skewX(20deg);
                -ms-transform: skewX(20deg);
                transform: skewX(20deg);
                opacity: 1;
              }

              80% {
                -webkit-transform: skewX(-5deg);
                -ms-transform: skewX(-5deg);
                transform: skewX(-5deg);
                opacity: 1;
              }

              100% {
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'lightSpeedOut',
                keyframes: function() {/*
                    @keyframes lightSpeedOut {
              0% {
                opacity: 1;
              }

              100% {
                -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
                -ms-transform: translate3d(100%, 0, 0) skewX(30deg);
                transform: translate3d(100%, 0, 0) skewX(30deg);
                opacity: 0;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Rotating Entrances',
        list: [
            {
                name: 'rotateIn',
                keyframes: function() {/*
                    @keyframes rotateIn {
              0% {
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate3d(0, 0, 1, -200deg);
                -ms-transform: rotate3d(0, 0, 1, -200deg);
                transform: rotate3d(0, 0, 1, -200deg);
                opacity: 0;
              }

              100% {
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'rotateInDownLeft',
                keyframes: function() {/*
                    @keyframes rotateInDownLeft {
              0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate3d(0, 0, 1, -45deg);
                -ms-transform: rotate3d(0, 0, 1, -45deg);
                transform: rotate3d(0, 0, 1, -45deg);
                opacity: 0;
              }

              100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'rotateInDownRight',
                keyframes: function() {/*
                    @keyframes rotateInDownRight {
              0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate3d(0, 0, 1, 45deg);
                -ms-transform: rotate3d(0, 0, 1, 45deg);
                transform: rotate3d(0, 0, 1, 45deg);
                opacity: 0;
              }

              100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'rotateInUpLeft',
                keyframes: function() {/*
                    @keyframes rotateInUpLeft {
              0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate3d(0, 0, 1, 45deg);
                -ms-transform: rotate3d(0, 0, 1, 45deg);
                transform: rotate3d(0, 0, 1, 45deg);
                opacity: 0;
              }

              100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'rotateInUpRight',
                keyframes: function() {/*
                    @keyframes rotateInUpRight {
              0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate3d(0, 0, 1, -90deg);
                -ms-transform: rotate3d(0, 0, 1, -90deg);
                transform: rotate3d(0, 0, 1, -90deg);
                opacity: 0;
              }

              100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                opacity: 1;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'rotating Exits',
        list: [
            {
                name: 'rotateOut',
                keyframes: function() {/*
                    @keyframes rotateOut {
              0% {
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                opacity: 1;
              }

              100% {
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate3d(0, 0, 1, 200deg);
                -ms-transform: rotate3d(0, 0, 1, 200deg);
                transform: rotate3d(0, 0, 1, 200deg);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'rotateOutDownLeft',
                keyframes: function() {/*
                    @keyframes rotateOutDownLeft {
              0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                opacity: 1;
              }

              100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate3d(0, 0, 1, 45deg);
                -ms-transform: rotate3d(0, 0, 1, 45deg);
                transform: rotate3d(0, 0, 1, 45deg);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'rotateOutDownRight',
                keyframes: function() {/*
                    @keyframes rotateOutDownRight {
              0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                opacity: 1;
              }

              100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate3d(0, 0, 1, -45deg);
                -ms-transform: rotate3d(0, 0, 1, -45deg);
                transform: rotate3d(0, 0, 1, -45deg);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'rotateOutUpLeft',
                keyframes: function() {/*
                    @keyframes rotateOutUpLeft {
              0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                opacity: 1;
              }

              100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate3d(0, 0, 1, -45deg);
                -ms-transform: rotate3d(0, 0, 1, -45deg);
                transform: rotate3d(0, 0, 1, -45deg);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'rotateOutUpRight',
                keyframes: function() {/*
                    @keyframes rotateOutUpRight {
              0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                opacity: 1;
              }

              100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate3d(0, 0, 1, 90deg);
                -ms-transform: rotate3d(0, 0, 1, 90deg);
                transform: rotate3d(0, 0, 1, 90deg);
                opacity: 0;
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Sliding Entrances',
        list: [
            {
                name: 'slideInDown',
                keyframes: function() {/*
                    @keyframes slideInDown {
              0% {
                -webkit-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                transform: translateY(-100%);
                visibility: visible;
              }

              100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
              }
            }
                */}
            },
            {
                name: 'slideInLeft',
                keyframes: function() {/*
                    @keyframes slideInLeft {
              0% {
                -webkit-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                transform: translateX(-100%);
                visibility: visible;
              }

              100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
              }
            }
                */}
            },
            {
                name: 'slideInRight',
                keyframes: function() {/*
                    @keyframes slideInRight {
              0% {
                -webkit-transform: translateX(100%);
                -ms-transform: translateX(100%);
                transform: translateX(100%);
                visibility: visible;
              }

              100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
              }
            }
                */}
            },
            {
                name: 'slideInUp',
                keyframes: function() {/*
                    @keyframes slideInUp {
              0% {
                -webkit-transform: translateY(100%);
                -ms-transform: translateY(100%);
                transform: translateY(100%);
                visibility: visible;
              }

              100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Sliding Exits',
        list: [
            {
                name: 'slideOutDown',
                keyframes: function() {/*
                    @keyframes slideOutDown {
              0% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
              }

              100% {
                visibility: hidden;
                -webkit-transform: translateY(100%);
                -ms-transform: translateY(100%);
                transform: translateY(100%);
              }
            }
                */}
            },
            {
                name: 'slideOutLeft',
                keyframes: function() {/*
                    @keyframes slideOutLeft {
              0% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
              }

              100% {
                visibility: hidden;
                -webkit-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                transform: translateX(-100%);
              }
            }
                */}
            },
            {
                name: 'slideOutRight',
                keyframes: function() {/*
                    @keyframes slideOutRight {
              0% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
              }

              100% {
                visibility: hidden;
                -webkit-transform: translateX(100%);
                -ms-transform: translateX(100%);
                transform: translateX(100%);
              }
            }
                */}
            },
            {
                name: 'slideOutUp',
                keyframes: function() {/*
                    @keyframes slideOutUp {
              0% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
              }

              100% {
                visibility: hidden;
                -webkit-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                transform: translateY(-100%);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Zoom exits',
        list: [
            {
                name: 'zoomOut',
                keyframes: function() {/*
                    @keyframes zoomOut {
              0% {
                opacity: 1;
              }

              50% {
                opacity: 0;
                -webkit-transform: scale3d(.3, .3, .3);
                -ms-transform: scale3d(.3, .3, .3);
                transform: scale3d(.3, .3, .3);
              }

              100% {
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'zoomOutDown',
                keyframes: function() {/*
                    @keyframes zoomOutDown {
              40% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              100% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
                transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
                -webkit-transform-origin: center bottom;
                -ms-transform-origin: center bottom;
                transform-origin: center bottom;
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            },
            {
                name: 'zoomOutLeft',
                keyframes: function() {/*
                    @keyframes zoomOutLeft {
              40% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
                transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
                -ms-transform: scale(.1) translate3d(-2000px, 0, 0);
                transform: scale(.1) translate3d(-2000px, 0, 0);
                -webkit-transform-origin: left center;
                -ms-transform-origin: left center;
                transform-origin: left center;
              }
            }
                */}
            },
            {
                name: 'zoomOutRight',
                keyframes: function() {/*
                    @keyframes zoomOutRight {
              40% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
                transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
              }

              100% {
                opacity: 0;
                -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
                -ms-transform: scale(.1) translate3d(2000px, 0, 0);
                transform: scale(.1) translate3d(2000px, 0, 0);
                -webkit-transform-origin: right center;
                -ms-transform-origin: right center;
                transform-origin: right center;
              }
            }
                */}
            },
            {
                name: 'zoomOutUp',
                keyframes: function() {/*
                    @keyframes zoomOutUp {
              40% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              100% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
                transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
                -webkit-transform-origin: center bottom;
                -ms-transform-origin: center bottom;
                transform-origin: center bottom;
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Zoom Entrances',
        list: [
            {
                name: 'zoomIn',
                keyframes: function() {/*
                    @keyframes zoomIn {
              0% {
                opacity: 0;
                -webkit-transform: scale3d(.3, .3, .3);
                -ms-transform: scale3d(.3, .3, .3);
                transform: scale3d(.3, .3, .3);
              }

              50% {
                opacity: 1;
              }
            }
                */}
            },
            {
                name: 'zoomInDown',
                keyframes: function() {/*
                    @keyframes zoomInDown {
              0% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
                transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              60% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            },
            {
                name: 'zoomInLeft',
                keyframes: function() {/*
                    @keyframes zoomInLeft {
              0% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
                transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              60% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
                transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            },
            {
                name: 'zoomInRight',
                keyframes: function() {/*
                    @keyframes zoomInRight {
              0% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
                transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              60% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
                transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            },
            {
                name: 'zoomInUp',
                keyframes: function() {/*
                    @keyframes zoomInUp {
              0% {
                opacity: 0;
                -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
                -ms-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
                transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
                animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
              }

              60% {
                opacity: 1;
                -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                -ms-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
                -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
                animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
              }
            }
                */}
            }
        ]
    },

    {
        groupName: 'Specials',
        list: [
            {
                name: 'hinge',
                keyframes: function() {/*
                    @keyframes hinge {
              0% {
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
              }

              20%, 60% {
                -webkit-transform: rotate3d(0, 0, 1, 80deg);
                -ms-transform: rotate3d(0, 0, 1, 80deg);
                transform: rotate3d(0, 0, 1, 80deg);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
              }

              40%, 80% {
                -webkit-transform: rotate3d(0, 0, 1, 60deg);
                -ms-transform: rotate3d(0, 0, 1, 60deg);
                transform: rotate3d(0, 0, 1, 60deg);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
                opacity: 1;
              }

              100% {
                -webkit-transform: translate3d(0, 700px, 0);
                -ms-transform: translate3d(0, 700px, 0);
                transform: translate3d(0, 700px, 0);
                opacity: 0;
              }
            }
                */}
            },
            {
                name: 'rollIn',
                keyframes: function() {/*
                    @keyframes rollIn {
              0% {
                opacity: 0;
                -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
                -ms-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
                transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
              }

              100% {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
              }
            }
                */}
            },
            {
                name: 'rollOut',
                keyframes: function() {/*
                    @keyframes rollOut {
              0% {
                opacity: 1;
              }

              100% {
                opacity: 0;
                -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
                -ms-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
                transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
              }
            }
                */}
            }
        ]
    }
]


