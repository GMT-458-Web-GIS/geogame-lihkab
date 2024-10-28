# Keşif Oyunu (GeoGame)

## Proje Tanımı
Bu proje, kullanıcıların harita üzerinde belirli noktaları keşfederek görevleri tamamladıkları ve yüksek puan almaya çalıştıkları bir GeoGame uygulamasıdır. Oyunun amacı, kullanıcılara coğrafi bilgiler üzerine çarpım işlemleri gibi basit görevler vererek, bu görevleri tamamladıkça şehirleri işaretlemek ve yeni bilgiler öğrenmelerini sağlamaktır.

## Amaç
Bu projenin amacı, öğrencilerin HTML, CSS ve JavaScript kullanarak interaktif bir coğrafi oyun tasarlamalarıdır. Bu oyun, kullanıcılara coğrafi bileşenlerle etkileşim sağlayan bir çevrimiçi web uygulamasıdır ve kullanıcılar yüksek puan almaya çalışır.

## Gereksinimler
- **Giriş Ekranı**: Kullanıcıların adını girebileceği ve oyuna başlayabileceği bir giriş ekranı olmalıdır.
- **Harita**: Harita üzerinde belirli şehirlerin işaretlenmesi sağlanmalıdır. Kullanıcı doğru yanıt verdikçe şehirler işaretlenmelidir.
- **Görevler**: Kullanıcıya çarpım işlemleri gibi basit görevler verilmelidir. Doğru cevap verildiğinde şehirler işaretlenmeli ve puan kazanılmalıdır.
- **Puan Sistemi**: Kullanıcı, her doğru cevap için puan kazanmalı ve bu puan kullanıcıya gösterilmelidir.
- **Tamamlama Mesajı**: Tüm görevler tamamlandığında "Tebrikler, oyunu tamamladınız!" mesajı görüntülenmelidir.

## Özellikler
- Kullanıcı adı girerek oyuna başlama.
- Harita üzerinde işaretlenmiş şehirler.
- Her doğru çarpım işlemiyle bir şehir işaretlenir ve kullanıcı puan kazanır.
- Tüm şehirler işaretlendiğinde "Tebrikler, oyunu tamamladınız!" mesajı görünür.

## Teknolojiler ve Kütüphaneler
Bu projede kullanılan teknolojiler ve kütüphaneler, kullanıcı etkileşimini artırmak ve coğrafi verileri yönetmek için seçilmiştir.
Bu proje aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:
- **HTML5**: Sayfa yapısı ve içeriğin oluşturulması.
- **CSS3**: Tasarım ve stil özellikleri için, animasyonlar eklenmiştir.
- **JavaScript (Vanilla JS)**: Dinamik işlevsellik sağlamak için kullanılmıştır.
- **OpenLayers**: Harita görüntüleme ve coğrafi verilerle etkileşim için kullanılan güçlü bir kütüphane. Bu kütüphane, harita üzerinde şehirleri işaretleme, zoom ve gezinti gibi işlevsellikler sağlar.

## Proje Yapısı
- `index.html`: Kullanıcı adını girdiği giriş ekranı.
- `game.html`: Harita ve görevlerin bulunduğu ana oyun ekranı.
- `login.js`: Kullanıcı adını alarak oyunu başlatmak için kullanılan script.
- `game.js`: Harita üzerinde şehirleri işaretleme ve görevlerin kontrolünü sağlayan script.
- `style.css`: Sayfanın görsel tasarımı ve animasyonları.

## Kurulum ve Çalıştırma
1. Projeyi bilgisayarınıza klonlayın:
   ```
   git clone <repo-url>
   ```
2. Proje dizinine gidin:
   ```
   cd geogame
   ```
3. Tarayıcınızda `index.html` dosyasını açarak oyunu başlatın.

## Kullanım
1. Kullanıcı adını girin ve "Oyuna Başla" butonuna tıklayın.
2. Harita ekranı açıldığında "Yeni Görev Al" butonuna tıklayarak bir çarpım işlemi görevi alın.
3. Soruyu doğru cevapladığınızda bir şehir işaretlenecek ve puan kazanacaksınız.
4. Tüm şehirler işaretlendiğinde oyun tamamlanır ve "Tebrikler, oyunu tamamladınız!" mesajı görünür.

## Çizimler ve Ön Yüz Düzeni
- **Giriş Ekranı**: Giriş ekranında kullanıcı adı girişi ve "Oyuna Başla" butonu bulunur. Bu ekran, basit ve kullanıcı dostu olacak şekilde ortalanmış bir tasarıma sahiptir.
![image](https://github.com/user-attachments/assets/bb05d8ab-518f-42f0-ae51-1b6f106a7b6c)

- **Ana Oyun Ekranı**: Harita sol tarafta büyük bir alanı kaplarken, görev ve kullanıcı bilgileri sağ tarafta daha küçük bir alanda gösterilir.
![Ekran görüntüsü 2024-10-28 173539](https://github.com/user-attachments/assets/2010a74f-9eb6-49a1-b85d-f0db135a28ab)

