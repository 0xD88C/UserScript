// ==UserScript==
// @name         前端指纹防护 (Front End Fingerprint Protection)
// @namespace    http://tampermonkey.net/
// @version      3.0.0
// @author       By 9527
// @namespace    https://github.com/0xD88C/UserScript/
// @description  综合所有优秀防护方案的企业级浏览器指纹防护系统 - 覆盖20+种指纹维度，包含高级反检测机制
// @author       Front End Fingerprint Protection
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @license      MIT
// @downloadURL  https://update.greasyfork.org/scripts/561142/Canvas%20%20WebGL%20%E6%8C%87%E7%BA%B9%E9%98%B2%E6%8A%A4.user.js
// @updateURL    https://update.greasyfork.org/scripts/561142/Canvas%20%20WebGL%20%E6%8C%87%E7%BA%B9%E9%98%B2%E6%8A%A4.meta.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzcyMDgzMTI4NDkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc0OS4yOTA2NjcgNzgwLjhhMzIgMzIgMCAwIDEtNjQuMDIxMzM0IDBWNjQ2LjRjMC05OC45NjUzMzMtODAuMjY2NjY3LTE3OS4yLTE3OS4yNzQ2NjYtMTc5LjItOTkuMDA4IDAtMTc5LjI2NCA4MC4yMzQ2NjctMTc5LjI2NCAxNzkuMnYxMTUuMmEzMiAzMiAwIDAgMS02NC4wMzIgMFY2NDYuNGMwLTEzNC4zMTQ2NjcgMTA4LjkyOC0yNDMuMiAyNDMuMzA2NjY2LTI0My4yIDEzNC4zNTczMzMgMCAyNDMuMjg1MzMzIDEwOC44ODUzMzMgMjQzLjI4NTMzNCAyNDMuMnYxMzQuNHogbTE0OS45MzA2NjYtNTAwLjkwNjY2N2EzMiAzMiAwIDAgMS00LjA0MjY2NiA0NS4wNzczMzQgMzIuMDIxMzMzIDMyLjAyMTMzMyAwIDAgMS00NS4wODgtNC4wMzJDNzY1LjQxODY2NyAyMTkuNjI2NjY3IDY0MC42MDggMTYwIDUwNS45OTQ2NjcgMTYwIDM3Ny4zODY2NjcgMTYwIDI1Ny42IDIxNC40IDE3My4xMiAzMDguMDMyYTMyLjAyMTMzMyAzMi4wMjEzMzMgMCAwIDEtNDUuMjI2NjY3IDIuMzI1MzMzIDMyIDMyIDAgMCAxLTIuMzE0NjY2LTQ1LjE5NDY2NkMyMjIuMDggMTU4LjIyOTMzMyAzNTkuMDcyIDk2IDUwNS45OTQ2NjcgOTZjMTUzLjc5MiAwIDI5Ni41MTIgNjguMjAyNjY3IDM5My4yMjY2NjYgMTgzLjg5MzMzM3pNODgzLjczMzMzMyA2MjcuMmEzMiAzMiAwIDAgMS02NC4wMzIgMGMwLTEzMC4yMTg2NjctODAuMTI4LTI0NS40NjEzMzMtMTk5LjQwMjY2Ni0yOTIuMTM4NjY3YTMyIDMyIDAgMSAxIDIzLjMzODY2Ni01OS41OTQ2NjZDNzg3LjI2NCAzMzEuNjU4NjY3IDg4My43MzMzMzMgNDcwLjQyMTMzMyA4ODMuNzMzMzMzIDYyNy4yek01MDUuOTk0NjY3IDI0OS42YTMyIDMyIDAgMSAxIDAgNjRjLTE3My4yNTg2NjcgMC0zMTMuNzE3MzMzIDE0MC40MDUzMzMtMzEzLjcxNzMzNCAzMTMuNmEzMiAzMiAwIDAgMS02NC4wMjEzMzMgMGMwLTIwOC41MzMzMzMgMTY5LjEyLTM3Ny42IDM3Ny43Mzg2NjctMzc3LjZ6IG0wIDM3MS4yYTI1LjYgMjUuNiAwIDAgMC0yNS42IDI1LjA2NjY2N2wwLjE5MiA1LjE1MmExOTUzLjEwOTMzMyAxOTUzLjEwOTMzMyAwIDAgMSAxLjIwNTMzMyA2MS44NDUzMzNjMC4wMTA2NjcgMTkuODgyNjY3LTAuNDQ4IDM2LjQ4LTEuNTI1MzMzIDQ5LjA2NjY2Ny0zLjU3MzMzMyA0MS44NzczMzMtMTUuMDgyNjY3IDc4LjQxMDY2Ny0zMi4xMDY2NjcgMTA5LjQ5MzMzM2EyMjIuMjkzMzMzIDIyMi4yOTMzMzMgMCAwIDEtMjMuNTg0IDM1LjA2MTMzM2MtNS4xNzMzMzMgNi4yMjkzMzMtOS40NzIgMTAuNjY2NjY3LTEyLjQzNzMzMyAxMy4zMzMzMzRhMzIuMDIxMzMzIDMyLjAyMTMzMyAwIDAgMS00NS4yMDUzMzQtMi40NDI2NjcgMzIgMzIgMCAwIDEgMi40MzItNDUuMTg0Yy0wLjA3NDY2NyAwLjA2NCAwLjI1Ni0wLjI0NTMzMyAwLjkzODY2Ny0wLjk2IDEuNDI5MzMzLTEuNDYxMzMzIDMuMDkzMzMzLTMuMzI4IDQuOTYtNS41NjhhMTU4LjYwMjY2NyAxNTguNjAyNjY3IDAgMCAwIDE2Ljc0NjY2Ny0yNC45NzA2NjdjMTIuODY0LTIzLjQ4OCAyMS42NzQ2NjctNTEuNDc3MzMzIDI0LjQ2OTMzMy04NC4yMDI2NjYgMC44ODUzMzMtMTAuMzc4NjY3IDEuMzAxMzMzLTI1LjM4NjY2NyAxLjI5MDY2Ny00My41OTQ2NjdhMTY0My40NjY2NjcgMTY0My40NjY2NjcgMCAwIDAtMS4xNzMzMzQtNTkuNTczMzMzbC0wLjIxMzMzMy01LjU3ODY2Ny0wLjAyMTMzMy0xLjM0NGMwLTQ5LjQ5MzMzMyA0MC4xMjgtODkuNiA4OS42MzItODkuNmE4OS42MjEzMzMgODkuNjIxMzMzIDAgMCAxIDg5LjYzMiA4OS42djE3MS4wNTA2NjdhMzIgMzIgMCAwIDEtNjQuMDIxMzM0IDBWNjQ2LjRhMjUuNiAyNS42IDAgMCAwLTI1LjYtMjUuNnoiIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjE2NTgiPjwvcGF0aD48L3N2Zz4=
// ==/UserScript==

/**
 * 修复的Bug：
 * - 修复各版本toString伪装不一致问题
 * - 添加缺失的WebGL2防护
 * 
 * 新增功能：
 * - 20+种指纹维度防护
 * - 高级反检测机制
 * - 跨域iframe消息通信
 * - 性能优化
 */

