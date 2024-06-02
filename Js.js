/*index sayfasından blog kısmına yönlendirme başladı*/
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const contentData = urlParams.get('content');

    if (contentData) {
      const content = JSON.parse(decodeURIComponent(contentData));
      
      document.getElementById('content-title').innerText = content.title;
      document.getElementById('content-text').innerHTML = content.content;
      document.getElementById('content-image').src = content.image;
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('content');

    if (contentId) {
      const selectedContent = document.querySelector(`.box[data-content="${contentId}"]`);
      if (selectedContent) {
        selectedContent.classList.add('active');
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.readmore');

    const contents = {
      content1: {
        title: "Kek Yapmanın Sırları",
        content: `<h2>Kek Her Denemede En İyi Nasıl Yapılır?</h2><br>
        <p>Kek pişirmek mutfak sanatının ve bilimin bir karışımıdır. İçi pamuk gibi yumuşacık, dışı kıtır kabuklu bir kek yapabilmek için ufak ayrıntıları gözden kaçırmamak birinci koşuldur. Bu ayrıntılara çırpma süresi ve şekli, kullanılan malzemelerin ısıları ve cinsleri de dahildir. Bununla birlikte pastacılıkta geliştirilmiş birçok farklı çeşidi olduğundan kekin nasıl bir kıvama sahip olacağı da değişkenlik gösterir. Kek pişirmenin öncelikli kurallarından bir diğeri de hamuru doğru kıvama gelene dek çırpmaktır. İçindeki hava kabarcıkları ne kadar yoğun ve doğru oranda olursa mamul de o denli güzel ve ipeksi bir dokuya sahip olur.</p><br>
        <p>Peki, gerçekten <b>kusursuz bir kek yapmanın püf noktaları</b> nelerdir?</p><br>
        <h2>Kek Yapmanın Püf Noktaları</h2><br>
        <ul>
        <li>Kek malzemeleri oda sıcaklığında olmalıdır.</li>
        <li>Tarif ölçülerine uyulmalıdır.</li>
        <li>Malzemeler doğru sıra ile eklenmelidir.</li>
        <li>Kuru malzemeler elenmelidir.</li>
        <li>Sıvılar yüksek hızda çırpılmalı; katılar yavaşça karıştırılmalıdır.</li>
        <li>Kek kalıbı yağlanıp unlanmalıdır.</li>
        <li>Kek yapmadan önce fırın ısıtılmalıdır.</li>
        <li>Kek pişerken fırın kapağı açılmamalıdır.</li>
        <li>Kek fırından alınınca kalıpta soğutulmalıdır.</li>
        </ul>`,
        image: "photos/kek.jpg"
      },
      // Diğer içerikler buraya eklenir.
    };

    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const contentId = this.getAttribute('data-content');
        const contentData = contents[contentId];

        // İçeriği JSON olarak URL'e ekle
        window.location.href = `blog.html?content=${encodeURIComponent(JSON.stringify(contentData))}`;
      });
    });
  });
/*index blog yönlendirme bitti*/

/*tarid kategori başladı*/
document.addEventListener("DOMContentLoaded", function() {
    const category = localStorage.getItem('category') || 'all';
    highlightCategory(category);
    filterCategory(category);
    localStorage.removeItem('category'); // İsteğe bağlı olarak öğeyi kullandıktan sonra temizleyin
});

