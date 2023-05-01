Integrantes:
Vannessa Marin
Natalia Bohorquez
Juan David Romero




(API MICROSERVICIOS  TESTEADA)
Estamos creando una API  para consumir microservicios con la arquitectura MVC (Modelo Vista Controlador).


#Requisitos
- NODE.JS
- MONGODB
#####DEPENDENCIAS 
- Node
- Swagger
- jest
- babel	

####Extencion 
- thunter client.

Con Node.js Creamos  nuestro entorno virtual.
Con Mongo DB Creamos   y conectamos a una base de datos e nuestra API. 

![BD en Mongo](https://user-images.githubusercontent.com/116130652/235387027-f75e53e1-b4b2-4bca-af5a-e8f53c302f58.jpeg)

###SWAGGER 
Creamos  una documentación online que se genera sobre una API

![Swagger Prueba_Todos](https://user-images.githubusercontent.com/116130652/235387175-8b3b26f2-9740-4968-b076-84df14992d77.jpeg)

####GET

![Swagger GET](https://user-images.githubusercontent.com/116130652/235387231-15a297c3-60cd-45c4-af36-6d20bb3fa219.jpeg)

![Swagger GET_2](https://user-images.githubusercontent.com/116130652/235387232-7b663f1f-8b0c-4f88-95aa-c679b872c598.jpeg)

####PUT

![Swagger PUT](https://user-images.githubusercontent.com/116130652/235387306-7d5618ae-cc67-4c69-9c52-d2d0c91877d5.jpeg)

####POST

![Swagger POST_3](https://user-images.githubusercontent.com/116130652/235387345-3f629988-0d25-42ab-9b60-11ec17b651d2.jpeg)

![Swagger POST_2](https://user-images.githubusercontent.com/116130652/235387342-0f5e01b0-fce7-4f7b-8571-985081b300cf.jpeg)



##TESTEAMOS LA API 

####PRUEBAS UNITARIAS

- getUsers.text.js

![getUsers text js_ID](https://user-images.githubusercontent.com/116130652/235388000-c1c0674b-b8f3-4993-a305-3620a061094c.jpeg)

![getUsers text js](https://user-images.githubusercontent.com/116130652/235388004-7bc68b63-6c47-4e61-ab14-cfe8bfa98609.jpeg)

- putUser.text.js

![postUser test js_Nuevo_US](https://user-images.githubusercontent.com/116130652/235388172-c7f0aebb-6b3a-4862-a6cc-ad235acf3831.jpeg)

![postUser test js_Actualiza](https://user-images.githubusercontent.com/116130652/235388175-b009e9a6-2dba-40c0-a36b-60ee14fef540.jpeg)

- postUser.test.js

![postUser text js](https://user-images.githubusercontent.com/116130652/235388318-0b024500-6d1d-4d5d-8e42-618010e5f348.jpeg)

- deleteUser.text.js

![deleteUser test js](https://user-images.githubusercontent.com/116130652/235388319-2394f08d-3c41-43bd-a802-87d2e2c7540f.jpeg)

##PRUEBAS INTEGRALES

- integration.spec.js 

![integration spec js](https://user-images.githubusercontent.com/116130652/235388455-a7ed61c2-c51a-4276-94aa-cf81e67b4091.jpeg)

##PRUEBA TIPO CLIENTE (THUNDER CLIENT)

- GET

![Prueba_T_Cliente_GetUser](https://user-images.githubusercontent.com/116130652/235389024-127c5d7a-00ef-4388-97b0-897de6048a74.jpeg)

- GETUSERS

![Prueba_T_Cliente_Users](https://user-images.githubusercontent.com/116130652/235389053-1286e18e-06ed-44e2-bedb-9702132dc4d3.jpeg)

- PUTUSER

![Prueba_T_Cliente_PutUser](https://user-images.githubusercontent.com/116130652/235389122-1f1ad16e-9e12-4085-87ba-2e636bbca830.jpeg)

- POSTUSER

![Prueba_T_Cliente_PostUser](https://user-images.githubusercontent.com/116130652/235389150-111f7224-f393-454d-83eb-bf02ea33ee62.jpeg)

- DELETEUSER

![Prueba_T_Cliente_DeletUser](https://user-images.githubusercontent.com/116130652/235389180-f902e672-fe50-4060-8a81-ea8ef2fda71f.jpeg)
