export const t = (key) => {
  const translations = {
    // User Panel
    userPanelTitle: "پنل کاربری {brandName}",
    userPanelWelcome: "به {brandName} خوش آمدید",

    // Status
    "status.active": "فعال",
    "status.expired": "منقضی شده",
    "status.disabled": "غیرفعال",
    "status.on_hold": "در انتظار",
    "status.limited": "محدود شده",

    // Usage
    remaining_volume: "حجم باقی‌مانده",
    initial_volume: "حجم اولیه",
    remaining_time: "زمان باقی‌مانده",
    initial_time: "زمان اولیه",
    gigabytes: "گیگابایت",
    days: "روز",
    infinity: "نامحدود",

    // Support
    support: "پشتیبانی",

    // Apps
    operatingSystems: "سیستم‌عامل‌ها",
    download: "دانلود",
    configuration: "پیکربندی",
    watchVideo: "مشاهده ویدیو",
    free: "رایگان",
    ad: "تبلیغات",

    // Configs
    configsList: "لیست کانفیگ‌ها",
    copyAll: "کپی کردن همه",
    subQRCode: "کد QR اشتراک",

    // Tutorial
    tutorialTitle: "آموزش نصب",
    noTutorial: "آموزشی موجود نیست",

    // Common
    copyLink: "کپی لینک",
  };

  return translations[key] || key;
};
