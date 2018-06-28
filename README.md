# RESTful ve OData veri transferi

![](https://image.ibb.co/kQVYAT/restful.jpg)
###### RESTful
REST (Representational State Transfer/ Temsili Durum Transferi) server-cilent arasında hızlı ve kolay bir iletişim ve veri artarmayı sağlamak üzere geliştirilen bir servis yapısını ifade etmekte olup SOAP &WSDL tabanlı webservislerinden daha basit bir yapı olarak geliştirilmiştir. 

RESTful sistemler HTTP protokülü üzerinden HTTP fiileri (GET, POST, PUT, DELETE, PATCH, HEAD vb) kullanılarak haberleşme sağlamaktadır. Response olarak client’a aktarılan verinin formatları HTML, XML, JSON olabilir ancak günümüzde sunulan sistem entegrasyonları çerçevesinde en popüler ve geçerli response tipinin JSON olduğunu belirtmekte fayda bulunmaktadır.

![](https://image.ibb.co/mLJaPo/odata.png)
###### OData
OData (Open Data Protocol / Açık Veri Protokolü) – WebAPI,  Microsoft ve özellikle de SAP’nin önemli desteği ve katkıları ile server-client arasında kolay bir veri artarım aracı olarak tasarlanmıştır. Front-end tarafından REST sitilinde esnek query ($filter, $select, $expand, $count, $top, $skip, $orderBy) oluşturma imkanı ile önemli imkan ve fırsatları sunmaktadır. Response olarak JSON veri oluşturulması ve kullanımı esastır.

Hem RESTful hem de OData ile ilgili olarak yüzlerce makaleye internet üzerinden erişmek mümkündür.

------------
Biz hem RESTful hemde OData kullanımı için bir örnek proje oluşturmaya çalışacağız.

Bu projemizi NodeJS + Express + MongoDB (case-sensitive NoSQL Database) kullanımı suretiyle gerçekleştireceğiz. 

###### Ön Gereksinimler
1. NodeJS  : gelişterme ortamı için [NodeJS](https://nodejs.org/en/ "NodeJS") kurulumunu yapınız.
2. MongoDB : NoSQL veritabamızı istersek local bilgisayarımıza kurulum yaparak kullanabiliriz, ancak Development işlemlerimizin için MongoDB'yi Cloud bazlı olarak sunan sistemleri kullanmak büyük kolaylık sağlamaktadır. Bu nedenle biz de ücretsiz olan [mLAB](http://www.mlab.com "mLAB") cloud yapısını kullanmayı tercih edebilirsiniz.
3. Kod Editor : Yazacağımız kodlar için  profesyonel bir kod editör kullanımını tercih etmek faydalı olacaktır. Bunun için ücretsiz olan [Microsoft Visual Studio Code](https://code.visualstudio.com/ "Microsoft Visual Studio Code")  kullanmayı tavsiye edebiliriz.
4. Test Aracı : RESTful ve OData için hem request hem de response açısından test işlemlerine gerçekleştirmek için [POSTMAN](https://nodemon.io/ "POSTMAN") uygulamasının kurulumunu yapınız.

###### Adım Adım
Github kodlarımızı bilgisayarınıza indirin ve bir dizin oluşturarak Visual Studio Code (VSC) ile dizini açın, böylece hem kodlarımızı incelemeye hem de bu kodları çalıştırarak canlı olarak data işlemlerini gerçekleştirmeye hazır hale gelmiş olacağız.

Öncelikle mLab üzerinde veritabanınızı ve buna erişim için gerekli User tanımlamanızı yapın ve connection linkinizi kopyalayınız. 
`mongodb://????`

VSC menüsünden View>Integrated Terminal seçimi ile Terminal ile komut işlemlerini başlatabiliriz.

Örnek çalışma için kullandığımız ve ihtiyaç duyacağınız tüm kütüphanelerin bilgisayarınıza topluca kurulumunu gerçekleştirmek için Terminal komut satırına aşağıdaki kodu Copy/Paste yaparak çalıştırmanız yeterli olacaktır.

```javascript
npm install express node nodemon jsonwebtoken mongoose body-parser method-override restify express-restify-mongoose odata-resource multer randomstring express-google-analytics --save
```
Terminal komut satırında rest.js, rest-pro.js ve odata.js kodlarını çalıştırarak hem REST hem de OData servisinizi kullanabilirsiniz.

`> nodemon  rest.js`
ile webservisi başlattığınızda POSTMAN ile localhost:3000 üzerinden işlemlerinizi gerçekleştirebilirsiniz.

`> nodemon  rest-pro.js`
ile webservisi başlattığınızda POSTMAN ile localhost:3001 üzerinden işlemlerinizi gerçekleştirebilirsiniz.

`> nodemon odata.js`
ile webservisi başlattığınızda POSTMAN ile localhost:3002 üzerinden işlemlerinizi gerçekleştirebilirsiniz.

VSC'nin multi-terminal özelliğini kullanarak aynı anda 3 farklı servisi birlikte çalıştırabilir ve hepsini birlikte karşılaştırabilirsiniz.

------------






