// app.js - TODO EN UNO
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simular datos de las VMs
const vms = [
    { id: 'vm-001', type: 'Web Server', cpu: '2 vCPU', ram: '4GB', os: 'Ubuntu 22.04' },
    { id: 'vm-002', type: 'Database', cpu: '1 vCPU', ram: '2GB', os: 'CentOS 8' },
    { id: 'vm-003', type: 'API Service', cpu: '1 vCPU', ram: '1GB', os: 'Alpine Linux' }
];

// Simular red virtual
const network = {
    subnet: '192.168.1.0/24',
    gateway: '192.168.1.1',
    dns: '8.8.8.8'
};

// PÁGINA PRINCIPAL - DASHBOARD IaaS
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>IaaS Dashboard</title>
        <style>
            body { font-family: Arial; margin: 20px; background: #f0f0f0; }
            .container { max-width: 1200px; margin: 0 auto; }
            .card { background: white; padding: 20px; margin: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { text-align: center; color: #333; }
            .vm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
            .status { color: green; font-weight: bold; }
            .metric { display: flex; justify-content: space-between; margin: 5px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="header">🏗️ IaaS Infrastructure Dashboard</h1>
            
            <div class="card">
                <h2>📊 Tenant Overview</h2>
                <div class="metric"><span>Tenant ID:</span> <span>TENANT-001</span></div>
                <div class="metric"><span>Status:</span> <span class="status">Active</span></div>
                <div class="metric"><span>VMs Running:</span> <span>3/3</span></div>
            </div>

            <div class="card">
                <h2>🖥️ Virtual Machines</h2>
                <div class="vm-grid">
                    ${vms.map(vm => `
                        <div class="card">
                            <h3>${vm.type} (${vm.id})</h3>
                            <div class="metric"><span>CPU:</span> <span>${vm.cpu}</span></div>
                            <div class="metric"><span>RAM:</span> <span>${vm.ram}</span></div>
                            <div class="metric"><span>OS:</span> <span>${vm.os}</span></div>
                            <div class="metric"><span>Status:</span> <span class="status">Running</span></div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <h2>🌐 Virtual Network</h2>
                <div class="metric"><span>Subnet:</span> <span>${network.subnet}</span></div>
                <div class="metric"><span>Gateway:</span> <span>${network.gateway}</span></div>
                <div class="metric"><span>DNS:</span> <span>${network.dns}</span></div>
                <div class="metric"><span>Status:</span> <span class="status">Connected</span></div>
            </div>

            <div class="card">
                <h2>🔒 Security Status</h2>
                <div class="metric"><span>Firewall:</span> <span class="status">Active</span></div>
                <div class="metric"><span>SSL/TLS:</span> <span class="status">Enabled</span></div>
                <div class="metric"><span>Access Control:</span> <span class="status">RBAC Enabled</span></div>
            </div>

            <div class="card">
                <h2>📈 SLA Metrics</h2>
                <div class="metric"><span>Uptime:</span> <span class="status">99.9%</span></div>
                <div class="metric"><span>Response Time:</span> <span>< 200ms</span></div>
                <div class="metric"><span>Availability:</span> <span class="status">Online</span></div>
            </div>
        </div>
    </body>
    </html>
    `);
});

// API endpoints para simular funcionalidad
app.get('/api/vms', (req, res) => {
    res.json(vms);
});

app.get('/api/network', (req, res) => {
    res.json(network);
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: '99.9%'
    });
});

app.listen(PORT, () => {
    console.log(`IaaS Dashboard running on port ${PORT}`);
});

// package.json para copiar y pegar:
/*
{
  "name": "iaas-simulation",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
*/