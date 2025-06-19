
function toggleMenu() {
            document.getElementById("navLinks").classList.toggle("active");
        }

const toggle = document.getElementById('darkToggle');
        toggle.onclick = () => {
            document.body.classList.toggle('dark');
        };

// Register plugin
        gsap.registerPlugin(ScrollTrigger);

        // Navbar entry animation
        gsap.from(".navbar", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Staggered nav links
        gsap.from(".nav-links li", {
            y: -30,
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });

        // Section scroll animations
        gsap.utils.toArray("section").forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        function toggleMenu() {
            document.getElementById("navLinks").classList.toggle("active");
        }