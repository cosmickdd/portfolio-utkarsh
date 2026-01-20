# Contact Form Debugging Guide

## Issues to Check in Production

### 1. **Environment Variables**
- [ ] Verify `.env` file exists in production directory
- [ ] Check `EMAIL_USER` and `EMAIL_PASSWORD` are properly set
- [ ] Gmail App Password must be used (not regular password)
  - Go to myaccount.google.com → Security → App passwords
  - Generate new app password for Mail
  - Use this in `EMAIL_PASSWORD`

### 2. **Gmail Security Requirements**
- [ ] Less Secure App Access is NOT needed with App Passwords
- [ ] Two-Factor Authentication (2FA) must be enabled on the Gmail account
- [ ] App Password must be 16 characters (spaces can be included)

### 3. **Server Configuration**
- [ ] CORS is enabled: `app.use(cors())`
- [ ] JSON body parser is enabled: `app.use(express.json())`
- [ ] POST endpoint is registered: `app.post("/api/contact", handleContact)`

### 4. **API URL Issues**
- [ ] Frontend uses `/api/contact` (relative path - works with same domain)
- [ ] In production, ensure API and frontend are on same domain
- [ ] If separate domains, CORS headers must allow the request

### 5. **Testing the API**

#### Test 1: Using curl
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectType": "website",
    "message": "This is a test message with enough characters"
  }'
```

#### Test 2: Check server logs
When form is submitted, you should see:
```
Creating transporter with user: ut054370@gmail.com
Transporter verified successfully
Email sent successfully: <message-id>
Confirmation email sent to: test@example.com
```

#### Test 3: Check if endpoint exists
```bash
curl http://localhost:3000/api/ping
# Should return: {"message":"ping pong"}
```

### 6. **Common Production Issues**

| Issue | Solution |
|-------|----------|
| `.env` not loaded | Add `import "dotenv/config"` at top of server/index.ts (already done) |
| Gmail connection fails | Verify App Password is correct and 2FA is enabled |
| CORS error in browser | Frontend and backend must be on same domain or CORS headers properly configured |
| Empty response | Check server logs for errors |
| 500 error | Check `process.env.EMAIL_USER` and `process.env.EMAIL_PASSWORD` |
| Form stuck on "Sending" | Network error - check browser console and server logs |

### 7. **Deployment Checklist**

Before deploying to production:

1. **Environment Variables**
   ```bash
   export EMAIL_USER=Ut054370@gmail.com
   export EMAIL_PASSWORD=wvwg nfcl yodu dxcg  # App password from Gmail
   ```

2. **Test Locally First**
   ```bash
   npm run build
   node dist/server/node-build.mjs
   # Then test at http://localhost:3000/blog
   ```

3. **Check Server Logs**
   - Look for "Email sent successfully" confirmation
   - Look for any error messages

4. **Monitor Production**
   - Add error tracking (Sentry, LogRocket, etc.)
   - Monitor email delivery failures
   - Check Gmail Sent folder for confirmation emails

### 8. **Manual Test Form Data**

Use this for testing:
```json
{
  "name": "Test User",
  "email": "your.email@gmail.com",
  "projectType": "website",
  "message": "This is a test message to verify the contact form is working correctly."
}
```

### 9. **Verify Gmail App Password**

Your current setup:
- Gmail Account: `Ut054370@gmail.com`
- Current Password: `wvwg nfcl yodu dxcg` (looks like App Password format ✓)

To verify it's correct:
1. Go to https://myaccount.google.com/security
2. Scroll to "App passwords"
3. Check if the password matches what's in `.env`

### 10. **Browser Console Errors**

If form doesn't work, check browser console (F12):
- Network tab: Check `/api/contact` request
  - Status code 200 = Success
  - Status code 400 = Validation error (see response)
  - Status code 500 = Server error (check server logs)
- Console tab: Check for any JavaScript errors

## Quick Fix Steps

1. **Rebuild and restart:**
   ```bash
   npm run build
   node dist/server/node-build.mjs
   ```

2. **Test with curl:**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@gmail.com","projectType":"website","message":"Test message content here"}'
   ```

3. **Check Gmail:**
   - Sent folder should have the submission email
   - Inbox should have confirmation email

4. **Monitor logs:**
   - Keep terminal open to see real-time logs
   - Look for "Email sent successfully" or error messages
