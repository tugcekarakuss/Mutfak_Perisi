/*tarid kategori başladı*/
function showCategory(categoryId) {
    // Tüm kategorileri gizle
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.classList.remove('active');
    });

    // Seçilen kategoriyi göster
    var selectedCategory = document.getElementById(categoryId);
    selectedCategory.classList.add('active');
}

// İlk açılışta tüm kategorileri göster
document.addEventListener('DOMContentLoaded', function() {
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.classList.add('active');
    });
});

/*tarif kategori bitti*/

/*blog yazı içeriği başladı*/ 
document.addEventListener("DOMContentLoaded", function() {
    const blogBoxes = document.querySelectorAll(".box");
    const blogDetailSection = document.getElementById("blog-detail");
    const blogsSection = document.getElementById("blogs");

    const blogDetailTitle = document.getElementById("blog-detail-title");
    const blogDetailImage = document.getElementById("blog-detail-image");
    const blogDetailText = document.getElementById("blog-detail-text");

    const backButton = document.getElementById("back-button");

    const blogPosts = {
        content1: {
            title: "Kek Yapmanın Sırları",
            content: "Blog içeriği 1 burada...",
            image: "photos/kek.jpg"
        },
        content2: {
            title: "Cevizlerin Sağlığa Faydaları",
            content: "Blog içeriği 2 burada...",
            image: "photos/ceviz.jpg"
        },
        content3: {
            title: "Kahvenin Yükselen Ruhu",
            content: "Blog içeriği 3 burada...",
            image: "photos/kahve.jpg"
        },
        content4: {
            title: "Bir Şefin Kimseyle Paylaşmadığı 14 Sır Püf Noktası",
            content: "Blog içeriği 1 burada...",
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/03/kek-malzemeleri-subat-2021.jpg"
        },
        content5: {
            title: "Kanser Riskini Azaltarak Daha Sağlıklı Bir Hayat Sunan 10 Kahraman Yiyecek",
            content: "Blog içeriği 2 burada...",
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2024/04/orman-meyveleri-shutter-1.jpg"
        },
        content6: {
            title: "Karbonhidrat Hangi Besinlerde Bulunur, Faydaları Nelerdir?",
            content: "Blog içeriği 3 burada...",
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/03/karbonhidratlar-shutter.jpg"
        },
        content7: {
            title: "Her Akşam Bir Bardak İçmeli: Havuç Suyunun Faydaları",
            content: "Blog içeriği 1 burada...",
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2024/02/havuc-suyu-shutter3.jpg"
        },
        content8: {
            title: "Bilmeyen Kalmasın: Domates Meyve mi Sebze mi?",
            content: "Blog içeriği 2 burada...",
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/07/domates-sebze-aralik-2020.jpg"
        },
        content9: {
            title: "Trabzon Hurması Neye İyi Gelir? Diyenlere: Cennet Hurması Faydaları",
            content: "Blog içeriği 3 burada...",
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/cennet-hurmasi-aralik-2020-nerede-bulunur.jpg"
        }
        
    };

    blogBoxes.forEach(box => {
        box.addEventListener("click", function() {
            const contentKey = this.getAttribute("data-content");
            const post = blogPosts[contentKey];
            blogDetailTitle.textContent = post.title;
            blogDetailText.textContent = post.content;
            blogDetailImage.src = post.image;
            blogDetailImage.alt = post.title;
            blogsSection.style.display = "none";
            blogDetailSection.style.display = "block";
        });
    });

    backButton.addEventListener("click", function() {
        blogDetailSection.style.display = "none";
        blogsSection.style.display = "block";
    });
});
/*blog yazı içeriği bitti*/
