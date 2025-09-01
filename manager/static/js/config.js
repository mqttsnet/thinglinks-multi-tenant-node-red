// 项目配置信息，统一管理页面标题和链接
const AppConfig = {
    appName: "ThingLinks Node-RED Manager",
    version: "1.0.0",
    copyright: "Copyright © 2024-Present MQTTSNET. All Rights Reserved.",
    githubUrl: "https://github.com/mqttsnet/thinglinks",
    copyright: "Copyright © 2024-Present MQTTSNET. All Rights Reserved.",
    pages: {
        index: {title: "首页 - ThingLinks Multi-Tenant Node-RED Manager"},
        list: {title: "实例管理 - ThingLinks Multi-Tenant Node-RED Manager"},
        logs: {title: "日志查看 - ThingLinks Multi-Tenant Node-RED Manager"},
        new: {title: "创建实例 - ThingLinks Multi-Tenant Node-RED Manager"}
    }
};

// 动态设置页面标题
function setPageTitle(pageKey) {
    const pageConfig = AppConfig.pages[pageKey];
    if (pageConfig && pageConfig.title) {
        document.title = pageConfig.title;
    }
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.style.cssText = "text-align: center; padding: 20px; margin-top: 2rem; color: #666; font-size: 0.9rem;";
    footer.innerHTML = `<p>© <a href="${AppConfig.githubUrl}" target="_blank" style="color: var(--primary-color); text-decoration: none;">${AppConfig.copyright}</a></p>`;
    document.body.appendChild(footer);
}