# QAUTODEBUG.md

## QMOI Automation Debug & Test Guide

This guide helps you test, debug, and verify all QMOI workspace automation features, including cloud offloading, memory management, error fixing, and auto-development.

---

## 1. Automation Health Check
Run the QMOI automation script to offload large files and update logs:
```bash
node scripts/qmoi-cloud-auto.js
```

## 2. Development Server Test
Start the Next.js dev server and verify all UI pages:
```bash
npm run dev
```
Visit:
- Home:        http://localhost:3000
- Dashboard:   http://localhost:3000/dashboard
- Automation:  http://localhost:3000/automation
- Settings:    http://localhost:3000/settings

## 3. Error Fixing & Linting
Check and fix code errors automatically:
```bash
npm run lint
```

## 4. Build & Production Test
Build the app for production and start it:
```bash
npm run build
npm start
```

## 5. Memory & Disk Space Test
Monitor and offload workspace files:
```bash
node scripts/qmoi-cloud-auto.js
```
Check `TRACKS.md` for offload logs and health status.

## 6. Automation Verification
- Ensure `TRACKS.md` and `mdfilesref.md` are updated after automation runs.
- Review logs for cloud connection, security, and disk space status.

## 7. QMOI Cloud/Server Integration
- Configure QMOI API keys and endpoints in environment variables as needed.
- Future: Integrate with QMOI servers/clouds for advanced automation.

---

## Troubleshooting
- If any page shows 404, ensure the folder structure is correct and restart the dev server.
- For memory or disk issues, rerun the automation script and check logs.
- For persistent errors, review `QAUTODEBUG.md` and `.md` logs for guidance.

---

## References
- `README.md`: Project overview and setup
- `TRACKS.md`: Automation and offload logs
- `mdfilesref.md`: Reference for markdown files and automation status

---

*QMOI automation is designed to self-heal, auto-debug, and optimize your workspace for all platforms and app types.*
