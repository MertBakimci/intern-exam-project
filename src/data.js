export const data = [
    {
        name: "Javascript",
        link: "/js",
        heading: "Javascipt Nedir",
        banner: require("./img/js.png"),
        animatedGif: require("./img/js.gif"),
        date: "Mayıs 1995",
        framework: true,
        creator: "Brendan Eich",
        info: "JavaScript, dinamik web sayfası içeriği oluşturmak için bir betik dilidir. Açılır menüler, hareketli grafikler ve dinamik arka plan renkleri gibi site ziyaretçilerinin web sayfalarıyla etkileşimini geliştirmek için öğeler oluşturur."
    },
    {
        name: "React",
        link: "/react",
        heading: "React Nedir ?",
        banner: require("./img/react.png"),
        animatedGif: require("./img/react.gif"),
        date: "2013 Yılında",
        framework: false,
        creator: "FACEBOOK",
        info: `React kullanıcı arayüzleri oluşturmaya yarayan 2011 yılında Facebook tarafından geliştirilmiş bir kütüphanedir. Geliştiricilerin her defasında zorlayıcı ve uzun Javascript kodu yazma ihtiyacına çözüm olarak doğmuştur.
        SPA (Single Page Application) oluşturmak için kullanılır.
        Rakipleri olan Angular, Vue JS ‘in aksine React bir kütüphanedir. Angular ve Vue JS ise birer framework’tür. Kısaca aralarındaki farkı anlatmak gerekirse; React’ın odaklandığı nokta arayüz, görsel, görünen kısımdır. Bunların yanında veri tabanı, form doğrulaması gibi web sayfasının görünmeyen kısmıyla ilgilenmemektedir. Framework’ler ise bir web sayfasının tüm ihtiyacını karşılayacak parçaları içinde bulundururlar.`
    },
    {
        name: "React Native",
        link: "/rn",
        heading: "React Native Nedir ?",
        banner: require("./img/reactn.jpg"),
        animatedGif: require("./img/reactn.gif"),
        date: "2015 Yılında",
        framework: false,
        creator: "FACEBOOK",
        info: `React Native için kısaca Facebook tarafından üretilen, cross-platform mobil uygulama geliştirme olanağı sağlayan bir framework diyebiliriz.
        “Cross-platform mobil uygulama geliştirme framework’ü” ne demek derseniz; “Ben tek bir dil ile mobil uygulama geliştireyim; ama hem Android, hem iOS, hem Windows … vs ortamlarında çalışsın. Kalkıp da Android için Java, iOS için Swift öğrenmekle uğraşmayayım!” dediğiniz de sizin imdadınıza koşan diller, framework’lerdir.
        React Native’de bunlardan biri. Kendine özgü bir mobil uygulama uzantısı yok, uygulamayı geliştiriyorsunuz ve Android için .apk, iOS için .ipa uzantılarını alıyorsunuz. Android ortamına uygulama geliştirirken karşılaşacağınız hatalar Java hataları, iOS ortamına uygulama geliştirirken karşılaşacağınız hatalar Objective-C hataları. Ama kodlarken kullanacağınız dil React.
        Kısa, öz ve açık bir giriş oldu ise asıl konumuza geçebiliriz.
        Kendine has bir dil formatı (JSX) olan React Native bizlere tek bir dil üzerinden kodlama yapabilme ve geliştirilen uygulamanın bir çok platformda çalışma olanağını sunuyor dedik. Geliştiricilere bu desteği sağlayan React Native, cihaz ile arayüz arasında bir köprü görevi görerek geliştirilen mobil uygulamaların sorunsuzca çalışmasını sağlıyor. Siz geliştirme ortamında bir bileşen tanımlıyorsunuz (örneğin; <Text>) ve React Native ilgili ortamda o bileşenin karşılığı ne ise (Android’de TextView, iOS’da UIView) sizin yerinize oluşturuyor. Bunun için de yazılan React (yani Javascript) kodlarını native dile (Java, Objective-C .. vs) çevirirken “babel” adı verilen bir yapı devreye giriyor.`
    },
    {
        name: "Flutter",
        link: "/flutter",
        heading: "Flutter Nedir ?",
        banner: require("./img/flutter.png"),
        animatedGif: require("./img/flutter.gif"),
        date: "2015 Yılında",
        framework: false,
        creator: "GOOGLE ve Topluluk",
        info: `Flutter, içinde framework, widget ve diğer araçları barındıran, geliştiricilere Android ve iOS platformu için uygulama geliştirmeler imkanı sunan bir mobil uygulama SDK’sıdır. Google tarafından geliştirilen Flutter, açık kaynak kodlu olup, tüm geliştirici ve tasarımcılar tarafından ücretsiz olarak kullanılabilirdir.

        Flutter’ı kullanarak geliştiriciler, her iki platformu da hedefleyen uygulamalar geliştirip, çapraz platformlu mobil uygulamalar sunmanın maliyet ve zamanından tasarruf edebilirler. Arayüz tasarımcıları ise Flutter’ı kullanarak Android ve iOS dünyasına uyum sağlayan, daha başarılı uygulama tasarımları geliştirebilirler.
        
        Flutter ile mobil uygulama geliştirmek için mobil uygulama geliştirme alanında tecrübenizin olmasına gerek yoktur. Dart programlama dilini kullanan Flutter’ı öğrenerek çok az kodlama bilgisi veya hiç kodlama bilginiz olmadan da uygulama prototipleri ve mobil uygulamalar geliştirebilirsiniz. Android ve iOS platformunda 2D mobil uygulamalar geliştirme merkezli Flutter ile marka kimliğini yansıtan uygulamalar tasarlanabilir. Yine Native platformlarda olduğu gibi Flutter’ı kullanarak kamera, konum verisi, internet, depolama ve diğer 3. Parti SDK’lara ihtiyaç duyan mobil uygulamaları geliştirmek mümkündür.`
    },
    {
        name: "PHP",
        link: "/php",
        heading: "PHP Nedir ?",
        banner: require("./img/php.png"),
        animatedGif: require("./img/php.gif"),
        date: "1995 Yılında",
        framework: false,
        creator: "Rasmus Lerdorf",
        info: `Bu dil aslen Rasmus Lerdorf tarafından kişisel ana sayfasına gelen ziyaretçileri takip etmek için yaratılmıştır. Popülerliği arttıktan Lerdorf en sonunda PHP’yi açık kaynaklı bir proje olarak yayınlamıştır. Bu karar geliştiricilerin onu kullanmasına, düzeltmesine ve kodu geliştirmesine teşvik etmiştir. Böylece PHP en sonunda bugünlerde kullandığımız programlama diline dönüşmüştür.

        PHP her amaca uygun bir programlama dili olarak görülse de en yaygın olarak web geliştirme için kullanılmaktadır. Bu en harika özelliklerinden biri olan HTML dosyalarına yerleştirilebilmesi sayesindedir.`
    }
    
    

]