# TEXWEBSEC — AI‑First Coding Implementation Plan

## 1. System Architecture
- Frontend: Next.js  
- Backend: Supabase (Auth, DB, API routes)  
- Ticketing: Supabase table  
- Notifications: Resend or Twilio  
- Security Check: Script + auto‑generated report  

## 2. Database Schema

### tickets
- id  
- name  
- email  
- phone  
- issue_description  
- urgency  
- status (open, in‑progress, closed)  
- created_at  
- updated_at  

### security_checks
- id  
- user info  
- scan results  
- top 5 fixes  
- created_at  

## 3. User Flows

### Tech Support Flow
User → Form → Ticket created → Confirmation → Leonard responds → Ticket closed  

### Security Check Flow
User → Scan request → Auto‑scan → Fix list → Optional follow‑up  

## 4. Implementation Steps
1. Create Next.js project  
2. Connect Supabase  
3. Build ticket form  
4. Build ticket dashboard  
5. Add email/SMS notifications  
6. Add security check generator  
7. Deploy to Vercel  

## 5. AI‑First Coding Rules
- Consistent naming  
- Small components  
- Clear comments  
- Security best practices  
- MVP only (no extra features)  

## 6. Success Criteria
- Working ticketing system  
- Working security check generator  
- Deployed site  
- Users can submit issues and receive responses  

