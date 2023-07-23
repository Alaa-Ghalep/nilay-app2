import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

 const translationEn={
  //NavBar
  Home:'Home',
  AboutUS:'About Us',
  Services:'Services',
  ContactUs:'Contact Us',
  //SectionOne
  shewants:'She Wants',
  FBS:'for Beauty Services',
  downloadnow:'Download Now',
  hqp:'High quality products',
  Bps:'Beauty products store',
  Reg:'Register as a service provider',
  youcan:'You can provide services',
  BS:'Booking services',
  youcan2:'You can book beauty services',
  //AboutUS
  Napp:
  'Nilay application for beauty services and appointment booking services The application is supervised by a group of beauty centers, photography and everything that women need in the Arab world  We also offer you a selection of high-quality products in the field of beauty and care.',


//Services
Stores:'Stores',
Photography:'Photography',
WDresses:'Wedding Dresses',
whalls:'Wedding Halls',
Bsalons:'Beauty salons',

//Beauty 
Beautysalons:'Beauty salons',


//ContactUs
name:'Full Name',
email:'Email',
msg:"Message...",
send:'Send',
footer:'Copyright © Nilay 2023'





}

 const translationAr={
  Home:'الرئيسية',
  AboutUS:'من نحن',
  Services:'الخدمات',
  ContactUs:'تواصل معنا',

  //SectionOne
  shewants:' هي تريد',
  FBS:'لخدمات التجميل',
  downloadnow:'التحميل الأن',
  hqp:'منتجات ذات جودة عالية',
  Bps:'متجر منتجات التجميل',
  Reg:'سجل ك مزود خدمة',
  youcan:'يمكنك تقديم الخدمات',
  BS:'خدمات الحجز ',
  youcan2:'يمكنك حجز خدمات التجميل',
  Napp:'تطبيق نيلاي لخدمات التجميل وخدمات حجز المواعيد يشرف على التطبيق مجموعة من مراكز التجميل والتصوير وكل ما تحتاجه المرأة في الوطن العربي كما نقدم لك مجموعة مختارة من المنتجات عالية الجودة في مجال التجميل والعناية.',

  //Services
  Stores:'المتاجر',
  Photography:'التصوير',
  WDresses:'فساتين زفاف',
  whalls:'قاعات الأفراح',
  Bsalons:'صالونات التجميل',
  Beautysalons:'صالونات التجميل',
  //ContactUs
name:'الاسم كامل',
email:'الايميل',
msg:"الرسالـة...",
send:'ارسـال',
footer:'حقوق النشر © نيلاي 2023'

  

}
i18n


  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en:{translation:translationEn},
      ar:{translation:translationAr}
    }
  });

export default i18n;