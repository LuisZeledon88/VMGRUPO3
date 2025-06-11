const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head><title>IaaS Dashboard</title></head>
    <body>
        <h1>🏗️ IaaS Infrastructure Dashboard</h1>
        <h2>📊 Tenant: TENANT-001 - Status: Active</h2>
        <h2>🖥️ Virtual Machines: 3 Running</h2>
        <h2>🌐 Network: 192.168.1.0/24 - Connected</h2>
        <h2>🔒 Security: Firewall Active</h2>
        <h2>📈 SLA: 99.9% Uptime</h2>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log('IaaS Dashboard running on port ' + PORT);
});
