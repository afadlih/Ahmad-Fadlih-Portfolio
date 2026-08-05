# Git Handoff

Paket ini tidak melakukan push otomatis. Terapkan ke working copy, periksa diff, lalu push melalui `develop`.

## 1. Siapkan repository

```powershell
git -C 'D:\Portofolio\Ahmad-Fadlih-Portfolio' fetch origin --prune
git -C 'D:\Portofolio\Ahmad-Fadlih-Portfolio' status --short
```

Working tree harus bersih. Simpan perubahan lokal terlebih dahulu sebelum menjalankan apply script.

## 2. Preview copy

Dari folder hasil ekstraksi ZIP:

```powershell
.\APPLY-TO-CURRENT-REPO.ps1 `
  -TargetRepository 'D:\Portofolio\Ahmad-Fadlih-Portfolio' `
  -DryRun
```

## 3. Terapkan

```powershell
.\APPLY-TO-CURRENT-REPO.ps1 `
  -TargetRepository 'D:\Portofolio\Ahmad-Fadlih-Portfolio'
```

File `.git`, environment lokal, `node_modules`, `.next`, dan output quality lokal dipertahankan atau dikecualikan.

## 4. Buat atau sinkronkan develop

```powershell
Set-Location 'D:\Portofolio\Ahmad-Fadlih-Portfolio'
git fetch origin --prune

if (git show-ref --verify --quiet refs/remotes/origin/develop) {
    git switch develop
    git pull --ff-only origin develop
} else {
    git switch -c develop origin/main
    git push -u origin develop
}
```

## 5. Validasi

```powershell
npm ci
npm run qa:light
npm run verify
npm run quality:full
```

`npm run release:candidate` baru dijalankan setelah domain live tersedia.

## 6. Review diff dan push

```powershell
git status --short
git diff --check
git diff --stat
git diff -- README.md package.json .github src scripts docs

git add -A
git commit -m "fix(portfolio): harden release workflow and align engineering evidence"
git push origin develop
```

Buka pull request `develop → main`. Merge setelah workflow `Portfolio Quality` hijau.

## 7. Dependency PR lama

V36.1 sudah membawa runtime patch baseline dan action SHA pinning. Setelah PR utama masuk, review lalu tutup Dependabot PR yang sudah superseded. Major tooling update harus dibuat ulang sebagai migration PR terpisah.

## 8. Branch cleanup

Setelah merge dan verifikasi:

```bash
git fetch origin --prune
for branch in chore/docker-setup feature/portfolio-foundation repair/portfolio-production-ready; do
  if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    if git merge-base --is-ancestor "origin/$branch" origin/main; then
      git push origin --delete "$branch"
    else
      echo "SKIP $branch: contains commits not present in main"
    fi
  fi
done
git fetch origin --prune
```

Jangan menggunakan `git branch -D` atau force push untuk pembersihan normal.
