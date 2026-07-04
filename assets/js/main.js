// assets/js/main.js

'use strict';

/* ==========================================
   ENTERPRISE TECHNOLOGY HUB
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    initHeader();

    initReveal();

    initCards();

    initNavigation();

    initButtons();

});

/* ==========================================
   Header Blur
========================================== */

function initHeader() {

    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 40) {

            header.style.background = 'rgba(2,6,23,.90)';
            header.style.borderBottom = '1px solid rgba(255,255,255,.08)';
            header.style.backdropFilter = 'blur(20px)';

        } else {

            header.style.background = 'rgba(2,6,23,.72)';
            header.style.borderBottom = '1px solid rgba(255,255,255,.08)';

        }

    });

}

/* ==========================================
   Reveal Animation
========================================== */

function initReveal() {

    const elements = document.querySelectorAll(

        '.metric-card, .project-card, .glass-card, .summary-card'

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    elements.forEach(element => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = '.7s ease';

        observer.observe(element);

    });

}

/* ==========================================
   Card Hover Glow
========================================== */

function initCards() {

    const cards = document.querySelectorAll(

        '.project-card, .glass-card, .metric-card'

    );

    cards.forEach(card => {

        card.addEventListener('mousemove', e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
            radial-gradient(
            circle at ${x}px ${y}px,
            rgba(37,99,235,.18),
            rgba(255,255,255,.04) 45%)
            `;

        });

        card.addEventListener('mouseleave', () => {

            card.style.background = 'var(--glass)';

        });

    });

}

/* ==========================================
   Smooth Navigation
========================================== */

function initNavigation() {

    document.querySelectorAll('a[href^="#"]')

        .forEach(link => {

            link.addEventListener('click', function (e) {

                const target = document.querySelector(

                    this.getAttribute('href')

                );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: 'smooth',

                    block: 'start'

                });

            });

        });

}

/* ==========================================
   Button Micro Interaction
========================================== */

function initButtons() {

    document.querySelectorAll('.btn')

        .forEach(button => {

            button.addEventListener('mouseenter', () => {

                button.style.transform = 'translateY(-3px) scale(1.02)';

            });

            button.addEventListener('mouseleave', () => {

                button.style.transform = '';

            });

        });

}

/* ==========================================
   Console Signature
========================================== */

console.log(

`============================================

AKILA'S ENTERPRISE TECHNOLOGY HUB

Enterprise Engineering Showcase

AI Engineering
Solution Architecture
Technology Strategy
Digital Transformation

============================================`

);