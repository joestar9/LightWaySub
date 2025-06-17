# LightWay Sub Info

A lightweight and fast subscription information panel built with React, shadcn/ui, and Tailwind CSS.

## Features

- 🚀 **Ultra Lightweight**: Optimized for maximum performance
- 🎨 **Dual Theme Builds**: Separate builds for light and dark modes
- 📱 **Responsive Design**: Works perfectly on all devices
- 🌐 **Persian Language**: Optimized for Persian users
- ⚡ **Fast Loading**: Lazy loading and code splitting
- 🎯 **Single File Output**: Easy deployment

## Build Commands

### Light Mode Build
```bash
npm run build:light
```
Output: `build-light/` directory

### Dark Mode Build
```bash
npm run build:dark
```
Output: `build-dark/` directory

### Development
```bash
npm run dev
```

## Performance Optimizations

- ✅ Removed react-i18next (Persian only)
- ✅ Removed theme switching (separate builds)
- ✅ Removed js-cookie dependency
- ✅ Lazy loading for components
- ✅ Single file builds with vite-plugin-singlefile
- ✅ Terser minification
- ✅ Optimized CSS with Tailwind

## Bundle Sizes

- **Light Mode**: 344.26 kB (109.40 kB gzipped)
- **Dark Mode**: 344.28 kB (109.41 kB gzipped)

## Environment Variables

```env
VITE_BRAND_NAME=Your Brand Name
VITE_LOGO_SRC=https://your-logo-url.com/logo.svg
VITE_PANEL_DOMAIN=https://your-panel-domain.com
VITE_SUPPORT_URL=https://t.me/YourSupport
VITE_JSON_APPS_URL=https://your-apps-json-url.com/os.json
VITE_OFF_SECTIONS={"appsBox":true,"logoBox":true,"timeBox":true,"usageBox":true,"userBox":true,"supportBox":true,"configs":true}
```

## Deployment

1. Choose your preferred theme (light or dark)
2. Run the corresponding build command
3. Deploy the generated `build-light/` or `build-dark/` directory
4. The build includes an `index.php` file for PHP hosting

## Powered by

- [React](https://reactjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

**Powered by [MatinDehghanian](https://github.com/MatinDehghanian)**
