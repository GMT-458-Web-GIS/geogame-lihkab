# Keşif Oyunu (GeoGame)

## Proje Genel Bakış
GeoGame, Türkiye'nin şehirleri hakkında bilgi edinmek ve coğrafya bilgisini geliştirmek isteyen kullanıcılara yönelik, etkileşimli bir web tabanlı oyun olarak geliştirilmiştir. Bu oyun, HTML, CSS ve JavaScript kullanılarak oluşturulmuş olup, coğrafi verilerin görselleştirilmesi için OpenLayers kütüphanesini kullanmaktadır. Kullanıcılar, şehirlerin plaka numaralarını tahmin ederek puan kazanmaya çalışırken Türkiye haritasında çeşitli şehirleri keşfederler. Eğitici ve eğlenceli bir yaklaşım sunan GeoGame, coğrafya meraklıları, öğrenciler ve Türkiye'yi daha iyi tanımak isteyen herkes için uygundur.

## Projenin Amacı
Bu projenin amacı, kullanıcıların Türkiye'nin coğrafyası hakkında bilgi edinmelerini sağlamak ve bu bilgiyi eğlenceli bir şekilde pekiştirmelerine yardımcı olmaktır. GeoGame, oyunlaştırılmış bir öğrenme ortamı sunarak coğrafya bilgisini artırmayı, hızlı düşünme ve karar verme becerilerini geliştirmeyi hedefler. Aynı zamanda kullanıcıların interaktif harita kullanımıyla Türkiye'nin şehirlerini daha yakından tanımalarına olanak tanır.

GeoGame, oyuncuların gerçek zamanlı geri bildirim alarak etkileşimde bulunduğu, oyunlaştırılmış bir öğrenme platformudur. Bu sayede, oyuncular hem öğrenir hem de eğlenirler. Kullanıcı deneyimi ön planda tutularak tasarlanmış olan oyun, farklı görev türleri ve zaman sınırlı sorular ile sürekli bir motivasyon sağlar.

## Gereksinimler
- Modern bir web tarayıcısı (örn. Chrome, Firefox, Edge)
- Git (depo klonlama için)
- Bir kod düzenleyici (örn. VSCode, Sublime Text) eğer değişiklik yapmak isterseniz

## Özellikler
- **Etkileşimli Harita:** Türkiye haritası üzerinde etkileşimli olarak gezinti yapılabilir. Kullanıcılar, harita üzerinde şehirleri keşfeder ve verilen görevleri tamamlar. Harita, OpenLayers kullanılarak geliştirilmiş olup, zoom ve pan gibi özellikler ile kullanıcıya özgürce gezinme imkânı sunar.

- **Görevler ve Sorular:** Kullanıcılar, Türkiye'nin çeşitli şehirlerine ilişkin plaka numaralarını tahmin etmeye çalışır. Doğru cevaplar puan kazandırırken, yanlış cevaplar ise puan kaybettirir. Görev sistemi rastgele olarak belirlenir ve her seferinde farklı bir şehir hakkında soru sorulur, bu da oyunu dinamik ve tekrar oynanabilir kılar.

- **Zaman Sınırlı Sorular:** Oyuncuların her görevi tamamlaması için belirli bir süreleri vardır. Bu geri sayım, oyuna heyecan katarken, kullanıcıların hızlı düşünme ve karar verme yeteneklerini geliştirmelerine yardımcı olur. Süre dolmadan doğru cevabı vermek, oyuncunun puan kaybetmemesini sağlar.

- **Dinamik Geri Bildirim:** Kullanıcılar verdikleri cevapların doğruluğunu anında öğrenirler. Doğru cevap verildiğinde haritada ilgili şehir işaretlenir ve kullanıcı puan kazanır. Yanlış cevaplar ise anında kullanıcıya bildirilir ve puan kaybı yaşanır.

- **Puanlama Sistemi:** Her doğru cevap, kullanıcının puanını artırırken, yanlış cevaplar puan kaybettirir. Bu puanlama sistemi, kullanıcının oyun boyunca kendini geliştirmesi ve en yüksek puanı elde etmeye çalışması için teşvik edicidir. Kullanıcılar, puanlarını oyunun sağ üst köşesinde gerçek zamanlı olarak takip edebilirler.

