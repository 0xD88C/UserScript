# 浏览器指纹识别防护 UserScript

## 防护机制说明

### 1. **Canvas 指纹防护**
- 拦截 `toDataURL()`, `toBlob()`, `getImageData()` 方法
- 在像素数据中添加微小随机噪声
- 噪声范围控制在 ±0.00005，人眼无法察觉

### 2. **WebGL 指纹防护**
- 伪造 GPU 厂商和渲染器信息
- 修改关键参数值（添加随机偏移）
- 阻止调试扩展（如 `WEBGL_debug_renderer_info`）
- 过滤敏感扩展列表

### 3. **AudioContext 防护（额外）**
- 在音频指纹中添加噪声
- 防止基于音频的指纹识别

## 安装使用方法

1. **安装 Tampermonkey 扩展**
   - Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey)
   - Firefox: [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. **创建新脚本**
   - 点击 Tampermonkey 图标 → 创建新脚本
   - 粘贴上述代码
   - 保存（Ctrl+S）

3. **验证效果**
   访问以下测试网站：
   - https://browserleaks.com/canvas
   - https://browserleaks.com/webgl

## 高级配置选项

```javascript
// 调整噪声强度（在脚本开头修改）
const NOISE_LEVEL = 0.0001;  // 增大值会增加噪声强度

// 自定义 WebGL 参数
const CUSTOM_VENDOR = 'Your Custom Vendor';
const CUSTOM_RENDERER = 'Your Custom Renderer';
```

## 注意事项

⚠️ **重要提示**：
- 此脚本会影响所有网站的Canvas和WebGL功能
- 某些依赖精确Canvas数据的应用可能受影响
- 建议配合其他隐私工具使用（如VPN、Cookie清理）
- 定期更新脚本以应对新的指纹识别技术

## 兼容性

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (需要对应的UserScript管理器)
- ✅ Opera

这个脚本提供了基础但有效的指纹防护，可以显著降低被追踪的风险！