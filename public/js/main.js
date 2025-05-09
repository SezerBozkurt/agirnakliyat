document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü işlevselliği
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Referanslar için slider işlevselliği
    const testimonials = [
        {
            name: 'Mehmet Yılmaz',
            company: 'Yılmaz İnşaat A.Ş.',
            position: 'Proje Müdürü',
            quote: 'Yıldırım Ağır Nakliyat ile çalışmak her zaman güven verici olmuştur. İnşaat projemizde ihtiyaç duyduğumuz ağır ekipmanların taşınması sürecinde profesyonel yaklaşımları ve zamanında teslimatları ile bizi hiç yanıltmadılar.',
            stars: 5
        },
        {
            name: 'Ayşe Demir',
            company: 'Demir Makina Ltd. Şti.',
            position: 'Satın Alma Direktörü',
            quote: 'Fabrikamızın taşınması sürecinde çok zorlu bir dönem geçirdik, ancak Yıldırım Ağır Nakliyat ekibi her detayı düşünerek sorunsuz bir taşıma gerçekleştirdi. Ağır makinelerimizin güvenle taşınması konusunda gösterdikleri özen takdire şayan.',
            stars: 5
        },
        {
            name: 'Ahmet Kaya',
            company: 'Kaya Enerji Sistemleri',
            position: 'Genel Müdür',
            quote: 'Rüzgar türbini parçalarımızın zorlu arazi şartlarında taşınması gerekiyordu. Yıldırım Ağır Nakliyat ekibi, hem lojistik planlamada hem de uygulama aşamasında gösterdikleri uzmanlıkla projemizin zamanında tamamlanmasını sağladı.',
            stars: 4
        },
        {
            name: 'Zeynep Şahin',
            company: 'Atlas Global Lojistik',
            position: 'Operasyon Müdürü',
            quote: 'Uluslararası projelerimizde Yıldırım Ağır Nakliyat ile çalışmak her zaman avantaj sağlıyor. Özellikle sınır geçişlerindeki deneyimleri ve dokümantasyon konusundaki titizlikleri ile süreçlerimizi oldukça kolaylaştırıyorlar.',
            stars: 5
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialContent = document.getElementById('testimonialContent');
    const navDots = document.querySelectorAll('.nav-dot');
    
    if (testimonialContent && navDots.length > 0) {
        // İlk testimonial'i göster
        updateTestimonial();
        
        // Navigasyon noktalarına tıklama işlevselliği ekle
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                updateTestimonial();
            });
        });
    }
    
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        
        // Yıldızları oluştur
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < testimonial.stars) {
                starsHTML += '<span class="star">★</span>';
            } else {
                starsHTML += '<span class="star empty">★</span>';
            }
        }
        
        // HTML içeriğini güncelle
        testimonialContent.innerHTML = `
            <div class="stars">
                ${starsHTML}
            </div>
            <p class="testimonial-text">"${testimonial.quote}"</p>
            <div class="testimonial-author">
                <h4>${testimonial.name}</h4>
                <p class="testimonial-position">${testimonial.position}</p>
                <p class="testimonial-company">${testimonial.company}</p>
            </div>
        `;
        
        // Aktif navigasyon noktasını güncelle
        navDots.forEach((dot, index) => {
            if (index === currentTestimonial) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Sayfa kaydırma animasyonu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Header yüksekliği için offset
                    behavior: 'smooth'
                });
                
                // Mobil menüyü kapat
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}); 