# Fix: Push to GitHub (403 Permission Denied)

**Error:** `Permission to Param-khandwal/My_Portfolio.git denied to Pardeep2311`

**Why:** Your PC is using GitHub account **Pardeep2311**, but the repo belongs to **Param-khandwal**. Only the repo owner (or collaborators) can push.

---

## Option A: You ARE Param-khandwal (push with that account)

You need to remove the saved **Pardeep2311** login and use **Param-khandwal** when you push.

### Step 1: Clear saved GitHub credentials (Windows)

1. Press **Windows key** and type **Credential Manager**
2. Open **Credential Manager** → **Windows Credentials**
3. Find **git:https://github.com** (or any entry with `github.com`)
4. Click it → **Remove**

### Step 2: Push again (you’ll be asked to sign in)

Open **PowerShell** or **Command Prompt** in your project folder and run:

```bash
cd "C:\Users\Pardeep Kumar\Desktop\Portfolio"
git push -u origin main
```

5. When the browser or login window opens, sign in as **Param-khandwal**
6. If it asks for a **password**, use a **Personal Access Token** (not your GitHub password):
   - GitHub.com → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**
   - Tick **repo** → Generate → copy the token and paste it when Git asks for password

---

## Option B: You ARE Pardeep2311 (push to YOUR repo)

If the portfolio is yours and you use **Pardeep2311**, push to a repo under that account instead.

### Step 1: Create a new repo on GitHub

1. Log in to GitHub as **Pardeep2311**
2. Click **+** → **New repository**
3. Name it **My_Portfolio** (or any name)
4. Leave it **empty** (no README, no .gitignore)
5. Click **Create repository**

### Step 2: Point your project to the new repo and push

```bash
cd "C:\Users\Pardeep Kumar\Desktop\Portfolio"
git remote set-url origin https://github.com/Pardeep2311/My_Portfolio.git
git push -u origin main
```

Use **Pardeep2311** and your token when prompted.

---

## Option C: Param-khandwal adds you as collaborator

If **Param-khandwal** is a friend/team and they want you to push:

1. They go to: https://github.com/Param-khandwal/My_Portfolio/settings/access
2. Click **Add people** → add **Pardeep2311**
3. You accept the invite in your email
4. Then run: `git push -u origin main` (still as Pardeep2311; it will work after you’re added)

---

## Quick summary

| Your account    | What to do |
|-----------------|------------|
| **Param-khandwal** | Option A: Clear credentials, push, sign in as Param-khandwal |
| **Pardeep2311**    | Option B: Create repo under Pardeep2311, change remote, push |
| **Both / collaborator** | Option A or C |

After you do one of these, `git push -u origin main` should work.
