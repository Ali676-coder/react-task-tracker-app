import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Info = ({ setAll }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  const content = {
    en: {
      title: "Information",
      desc1:
        "Task Tracker is a simple application designed to help you track your daily tasks and organize your work.",
      desc2:
        "You can add multiple tasks or delete completed ones by clicking on a task, which will redirect you to its full details and features.",
      desc3:
        "The application is a basic version with potential for future development.",
      copyright: "Copyright © 2025 - Dev Ali",
      back: "Go Back",
    },
    ar: {
      title: "معلومات",
      desc1:
        "تطبيق تتبع المهام هو تطبيق بسيط يساعدك على تتبع مهامك اليومية وتنظيم عملك.",
      desc2:
        "يمكنك إضافة مهام متعددة أو حذف المهام المكتملة من خلال النقر على المهمة، مما يوجهك إلى تفاصيلها الكاملة وميزاتها.",
      desc3: "هذا التطبيق نسخة بسيطة وله إمكانيات للتطوير مستقبلاً.",
      copyright: "حقوق النشر © 2025 - المطور علي",
      back: "العودة",
    },
  };

  const t = content[language];

  return (
    <div className={`info ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="lang-switcher">
        <button onClick={toggleLanguage} className="lang-btn">
          {language === "en" ? "AR" : "EN"}
        </button>
      </div>
      <h3>{t.title}</h3>
      <p>{t.desc1}</p>
      <p>{t.desc2}</p>
      <p>{t.desc3}</p>
      <p>Copyright &copy; 2025 - Dev Ali</p>
      <button onClick={() => setAll(true)}>
        <FaArrowAltCircleLeft /> Go Back
      </button>
    </div>
  );
};

export default Info;
