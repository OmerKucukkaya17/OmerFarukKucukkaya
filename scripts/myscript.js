// Sayfa tamamen yüklendiğinde çalışacak kodlar
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. MOBİL MENÜ TETİKLEYİCİSİ (Responsive Layout için)
    const menuToggle = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // 2. ENTEGRE JAVASCRIPT UYGULAMASI (İndirim Kuponu Kazanma Quiz'i)
    const checkQuizBtn = document.getElementById("checkQuiz");
    
    if (checkQuizBtn) {
        checkQuizBtn.addEventListener("click", function () {
            // Seçilen cevapları alıyoruz
            const q1Answer = document.querySelector('input[name="q1"]:checked');
            const q2Answer = document.querySelector('input[name="q2"]:checked');
            const resultText = document.getElementById("quizResult");

            // Kullanıcı boş bıraktıysa uyaralım
            if (!q1Answer || !q2Answer) {
                resultText.innerHTML = "Lütfen tüm soruları cevaplayın!";
                resultText.style.color = "orange";
                return;
            }

            // Doğru cevap kontrolü (Soru 1: B, Soru 2: A)
            if (q1Answer.value === "correct" && q2Answer.value === "correct") {
                resultText.innerHTML = "Tebrikler! Tüm sorular doğru. %10 İndirim Kodunuz: <b>ODEV2026</b>";
                resultText.style.color = "green";
            } else {
                resultText.innerHTML = "Maalesef yanlış cevap verdiniz, tekrar deneyin!";
                resultText.style.color = "red";
            }
        });
    }
});