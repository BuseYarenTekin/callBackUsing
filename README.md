ASENKRON FONKSİYONLAR (Asynchronous Functions)

Öncelikle kısaca olayı hikayeleştirmek istiyorum. Örneğin elimizde kod blokları mevcut. Bu kodu çalıştırarak console ekranında gerekli değerlerin gelmesini istemekteyiz. 
Fakat önemli bir sorunumuz var ki, olayın içerisinde veri tabanı ya da Digital Ocean gibi sunucu da bulunabilmekte. Demem o ki, bazı zamanlar saniyeler içerisinde bu sunucudan ya da veri tabanından veri gelmekte zorlanabilir.
Arka planda çalışan işlemlerden dolayı gecikmeler mevcut olabiliyor. Bir blog sitesi düşünelim. Blog sitesinde bulunan header, sidebar ve footer gibi içeriklerin gelmesi static olacağından hızlı olurken content gibi dinamik olan blokların gelmesi söylediğim sebeplerden ötürü zaman alabilmektedir. Peki sizce bu blogtaki fonksiyonlar sırasıyla birbirini bekleyebilir mi ? 
Tabiki bu fonksiyonlar birbirinden bağımsız hareket edeceklerdir. İşte asenkron fonksiyonlar da sıradan bağımsız bir şekilde çalışmaktadır. 


Kod bloğunda kısaca anlatmak gerekirse elimizde 2 adet gönderi var. Bu gönderiler içerisinde title ve body alanlarına karşılık gelen 2 adet gönderi bulunmakta. Peki bizden istenen nedir ?
getPosts() fonksiyonu ile 3. bir gönderiyi eklemek istemekteyiz.

setTimeout fonksiyonu ise hazır bir fonksiyondur. Bu fonksiyonun amacı ise console ekranına gelecek verinin 5000 ms yani 5 sn gecikme ile gelmesini sağlamaktadır.

Fakat burada bir sorunumuz var ki fonksiyonlar gecikmeli olarak gelirken eklenen gönderi objesi eklenmekte sorun yaşamaktadır. Bu problemi çözmek için callback() fonksiyonu kullanılmaktadır. Aşağıda console çıktıları bulunmaktadır.


Aynı şekilde kod bloğunda bu hata çözülerek kod bloğunun da kolay ve kısa bir biçime dönüştürülmesi gerçekleşmiştir. createPost fonksiyonuna aldığı post parametresine ek olarak callback parametresi alarak gecikmeyi sağlayan timeOut fonksiyonu içerisinde çağırılarak getPosts fonksiyonun gecikme yaşanmadan eklenmesini sağlamaktadır. Diğer şekilde kodu yazmaya devam etseydik gecikme ile birlikte push ile veri eklenecekti. Bu da bizim için sorun olmakta. Fakat bu kod bloğu sonrasında proje çalıştırıldığında gecikme ile birlikte direk ekleme gerçekleşmiş olarak ekrana basılmaktadır.


NOT : Callback( ) referans fonksiyonunun kullanılmasının bir sebebi, projenin ilerleyen safhalarında getPosts methodu değil de farklı bir method çalıştırılmak istendiğinde 3 ayrı satırda değişiklik yapmak yerine callback fonksiyonu bizim için o fonksiyonu otomatik olarak çağıracaktır.