- **Kullanıcı Dostu Arayüz:** Modern, koyu temalı ve estetik bir kullanıcı arayüzü ile oyun, kullanıcıların görsel olarak keyif almasını sağlar. Animasyonlu butonlar ve yumuşak geçişlerle, oyun deneyimi daha akıcı ve keyifli hale getirilmiştir. Arayüz, masaüstü ve mobil cihazlarla uyumlu olacak şekilde optimize edilmiştir.

- **Yerelleştirilmiş İçerik:** Oyundaki tüm içerikler Türkçe olarak hazırlanmıştır. Bu, yerel kullanıcıların oyuna daha fazla bağlanmasını ve içeriği daha kolay anlamasını sağlar.

## Teknolojiler ve Kütüphaneler
Bu projede kullanılan teknolojiler ve kütüphaneler, kullanıcı etkileşimini artırmak ve coğrafi verileri yönetmek için seçilmiştir.
Bu proje aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:
- **HTML**: Sayfa yapısı ve içeriğin oluşturulması.
- **CSS**: Tasarım ve stil özellikleri için, animasyonlar eklenmiştir.
- **JavaScript**: Dinamik işlevsellik sağlamak için kullanılmıştır.
- **OpenLayers**: Harita görüntüleme ve coğrafi verilerle etkileşim için kullanılan güçlü bir kütüphane. Bu kütüphane, harita üzerinde şehirleri işaretleme, zoom ve gezinti gibi işlevsellikler sağlar.

## Proje Yapısı
- **`index.html`:** Kullanıcıların oyuna başlamadan önce kullanıcı adı girdikleri giriş sayfası.
- **`game.html`:** Oyunun oynandığı ana sayfa. Bu sayfa, harita bileşenini ve görevle ilgili bilgileri içerir.
- **`login.js`:** Kullanıcı adı doğrulama işlevselliğini içerir ve kullanıcının geçerli bir kullanıcı adı girmesini sağlar. Bu, oyunun kişiselleştirilmiş bir deneyim sunmasına yardımcı olur.
- **`game.js`:** Oyunun ana işlevselliğini yönetir. Harita oluşturma, görev oluşturma, puan yönetimi ve zamanlayıcı işlevleri bu dosyada yer almaktadır. Kullanıcının harita üzerinde etkileşimde bulunmasını sağlar ve oyun akışını kontrol eder.
- **`style.css`:** Oyun ve giriş sayfasının stilini tanımlar. Animasyonlar, renk teması ve duyarlı tasarım özellikleri bu dosyada yer alır.

## Nasıl Oynanır
- **Oyunu Başlatın:** index.html dosyasını açarak kullanıcı adı girin.

- **Görevleri Tamamlayın:** Size Türkiye'nin farklı şehirlerine dair plaka numarası soruları sorulacaktır. Yanıtınızı ilgili kutucuğa girin ve gönder butonuna tıklayın.

- **Yeni Görev Alın:** "Yeni Görev Al" butonuna tıklayarak bir sonraki şehre geçin. Her görev, farklı bir şehir hakkında olacaktır ve oyuncunun coğrafya bilgisini geliştirecektir.

- **Puanlama:** Doğru cevaplar puan kazandırırken, yanlış cevaplar puan kaybettirir. Her görevde mümkün olan en yüksek puanı almaya çalışın.

- **Zamanlayıcı:** Her görevde bir geri sayım sayacı bulunmaktadır. Bu sayaç, kullanıcının belirli bir süre içinde soruyu yanıtlamasını sağlar ve zaman yönetimini geliştirir.

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

## Çizimler ve Ön Yüz Düzeni
GeoGame, modern ve estetik bir kullanıcı arayüzü sunmak amacıyla tasarlanmıştır. style.css dosyasında tanımlanan çeşitli stillerle oyun hem masaüstü hem de mobil cihazlarla uyumlu olacak şekilde optimize edilmiştir. Tasarımın ana unsurları şunlardır:

Koyu Tema ve Modern Renkler: Kullanıcı dostu bir deneyim sağlamak amacıyla koyu renk teması tercih edilmiştir.
Animasyonlu Butonlar ve Geçişler: Kullanıcıların butonlara tıkladığında animasyonlu geri bildirim almalarını sağlayarak oyun deneyimini daha etkileşimli hale getiren animasyonlar kullanılmıştır.
Duyarlı Tasarım: Oyun arayüzü, her cihaz boyutuna uygun olacak şekilde düzenlenmiştir. Harita ve görev bölümleri, farklı ekran boyutlarında tutarlı ve erişilebilir bir kullanıcı deneyimi sunar.