function filterCategory(category) {
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        if (category === 'all') {
            items[i].style.display = 'block';
        } else {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
    highlightCategory(category);
}

function highlightCategory(category) {
    var categories = document.querySelectorAll('#categories li');
    categories.forEach(function(li) {
        li.classList.remove('active');
    });

    var selectedCategory = document.querySelector('#categories li[onclick*="' + category + '"]');
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
}

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
            content: `<h2>Kek Her Denemede En İyi Nasıl Yapılır?</h2><br>
            <p>Kek pişirmek mutfak sanatının ve bilimin bir karışımıdır. İçi pamuk gibi yumuşacık, dışı kıtır kabuklu bir kek yapabilmek için ufak ayrıntıları gözden kaçırmamak birinci koşuldur. Bu ayrıntılara çırpma süresi ve şekli, kullanılan malzemelerin ısıları ve cinsleri de dahildir. Bununla birlikte pastacılıkta geliştirilmiş birçok farklı çeşidi olduğundan kekin nasıl bir kıvama sahip olacağı da değişkenlik gösterir. Kek pişirmenin öncelikli kurallarından bir diğeri de hamuru doğru kıvama gelene dek çırpmaktır. İçindeki hava kabarcıkları ne kadar yoğun ve doğru oranda olursa mamul de o denli güzel ve ipeksi bir dokuya sahip olur.</p><br>
            <p>Peki, gerçekten <b>kusursuz bir kek yapmanın püf noktaları</b> nelerdir?</p><br>
            <h2>Kek Yapmanın Püf Noktaları</h2><br>
            <ul>
           <li> Kek malzemeleri oda sıcaklığında olmalıdır.</li>
           <li>Tarif ölçülerine uyulmalıdır.</li>
           <li>Malzemeler doğru sıra ile eklenmelidir.</li>
           <li>Kuru malzemeler elenmelidir.</li>
           <li> Sıvılar yüksek hızda çırpılmalı; katılar yavaşça karıştırılmalıdır.</li>
           <li> Kek kalıbı yağlanıp unlanmalıdır.</li>
           <li>Kek yapmadan önce fırın ısıtılmalıdır.</li>
           <li> Kek pişerken fırın kapağı açılmamalıdır.</li>
           <li>Kek fırından alınınca kalıpta soğutulmalıdır.</li>

            </ul>
            
            `,
            image: "photos/kek.jpg"
        },
        content2: {
            title: "Cevizlerin Sağlığa Faydaları",
            content: `<h2>Ceviz Hangi Hastalıklara İyi Gelir?</h2><br>
            <p>Ceviz, Juglandaceae ailesine ait Juglans cinsinden geleneksel olarak ağaçlarda yetişen bir yemiş türüdür. Genellikle ceviz ağacının meyvesi olarak bilinir ve sert bir kabuğun içinde yer alan yenilebilir bir iç kısmı vardır. Ceviz, besleyici değeri yüksek olan bir gıda maddesidir ve birçok faydalı bileşeni içerir.</p>
            <p>Cevizlerin sağlık açısından birçok faydası bulunur. Cevizin özellikle omega-3 yağ asitleri, protein, lif, antioksidanlar ve çeşitli vitaminler içermesi nedeniyle kalp sağlığı, beyin fonksiyonları, bağışıklık sistemini destekleme gibi konularda olumlu etkileri olabileceği düşünülmektedir. Cevizin lezzetli tadı, salatalar, tatlılar, ekmekler ve atıştırmalıklarda yaygın olarak kullanılmasına da neden olur.</p><br>
            <p>Peki cevizin faydaları nelerdir? Ceviz yemek neye iyi gelir?</p><br>
            <h2>Cevizin Faydaları</h2>
            <ul>
            Kalp sağlığını destekler.
<li>Beyin fonksiyonlarını geliştirir.</li>
<li>Antioksidan zenginidir.</li>
<li>Bağışıklık sistemini güçlendirir.</li>
<li>Kanser riskini azaltabilir.</li>
<li>Cilt ve saç sağlığını destekler.</li>
<li>Kilo kontrolüne yardımcı olabilir.</li>
<li>Depresyon etkilerini hafifletir.</li>
<li>Uyku kalitesini yükseltir.</li>
<li>Üreme sağlığını destekler.</li>
            
            
            </ul>
            
            `,
            image: "photos/ceviz.jpg"
        },
        content3: {
            title: "Türk Kahvesi Faydaları: Her Gün İçmek Neye İyi Gelir?",
            content: `<h2>Türk Kahvesinin Sizi Şaşırtacak Faydaları</h2><br>
            <p>Türk kahvesi, kahve çekirdeklerinin öğütülmesi ve kavrulması ile elde edilen tozun, su ve isteğe göre şekerle pişirilmesi ile elde edilir. Bilinen granül kahvelerin aksine demlenerek değil pişirilerek hazırlanan içecek, sıcak olarak küçük fincanlarda servis edilir. Geçmişi Habeşistan’a dayanan kahve, 16. yüzyılda Osmanlı sarayına girer ve o tarihten bu yana Türk kültürünün vazgeçilmezi olmayı sürdürür. Peki, Türk kahvesi içmenin faydaları nelerdir?</p><br>
            <h2>Türk Kahvesinin Faydaları</h2>
            <ul>
           <li> Bağırsak, meme, pankreas, kalın bağırsak, rahim iç zarı kanser risklerini azaltır.
           <li>Kolesterolü düşürür.</li>
           <li>%40 ağrı kesici etkisi vardır.</li>
           <li>Tip2 diyabet riskini azaltır.</li>
           <li>Parkinson hastalığını önler.</li>
           <li> Depresyona iyi gelir.</li>
           <li> Enerji ve zindelik verir.</li>
           <li> Hafızayı güçlendirir.</li>
           <li> Beyin sağlığına iyi gelir.</li>
           <li>Siroz riskini %50 azaltır.</li>
            </ul><br>

            <p><b>En doğru bilgiler ve sağlıklı sonuçlar için uzman doktor desteği alınız. İçeriğimizde yer alan bilgiler reçete niteliği taşımaz. Sağlıklı günler dileriz…</b></p>
            `,
            image: "photos/kahve.jpg"
        },
        content4: {
            title: "Çarkıfelek Meyvesi Nedir, Faydaları Nelerdir?",
            content: `<h2>Çarkıfelek meyvesi nedir?</h2>
            Ülkemizde çarkıfelek meyvesi ismiyle bilinen, yaygın olarak passion fruit olarak da anılan çarkıfelek meyvesi nedir sorusuna yanıt vererek hızlıca başlıyoruz:<br>
<ul>
<li>Dış kabuğu serttir, iç kısmında ise onlarca küçük siyah veya kahverengi tonlarında çekirdekleri bulunur.</li>
<li>Bu çekirdeklerin dışında da jelatin benzeri bir doku vardır ve meyvenin yenen kısmı bu jelatinli ve çekirdekli kısmıdır.</li>
<li>Tatlı-ekşi tonlarında bir lezzet profilindedir.</li>
<li>Dünya üzerinde en çok passion fruit ismiyle bilinir, ülkemizde de aşk meyvesi ya da tutku meyvesi olarak isimlendirenler vardır.</li>
<li>Dünya üzerinde en çok tropikal ve subtropikal bölgelerde yetiştirilir.</li>
<li>Son yıllarda ülkemizde de bilinirliği artan çarkıfelek meyvesi, sadece tadıyla değil, faydalarıyla da herkesin tanışması gereken lezzetlerden biri denebilir.</li>
</ul><br>
<h2>Çarkıfelek meyvesinin faydaları nelerdir?</h2>
<ul>
<li>İçeriğinde bulunan yüksek orandaki besin lifleri sayesinde sindirim sisteminin sağlıkla çalışmasına destek olur.</li>
Bu özelliği sayesinde kabızlığa iyi geldiği bilinir.
<li>İçeriğindeki C vitamini sayesinde bağışıklık sisteminin güçlenmesine yardımcı olur.</li>
<li>Güçlü antioksidan özellikleri sayesinde vücudu toksinlerden arındırmaya yardımcı olur.</li>
<li>Hücrelerdeki hasarların daha hızlı iyileşmesine olanak sağlar.</li>
<li>çeriğinde bulunan potasyum sayesinde kan basıncının düzenlenmesini destekler.</li>
<li>İçeriğinde bulunan A vitamini sayesinde göz sağlığına iyi gelir.</li>
<li>Vücuda enerji verir, metabolizmayı hızlandırır.</li>
</ul>
            
            
            `,
            image: "https://cdn.yemek.com/uploads/2024/02/carkifelek-meyvesi-shutter-2.jpg"
        },
        content5: {
            title: "Çıntar Mantarı Nedir, Faydaları Nelerdir? ",
            content: `<h2>Çıntar mantarı nedir?</h2><br>
            <ul>
            <p>En temel soruya, "Çıntar mantarı nedir?" sorusuna yanıt vererek hızlıca başlıyoruz:<p>
            <li>Çıntar mantarı, botanik olarak Russulaceae ailesinden gelen bir mantar türüdür.</li>
            <li>Halk arasında çam mantarı, melki mantarı, Kanlıca mantarı gibi isimlerle de anılır ve genellikle sonbahar sonrası, yağmurlardan sonra yetişir.</li>
            <li>Ülkemizin birçok noktasında yetiştirilebilen çıntar mantarının şapkası turuncu renklidir ve genellikle kuru bir mantar olup şapka bölümü ıslak ve yapışkan bir yapıya sahiptir.</li>
            <li>Sarı-turuncu tonlarda rengiyle ayırt edilebilen bu mantar türü, gölgelik yerlerde yetişir ve bazı bölgelerde yeşilimsi, bazı bölgelerde ise daha koyu renkli olabilir.</li>
            <li>Çıntar mantarı yenebilen bir mantar türüdür ancak mantar toplama konusunda uzman değilseniz, doğada bulduğunuz mantarları toplamaktan kaçınmalısınız.</li><br>
            </ul>

            <h2>Çıntar mantarının faydaları nelerdir?</h2>
            <ul>
            

            <li>Çıntar mantarının faydaları arasında yüksek besin değeri ve düşük kalori içeriği önemli bir yer tutar.</li>
            <li>İçindeki kalsiyum, magnezyum, sodyum, demir, B ve C vitaminleri, fosfor, potasyum, niasin gibi maddelerle vücuda pek çok fayda sağlar.</li>
            <li>Protein açısından zengin olan çıntar mantarı, vücudun ihtiyaç duyduğu tüm aminoasitleri içerir. Bu özellikle kas sağlığı ve dokuların yenilenmesi için önemlidir.</li>
            </ul>
            `,
            image: "https://cdn.yemek.com/uploads/2024/02/cintar-mantari-nerede-bulunur-shutter-1.jpg"
        },
        content6: {
            title: "Karbonhidrat Hangi Besinlerde Bulunur, Faydaları Nelerdir?",
            content: `<h2>Karbonhidrat nedir, ne işe yarar, karbonhidrat türleri nelerdir?</h2>
            Karbonhidratlar, temel besin maddelerinden biridir ve vücuda enerji sağlarlar. Kimyasal yapıları karbon, hidrojen ve oksijen atomlarından oluşur. Karbonhidratlar, vücut tarafından enerjiye dönüştürülerek kullanılır.
            Karbonhidratın temel işlevi, birincil enerji kaynağımız olmasıdır. Halk dilinde kan şekeri dediğimiz glikoza dönüşerek vücuda enerji kaynağı sağlarlar. Ayrıca vücudun su dengesini sağlama gibi yan işlevleri de vardır.
            Basit ve kompleks olmak üzere iki türlü karbonhidrat mevcuttur. Kompleks olanlar daha fazla besin lifi içerirler. Meyve, sebze, süt ve süt ürünleri basit karbonhidrat sınıfına girerken; baklagiller, tam tahıl ekmeği, nişastalı sebzeler ve kahvaltılık gevrekler kompleks karbonhidratlar içerirler.<br><br>

            <h2>Karbonhidratlar hangi besinlerde bulunur?</h2>
            Süt ve süt ürünleri
Elma, üzüm, ananas, muz, yaban mersini, çilek, portakal, kavun, armut, şeftali, kuru üzüm, kurutulmuş meyveler
Mercimek, fasulye, barbunya, bakla
Patates, bezelye, kabak
Pirinç, arpa, bulgur, makarna, darı, çavdar, yulaf, kahvaltılık gevrekler, mısır ve bu ürünlerin unları
Şeker<br><br>
<b>Unutmayın ki</b> karbonhidrat vücudumuzun en temel enerji kaynağıdır ve bunu "sıfırlamanızı" talep eden herhangi bir diyet programı vücudunuzun enerji kaynağını kesmekten bahsetmektedir. Yapmanız gereken tek şey doğal yollardan, dozunda karbonhidrat almak ve aşırıya kaçmamak. Her şey kararında güzel!
            `,
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/03/karbonhidratlar-shutter.jpg"
        },
        content7: {
            title: "Her Akşam Bir Bardak İçmeli: Havuç Suyunun Faydaları",
            content: `Peki havuç suyunun faydaları nedir? Tek tek anlatalım.<br>
            <ul>
           <li> Kansere kalkan oluyor, özellikle meme, prostat ve kolon kanseriyle savaşıyor.</li>
           <li> İçerdiği bol miktarda A vitamini sayesinde göz sağlığını koruyor, yaşlılık sebebiyle ortaya çıkan göz hastalıklarının ve kataraktın önüne geçiyor.</li>
            <li>Mide ve yemek borusundaki yanma hissini engelliyor; sindirim sistemini rahatlatıyor.</li>
            <li>Kanın vücuttaki dolaşımını hızlandırıyor, damar tıkanıklığının önüne geçmeye yardımcı oluyor, kalp sağlığına fayda sağlıyor.</li>
            <li>Beyin sağlığına iyi gelerek zarar görmüş hücreleri onarıyor; unutkanlığa, bunamaya, Alzheimer'a çare oluyor.</li>
            <li>Karaciğeri ve kolonu temizleyerek vücudu toksinlerden arındırıyor.</li>
            <li>İçerdiği bol miktardaki potasyum sayesinde cildi nemlendiriyor, lekeleri yok ediyor ve cildin daha sağlıklı görünmesini sağlıyor.</li>
            <li>Bebek bekleyen anne adaylarının amniyon sıvısını (bebeği rahimde saran sıvı) artırarak bebeğin gelişimine olumlu katkıda bulunuyor.</li></ul><br><br>
            <b>Not:</b> Havuç suyunu şeker hastalarının içmesi tavsiye edilmediğini ilk olarak belirtelim. Bunun haricinde düzenli olarak havuç suyu tüketmeden önce doktorunuza danışmayı unutmayın. Her şeyin fazlasının zarar olduğunu unutmayın der; birine iyi gelen bir şeyin başka birinde kötü etkiler yaratabileceğini yeniden hatırlatırız.
            
            Havuç suyu nasıl yapılır?`,
            image: "https://cdn.yemek.com/mncrop/620/388/uploads/2024/02/havuc-suyu-shutter3.jpg"
        },
        content8: {
            title: "Bilmeyen Kalmasın: Domates Meyve mi Sebze mi?",
            content: `"Meyve mi sebze mi?" tartışmalarına en çok konu olan isimlerden domates ile ilgili gerçekleri öğrenme zamanı geldi. Sabırsızlar için kısa cevabımızı hızlıca vermiş olalım: <b>Domates bir meyvedir.</b><br>

            Neden mi? Hemen açıklayalım:<br>
            
            Botanik açıdan incelendiğinde, domatesin çekirdekleri, bir başka deyişle tohumları içindedir, bu nedenle meyve olarak sınıflandırılır. Zira meyvenin botanik açıdan tanımının da "Bir bitkinin üreme organında bulunan ve genellikle tohum içeren yapılar" olduğu söylenir. Domates, bu tanıma uyduğundan kolayca meyve olarak tanımlanabilir.
            
            Aynı şekilde Türk Dil Kurumu da meyveyi şöyle tanımlar: "Bitkilerde çiçeğin döllenmesinden sonra yumurtalığın gelişmesiyle oluşan tohumları taşıyan, genellikle yenebilen organ; yemiş."
            
            Ancak günlük hayatımızda domatesi birçoğumuz sebze olarak tanımlar ve bu şekilde kullanılırız. Bunun sebepleri de temel olarak şöyledir: Domatesin genel olarak tatlı değil nötr bir lezzete sahip olması, salatalarda, yemeklerde, temel olarak sebzelerin kullanıldığı tariflerde kullanılması, birçok meyve gibi tek başına taze haliyle ısıra ısıra yenebiliyor olsa da bu amaçla pek tercih edilmemesi gibi sebeplerdir. 
            
            Tüm bu sebepler, domatesin meyve olduğu gerçeğini değiştirmese de domatesin meyve mi yoksa sebze mi olduğu bilimsel kaynaklara ve günlük hayat tecrübelerine göre değişiklik gösterebilir. Sözün kısası, bugüne dek domatesi hep sebze olarak bildiyseniz bu oldukça doğal ancak domates meyve olarak sınıflandırılır, aklınızda bulunsun.`, 
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/07/domates-sebze-aralik-2020.jpg"
        },
        content9: {
            title: "Trabzon Hurması Neye İyi Gelir? Diyenlere: Cennet Hurması Faydaları",
            content: ` Cennet hurması olarak da andığımız Trabzon hurmasının ardından çürük domatese benziyor diye konuşuyorsunuz, biliyoruz. Ama aslında şeklini beğenmeyip hor gördüğünüz Trabzon hurmasını tanısanız çok seveceksiniz. Bir kere, en azından bir kez şans vermiş olanlar lezzetinden sual olunmayacağını bilir. Hadi diyelim, tadı damağınıza hitap etmedi. Yine de onu bolca tüketmeli, meyve olarak çiğ çiğ yiyemiyorsanız da çeşit çeşit tarifin içine dahil etmelisiniz. Neden bu kadar ısrarcı olduğumuza gelirsek, cennet hurmasının faydalarını öğrenince siz de bize fazlasıyla hak vereceksiniz.<br>

            Sözü uzatmadan Trabzon hurmasının faydalarına, bu güzeller güzeli cennet hurmasının ne işe yaradığını anlatmaya geçelim. Tanıdıkça onu sevecek, kilolarca almak isteyeceksiniz zaten, eminiz.<br>
            
            Karşınızda,tüm yönleriyle Trabzon (cennet) hurması!
            Trabzon hurması, Türkiye'nin kuzeydoğusunda yetişen ve oldukça besleyici bir meyvedir. Cennet hurması olarak da bilinir. İşte Trabzon hurmasının sağlık açısından faydalarından bazıları:
            <ul>
            <li>Trabzon hurması, yüksek miktarda lif içerir ve sindirim sağlığını destekler.</li>
            <li>C vitamini bakımından zengindir, bağışıklık sistemini güçlendirir.</li>
            <li>Antioksidanlar açısından zengin olup, hücre hasarını azaltmaya yardımcı olur.</li>
            <li>Potasyum içeriği sayesinde kalp sağlığını destekler.</li>
            <li>Trabzon hurması, sağlıklı bir cilt için önemli olan vitamin ve mineralleri içerir.</li>
            </ul>
            Bu nedenlerle, Trabzon hurması düzenli olarak tüketildiğinde sağlık üzerinde olumlu etkilere sahip olabilir.`,
            image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/cennet-hurmasi-aralik-2020-nerede-bulunur.jpg"
        }
    };

    blogBoxes.forEach(box => {
        box.addEventListener("click", function() {
            const contentKey = this.getAttribute("data-content");
            const post = blogPosts[contentKey];
            blogDetailTitle.textContent = post.title;
            blogDetailText.innerHTML = post.content; // İçeriği HTML olarak ayarla
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

