import { Field, Formik, Form } from "formik";
import ContactInfo from "./ContactInfo";
import { contactData } from "./ContactData";
import ErrorForm from "./ErrorForm";
import * as Yup from 'yup'

export default function FormComp() {
  const newMail = Yup.object().shape({
    email : Yup.string().email('El correo no es valido').required("El correo es obligatorio"),
    message : Yup.string().required("El mensaje es obligatorio"),
    phone: Yup.number().positive('Numero no válido').integer('Número no válido').typeError('Número no válido')

  })

  const handleSubmit = (values)=>{

  }

  return (
    <div className="flex flex-col md:flex-row justify-center  my-16">
      <section className="md:w-1/3 mb-12 gap-10 grid place-items-center text-center">
        {
          contactData.map((data,index)=>{
            return  <ContactInfo key={index} title={data.title} info={data.info} />
          })
        }
       
      </section>
      <Formik
      initialValues={{
        name : "",
        email : "",
        phone : "",
        subject : "",
        message : ""
      }}

      onSubmit={(values)=>{
        handleSubmit(values)
      }}

      validationSchema={newMail}
      >
      {({errors, touched})=>(
         <Form className="md:w-2/4 grid place-items-center md:place-items-stretch gap-5 text-sm  ">
         <div className="flex flex-col w-4/5 ">
           <label className="font-bold">Nombre</label>
           <Field 
           name="name" 
           className="outline-none pl-3 py-2 text-sm" 
           placeholder="ej. Adam Smith" 
           style={{
             border: "1px solid #00000075"
           }}/>
           
         </div>
         <div className="flex flex-col w-4/5">
           <label className="font-bold">Correo</label>
           <Field 
           name="email" 
           className="outline-none pl-3 py-2 text-sm" 
           type="email" 
           placeholder="ej. asmith@email.com" 
           style={{
             border: "1px solid #00000075"
           }}/>
            {errors.email && touched.email ? (
            <ErrorForm>
              {errors.email}
            </ErrorForm>
           ): null}
         </div>
         <div className="flex flex-col w-4/5">
           <label className="font-bold">Número de telefono</label>
           <Field 
           name="phone" 
           className="outline-none pl-3 py-2 text-sm" 
           type="number" 
           placeholder="ej. 2053348665"  
           style={{
             border: "1px solid #00000075 "
           }}/>
          {errors.phone && touched.phone ? (
            <ErrorForm>
              {errors.phone}
            </ErrorForm>
           ): null}
         </div>
         <div className="flex flex-col w-4/5">
           <label className="font-bold">Tema</label>
           <Field 
           name="subject" 
           className="outline-none pl-3 py-2 text-sm" 
           placeholder="ej. Forklift Precio"  
           style={{
             border: "1px solid #00000075 "
           }}/>
         </div>
         <div className="flex flex-col w-4/5">
           <label className="font-bold">Mensaje</label>
           <Field 
           name="message" 
           className="h-52 outline-none pl-3 py-2 text-sm" 
           as="textarea" 
           placeholder="Escriba su mensaje aquí."   
           style={{
             border: "1px solid #00000075 "
           }}/>
           {errors.message && touched.message ? (
            <ErrorForm>
              {errors.message}
            </ErrorForm>
           ): null}
         </div>
         <input
           type="submit"
           className={`btn w-1/2 md:max-w-min mb-6 text-sm bg-reno-sand-500 text-white py-2 px-8    hover:bg-reno-sand-400`}
         />
       </Form>
      )}
   
     
    </Formik>
    </div>
  );
}