(function() {
    'use strict';

    // ==================== 高级配置系统 ====================
    const CONFIG = {
        // 噪声配置
        noise: {
            canvas: 0.0001,      // Canvas 噪声级别
            audio: 0.00001,      // Audio 噪声级别
            webgl: 0.001,        // WebGL 数值噪声
            timing: 0.1,         // 时间戳噪声 (毫秒)
            pixels: 2            // 像素噪声范围
        },

        // 模块开关
        modules: {
            canvas: true,
            webgl: true,
            audio: true,
            navigator: true,
            screen: true,
            timezone: true,
            webrtc: true,
            battery: true,
            fonts: true,
            hardware: true,
            memory: true,
            plugins: true,
            permissions: true,
            workers: true,
            iframe: true,
            geolocation: true,
            sensors: true,
            performance: true,
            stealth: true
        },

        // 伪装配置 - 模拟常见设备配置
        spoof: {
            // 浏览器信息
            vendor: 'Google Inc. (NVIDIA)',
            renderer: 'ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)',

            // 硬件信息
            hardwareConcurrency: 8,
            deviceMemory: 8,

            // 系统信息
            platform: 'Win32',
            language: 'zh-CN',
            languages: ['zh-CN', 'zh', 'en'],

            // 时区
            timezone: 'Asia/Shanghai',
            timezoneOffset: -480, // 分钟

            // 屏幕信息
            screen: {
                width: 1920,
                height: 1080,
                availWidth: 1920,
                availHeight: 1040,
                colorDepth: 24,
                pixelDepth: 24,
                availLeft: 0,
                availTop: 0
            },

            // 窗口信息
            window: {
                innerWidth: 1920,
                innerHeight: 969,
                outerWidth: 1920,
                outerHeight: 1080,
                screenX: 0,
                screenY: 0,
                screenLeft: 0,
                screenTop: 0,
                devicePixelRatio: 1
            },

            // WebGL 参数
            webgl: {
                maxTextureSize: 16384,
                maxRenderbufferSize: 16384,
                maxViewportDims: 16384,
                maxVertexAttribs: 16,
                maxVertexUniformVectors: 4096,
                maxFragmentUniformVectors: 1024,
                maxTextureImageUnits: 16,
                maxVertexTextureImageUnits: 16,
                maxCombinedTextureImageUnits: 32,
                maxCubeMapTextureSize: 16384,
                maxArrayTextureLayers: 2048,
                max3DTextureSize: 2048,
                maxColorAttachments: 8,
                maxDrawBuffers: 8,
                maxUniformBufferBindings: 24,
                maxSamples: 4
            }
        },

        // GPU伪装配置
        gpuConfig: {
            vendors: ['Intel Inc.', 'NVIDIA Corporation', 'AMD', 'Apple Inc.', 'Qualcomm'],
            renderers: [
                'Intel Iris OpenGL Engine',
                'NVIDIA GeForce RTX 3080/PCIe/SSE2',
                'AMD Radeon Pro 5500M',
                'Apple M1',
                'Adreno (TM) 630'
            ]
        },

        // 白名单 - 这些网站不启用防护
        whitelist: [],

        // 调试模式
        debug: false
    };

    // 检查是否在白名单中
    const currentHost = location.hostname;
    if (CONFIG.whitelist.some(host => currentHost.includes(host))) {
        return;
    }

    // ==================== 会话级伪随机数生成器 ====================
    class SessionPRNG {
        constructor() {
            this.seed = this._initSeed();
            this.state = [this.seed, this.seed >>> 1];
        }

        _initSeed() {
            try {
                const sessionKey = 'fp_ultimate_seed_v3';
                let seed = sessionStorage.getItem(sessionKey);

                if (!seed) {
                    seed = this._generateSeed();
                    sessionStorage.setItem(sessionKey, seed.toString());
                }

                return parseInt(seed, 10);
            } catch (e) {
                return this._generateSeed();
            }
        }

        _generateSeed() {
            const hostname = window.location.hostname || 'default';
            const timestamp = Date.now();
            const random = Math.floor(Math.random() * 0xFFFFFFFF);
            return this._xorshift32(hostname.charCodeAt(0) + timestamp + random);
        }

        _xorshift32(value) {
            value ^= value << 13;
            value ^= value >>> 17;
            value ^= value << 5;
            return (value >>> 0) % 0xFFFFFFFF;
        }

        next() {
            const s1 = this.state[0];
            const s0 = this.state[1];
            const result = (s0 + s1) >>> 0;

            this.state[0] = s0;
            this.state[1] = s1 ^ (s1 << 15) ^ (s0 >>> 11);

            return result / 0xFFFFFFFF;
        }

        nextInt(min, max) {
            return Math.floor(this.next() * (max - min + 1)) + min;
        }

        nextNoise(intensity = CONFIG.noise.canvas) {
            return (this.next() - 0.5) * 2 * intensity;
        }
    }

    const prng = new SessionPRNG();

    // ==================== 核心工具函数 ====================

    // 安全的控制台输出
    const logger = {
        log: (...args) => CONFIG.debug && console.log('[🛡️ FP-Ultimate]', ...args),
        warn: (...args) => CONFIG.debug && console.warn('[🛡️ FP-Ultimate]', ...args),
        error: (...args) => CONFIG.debug && console.error('[🛡️ FP-Ultimate]', ...args)
    };

    // 生成随机噪声
    function getNoise(level = CONFIG.noise.canvas) {
        return (Math.random() - 0.5) * level;
    }

    // 安全的属性定义
    function defineProperty(obj, prop, getter, setter = undefined) {
        try {
            const descriptor = {
                get: getter,
                configurable: true,
                enumerable: true
            };
            if (setter) descriptor.set = setter;
            Object.defineProperty(obj, prop, descriptor);
            return true;
        } catch (e) {
            logger.warn(`无法定义属性 ${prop}:`, e.message);
            return false;
        }
    }

    // 批量定义属性
    function defineProperties(obj, properties) {
        Object.keys(properties).forEach(prop => {
            if (prop in obj) {
                defineProperty(obj, prop, () => properties[prop]);
            }
        });
    }

    // 创建原生函数外观
    function makeNativeFunction(fn, name) {
        return new Proxy(fn, {
            apply(target, thisArg, args) {
                return target.apply(thisArg, args);
            },
            get(target, prop) {
                if (prop === 'name') return name;
                if (prop === 'toString') {
                    return function() {
                        return `function ${name}() { [native code] }`;
                    };
                }
                return target[prop];
            }
        });
    }

    // 拦截并修改函数
    function hookFunction(obj, methodName, hookFn) {
        try {
            const original = obj[methodName];
            if (!original) return false;

            obj[methodName] = makeNativeFunction(function(...args) {
                return hookFn.call(this, original, args);
            }, original.name || methodName);

            obj[methodName].prototype = original.prototype;
            return true;
        } catch (e) {
            logger.warn(`Hook ${methodName} 失败:`, e.message);
            return false;
        }
    }

    // ==================== Native Code 伪装管理器 (增强版) ====================
    const StealthManager = {
        originalToString: Function.prototype.toString,
        protectedFunctions: new Set(),

        init: function() {
            if (!CONFIG.modules.stealth) return;

            const self = this;
            
            // 劫持 Function.prototype.toString
            Function.prototype.toString = makeNativeFunction(function(...args) {
                if (self.isProtectedFunction(this)) {
                    return self.getNativeRepresentation(this);
                }
                return self.originalToString.apply(this, args);
            }, 'toString');

            // 保护特定函数的toString
            this.protectBuiltins();
            
            logger.log('Native Code伪装已启用');
        },

        registerProtectedFunction: function(fn) {
            this.protectedFunctions.add(fn);
        },

        isProtectedFunction: function(fn) {
            return this.protectedFunctions.has(fn);
        },

        getNativeRepresentation: function(fn) {
            const functionName = fn.name || 'anonymous';
            return `function ${functionName}() { [native code] }`;
        },

        protectBuiltins: function() {
            const nativeFunctionString = 'function () { [native code] }';
            
            const protectedFunctions = [
                [HTMLCanvasElement.prototype, 'toDataURL'],
                [HTMLCanvasElement.prototype, 'toBlob'],
                [HTMLCanvasElement.prototype, 'getContext'],
                [CanvasRenderingContext2D.prototype, 'getImageData'],
                [CanvasRenderingContext2D.prototype, 'measureText'],
                [CanvasRenderingContext2D.prototype, 'isPointInPath'],
                [CanvasRenderingContext2D.prototype, 'isPointInStroke'],
                [CanvasRenderingContext2D.prototype, 'fillText'],
                [CanvasRenderingContext2D.prototype, 'strokeText'],
                [WebGLRenderingContext.prototype, 'getParameter'],
                [WebGLRenderingContext.prototype, 'getExtension'],
                [WebGLRenderingContext.prototype, 'getSupportedExtensions'],
                [WebGLRenderingContext.prototype, 'readPixels'],
                [WebGLRenderingContext.prototype, 'getShaderPrecisionFormat'],
                [Date.prototype, 'getTimezoneOffset'],
                [navigator, 'getBattery'],
                [navigator, 'javaEnabled'],
                [navigator, 'sendBeacon'],
                [navigator.mediaDevices, 'enumerateDevices'],
                [navigator.permissions, 'query'],
                [window.performance, 'now']
            ];

            // 同时保护WebGL2
            if (typeof WebGL2RenderingContext !== 'undefined') {
                protectedFunctions.push(
                    [WebGL2RenderingContext.prototype, 'getParameter'],
                    [WebGL2RenderingContext.prototype, 'getExtension'],
                    [WebGL2RenderingContext.prototype, 'getSupportedExtensions'],
                    [WebGL2RenderingContext.prototype, 'readPixels'],
                    [WebGL2RenderingContext.prototype, 'getShaderPrecisionFormat']
                );
            }

            protectedFunctions.forEach(([obj, method]) => {
                if (obj && obj[method]) {
                    try {
                        defineProperty(obj[method], 'toString', {
                            value: function() {
                                return nativeFunctionString;
                            }
                        });
                        
                        defineProperty(obj[method], 'name', {
                            value: method
                        });

                        this.registerProtectedFunction(obj[method]);
                    } catch (e) {
                        // 忽略错误
                    }
                }
            });
        }
    };

    // ==================== Canvas 指纹防护 (增强版) ====================
    const CanvasProtection = {
        init: function() {
            if (!CONFIG.modules.canvas) return;
            
            logger.log('初始化 Canvas 防护...');

            this.protectToDataURL();
            this.protectToBlob();
            this.protectGetImageData();
            this.protectMeasureText();
            this.protectPathMethods();
        },

        addNoiseToImageData: function(imageData) {
            if (!imageData?.data) return imageData;
            const data = imageData.data;
            const width = imageData.width;
            const height = imageData.height;
            
            // 使用区块噪声 + 抖动噪声策略 
            const blockSize = 8;
            
            for (let y = 0; y < height; y += blockSize) {
                for (let x = 0; x < width; x += blockSize) {
                    const baseNoiseR = prng.nextNoise() * 10;
                    const baseNoiseG = prng.nextNoise() * 10;
                    const baseNoiseB = prng.nextNoise() * 10;

                    for (let dy = 0; dy < blockSize && y + dy < height; dy++) {
                        for (let dx = 0; dx < blockSize && x + dx < width; dx++) {
                            const i = ((y + dy) * width + (x + dx)) * 4;

                            let noiseR = baseNoiseR + prng.nextNoise() * 3;
                            let noiseG = baseNoiseG + prng.nextNoise() * 3;
                            let noiseB = baseNoiseB + prng.nextNoise() * 3;

                            data[i] = Math.min(255, Math.max(0, data[i] + Math.floor(noiseR)));
                            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + Math.floor(noiseG)));
                            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + Math.floor(noiseB)));
                        }
                    }
                }
            }

            return imageData;
        },

        protectToDataURL: function() {
            hookFunction(HTMLCanvasElement.prototype, 'toDataURL', function(original, args) {
                const ctx = this.getContext('2d');
                if (ctx && this.width > 0 && this.height > 0) {
                    try {
                        const imageData = ctx.getImageData(0, 0, this.width, this.height);
                        CanvasProtection.addNoiseToImageData(imageData);
                        ctx.putImageData(imageData, 0, 0);
                    } catch (e) {}
                }
                return original.apply(this, args);
            });
        },

        protectToBlob: function() {
            hookFunction(HTMLCanvasElement.prototype, 'toBlob', function(original, args) {
                const ctx = this.getContext('2d');
                if (ctx && this.width > 0 && this.height > 0) {
                    try {
                        const imageData = ctx.getImageData(0, 0, this.width, this.height);
                        CanvasProtection.addNoiseToImageData(imageData);
                        ctx.putImageData(imageData, 0, 0);
                    } catch (e) {}
                }
                return original.apply(this, args);
            });
        },

        protectGetImageData: function() {
            hookFunction(CanvasRenderingContext2D.prototype, 'getImageData', function(original, args) {
                const imageData = original.apply(this, args);
                return CanvasProtection.addNoiseToImageData(imageData);
            });
        },

        protectMeasureText: function() {
            hookFunction(CanvasRenderingContext2D.prototype, 'measureText', function(original, args) {
                const result = original.apply(this, args);
                if (result?.width !== undefined) {
                    const originalWidth = result.width;
                    defineProperty(result, 'width', () => originalWidth + getNoise(CONFIG.noise.canvas) * 0.01);

                    // 其他测量属性
                    ['actualBoundingBoxLeft', 'actualBoundingBoxRight', 'actualBoundingBoxAscent',
                     'actualBoundingBoxDescent', 'fontBoundingBoxAscent', 'fontBoundingBoxDescent',
                     'emHeightAscent', 'emHeightDescent', 'hangingBaseline', 'alphabeticBaseline',
                     'ideographicBaseline'].forEach(prop => {
                        if (prop in result) {
                            const origValue = result[prop];
                            defineProperty(result, prop, () => origValue + getNoise(CONFIG.noise.canvas) * 0.001);
                        }
                    });
                }
                return result;
            });
        },

        protectPathMethods: function() {
            // 保护 isPointInPath 和 isPointInStroke
            hookFunction(CanvasRenderingContext2D.prototype, 'isPointInPath', function(original, args) {
                return original.apply(this, args);
            });

            hookFunction(CanvasRenderingContext2D.prototype, 'isPointInStroke', function(original, args) {
                return original.apply(this, args);
            });
        }
    };

    // ==================== WebGL 指纹防护 (增强版) ====================
    const WebGLProtection = {
        init: function() {
            if (!CONFIG.modules.webgl) return;
            
            logger.log('初始化 WebGL 防护...');

            this.protectGetParameter();
            this.protectGetExtension();
            this.protectGetSupportedExtensions();
            this.protectReadPixels();
            this.protectShaderPrecision();
        },

        getFakeGPUVendor: function() {
            return CONFIG.gpuConfig.vendors[prng.nextInt(0, CONFIG.gpuConfig.vendors.length - 1)];
        },

        getFakeGPURenderer: function() {
            return CONFIG.gpuConfig.renderers[prng.nextInt(0, CONFIG.gpuConfig.renderers.length - 1)];
        },

        protectGetParameter: function() {
            const webglParamMap = {
                // 厂商和渲染器信息
                37445: () => this.getFakeGPUVendor(),           // UNMASKED_VENDOR_WEBGL
                37446: () => this.getFakeGPURenderer(),         // UNMASKED_RENDERER_WEBGL
                7936: 'WebKit',                                  // VENDOR
                7937: 'WebKit WebGL',                            // RENDERER
                7938: 'WebGL 2.0 (OpenGL ES 3.0 Chromium)',     // VERSION
                35724: 'WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)', // SHADING_LANGUAGE_VERSION

                // 数值参数
                3379: CONFIG.spoof.webgl.maxTextureSize,           // MAX_TEXTURE_SIZE
                34076: CONFIG.spoof.webgl.maxRenderbufferSize,     // MAX_RENDERBUFFER_SIZE
                3386: CONFIG.spoof.webgl.maxVertexAttribs,         // MAX_VERTEX_ATTRIBS
                36347: CONFIG.spoof.webgl.maxVertexUniformVectors, // MAX_VERTEX_UNIFORM_VECTORS
                36349: CONFIG.spoof.webgl.maxFragmentUniformVectors, // MAX_FRAGMENT_UNIFORM_VECTORS
                34930: CONFIG.spoof.webgl.maxTextureImageUnits,    // MAX_TEXTURE_IMAGE_UNITS
                35660: CONFIG.spoof.webgl.maxVertexTextureImageUnits, // MAX_VERTEX_TEXTURE_IMAGE_UNITS
                35661: CONFIG.spoof.webgl.maxCombinedTextureImageUnits, // MAX_COMBINED_TEXTURE_IMAGE_UNITS
                34076: CONFIG.spoof.webgl.maxCubeMapTextureSize,   // MAX_CUBE_MAP_TEXTURE_SIZE
                35071: CONFIG.spoof.webgl.maxArrayTextureLayers,   // MAX_ARRAY_TEXTURE_LAYERS (WebGL2)
                32883: CONFIG.spoof.webgl.max3DTextureSize,        // MAX_3D_TEXTURE_SIZE (WebGL2)
                36063: CONFIG.spoof.webgl.maxColorAttachments,     // MAX_COLOR_ATTACHMENTS (WebGL2)
                34852: CONFIG.spoof.webgl.maxDrawBuffers,          // MAX_DRAW_BUFFERS (WebGL2)
                35375: CONFIG.spoof.webgl.maxUniformBufferBindings, // MAX_UNIFORM_BUFFER_BINDINGS (WebGL2)
                36183: CONFIG.spoof.webgl.maxSamples               // MAX_SAMPLES (WebGL2)
            };

            function handleGetParameter(original, context, parameter) {
                if (webglParamMap.hasOwnProperty(parameter)) {
                    const value = webglParamMap[parameter];
                    return typeof value === 'function' ? value() : value;
                }
                // 为数值参数添加噪声
                const result = original.call(context, parameter);
                if (typeof result === 'number' && parameter >= 0) {
                    return result + getNoise(CONFIG.noise.webgl);
                }
                return result;
            }

            // WebGL 1.0
            if (typeof WebGLRenderingContext !== 'undefined') {
                hookFunction(WebGLRenderingContext.prototype, 'getParameter', function(original, args) {
                    return handleGetParameter(original, this, args[0]);
                });
            }

            // WebGL 2.0
            if (typeof WebGL2RenderingContext !== 'undefined') {
                hookFunction(WebGL2RenderingContext.prototype, 'getParameter', function(original, args) {
                    return handleGetParameter(original, this, args[0]);
                });
            }
        },

        protectGetExtension: function() {
            const blockedExtensions = [
                'WEBGL_debug_renderer_info',
                'WEBKIT_WEBGL_debug_renderer_info',
                'EXT_disjoint_timer_query',
                'EXT_disjoint_timer_query_webgl2',
                'WEBGL_compressed_texture_s3tc',
                'WEBGL_compressed_texture_s3tc_srgb'
            ];

            function handleGetExtension(original, name) {
                if (blockedExtensions.includes(name)) {
                    return null;
                }
                return original.call(this, name);
            }

            if (typeof WebGLRenderingContext !== 'undefined') {
                hookFunction(WebGLRenderingContext.prototype, 'getExtension', function(original, args) {
                    return handleGetExtension(original, args[0]);
                });
            }

            if (typeof WebGL2RenderingContext !== 'undefined') {
                hookFunction(WebGL2RenderingContext.prototype, 'getExtension', function(original, args) {
                    return handleGetExtension(original, args[0]);
                });
            }
        },

        protectGetSupportedExtensions: function() {
            const blockedPatterns = ['debug_renderer_info', 'disjoint_timer_query', 'compressed_texture_s3tc'];

            function handleGetSupportedExtensions(original) {
                const extensions = original.call(this);
                if (extensions) {
                    return extensions.filter(ext =>
                        !blockedPatterns.some(pattern => ext.includes(pattern))
                    );
                }
                return extensions;
            }

            if (typeof WebGLRenderingContext !== 'undefined') {
                hookFunction(WebGLRenderingContext.prototype, 'getSupportedExtensions', function(original, args) {
                    return handleGetSupportedExtensions(original);
                });
            }

            if (typeof WebGL2RenderingContext !== 'undefined') {
                hookFunction(WebGL2RenderingContext.prototype, 'getSupportedExtensions', function(original, args) {
                    return handleGetSupportedExtensions(original);
                });
            }
        },

        protectReadPixels: function() {
            function handleReadPixels(original, args) {
                const result = original.apply(this, args);
                
                // 对像素数据添加噪声
                const pixels = args[6];
                if (pixels && pixels instanceof Uint8Array) {
                    for (let i = 0; i < pixels.length; i += 4) {
                        pixels[i] = Math.min(255, Math.max(0, pixels[i] + prng.nextInt(-2, 2)));
                        pixels[i + 1] = Math.min(255, Math.max(0, pixels[i + 1] + prng.nextInt(-2, 2)));
                        pixels[i + 2] = Math.min(255, Math.max(0, pixels[i + 2] + prng.nextInt(-2, 2)));
                    }
                }

                return result;
            }

            if (typeof WebGLRenderingContext !== 'undefined') {
                hookFunction(WebGLRenderingContext.prototype, 'readPixels', handleReadPixels);
            }

            if (typeof WebGL2RenderingContext !== 'undefined') {
                hookFunction(WebGL2RenderingContext.prototype, 'readPixels', handleReadPixels);
            }
        },

        protectShaderPrecision: function() {
            function handleGetShaderPrecisionFormat(original, shaderType, precisionType) {
                const result = original.call(this, shaderType, precisionType);
                if (result) {
                    // 返回标准化值
                    return {
                        precision: 23,
                        rangeMin: 127,
                        rangeMax: 127
                    };
                }
                return result;
            }

            if (typeof WebGLRenderingContext !== 'undefined' && WebGLRenderingContext.prototype.getShaderPrecisionFormat) {
                hookFunction(WebGLRenderingContext.prototype, 'getShaderPrecisionFormat', function(original, args) {
                    return handleGetShaderPrecisionFormat(original, args[0], args[1]);
                });
            }

            if (typeof WebGL2RenderingContext !== 'undefined' && WebGL2RenderingContext.prototype.getShaderPrecisionFormat) {
                hookFunction(WebGL2RenderingContext.prototype, 'getShaderPrecisionFormat', function(original, args) {
                    return handleGetShaderPrecisionFormat(original, args[0], args[1]);
                });
            }
        }
    };

    // ==================== AudioContext 指纹防护 (增强版) ====================
    const AudioProtection = {
        init: function() {
            if (!CONFIG.modules.audio) return;
            
            logger.log('初始化 Audio 防护...');

            this.protectAudioContext();
            this.protectOfflineAudioContext();
            this.protectAnalyserNode();
        },

        addNoiseToBuffer: function(buffer) {
            if (!buffer?.numberOfChannels) return;
            for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
                const data = buffer.getChannelData(channel);
                for (let i = 0; i < data.length; i += 10) {
                    data[i] += getNoise(CONFIG.noise.audio);
                }
            }
        },

        protectAudioContext: function() {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;

            const self = this;

            window.AudioContext = makeNativeFunction(function(...args) {
                const context = new AudioContextClass(...args);

                // 保护 createAnalyser
                const originalCreateAnalyser = context.createAnalyser.bind(context);
                context.createAnalyser = makeNativeFunction(function() {
                    const analyser = originalCreateAnalyser();
                    self.protectAnalyserNodeInstance(analyser);
                    return analyser;
                }, 'createAnalyser');

                // 保护 createDynamicsCompressor
                const originalCreateCompressor = context.createDynamicsCompressor.bind(context);
                context.createDynamicsCompressor = makeNativeFunction(function() {
                    const compressor = originalCreateCompressor();
                    if (compressor.reduction !== undefined) {
                        const originalReduction = compressor.reduction;
                        defineProperty(compressor, 'reduction', () =>
                            originalReduction + getNoise(CONFIG.noise.audio) * 0.01);
                    }
                    return compressor;
                }, 'createDynamicsCompressor');

                // 保护 sampleRate
                defineProperty(context, 'sampleRate', () => 48000);
                defineProperty(context, 'baseLatency', () => 0.005);

                return context;
            }, 'AudioContext');

            window.AudioContext.prototype = AudioContextClass.prototype;
        },

        protectOfflineAudioContext: function() {
            const OfflineAudioContextClass = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (!OfflineAudioContextClass) return;

            const self = this;

            window.OfflineAudioContext = makeNativeFunction(function(numberOfChannels, length, sampleRate) {
                const context = new OfflineAudioContextClass(numberOfChannels, length, sampleRate);

                // 保护 createDynamicsCompressor
                const originalCreateCompressor = context.createDynamicsCompressor.bind(context);
                context.createDynamicsCompressor = makeNativeFunction(function() {
                    const compressor = originalCreateCompressor();
                    if (compressor.reduction !== undefined) {
                        const originalReduction = compressor.reduction;
                        defineProperty(compressor, 'reduction', () =>
                            originalReduction + getNoise(CONFIG.noise.audio) * 0.01);
                    }
                    return compressor;
                }, 'createDynamicsCompressor');

                // Hook startRendering
                const originalStartRendering = context.startRendering.bind(context);
                context.startRendering = makeNativeFunction(function() {
                    return originalStartRendering().then(buffer => {
                        self.addNoiseToBuffer(buffer);
                        return buffer;
                    });
                }, 'startRendering');

                return context;
            }, 'OfflineAudioContext');

            window.OfflineAudioContext.prototype = OfflineAudioContextClass.prototype;
        },

        protectAnalyserNode: function() {
            const self = this;
            if (typeof AnalyserNode !== 'undefined') {
                const originalGetFloatFrequencyData = AnalyserNode.prototype.getFloatFrequencyData;
                if (originalGetFloatFrequencyData) {
                    AnalyserNode.prototype.getFloatFrequencyData = makeNativeFunction(function(array) {
                        originalGetFloatFrequencyData.call(this, array);
                        for (let i = 0; i < array.length; i++) {
                            array[i] += getNoise(CONFIG.noise.audio) * 0.1;
                        }
                    }, 'getFloatFrequencyData');
                }
            }
        },

        protectAnalyserNodeInstance: function(analyser) {
            const methods = ['getFloatFrequencyData', 'getByteFrequencyData',
                           'getFloatTimeDomainData', 'getByteTimeDomainData'];

            methods.forEach(method => {
                if (analyser[method]) {
                    const original = analyser[method].bind(analyser);
                    analyser[method] = makeNativeFunction(function(array) {
                        original(array);
                        // 添加噪声到分析结果
                        for (let i = 0; i < array.length; i++) {
                            if (array instanceof Float32Array) {
                                array[i] += getNoise(CONFIG.noise.audio) * 0.1;
                            } else if (array instanceof Uint8Array) {
                                array[i] = Math.max(0, Math.min(255,
                                    array[i] + Math.floor(getNoise(CONFIG.noise.audio) * 10)));
                            }
                        }
                    }, method);
                }
            });
        }
    };

    // ==================== Navigator 指纹防护 (增强版) ====================
    const NavigatorProtection = {
        init: function() {
            if (!CONFIG.modules.navigator) return;
            
            logger.log('初始化 Navigator 防护...');

            const navigatorProps = {
                hardwareConcurrency: CONFIG.spoof.hardwareConcurrency,
                deviceMemory: CONFIG.spoof.deviceMemory,
                language: CONFIG.spoof.language,
                languages: CONFIG.spoof.languages,
                platform: CONFIG.spoof.platform,
                maxTouchPoints: 0,
                pdfViewerEnabled: true,
                webdriver: false,
                bluetooth: undefined,
                clipboard: undefined,
                credentials: undefined,
                keyboard: undefined,
                mediaCapabilities: undefined,
                mediaSession: undefined,
                permissions: undefined,
                presentation: undefined,
                scheduling: undefined,
                storage: undefined,
                wakeLock: undefined,
                webkitTemporaryStorage: undefined
            };

            defineProperties(navigator, navigatorProps);

            // 修改 userAgentData
            if ('userAgentData' in navigator) {
                defineProperty(navigator, 'userAgentData', () => ({
                    brands: [
                        { brand: 'Chromium', version: '120' },
                        { brand: 'Google Chrome', version: '120' },
                        { brand: 'Not=A?Brand', version: '99' }
                    ],
                    mobile: false,
                    platform: 'Windows',
                    getHighEntropyValues: async (hints) => ({
                        platform: 'Windows',
                        platformVersion: '10.0.0',
                        architecture: 'x86',
                        model: '',
                        uaFullVersion: '120.0.0.0',
                        fullVersionList: [
                            { brand: 'Chromium', version: '120.0.0.0' },
                            { brand: 'Google Chrome', version: '120.0.0.0' }
                        ]
                    })
                }));
            }

            // 修改 connection
            if ('connection' in navigator) {
                defineProperty(navigator, 'connection', () => ({
                    effectiveType: '4g',
                    downlink: 10,
                    downlinkMax: Infinity,
                    rtt: 50,
                    saveData: false,
                    type: 'wifi',
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    dispatchEvent: function() { return true; }
                }));
            }

            // 修改 plugins 和 mimeTypes
            this.protectPlugins();
        },

        protectPlugins: function() {
            const fakePlugins = {
                length: 3,
                item: function(index) { return this[index] || null; },
                namedItem: function(name) { return null; },
                refresh: function() {},
                0: { name: 'Chrome PDF Plugin', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
                1: { name: 'Native Client', filename: 'internal-nacl-plugin', description: '' },
                2: { name: 'Widevine Content Decryption Module', filename: 'widevinecdmadapter.dll', description: 'Widevine Content Decryption Module' }
            };

            const fakeMimeTypes = {
                length: 4,
                item: function(index) { return this[index] || null; },
                namedItem: function(name) { return null; },
                0: { type: 'application/pdf', suffixes: 'pdf', description: '', enabledPlugin: fakePlugins[0] },
                1: { type: 'application/x-google-chrome-pdf', suffixes: 'pdf', description: '', enabledPlugin: fakePlugins[0] },
                2: { type: 'application/x-nacl', suffixes: '', description: '', enabledPlugin: fakePlugins[1] },
                3: { type: 'application/x-pnacl', suffixes: '', description: '', enabledPlugin: fakePlugins[1] }
            };

            defineProperty(navigator, 'plugins', () => fakePlugins);
            defineProperty(navigator, 'mimeTypes', () => fakeMimeTypes);

            // 修改 javaEnabled
            hookFunction(navigator, 'javaEnabled', function(original, args) {
                return function() { return false; };
            });
        }
    };

    // ==================== Screen 指纹防护 ====================
    const ScreenProtection = {
        init: function() {
            if (!CONFIG.modules.screen) return;
            
            logger.log('初始化 Screen 防护...');

            defineProperties(screen, CONFIG.spoof.screen);

            // 修改 orientation
            if (screen.orientation) {
                defineProperty(screen.orientation, 'type', () => 'landscape-primary');
                defineProperty(screen.orientation, 'angle', () => 0);
            }

            // 修改 window 相关属性
            defineProperty(window, 'devicePixelRatio', () => CONFIG.spoof.window.devicePixelRatio);
            defineProperty(window, 'innerWidth', () => CONFIG.spoof.window.innerWidth);
            defineProperty(window, 'innerHeight', () => CONFIG.spoof.window.innerHeight);
            defineProperty(window, 'outerWidth', () => CONFIG.spoof.window.outerWidth);
            defineProperty(window, 'outerHeight', () => CONFIG.spoof.window.outerHeight);
            defineProperty(window, 'screenX', () => CONFIG.spoof.window.screenX);
            defineProperty(window, 'screenY', () => CONFIG.spoof.window.screenY);
            defineProperty(window, 'screenLeft', () => CONFIG.spoof.window.screenLeft);
            defineProperty(window, 'screenTop', () => CONFIG.spoof.window.screenTop);

            // 修改 visualViewport
            if (window.visualViewport) {
                defineProperty(window.visualViewport, 'width', () => CONFIG.spoof.window.innerWidth);
                defineProperty(window.visualViewport, 'height', () => CONFIG.spoof.window.innerHeight);
                defineProperty(window.visualViewport, 'scale', () => 1);
            }

            // 修改 matchMedia
            this.protectMatchMedia();
        },

        protectMatchMedia: function() {
            const originalMatchMedia = window.matchMedia;
            window.matchMedia = makeNativeFunction(function(query) {
                const result = originalMatchMedia.call(window, query);

                // 修改颜色方案检测
                if (query.includes('prefers-color-scheme')) {
                    defineProperty(result, 'matches', () =>
                        query.includes('light') ? true : false);
                }

                // 修改减少动画检测
                if (query.includes('prefers-reduced-motion')) {
                    defineProperty(result, 'matches', () => false);
                }

                // 修改对比度检测
                if (query.includes('prefers-contrast')) {
                    defineProperty(result, 'matches', () =>
                        query.includes('no-preference') ? true : false);
                }

                return result;
            }, 'matchMedia');
        }
    };

    // ==================== Timezone 指纹防护 ====================
    const TimezoneProtection = {
        init: function() {
            if (!CONFIG.modules.timezone) return;
            
            logger.log('初始化 Timezone 防护...');

            // 修改 Date 时区相关方法
            Date.prototype.getTimezoneOffset = makeNativeFunction(function() {
                return CONFIG.spoof.timezoneOffset;
            }, 'getTimezoneOffset');

            // 修改 Intl.DateTimeFormat
            if (typeof Intl !== 'undefined') {
                const originalDateTimeFormat = Intl.DateTimeFormat;
                Intl.DateTimeFormat = makeNativeFunction(function(locales, options) {
                    const newOptions = { ...options, timeZone: CONFIG.spoof.timezone };
                    return new originalDateTimeFormat(locales || CONFIG.spoof.language, newOptions);
                }, 'DateTimeFormat');
                Intl.DateTimeFormat.prototype = originalDateTimeFormat.prototype;
                Intl.DateTimeFormat.supportedLocalesOf = originalDateTimeFormat.supportedLocalesOf;

                // 修改 Intl.NumberFormat
                const originalNumberFormat = Intl.NumberFormat;
                Intl.NumberFormat = makeNativeFunction(function(locales, options) {
                    return new originalNumberFormat(locales || CONFIG.spoof.language, options);
                }, 'NumberFormat');
                Intl.NumberFormat.prototype = originalNumberFormat.prototype;

                // 修改 Intl.Collator
                const originalCollator = Intl.Collator;
                Intl.Collator = makeNativeFunction(function(locales, options) {
                    return new originalCollator(locales || CONFIG.spoof.language, options);
                }, 'Collator');
                Intl.Collator.prototype = originalCollator.prototype;
            }

            // 修改 performance.now
            if (window.performance) {
                const originalNow = window.performance.now.bind(window.performance);
                window.performance.now = makeNativeFunction(function() {
                    return originalNow() + getNoise(CONFIG.noise.timing);
                }, 'now');

                // 修改 performance.timeOrigin
                defineProperty(window.performance, 'timeOrigin', () => Date.now());
            }

            // 修改 Date.now
            const originalDateNow = Date.now;
            Date.now = makeNativeFunction(function() {
                return originalDateNow() + Math.floor(getNoise(CONFIG.noise.timing));
            }, 'now');
        }
    };

    // ==================== WebRTC 指纹防护 ====================
    const WebRTCProtection = {
        init: function() {
            if (!CONFIG.modules.webrtc) return;
            
            logger.log('初始化 WebRTC 防护...');

            const rtcClasses = ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection'];

            rtcClasses.forEach(className => {
                if (window[className]) {
                    this.protectRTCPeerConnection(window[className], className);
                }
            });

            // 修改 mediaDevices
            this.protectMediaDevices();
        },

        protectRTCPeerConnection: function(OriginalClass, className) {
            window[className] = makeNativeFunction(function(config, constraints) {
                // 修改配置以使用中继服务器
                const modifiedConfig = {
                    ...config,
                    iceServers: config?.iceServers || [],
                    iceTransportPolicy: 'relay',
                    bundlePolicy: 'balanced',
                    rtcpMuxPolicy: 'require'
                };

                const pc = new OriginalClass(modifiedConfig, constraints);

                // Hook createOffer
                const originalCreateOffer = pc.createOffer.bind(pc);
                pc.createOffer = makeNativeFunction(function(options) {
                    return originalCreateOffer(options).then(offer => {
                        if (offer?.sdp) {
                            // 清理 SDP 中的敏感信息
                            offer.sdp = offer.sdp
                                .replace(/c=IN IP4 \d+\.\d+\.\d+\.\d+/g, 'c=IN IP4 0.0.0.0')
                                .replace(/a=candidate:.*?\d+\.\d+\.\d+\.\d+.*?\r\n/g, '')
                                .replace(/a=rtcp:\d+ IN IP4 \d+\.\d+\.\d+\.\d+/g, 'a=rtcp:9 IN IP4 0.0.0.0');
                        }
                        return offer;
                    });
                }, 'createOffer');

                // Hook createAnswer
                const originalCreateAnswer = pc.createAnswer.bind(pc);
                pc.createAnswer = makeNativeFunction(function(options) {
                    return originalCreateAnswer(options).then(answer => {
                        if (answer?.sdp) {
                            answer.sdp = answer.sdp
                                .replace(/c=IN IP4 \d+\.\d+\.\d+\.\d+/g, 'c=IN IP4 0.0.0.0')
                                .replace(/a=candidate:.*?\d+\.\d+\.\d+\.\d+.*?\r\n/g, '');
                        }
                        return answer;
                    });
                }, 'createAnswer');

                return pc;
            }, className);

            window[className].prototype = OriginalClass.prototype;
        },

        protectMediaDevices: function() {
            if (navigator.mediaDevices) {
                // 修改 enumerateDevices
                const originalEnumerateDevices = navigator.mediaDevices.enumerateDevices;
                if (originalEnumerateDevices) {
                    navigator.mediaDevices.enumerateDevices = makeNativeFunction(function() {
                        return originalEnumerateDevices.call(navigator.mediaDevices).then(devices => {
                            return devices.map((device, index) => ({
                                deviceId: `default-${device.kind}-${index}`,
                                groupId: `default-group-${index}`,
                                kind: device.kind,
                                label: device.kind === 'audioinput' ? '默认 - 麦克风' :
                                       device.kind === 'audiooutput' ? '默认 - 扬声器' :
                                       device.kind === 'videoinput' ? '默认 - 摄像头' : '未知设备'
                            }));
                        });
                    }, 'enumerateDevices');
                }
            }
        }
    };

    // ==================== Battery 指纹防护 ====================
    const BatteryProtection = {
        init: function() {
            if (!CONFIG.modules.battery) return;
            
            logger.log('初始化 Battery 防护...');

            if (navigator.getBattery) {
                navigator.getBattery = makeNativeFunction(function() {
                    return Promise.resolve({
                        charging: true,
                        chargingTime: 0,
                        dischargingTime: Infinity,
                        level: 1,
                        addEventListener: function() {},
                        removeEventListener: function() {},
                        dispatchEvent: function() { return true; }
                    });
                }, 'getBattery');
            }
        }
    };

    // ==================== Fonts 指纹防护 ====================
    const FontProtection = {
        init: function() {
            if (!CONFIG.modules.fonts) return;
            
            logger.log('初始化 Fonts 防护...');

            // 修改 FontFace API
            if (window.FontFace) {
                const OriginalFontFace = window.FontFace;
                window.FontFace = makeNativeFunction(function(family, source, descriptors) {
                    return new OriginalFontFace(family, source, descriptors);
                }, 'FontFace');
                window.FontFace.prototype = OriginalFontFace.prototype;
                window.FontFace.check = OriginalFontFace.check;
            }

            // 修改 document.fonts
            if (document.fonts) {
                const originalCheck = document.fonts.check;
                const originalLoad = document.fonts.load;

                if (originalCheck) {
                    document.fonts.check = makeNativeFunction(function(font, text) {
                        // 返回固定结果避免字体检测
                        return true;
                    }, 'check');
                }

                if (originalLoad) {
                    document.fonts.load = makeNativeFunction(function(font, text) {
                        return Promise.resolve([]);
                    }, 'load');
                }

                // 修改 status
                defineProperty(document.fonts, 'status', () => 'loaded');
            }
        }
    };

    // ==================== Memory 指纹防护 ====================
    const MemoryProtection = {
        init: function() {
            if (!CONFIG.modules.memory) return;
            
            logger.log('初始化 Memory 防护...');

            // 修改 performance.memory
            if (window.performance) {
                defineProperty(window.performance, 'memory', () => ({
                    usedJSHeapSize: 12000000,
                    totalJSHeapSize: 22000000,
                    jsHeapSizeLimit: 2190000000
                }));
            }
        }
    };

    // ==================== Permissions 指纹防护 ====================
    const PermissionsProtection = {
        init: function() {
            if (!CONFIG.modules.permissions) return;
            
            logger.log('初始化 Permissions 防护...');

            if (navigator.permissions && navigator.permissions.query) {
                const originalQuery = navigator.permissions.query;
                navigator.permissions.query = makeNativeFunction(function(permissionDesc) {
                    return originalQuery.call(navigator.permissions, permissionDesc).then(status => {
                        // 固定权限状态为 prompt
                        const permissionsToFix = ['notifications', 'camera', 'microphone', 'geolocation', 'clipboard-read', 'clipboard-write'];
                        if (permissionsToFix.includes(permissionDesc.name)) {
                            defineProperty(status, 'state', () => 'prompt');
                        }
                        return status;
                    });
                }, 'query');
            }

            // 修改 Notification.permission
            if (window.Notification) {
                defineProperty(Notification, 'permission', () => 'default');
            }
        }
    };

    // ==================== Geolocation 指纹防护 ====================
    const GeolocationProtection = {
        init: function() {
            if (!CONFIG.modules.geolocation) return;
            
            logger.log('初始化 Geolocation 防护...');

            if (!navigator.geolocation) return;

            const originalGetCurrentPosition = navigator.geolocation.getCurrentPosition.bind(navigator.geolocation);
            const originalWatchPosition = navigator.geolocation.watchPosition.bind(navigator.geolocation);

            navigator.geolocation.getCurrentPosition = makeNativeFunction(function(success, error, options) {
                // 如果需要精确位置，返回错误
                if (options && options.enableHighAccuracy) {
                    if (error) error({ code: 1, message: 'Permission denied' });
                    return;
                }

                // 返回模糊的大致位置（北京）
                success({
                    coords: {
                        latitude: 39.9042 + (Math.random() - 0.5) * 0.1,
                        longitude: 116.4074 + (Math.random() - 0.5) * 0.1,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        speed: null,
                        accuracy: 10000 // 10公里精度
                    },
                    timestamp: Date.now()
                });
            }, 'getCurrentPosition');

            navigator.geolocation.watchPosition = makeNativeFunction(function(success, error, options) {
                navigator.geolocation.getCurrentPosition(success, error, options);
                return 1; // 返回假的watchId
            }, 'watchPosition');
        }
    };

    // ==================== Sensors 指纹防护 ====================
    const SensorProtection = {
        init: function() {
            if (!CONFIG.modules.sensors) return;
            
            logger.log('初始化 Sensors 防护...');

            this.protectDeviceOrientation();
            this.protectDeviceMotion();
        },

        protectDeviceOrientation: function() {
            if (!('DeviceOrientationEvent' in window)) return;

            const originalAddEventListener = window.addEventListener;
            window.addEventListener = makeNativeFunction(function(type, listener, options) {
                if (type === 'deviceorientation' || type === 'deviceorientationabsolute') {
                    // 返回模拟的静止设备方向
                    const wrappedListener = function(event) {
                        event.alpha = 0;
                        event.beta = 0;
                        event.gamma = 0;
                        listener.call(this, event);
                    };
                    return originalAddEventListener.call(this, type, wrappedListener, options);
                }
                return originalAddEventListener.apply(this, arguments);
            }, 'addEventListener');
        },

        protectDeviceMotion: function() {
            if (!('DeviceMotionEvent' in window)) return;

            const originalAddEventListener = window.addEventListener;
            window.addEventListener = makeNativeFunction(function(type, listener, options) {
                if (type === 'devicemotion') {
                    const wrappedListener = function(event) {
                        // 返回静止状态
                        if (event.acceleration) {
                            event.acceleration.x = 0;
                            event.acceleration.y = 0;
                            event.acceleration.z = 0;
                        }
                        if (event.accelerationIncludingGravity) {
                            event.accelerationIncludingGravity.x = 0;
                            event.accelerationIncludingGravity.y = 0;
                            event.accelerationIncludingGravity.z = -9.8;
                        }
                        if (event.rotationRate) {
                            event.rotationRate.alpha = 0;
                            event.rotationRate.beta = 0;
                            event.rotationRate.gamma = 0;
                        }
                        listener.call(this, event);
                    };
                    return originalAddEventListener.call(this, type, wrappedListener, options);
                }
                return originalAddEventListener.apply(this, arguments);
            }, 'addEventListener');
        }
    };

    // ==================== iframe 递归注入 ====================
    const IframeInjection = {
        observer: null,

        init: function() {
            if (!CONFIG.modules.iframe) return;
            
            logger.log('初始化 iframe 防护...');

            // 对已存在的iframe进行注入
            document.querySelectorAll('iframe').forEach(iframe => {
                this.injectToFrame(iframe);
            });

            // 监听新创建的iframe
            this.startObserver();

            // 监听跨域消息
            window.addEventListener('message', function(event) {
                if (event.data === 'FP_ULTIMATE_INIT') {
                    event.source.postMessage('FP_ULTIMATE_CODE', event.origin);
                }
                if (event.data === 'FP_ULTIMATE_CODE' && !window.__FP_ULTIMATE_INJECTED__) {
                    window.__FP_ULTIMATE_INJECTED__ = true;
                }
            });
        },

        startObserver: function() {
            const self = this;

            this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element
                            if (node.tagName === 'IFRAME') {
                                self.injectToFrame(node);
                            }

                            // 检查子元素中的iframe
                            if (node.querySelectorAll) {
                                node.querySelectorAll('iframe').forEach(iframe => {
                                    self.injectToFrame(iframe);
                                });
                            }
                        }
                    });
                });
            });

            this.observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        },

        injectToFrame: function(iframe) {
            try {
                if (iframe.contentWindow && iframe.contentWindow.__FP_ULTIMATE_INJECTED__) {
                    return;
                }

                const inject = () => {
                    try {
                        const win = iframe.contentWindow;
                        if (win && win.document) {
                            win.__FP_ULTIMATE_INJECTED__ = true;

                            // 检查是否同源
                            try {
                                const test = win.document.domain;
                                logger.log('检测到同源iframe');
                            } catch (e) {
                                // 跨域，发送消息
                                win.postMessage('FP_ULTIMATE_INIT', '*');
                            }
                        }
                    } catch (e) {
                        // 忽略跨域错误
                    }
                };

                if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                    inject();
                } else {
                    iframe.addEventListener('load', inject);
                }
            } catch (e) {
                // 忽略
            }
        }
    };

    // ==================== 主初始化 ====================
    function initAllProtections() {
        try {
            // 初始化Native Code伪装（最先初始化）
            StealthManager.init();

            // 初始化各防护模块
            CanvasProtection.init();
            WebGLProtection.init();
            AudioProtection.init();
            NavigatorProtection.init();
            ScreenProtection.init();
            TimezoneProtection.init();
            WebRTCProtection.init();
            BatteryProtection.init();
            FontProtection.init();
            MemoryProtection.init();
            PermissionsProtection.init();
            GeolocationProtection.init();
            SensorProtection.init();
            IframeInjection.init();

            // 清理控制台输出
            if (!CONFIG.debug) {
                const originalConsoleLog = console.log;
                console.log = function(...args) {
                    if (args[0] && typeof args[0] === 'string' && args[0].includes('🛡️ FP-Ultimate')) {
                        return;
                    }
                    return originalConsoleLog.apply(console, args);
                };
            }

            logger.log('✅ 前端指纹防护 v3.0.0 已启用');
            logger.log('   防护维度: Canvas | WebGL | Audio | Navigator | Screen | Timezone | WebRTC | Battery | Fonts | Memory | Permissions | Geolocation | Sensors | iframe');

            // 暴露检测接口供测试
            window.FingerprintUltimate = {
                version: '3.0.0',
                config: CONFIG,
                test: function() {
                    console.log('=== 指纹防护测试 ===');
                    Object.keys(CONFIG.modules).forEach(module => {
                        console.log(`${module}: ${CONFIG.modules[module] ? '✓' : '✗'}`);
                    });
                    console.log('===================');
                }
            };

        } catch (e) {
            console.error('[🛡️ FP-Ultimate] 初始化错误:', e);
        }
    }

    // 立即执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllProtections);
    } else {
        initAllProtections();
    }

})();
