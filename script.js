
var typed = new Typed('.typed-text', {
    strings: ["وايت مياه صالحة للشرب", "معنا ستشعر بالفرق"],
    typeSpeed: 50, // سرعة الكتابة بالمللي ثانية
    startDelay: 500, // تأخير قبل بدء الكتابة
    backSpeed: 30, // سرعة المسح بالمللي ثانية
    backDelay: 1000, // تأخير قبل بدء المسح والانتقال للنص التالي
    loop: true, // تكرار الكتابة
    showCursor: false,
    smartBackspace: true // يمسح فقط الأحرف غير المتطابقة مع النص التالي
});
gsap.registerPlugin(ScrollTrigger);

// Animation for #woman element
gsap.fromTo("#woman", 
    {   
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    {   
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: "#woman",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);

// Animation for #section-h2 element
gsap.fromTo("#section-h2", 
    {   
        y: 100,
        autoAlpha: 0,
    },
    {   
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-h2",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);
document.querySelectorAll('.imgs').forEach(img => {
    gsap.fromTo(img, 
        {   
            y: 400,
            autoAlpha: 0,
        },
        {   
            duration: 2,
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "top 30%",
                markers: false
            }
        }
    );
});

// Animation for #section-p element
gsap.fromTo("#section-p", 
    {   
        y: 100,
        autoAlpha: 0,
    },
    {   
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-p",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);

// Animation for #man element
gsap.fromTo("#man", 
    {   
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
    },
    {   
        duration: 2,
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
            trigger: "#man",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);

// Animation for #section2-h2 element
gsap.fromTo("#section2-h2", 
    {   
        y: 100,
        autoAlpha: 0,
    },
    {   
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section2-h2",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);

// Animation for #section2-p element
gsap.fromTo("#section2-p", 
    {   
        y: 100,
        autoAlpha: 0,
    },
    {   
        duration: 2,
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section2-p",
            start: "top 80%",
            end: "top 30%",
            markers: false
        }
    }
);
