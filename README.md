# RESTful ve OData veri transferi

![](https://image.ibb.co/kQVYAT/restful.jpg)
###### RESTful
REST (Representational State Transfer/ Temsili Durum Transferi) server-cilent arasında hızlı ve kolay bir iletişim ve veri artarmayı sağlamak üzere geliştirilen bir servis yapısını ifade etmekte olup SOAP &WSDL tabanlı webservislerinden daha basit bir yapı olarak geliştirilmiştir. 

RESTful sistemler HTTP protokülü üzerinden HTTP fiileri (GET, POST, PUT, DELETE, PATCH, HEAD vb) kullanılarak haberleşme sağlamaktadır. Response olarak client’a aktarılan verinin formatları HTML, XML, JSON olabilir ancak günümüzde sunulan sistem entegrasyonları çerçevesinde en popüler ve geçerli response tipinin JSON olduğunu belirtmekte fayda bulunmaktadır.

![](https://image.ibb.co/mLJaPo/odata.png)
###### OData
OData (Open Data Protocol / Açık Veri Protokolü) – WebAPI,  Microsotf ve özellikle de SAP’nin önemli desteği ve katkıları ile server-client arasında kolay bir veri artarım aracı olarak tasarlanmıştır. Front-end tarafından REST sitilinde esnek query ($filter, $select, $expand, $count, $top, $skip, $orderBy) oluşturma imkanı ile önemli imkan ve fırsatları sunmaktadır. Response olarak JSON veri oluşturulması ve kullanımı esastır.

Hem RESTful hem de OData ile ilgili olarak yüzlerce makaleye internet üzerinden erişmek mümkündür.




	mLab account
	npm install
	Postman install
	VisualStudio Code install
	
	npm init
	npm install express node nodemon jsonwebtoken mongoose body-parser method-override restify express-restify-mongoose 
	odata-resource multer randomstring express-google-analytics --save
	
	MongoDB case-sensitive
